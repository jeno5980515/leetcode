class Solution {
public:
	bool canJump(vector<int>& nums) {
		int length = nums.size() ;
		int maxsite = 0 ;
		for ( int i = 0 ; i < length - 1 ; i ++ ){
			maxsite = max(maxsite,nums[i]) ;
			maxsite -- ;
			if ( maxsite < 0 )
				return false ;
		}
		return true ;
	}
};