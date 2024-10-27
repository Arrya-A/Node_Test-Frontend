import commonAPI from "./commonAPI"
import SERVERURL from "./serverUrl"

//register - called by Auth
export const registerAPI = async (reqBody) => {    
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

//login - called by Auth
export const loginAPI = async (reqBody) => {    
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}




// all users
export const allUsersAPI=async(reqBody)=>{
    return await commonAPI("GET",`${SERVERURL}/all-users`,reqBody)
}

//myprofile - called by home
export const myProfileAPI = async (reqBody) => {    
    return await commonAPI("GET",`${SERVERURL}/my-profile`,reqBody)
}