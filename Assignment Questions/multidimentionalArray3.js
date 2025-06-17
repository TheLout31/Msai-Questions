function multidimensionalarray3(N, M,arr) {
    
  for (let i = 0; i < N; i++) {
    if (i % 2 == 0) {
      for (let j = M; j >= 0; j--) {
        console.log(arr[i][j]);
      }
    } else {
      for (let j = 0; j <= M; j++) {
        console.log(arr[i][j]);
      }
    }
  }
}

let arr = [ [ 1,2,3,4,5 ], [ 6,7,8,9,10 ], [ 11,12,13,14,15 ] ]
console.log(multidimensionalarray3(3,5,arr))
