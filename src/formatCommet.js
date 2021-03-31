export function formatCommet(comment, k){
  const limit = Number(k)

  if(k == 0 || comment === ''){
    return ''
  }

  if(comment[k-1] === ' '){                    // если последний символ пробел
    return comment.slice(0,k).trimEnd()
  }else{                                       // если последний символ не пробел
    if(comment[k] === ' '){                    // если символ после последнего пробел
      return comment.slice(0,k)
    }else{                                     // если символ после последнего не пробел
      let indexToSlice = k-1
      while(indexToSlice != 0){
        if(comment[indexToSlice] === ' ') break

        indexToSlice--
      }

      return comment.slice(0, indexToSlice).trimEnd()
    }
  }

}
