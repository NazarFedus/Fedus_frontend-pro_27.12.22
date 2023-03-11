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

     // types (категорії)
     const types = [];
     products.forEach(e => !types.includes(e.category) ? types.push(e.category) : null)
     types.forEach(type => {
          console.log(type)
          const tab = document.createElement('button');
          tab.classList.add('tab')
          tab.innerText = type
          tabs.appendChild(tab)

     })


     console.log(types)
}

processProducts();










// addClass(tabs, 'block')
// // addClass(listProducts)
// // addClass()



// // add class;
// const addClass = (element, class) => element.classList.add(class);
