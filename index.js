const addBtn = document.getElementById('add')
const deleteBtn = document.getElementById('delete')

const list = document.getElementById('list')
const card = document.querySelectorAll('.card')
const input = document.getElementById('input')

addBtn.addEventListener('click', () => {
      const card = createCard()
      card ? list.appendChild(card) : null
})

deleteBtn.addEventListener('click', () => {
      list.removeChild(list.children[list.children.length - 1])
})

function createCard(){
      if(!input.value) return null

      const card = document.createElement('div')
      card.classList.add('card')
      card.innerText = input.value
      input.value = ''
      card.addEventListener('click', (e) => {
            e.target.classList.toggle('changeBg')
      })
      return card
}