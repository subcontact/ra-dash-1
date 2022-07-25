const drives = {
  my: {
    id: "drid:my",
    name: "My Room",
    rootFolderId: "diid:root-my"
  },
  foo: {
    id: "drid:foo",
    name: "Foo Room",
    rootFolderId: "diid:root-foo"
  }
};

export function getDriveBy(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve(drives.my), 1000);
  });
}

export function getDrives(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve([drives.my, drives.foo]), 1000);
  });
}
