import axios from "axios"

class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        //once login, put in session storage
        console.log("Session storage saved")
        let basicAuthHeader = "Basic " + window.btoa(username + ":" + password)

        sessionStorage.setItem("authenticatedUser", username);
        this.setUpAxiosInterceptors(basicAuthHeader)
    }

    logout() {
        sessionStorage.removeItem("authenticatedUser")
        // sessionStorage.removeItem("password", password);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("authenticatedUser")
        if (user === null) return false  //if null, user is not login
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem("authenticatedUser")
        if (user === null) return ""  //if null, user is not login
        return user
    }

    setUpAxiosInterceptors(basicAuthHeader) {
        // let username = "wayneyong"
        // let password = "123456"


        axios.interceptors.request.use(

            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}
export default new AuthenticationService()