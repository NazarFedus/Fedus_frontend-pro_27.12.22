const body = document.querySelector('body');
// all products which customer bought;
const purchase = [];

const STORES = [
     {
       city: 'Kyiv',
       stores: ['#1 вул. Хрещатик 1', '#5 пр. Перемоги 10', '#8 вул. Богдана Хмельницького 64', '#12 вул. Луценка 7']
     },
     {
       city: 'Kharkiv',
       stores: ['#3 вул. Сумська 5', '#7 вул. Пушкінська 22', '#9 пр. Незалежності 17', '#14 вул. Мироносицька 38']
     },
     {
       city: 'Lviv',
       stores: ['#11 вул. Городоцька 120', '#15 вул. Героїв Упа 6', '#18 вул. Зелена 19', '#22 вул. Бандери 2']
     },
     {
       city: 'Odessa',
       stores: ['#27 пр. Шевченка 10', '#30 вул. Польова 5', '#33 вул. Гречеська 10', '#37 вул. Італійська 11']
     },
     {
       city: 'Dnipro',
       stores: ['#41 вул. Карла Маркса 10', '#45 вул. Січових Стрільців 40', '#51 вул. Героїв Майдану 23', '#55 пр. Дмитра Яворницького 90']
     }
   ];


//main container:
const container = document.createElement('div');
container.classList.add('container')
body.appendChild(container);

//three main blocks
const tabs = document.createElement('div');
const listProducts = document.createElement('div');
const blockInfo = document.createElement('div');

tabs.classList.add('block');
listProducts.classList.add('block');
blockInfo.classList.add('block');

container.appendChild(tabs)
container.appendChild(listProducts)
container.appendChild(blockInfo)

//popup-form
const form_wrapper = document.getElementById('form_wrapper');
const form = document.getElementById('form');

console.log(form)



// Get data
async function fetchData() {
     try {
       const response = await fetch('products.json');
       const data = await response.json();
       return data;
     } catch (error) {
          tabs.innerText = "Nothing found";
          console.error(error);
     }
}

async function processProducts() {
     const PRODUCTS = await fetchData();

     // categories
     const categories = [];
     PRODUCTS.forEach(e => !categories.includes(e.category) ? categories.push(e.category) : null)
     categories.forEach(type => {
          createTab(tabs, type, );
     })

     const tabList = tabs.querySelectorAll('.tab')
          tabList.forEach(element => {
               element.addEventListener('click', () => {
                    tabList.forEach(e => e.classList.remove('active'))
                    element.classList.add('active')
                    showListOfProducts(element.innerText, PRODUCTS)
               })
          })
}

processProducts();


function createTab(venue, value, dataOfItem = null){
     const tab = document.createElement('button');
          tab.classList.add('tab')
          tab.innerText = value
          if(dataOfItem !== null) tab.setAttribute('id', dataOfItem.id)
          venue.appendChild(tab)
     return tab;
}

// Second block (listProducts)
function showListOfProducts(category, arrayOfProducts){
     // filter our category:
     const products = arrayOfProducts.filter(item => item.category === category);

     // clear boxInfo from previous list of products:
     clearPrevious(listProducts, '.tab')

     // create boxInfo "products list":
     const productItems = products.map(item => {
          return createTab(listProducts, item.title, item);
     })

     // addEvenetListeners for our list of products
     productItems.forEach(item => {
          item.addEventListener('click', () => {
               productItems.forEach(e => e.classList.remove('active'));
               item.classList.add('active');
               const searchElement = products.filter(e => e.id == item.getAttribute('id'))

               showProductInfo(...searchElement)
          })
     })

}


// third block (blockInfo)
function showProductInfo(product){
     clearPrevious(blockInfo, '.box__info')

     // box to wrap all content:
     const box = document.createElement('div');
     box.className = 'box__info';
     blockInfo.appendChild(box)

     contentOfInfoBlock(product, box)

     const buttonBuy = createButtonBuy(box);

     buttonBuy.addEventListener('click', () => {
          const popup = cretePopUpContent(product)
          clearPrevious(popup, '.box__info')
          purchase.push(product)
     })
}

// create button buy;
function createButtonBuy(parent){
     const buttonBuy = document.createElement('button');
     buttonBuy.className = 'boxInfo__btn-buy'
     buttonBuy.innerText = "Buy now"
     parent.appendChild(buttonBuy)

     return buttonBuy
}

// create content about product
function contentOfInfoBlock(product, box){
     const title = document.createElement('h1');
     title.innerText = product.title;
     title.classList.add('title')
     box.appendChild(title)

     const img = document.createElement('img');
     img.setAttribute('src', product.image);
     img.className = 'img';
     box.appendChild(img)

     const price = document.createElement('span')
     price.innerText = `Price: ${product.price} USD`;
     box.appendChild(price);
}

function cretePopUpContent(product){
     const popup = document.createElement('div');
     popup.className = 'popup'
     document.body.appendChild(popup)

     // left block (form)
     form_wrapper.classList.remove('hide');
     popup.appendChild(form_wrapper);

     //right block
     const img_block = document.createElement('div');
     img_block.classList.add('img-block');
     popup.appendChild(img_block)

     const img = document.createElement('img');
     img.setAttribute('src', product.image);
     img.className = 'img';
     img_block.appendChild(img)

     showListOfStores();

     const buttonBuy = createButtonBuy(img_block);
     buttonBuy.style.position = 'fixed'
     buttonBuy.style.top = '362px'
     buttonBuy.style.left = '600px'

     buttonBuy.addEventListener('click', () => {
          // if(true){
          //      console.log('data sent on server')
          //      document.body.removeChild(popup)
          //      globalClear()
          // }
          processOfValidation()

     })


     // button to close popup
     const closePopUp = document.createElement('button');
     closePopUp.innerHTML = '&times;';
     closePopUp.className = 'popup__close-btn'
     closePopUp.addEventListener('click', () => {
          document.body.removeChild(popup)
          globalClear()
     })
     popup.appendChild(closePopUp)

     return popup
}

// popup:


