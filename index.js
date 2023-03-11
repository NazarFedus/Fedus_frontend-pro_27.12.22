const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container')
body.appendChild(container);

const tabs = document.createElement('div');
const listProducts = document.createElement('div');
const blockInfo = document.createElement('div');

tabs.classList.add('block');
listProducts.classList.add('block');
blockInfo.classList.add('block');

container.appendChild(tabs)
container.appendChild(listProducts)
container.appendChild(blockInfo)


// Get data
async function fetchData() {
     try {
       const response = await fetch('https://fakestoreapi.com/products');
       const data = await response.json();
       return data;
     } catch (error) {
       console.error(error);
     }
}

async function processProducts() {
     const PRODUCTS = await fetchData();
     console.log(PRODUCTS);

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

     // ======================= //


}

processProducts();


// function addListener(element, className, array){
//      element.addEventListener('click', () => {
//           array.forEach(e => e.classList.remove(className))
//           element.classList.add(className);
//           sh
//      })
// }


function createTab(venue, value, dataOfItem = ''){
     const tab = document.createElement('button');
          tab.classList.add('tab')
          tab.innerText = value
          tab.setAttribute('id', dataOfItem.id)
          venue.appendChild(tab)
     return tab;
}

// Second block (listProducts)
function showListOfProducts(category, arrayOfProducts){
     // filter our category:
     const products = arrayOfProducts.filter(item => item.category === category);

     // clear boxInfo from previous list of products:
     const productsList = listProducts.querySelectorAll('.tab')
     if(productsList) productsList.forEach(e => listProducts.removeChild(e))

     // create boxInfo "products list":
     const productItems = products.map(item => {
          console.log(item)
          return createTab(listProducts, item.title, item);
     })

     // addEvenetListeners for our list of products
     productItems.forEach(item => {
          item.addEventListener('click', () => {
               productItems.forEach(e => e.classList.remove('active'));
               item.classList.add('active');
               const searchElement = products.filter(e => e.id == item.getAttribute('id'))
               console.log(searchElement, 'searchElement');


               showProductInfo(...searchElement)
          })
     })

}


// third block (blockInfo)

function showProductInfo(product){
     // const box = document.createElement('div');
     console.log(product)
     const title = document.createElement('h1');
     title.innerText = product.title;
     title.classList.add('title')

     blockInfo.appendChild(title)
}