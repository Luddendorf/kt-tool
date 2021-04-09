const handleFormClick = () => {
  const inputs = {
    name: null,
    shipClass: null,
    count: null,
    price: null
  }

  const inputsRules = {
    name: /^[a-z]+$/i,
    shipClass: /^[a-z0-9]+$/i,
    count: /^[0-9]+$/,
    price: /^[0-9]+$/
  }

  inputs.name = document.getElementById('ship-name')
  inputs.shipClass = document.getElementById('ship-class')
  inputs.count = document.getElementById('ship-count')
  inputs.price = document.getElementById('ship-price')

  Array.from(Object.keys(inputs)).forEach(inputName => {
    if(inputsRules[inputName].test(inputs[inputName].value)){
      inputs[inputName].setAttribute('style', 'border-color: green')
    }else{
      inputs[inputName].setAttribute('style', 'border-color: red')
    }
  })

}

const createPurchaseForm = () => {

  const form = document.createElement('form')
  form.setAttribute('id', 'purchase-form')
  form.classList.add('purchase-form')
  form.addEventListener('click', handleFormClick)

  const title = document.createElement('h3')
  title.innerHTML = 'Purchase Ship'

  const inputLayout = document.createElement('div')
  inputLayout.classList.add('input-layout')

  const inputGroupName = document.createElement('div')
  inputGroupName.classList.add('input-group')

  const name = document.createElement('input')
  name.setAttribute('type', 'text')
  name.setAttribute('id', 'ship-name')
  const nameLabel = document.createElement('label')
  nameLabel.setAttribute('for', 'ship-name')
  nameLabel.innerHTML = 'Name:'

  const inputGroupClass = document.createElement('div')
  inputGroupClass.classList.add('input-group')

  const shipClass = document.createElement('input')
  shipClass.setAttribute('type', 'text')
  shipClass.setAttribute('id', 'ship-class')
  const shipClassLabel = document.createElement('label')
  shipClassLabel.setAttribute('for', 'ship-class')
  shipClassLabel.innerHTML = 'Class:'

  const inputGroupCount = document.createElement('div')
  inputGroupCount.classList.add('input-group')

  const count = document.createElement('input')
  count.setAttribute('type', 'text')
  count.setAttribute('id', 'ship-count')
  const countLabel = document.createElement('label')
  countLabel.setAttribute('for', 'ship-count')
  countLabel.innerHTML = 'Count:'

  const inputGroupPrice = document.createElement('div')
  inputGroupPrice.classList.add('input-group')

  const price = document.createElement('input')
  price.setAttribute('type', 'text')
  price.setAttribute('id', 'ship-price')
  const priceLabel = document.createElement('label')
  priceLabel.setAttribute('for', 'ship-price')
  priceLabel.innerHTML = 'Price:'

  const purchaseBnt = document.createElement('button')
  purchaseBnt.setAttribute('id', 'purchase-bnt')
  purchaseBnt.setAttribute('type', 'button')
  purchaseBnt.classList.add('purchase-bnt')
  purchaseBnt.innerHTML = 'Purchase'

  inputGroupName.append(nameLabel)
  inputGroupName.append(name)
  inputGroupClass.append(shipClassLabel)
  inputGroupClass.append(shipClass)
  inputGroupCount.append(countLabel)
  inputGroupCount.append(count)
  inputGroupPrice.append(priceLabel)
  inputGroupPrice.append(price)

  inputLayout.append(inputGroupName)
  inputLayout.append(inputGroupClass)
  inputLayout.append(inputGroupCount)
  inputLayout.append(inputGroupPrice)

  form.append(title)
  form.append(inputLayout)
  form.append(purchaseBnt)

  return form

}

export default createPurchaseForm
