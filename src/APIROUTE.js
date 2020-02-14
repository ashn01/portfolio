import axios from 'axios'

export const INTRO = "/intro"
export const PROJECTS = "/projects"
export const PROJECT = "/projectDetail"

export async function getServer(route) {
    return await axios.get(route)
}

export async function getServerWithParams(route, params)
{
    return await axios.get(route,{params:{id:params}})
}