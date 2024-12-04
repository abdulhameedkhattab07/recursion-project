function fib(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const arr = [0, 1];

    for (let i = 2; i < n; i++){
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    // while(n > 1){
    //     x = fib(n - 1) + fib(n - 2)
    //     arr.push(x)
    // }

    return arr
}

function fibsRec(n){
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fibs = fibsRec(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

    return fibs;

}

console.log(fibsRec(850));