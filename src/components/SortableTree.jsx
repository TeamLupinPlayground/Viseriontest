import SortableTree, {
  addNodeUnderParent,
  removeNodeAtPath
} from "react-sortable-tree";
import React, { Component } from 'react'

export default class navTree extends Component {
  
  

  render () {
    const getNodeKey = ({ treeIndex }) => treeIndex;
    return (
      <SortableTree />
    )
  }
}
    

