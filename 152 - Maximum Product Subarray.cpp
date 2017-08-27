class Solution {
public:
	int maxProduct(vector<int>& nums) {
		int max_num , now_max , now_min ; 
		max_num = now_max = now_min = nums[0] ;
		for ( int i = 1 ; i < nums.size()  ; i ++ ){
			int last_max = now_max ;
			now_max = max(nums[i],max(now_max * nums[i],now_min * nums[i]));
			now_min = min(nums[i],min(last_max * nums[i],now_min * nums[i]));
			max_num = max(max_num,now_max) ;
		}
		return max_num ;
	}
};