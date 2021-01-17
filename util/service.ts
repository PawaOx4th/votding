// import axios from 'axios'

export async function fetchProfile(_user: string, axios: any) {
  const path: string = 'https://api.github.com'

  try {
    const response: any = await axios.get(`${path}/users/${_user}`)
    return response
  } catch (error) {
    console.log(error)
  }
}
