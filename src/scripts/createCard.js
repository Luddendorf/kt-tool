const createCard = ship => {

  const imgPath = 'https://res.cloudinary.com/dvbkndvl0/image/upload/v1617895212/pirates/ThePirateShip_papscf.png'

  const properties = new Map()
  properties.set('className','Class name')
  properties.set('class','Class')
  properties.set('shipHull','Ship hull')
  properties.set('speed','Speed')
  properties.set('maneuverability','Maneuverability')
  properties.set('beidewind','Beidewind')
  properties.set('hold','Hold')
  properties.set('team','Team')
  properties.set('weapons','Weapons')
  properties.set('price','Price')


  const card = document.createElement('div')
  card.classList.add('card')

  const picture = document.createElement('img')
  picture.setAttribute('src', imgPath)
  picture.setAttribute('alt', 'ship')
  picture.classList.add('ship-img')

  const shipDescription = document.createElement('div')
  shipDescription.classList.add('ship-description')

  const name = document.createElement('h4')
  name.innerHTML = `Ship name: ${ship['shipName']}`

  shipDescription.append(name)

  Array.from(properties.keys()).forEach(propName => {
    const property = document.createElement('p')
    property.innerHTML = `${properties.get(propName)}: ${ship[propName]}`
    shipDescription.append(property)
  })

  card.append(picture)
  card.append(shipDescription)

  return card

}

export default createCard
