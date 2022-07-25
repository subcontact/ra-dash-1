import * as ContentApi from "./api/content";
import * as DriveApi from "./api/drive";
import * as OrganizationApi from "./api/organization";

class UserDrivesNodeProvider {
  getNode(userID) {
    return OrganizationApi.getUser(userID).then(user => {
      return {
        providerType: "ix:user-drives",
        id: user.id,
        icon: "person",
        name: user.name,
        value: user,
        canExpand: true
      };
    });
  }
  getChildren(node) {
    return DriveApi.getDrives().then(drives => {
      const children = drives.map(drive => ({
        providerType: "ix:drive",
        id: drive.rootFolderId,
        name: drive.name,
        icon: "storage",
        value: drive,
        canExpand: true
      }));
      children.push({
        providerType: "ix:driveitem",
        id: "shared-withme",
        icon: "share",
        name: "Shared with me",
        canExpand: true
      });
      return children;
    });
  }
}

function getNodesInFolder(id) {
  return ContentApi.getChildren(id).then(children => {
    return children.map(child => {
      const canExpand =
        child.itemtype === "itemtype:rootfolder" ||
        child.itemtype === "itemtype:folder" ||
        child.itemtype === "itemtype:trashcan";

      return {
        providerType: "ix:driveitem",
        id: child.id,
        name: child.name,
        icon: "insert_drive_file",
        value: child,
        canExpand
      };
    });
  });
}

class DriveNodeProvider {
  getChildren(driveNode) {
    return getNodesInFolder(driveNode.value.rootFolderId);
  }
}

class DriveItemNodeProvider {
  getChildren(node) {
    return getNodesInFolder(node.id);
  }
}

const defaultProviders = {
  $root: new UserDrivesNodeProvider(),
  "ix:user-drives": new UserDrivesNodeProvider(),
  "ix:drive": new DriveNodeProvider(),
  "ix:driveitem": new DriveItemNodeProvider()
};

export class TreeProvider {
  constructor(providers = defaultProviders) {
    this.providers = providers;
  }

  getNode(id) {
    const provider = this.providers["$root"];
    return provider.getNode(id);
  }
  getChildren(node) {
    const provider = this.providers[node.providerType];
    return provider.getChildren(node).then(children => {
      children.forEach(child => {
        child.parent = node.id;
      });
      return children;
    });
  }
}
