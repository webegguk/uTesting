export default function countNodes(root) {
  var count = 1;
    if (root.left!=null){
        count += countNodes(root.left)
    }
    if (root.right!=null){
        count += countNodes(root.right)
    }
    return count;
}
