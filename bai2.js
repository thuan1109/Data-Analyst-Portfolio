function unique_2(arr_2){
    var result = [],i, k, container = {};
    
    for (i = 0; i < arr_2.length; ++i) {
      if (arr_2[i] in container) {
      container[arr_2[i]]++;
      } 
      else {
      container[arr_2[i]] = 1;
      }
    }
  
    for (k in container) {
      if (container[k] === 1) {
      result.push(k);
      }
    }
    return result
  }
  console.log(unique_2([4,3,6,3,6]))  
