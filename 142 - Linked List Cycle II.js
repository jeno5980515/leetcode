/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if ( head === null ) return null;
    
    let fast = head;
    let slow = head;
    while ( fast.next && fast.next.next ){
        fast = fast.next.next;
        slow = slow.next;
        if ( fast === slow ){
            slow = head;
            while ( slow !== fast ){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
        
    }
    return null;
};