export function customSort(a, b){
  if(a.id > b.id){
    return 1
  }else if(a.id < b.id){
    return -1
  }else{
    if(a.profile > b.profile){
      return 1
    }else if(a.profile < b.profile){
      return -1
    }else{
      return 0
    }
  }
}

export function task2ex2(array){
  return array.map(item => {
    const newItem = Object.assign({}, item)
    newItem.discount = Number((item.amount * 0.05).toFixed(2))
    delete newItem.profile
    return newItem
  })
}

export function task2ex3(array, indexes){
  indexes.forEach(element => {
    if(element > array.length -1) return

    array[element] = {removed: true}
  });
}
