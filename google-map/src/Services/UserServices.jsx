import axios from "axios";
export const SignUpApi = (SignupObj) => {
    let response = axios.post(" http://localhost:8000/auth/register",SignupObj)
    return response;
}
export const SignInApi = (SigninObj) => {
    let response = axios.post("http://localhost:8000/auth/login",SigninObj)
    return response;
}