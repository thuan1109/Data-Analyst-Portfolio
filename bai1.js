function unique_1(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
        
      }
    }
      if (newArr.length < arr.length){
        k = arr.length - newArr.length
          for (var j = 0; j < k; j++){
            newArr.push('*');
          }
        }
    return newArr
  }
  console.log(unique_1([1,1,2].sort()))