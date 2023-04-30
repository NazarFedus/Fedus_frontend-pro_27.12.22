export interface IProduct {
     id: number,
     name: string,
     price: number,
     calories: number,
     type: string,
     choosed: boolean
}
export interface IMenu {
     burgers: IProduct[],
     filling: IProduct[],
     supplements: IProduct[]
}