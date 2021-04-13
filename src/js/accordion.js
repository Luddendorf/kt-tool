const acc = document.querySelectorAll(".accordion");

const toggleAccordian = (acc, open = !acc.classList.contains('active')) => {  
  acc.classList.toggle('active', open)
  const panel = acc.nextElementSibling
  panel.style.maxHeight = open ? panel.scrollHeight + "px" : null  
}

const elems = Array.from(acc)
elems.forEach(a => {
  a.addEventListener('click', () => {
    elems
      .filter(e => e !== a)
      .forEach(e => toggleAccordian(e, false))
    toggleAccordian(a)
  })
})

