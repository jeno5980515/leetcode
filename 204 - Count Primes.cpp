class Solution {
public:
	int countPrimes(int n) {
		int prime_count = 0 ;
		bool prime[n] ;
		for ( int i = 2 ; i < n ; i ++ ){
			prime[i] = true ;
		}
		prime[0] = prime[1] = false ;
		for ( int i = 2 ; i < n ; i ++ ){
			if ( prime[i] == true ){
				prime_count ++ ;
				for ( int j = i + i ; j < n ; j += i )
					prime[j] = false ;
			}
		}
		return prime_count ;
	}
};