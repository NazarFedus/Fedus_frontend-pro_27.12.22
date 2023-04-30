import { IMenu } from "../components/Menu/MenuTypes";

export const menu: IMenu = {
     burgers: [
          {
               id: 1,
               name: 'Small',
               price: 50,
               calories: 20,
               type: 'BURGER',
               choosed: false
          },
          {
               id: 2,
               name: 'Big',
               price: 100,
               calories: 40,
               type: 'BURGER',
               choosed: false
          }
     ],
     filling: [
          {
               id: 1,
               name: 'Cheese',
               price: 10,
               calories: 20,
               type: 'FILLING',
               choosed: false
          },
          {
               id: 2,
               name: 'Salad',
               price: 20,
               calories: 5,
               type: 'FILLING',
               choosed: false
          },
          {
               id: 3,
               name: 'Potato',
               price: 15,
               calories: 10,
               type: 'FILLING',
               choosed: false
          }
     ],
     supplements: [
          {
               id: 1,
               name: 'Seasoning',
               price: 15,
               calories: 0,
               type: 'SUPPLEMENTS',
               choosed: false
          },
          {
               id: 2,
               name: 'Mayo',
               price: 20,
               calories: 5,
               type: 'SUPPLEMENTS',
               choosed: false
          }
     ]
}