import { getUser } from "../Helpers/formFunctions"

export const checkUser = async() => {
     const user = await getUser()
     console.log(user)
}