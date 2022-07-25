const initialState = {
  provider: null
};

const byId = id => node => node.id === id;

class ImmutableTree {
  constructor({ root, nodes }) {
    this.root = root;
    this.nodes = nodes;
  }
  updateNode(node) {
    const nodes = {
      ...this.nodes,
      [node.id]: node
    };

    const insertChildNodes = children => {
      children &&
        children.forEach(child => {
          nodes[child.id] = child;
          insertChildNodes(child.children);
        });
    };
    insertChildNodes(node.children);

    while (node.parent) {
      const parentNode = nodes[node.parent];
      if (!parentNode) {
        return;
      }
      const { children } = parentNode;
      if (!children) {
        return;
      }
      const index = children.findIndex(byId(node.id));
      if (index < 0) {
        return;
      }

      const newChildren = [];
      if (index > 0) {
        for (let i = 0; i < index; i++) {
          newChildren.push(children[i]);
        }
      }
      newChildren[index] = node;
      for (let i = index + 1; i < children.length; i++) {
        newChildren.push(children[i]);
      }
      const newParentNode = {
        ...parentNode,
        children: newChildren
      };
      nodes[newParentNode.id] = newParentNode;

      // continue with updating the grand parent node
      node = newParentNode;
    }
    this.root = node;
    this.nodes = nodes;
    return;
  }
}

function treeReducer(state = initialState, action) {
  switch (action.type) {
    case "tree-loading":
      return { ...state, loading: action.root };
    case "tree-error":
      return { ...state, error: action.error };
    case "tree-drive":
      return { ...state, drive: action.drive };
    case "tree-root":
      const { root } = action;
      return { ...state, root, nodes: { [root.id]: root } };
    case "tree-node-update": {
      const { id, props } = action;
      const node = state.nodes[id];
      if (!node) {
        return state;
      }
      const tree = new ImmutableTree(state);
      tree.updateNode({ ...node, ...props });
      return { ...state, root: tree.root, nodes: tree.nodes };
    }
    default:
      break;
  }
  return state;
}

export function newTreeReducerWithProvider(provider) {
  const initialStateWithProvider = { ...initialState, provider };
  return function(state, action) {
    return treeReducer(state || initialStateWithProvider, action);
  };
}
