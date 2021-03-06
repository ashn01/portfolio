import axios from 'axios'

// export const INTRO = "https://ymkportfoliofunc.azurewebsites.net/api/GetIntro"
// export const PROJECTS = "https://ymkportfoliofunctions.azurewebsites.net/api/GetProjects"
// export const PROJECTDETAIL = "https://ymkportfoliofunctions.azurewebsites.net/api/GetProjectById"
// export const RESOURCES = "https://ymkblob.blob.core.windows.net/portfolio/"

export const INTRO = `${process.env.REACT_APP_API_URL}/api/GetIntro`
export const PROJECTS = `${process.env.REACT_APP_API_URL}/api/projects/getProjects`
export const PROJECTDETAIL = `${process.env.REACT_APP_API_URL}/api/projects/getProjectById`
export const RESOURCES = "https://ymkblob.blob.core.windows.net/portfolio/"

export async function getServer(route) {
    return await axios.get(route)
}

export async function getServerWithParams(route, p)
{
    return await axios.get(route,{params:{id:p}})
}

