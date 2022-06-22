// function isPrime(num) {
//     for ( var i = 2; i < num; i++ ) {
//         if ( num % i === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }

// function display(m, n) {
//     var arr = [m];
//     console.log(m)
//     for ( var i = 11; i < n; i+=2 ) {
//         if ( isPrime(i) ) {
//             arr.push(i);
//         }
//     }
//     console.log(arr); // use arr result on your own
// }

// display(10, 100);

function ex5(menor, maior) {
    let nums = []

    for (let i = menor; i <= maior; i++) {
        let trava = 0;
    
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                trava = 1;
                break;
            }
        }

        if (i > 1 && trava == 0) {
            nums.push(i)
        }
    }
    
    console.log(nums)
}

ex5(10, 100)