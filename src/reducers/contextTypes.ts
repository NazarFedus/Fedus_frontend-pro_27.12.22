import { IMenu } from "../components/Menu/MenuTypes"
export interface IContextProps {
     state: IMenu
     dispatch: React.Dispatch<any>
}
export interface IAction {
     type: string,
     payload?: string | number
}