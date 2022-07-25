const setRoot = root => ({ type: "tree-root", root });
const setError = error => ({ type: "tree-error", error });
const setLoading = id => ({ type: "tree-loading", loading: id });
const setNodeUpdate = (id, props) => ({ type: "tree-node-update", id, props });

export function expand(node) {
  return (dispatch, getState) => {
    const state = getState();
    const provider = state.provider;

    if (typeof node.children !== "undefined") {
      dispatch(setNodeUpdate(node.id, { expanded: true }));
      return;
    }

    dispatch(setNodeUpdate(node.id, { expanding: true }));
    return provider.getChildren(node).then(
      children => {
        dispatch(
          setNodeUpdate(node.id, {
            expanding: false,
            expanded: true,
            children
          })
        );
        return children;
      },
      error => {
        dispatch(setNodeUpdate(node.id, { error }));
        return error;
      }
    );
  };
}

export function collapse(node) {
  return (dispatch, getState) => {
    dispatch(setNodeUpdate(node.id, { expanded: false }));
  };
}

export function getRoot() {
  return (dispatch, getState) => {
    const provider = getState().provider;
    dispatch(setLoading());
    return provider.getNode().then(
      rootNode => {
        dispatch(setRoot(rootNode));
        return rootNode;
      },
      error => {
        dispatch(setError(error));
        return error;
      }
    );
  };
}
