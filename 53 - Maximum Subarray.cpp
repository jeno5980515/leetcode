class Solution {
public:
	int maxSubArray(vector<int>& nums) {
		int max_sum = -999999 , sum = 0 ;
		for ( int i = 0 ; i < nums.size() ; i ++ ){
			if ( sum > 0 ) 
				sum += nums[i] ;
			else 
				sum = nums[i] ;
			if ( sum > max_sum )  
				max_sum = sum ;
		}
		return max_sum ;
	}
};