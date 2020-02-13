import axios from 'axios'

export const HOME = "/projects"

export async function getServer(route) {
    return await axios.get(route)
}
