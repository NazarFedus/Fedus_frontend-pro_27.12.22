import { IMenu } from "../components/Menu/MenuTypes";

export const menu: IMenu = {
     burgers: [
          {
               id: 1,
               name: 'Small',
               price: 50,
               calories: 20
          },
          {
               id: 2,
               name: 'Big',
               price: 100,
               calories: 40
          }
     ],
     filling: [
          {
               id: 1,
               name: 'cheese',
               price: 10,
               calories: 20
          },
          {
               id: 2,
               name: 'salad',
               price: 20,
               calories: 5
          },
          {
               id: 3,
               name: 'potato',
               price: 15,
               calories: 10
          }
     ],
     supplements: [
          {
               id: 1,
               name: 'seasoning',
               price: 15,
               calories: 0
          },
          {
               id: 2,
               name: 'mayo',
               price: 20,
               calories: 5
          }
     ]
}