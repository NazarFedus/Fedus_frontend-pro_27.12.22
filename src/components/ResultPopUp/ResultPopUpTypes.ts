export interface IResultPopUp {
  show: boolean;
  order: IResult,
  handleClose: () => void;
}

export interface IResult {
  price: number;
  calories: number;
}
