import axios from "axios"

class HelloWorldService {

    executeHelloWorldService() {
        // console.log("executed service")
        return axios.get("http://localhost:8080/hello-world")
    }

    executeHelloWorldBeanService() {
        // console.log("executed service")
        return axios.get("http://localhost:8080/hello-world-bean")
    }

    executeHelloWorldPathVariableService(name) {
        // console.log("executed service")
        // let username = "wayneyong"
        // let password = "123456"

        // let basicAuthHeader = "Basic " + window.btoa(username + ":" + password)

        // using sending a request send the auth
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
        // ,
        //     {
        //         headers: {
        //             authorization: basicAuthHeader
        //         }
        //     }
        // )
    }
}
export default new HelloWorldService()