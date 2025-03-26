function multidimensionalarray2(N, M){
    let resultMatrix = [];
    for (let i = 0; i < N; i++) {
        resultMatrix[i] = [];
      for (let j = 0; j < M; j++) {
        resultMatrix[i][j] = i + j;
      }
    }
    return resultMatrix
    
}

console.log(multidimensionalarray2(3,2))