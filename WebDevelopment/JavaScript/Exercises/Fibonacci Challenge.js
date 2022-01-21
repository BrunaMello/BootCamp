function fibonacciGeneration(n){
    var sequence = [];

    for (i = 0; i < n; i++){
        if (i < 2){
            sequence.push(i);
        } else {
            sequence.push(sequence[i-1]+sequence[i-2]); //arrays positions
        }
    }
    return console.log(sequence);
}

fibonacciGeneration(20);