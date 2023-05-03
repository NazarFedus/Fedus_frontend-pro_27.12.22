export interface IResultPopUp {
  show: boolean;
  order: String[],
  handleClose: () => void;
}

export interface IResult {
  price: number;
  calories: number;
}
