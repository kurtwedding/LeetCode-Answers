import java.util.ArrayList;

public class AddOneRowToTree{

    public static TreeNode addOneRow(TreeNode root, int val, int depth){

        // Fixing depth to be 0-indexed instead of 1-indexed
        depth--;

        // Iterate through the tree for each node to find correct depth
        ArrayList<ArrayList<TreeNode>> children = new ArrayList<ArrayList<TreeNode>>();
        children.add(new ArrayList<TreeNode>());
        children.get(0).add(root);

        // Base case if depth is 0.
        if(depth == 0){
            TreeNode temp = new TreeNode(val);
            temp.left = root;
            return temp;
        }
        
        // Base case if depth is 1.
        if(depth == 1){
            try{
                //if the left node exists
                TreeNode temp = new TreeNode(val);
                temp.left = root.left; // set the original children to the new node's children
                root.left = temp; // set the new node to be that child
            } catch(NullPointerException e){}

            // Same as above, but for right child
            try{
                TreeNode temp = new TreeNode(val);
                temp.right = root.right;
                root.right = temp;
            } catch(NullPointerException e){}

            return root;
        }

        for(int i = 0; i < depth-1; i++){
            children.add(new ArrayList<TreeNode>());
            for(TreeNode child : children.get(i)){
                try{
                    children.get(i+1).add(child.left); // add the left node to the children list
                } catch(Exception e){}
                try{
                    children.get(i+1).add(child.right); // add the right node to the children list
                } catch(Exception e){}
            }
        }

        // For each node on the correct depth
        for(TreeNode node : children.get(depth-1)){
            // Add the new row, setting curr node children to new TreeNode's and curr nodes original children to the new TreeNode's children

            try{
                //if the left node exists
                TreeNode temp = new TreeNode(val);
                temp.left = node.left; // set the original children to the new node's children
                node.left = temp; // set the new node to be that child
            } catch(NullPointerException e){}

            // Same as above, but for right child
            try{
                TreeNode temp = new TreeNode(val);
                temp.right = node.right;
                node.right = temp;
            } catch(NullPointerException e){}
        }

        return root;
    }

    public static void main(String[] args){

        TreeNode root = new TreeNode(4);
        root.left = new TreeNode(2);
        root.right = new TreeNode(6);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(1);
        root.right.left = new TreeNode(5);

        addOneRow(root, 1, 2);

    }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
} 