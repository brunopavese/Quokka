import axios from './axios'

const UserService = {
  async getUserById(id: string) {
    try {
      const response = await axios.get(`/users/${id}`)
      return response.data.data
    } catch (error) {
      console.log(error)
      throw error
    }
  },
}
export default UserService
