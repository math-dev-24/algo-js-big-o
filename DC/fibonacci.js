
function fibonacci(n){
    if(n <= 1){
        return n;
    }else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const fibo = fibonacci(20);
console.log(fibo);