import axios from 'axios'

export const fetchUsers = async () => {
     const users = await axios.get(' http://localhost:3000/users')
     return users
}