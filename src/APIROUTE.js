import axios from 'axios'

export const INTRO = "/intro"
export const PROJECTS = "/projects"

export async function getServer(route) {
    return await axios.get(route)
}
