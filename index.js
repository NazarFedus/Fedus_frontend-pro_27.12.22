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
     const products = await fetchData();
     console.log(products);

     // categories
     const categories = [];
     products.forEach(e => !categories.includes(e.category) ? categories.push(e.category) : null)
     categories.forEach(type => {
          createTab(tabs, type);
     })

     const tabList = tabs.querySelectorAll('.tab')
          tabList.forEach(element => {
               element.addEventListener('click', () => {
                    tabList.forEach(e => e.classList.remove('active'))
                    element.classList.add('active')
                    showListOfProducts(element.innerText, products)
               })
          })
}

processProducts();


function createTab(venue, value){
     const tab = document.createElement('button');
          tab.classList.add('tab')
          tab.innerText = value
          venue.appendChild(tab)
}

function showListOfProducts(category, arrayOfProducts){
     // filter our category:
     const products = arrayOfProducts.filter(item => item.category === category);

     // clear boxInfo from previous list of products:
     const productsList = listProducts.querySelectorAll('.tab')
     if(productsList) productsList.forEach(e => listProducts.removeChild(e))

     // create boxInfo "products list":
     products.forEach(item => {
          createTab(listProducts, item.title)
     })
}