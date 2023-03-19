const modalBg = document.createElement('div');
modalBg.classList.add('modal-bg');

const modal = document.createElement('div');
modal.classList.add('modal');

const content = document.createElement('div');
content.classList.add('modal-content');

const header = document.createElement('h2');
header.innerText = 'Your order has been successfully shipped';
header.style.color = 'green'

const closeBtn = document.createElement('button');
closeBtn.classList.add('close-btn');
closeBtn.innerText = 'Закрити';

content.appendChild(header);
content.appendChild(closeBtn);
modal.appendChild(content);
modalBg.appendChild(modal);
document.body.appendChild(modalBg);


function openModal() {
  modal.style.display = 'block';
}

function closeModalWindow() {
  modal.style.display = 'none';
}

closeBtn.addEventListener('click', () => {
  closeModalWindow();
});

modalBg.addEventListener('click', (event) => {
     if (event.target === modalBg) {
          closeModalWindow();
     }
});
