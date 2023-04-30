export interface IBurger {
     id: number,
     name: string,
     price: number,
     calories: number
}

export interface IFilling {
     id: number,
     name: string,
     price: number,
     calories: number
}

export interface ISupplements {
     id: number,
     name: string,
     price: number,
     calories: number
}


export interface IMenu {
     burgers: IBurger[],
     filling: IFilling[],
     supplements: ISupplements[]
}