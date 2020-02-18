import axios from 'axios'

export const INTRO = "https://ymkportfoliofunc.azurewebsites.net/api/GetIntro"
export const PROJECTS = "https://ymkportfoliofunc.azurewebsites.net/api/GetProjects"
export const PROJECTDETAIL = "https://ymkportfoliofunc.azurewebsites.net/api/projectDetail"

export async function getServer(route) {
    return await axios.get(route)
}

export async function getServerWithParams(route, p)
{
    return await axios.get(route,{params:{id:p}})
}