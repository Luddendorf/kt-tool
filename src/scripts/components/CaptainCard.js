const CaptainCard = captain => {

  const portraitPath = 'https://res.cloudinary.com/dvbkndvl0/image/upload/v1617906416/pirates/pirate_portrait_rwum2c.jpg'

  const properties = {
    name: 'Name',
    myClass: 'Class',
    age: 'Age',
    money: 'Money',
    damage: 'Damage',
    story: 'Story'
  }

  const card = document.createElement('div')
  card.setAttribute('id', 'captain-card')
  card.classList.add('captain-card')

  const portrait = document.createElement('img')
  portrait.setAttribute('src', portraitPath)
  portrait.setAttribute('alt', 'portrait')
  portrait.classList.add('captain-portrait')

  const captainDescription = document.createElement('div')
  captainDescription.classList.add('captain-description')

  Array.from(Object.keys(captain)).forEach(propName => {
    const property = document.createElement('p')
    property.classList.add('captain-property')
    property.innerHTML = `${properties[propName]}: ${captain[propName]}`

    captainDescription.append(property)
  })

  card.append(portrait)
  card.append(captainDescription)

  return card

}

export default CaptainCard
