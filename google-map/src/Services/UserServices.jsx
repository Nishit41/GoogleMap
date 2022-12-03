import axios from "axios";
export const SignUpApi = (SignupObj) => {
    let response = axios.post("",SignupObj)
    return response;
}
export const SignInApi = (SigninObj) => {
    let response = axios.post("",SigninObj)
    return response;
}