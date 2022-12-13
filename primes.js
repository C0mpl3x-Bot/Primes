//TASK ONE
//this should return the index of the first element with a value larger than item
function minBinarySearch(array, item) {
	var l = 0;
	var r = array.length - 1;
	if (r == 0) {
      return false;
	}
	// complete the following code, which has been commented out (and uncomment it)
	// put in something for MISSING1, MISSING2 and MISSING3
	while (r >= l) {
		var m = Math.floor((l + r) / 2);
		if (array[m] == item) {
			return m+1;
		} else if (array[m]<item) {
			l = m + 1;
		} else {
			r = m - 1;
		}
	}
	return l;
}
//var array = [1, 2, 3, 4];
//console.log(minBinarySearch(array, 2));

//TASK TWO
//this function should return an array that stores all prime numbers from 2 up to (and possibly including) n
function genPrimes(n) {
	// this generates an array storing two-element arrays: each element stores an integer i and the Boolean true
	var array = [];
	for (var i = 2; i <= n; i++) {
		array.push([i,true]);
	}
	// complete the code here to implement the Sieve of Eratosthenes
    for(var i=2;i<=Math.ceil(Math.sqrt(n));i++)
    {
        if(array[i-2][1] == false)
        {
            i++;
        }
        if(array[i-2][1] == true)
        {
            for(var j=2;j<=n/i;j++)
            {
                array[(i*j)-2][1] = false;
            }
        }
    }
	// you need to implement steps 2 to 5 in the algorithm below
	// if the value stored in array is not prime then the associated Boolean should be changed to false
	// you should implement two nested loops
    

	// below here implements step 6 and does not need to be altered
	// this will loop over all elements in array and if the Boolean in each element is true, then it pushes that number to out
	// out will store all primes up to (and possibly including) n
	var out = [];
	for (var i = 0; i < array.length; i++){
		if (array[i][1]) {
			out.push(array[i][0]);
		}
	}
	return out;
}
//console.log(genPrimes(12));

//TASK THREE
//this function should randomly generate a prime of length len where len should be an integer greater than 0
function randomPrime(len) {
	//complete the code to return a random prime number of length len, i.e. with len digits
var primes = [];
primes = genPrimes(10**len - 1);
var j = minBinarySearch(primes, 10**(len-1));
var n = primes.length;

    var i = Math.round(Math.random()*(n-1-j)+j);
	//remember that the smallest number of length len is 10**(len-1), and the largest number of length len is 10**(len)-1
    
    return primes[i];
    
}
//console.log(randomPrime(2));


//TASK FOUR
//this function should return the two primes in an array if n is a semiprime, return the input n if it is prime, and false otherwise
function semiPrimes(n) {
	//complete this function
var array = [];
array = genPrimes(n);

    
    var l = 0;
	var r = array.length - 1;
	if (r == 0) {
		return false;
	}
    
	while (l<= r) {
		var m = Math.floor((l + r) / 2);
		if (array[m] == n) {
			return n;
		}
        else if (array[m]<n) {
			l = m + 1;
		} else {
			r = m - 1;
		}
	}
    

    for(var i=0;i<array.length;i++)
    {
        for(var j=0;j<array.length;j++)
        {
            var x = array[i];
            var y = array[j];
            var s = x*y;
            if(s == n)
            {
                return [x, y];

            }
        }
    }   
        return false;
}
//console.log(semiPrimes(6));
//console.log(semiPrimes(5));
//console.log(semiPrimes(8));

// DO NOT DELETE BELOW THIS LINE OR NOTHING WILL WORK

module.exports = {minBinarySearch : minBinarySearch, genPrimes : genPrimes, randomPrime : randomPrime, semiPrimes : semiPrimes}