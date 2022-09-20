function triangleOfNumbers(num) {
    for (let i = 1; i<=num ; i++){
        let triangle = '';
        for (let j = 1; j<=i;j++){
            triangle += `${i} `
        }
        console.log(triangle);
    }
}
triangleOfNumbers (6);