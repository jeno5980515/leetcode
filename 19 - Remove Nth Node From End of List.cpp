/**
 * Definition for singly-linked list.
 * struct ListNode {
 *	 int val;
 *	 ListNode *next;
 *	 ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
	ListNode* removeNthFromEnd(ListNode* head, int n) {
		ListNode *Node1 = head , *Node2 = head ;
		int i = 0 ;
		while ( Node1->next != NULL && i < n ){
			Node1 = Node1->next ;
			i ++ ;
		}
		while ( Node1->next != NULL ){
			Node1 = Node1->next ;
			Node2 = Node2->next ;
		}
		if ( i >= n ){
			ListNode *Node = Node2->next->next ;
			Node2->next = Node ;
		} else if ( i == n - 1 ){
			ListNode *Node = Node2->next ;
			head = Node ;
		}
		return head ;
	}
};