/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *	 int val;
 *	 TreeNode *left;
 *	 TreeNode *right;
 *	 TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
	int maxnum = -999999 ;
	int FindMax(TreeNode* node){
		if ( node == NULL )
			return 0 ;
		int left = FindMax(node->left) ;
		int right = FindMax(node->right) ;
		int nowmax = node->val ;
		if ( left > 0 )
			nowmax += left ;
		if ( right > 0 )
			nowmax += right ;
		if ( nowmax > maxnum )
			maxnum = nowmax ;
		return max(node->val,max(node->val+left,node->val+right)) ;
	}
	int maxPathSum(TreeNode* root) {
		FindMax(root) ;
		return maxnum ;
	}
};