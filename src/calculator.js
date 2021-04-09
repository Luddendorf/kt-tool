
sum = (arr) =>arr.reduce((acc, val) => acc + val)
subtraction = (arr) =>arr.reduce((acc, val) => acc - val)
multiplication = (arr) =>arr.reduce((acc, val) => acc * val)
division = (arr) =>arr.reduce((acc, val) => acc / val)

function calc(arr, operation){
    switch (operation) {
        case 'sum':
            return sum(arr)
            break;
        case 'subtraction':
            return subtraction(arr)
            break;
        case 'multiplication':
            return multiplication(arr)
            break;
        case 'division':
            return division(arr)
            break;
        default:
            return;
            break;
    }
}

console.log(calc([3,4,5], 'sum'));