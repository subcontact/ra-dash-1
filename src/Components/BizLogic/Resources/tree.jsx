import React from "react";
import { connect } from "react-redux";
import { getRoot, expand, collapse } from "./actions/tree-actions";
import Spinner from "./spinner.jsx";
import SlideDown from "./slide-down.jsx";

const INDENT = 24;

class TreeNode extends React.PureComponent {
  render() {
    const { node, actions, indent = 0 } = this.props;
    if (!node) {
      return null;
    }
    const { children } = node;
    const state = node.expanding
      ? "expanding"
      : node.expanded
      ? "expanded"
      : "collapsed";

    return (
      <div className={"treenode treenode--" + state}>
        <div className="treenode-header">
          <span className="treenode-indent" style={{ width: indent }} />
          {node.expanding ? (
            <span className="treenode-spinner">
              <Spinner size="20" />
            </span>
          ) : node.canExpand ? (
            <button
              className={"treenode-expand treenode-expand-" + state}
              type="button"
              onClick={this.handleExpandClick}
            >
              <i className="material-icons">expand_more</i>
            </button>
          ) : (
            <span className="treenode-noexpand" />
          )}
          <i className="treenode-icon material-icons">{node.icon}</i>
          <span className="treenode-text">{node.name}</span>
        </div>
        <SlideDown key="children" show={children && node.expanded}>
          <ul className="treenode-children">
            {(children || []).map(child => (
              <li>
                <TreeNode
                  key={child.id}
                  node={child}
                  actions={actions}
                  indent={indent + INDENT}
                />
              </li>
            ))}
          </ul>
        </SlideDown>
      </div>
    );
  }

  handleExpandClick = () => {
    const { node, actions } = this.props;
    if (node.expanded) {
      actions.collapse(node);
    } else {
      actions.expand(node);
    }
  };
}

class TreeContainer extends React.Component {
  componentDidMount() {
    this.props.actions.getRoot(this.props.rootId);
  }
  render() {
    const { root, actions } = this.props;
    return (
      <div className="tree">
        <TreeNode node={root} actions={actions} />
      </div>
    );
  }

  handleExpand = node => {
    this.props.expand(node);
  };
}

export default connect(
  state => {
    const { root } = state;
    return { root };
  },
  dispatch => {
    return {
      actions: {
        getRoot: id => dispatch(getRoot(id)),
        expand: node => dispatch(expand(node)),
        collapse: node => dispatch(collapse(node))
      }
    };
  }
)(TreeContainer);
