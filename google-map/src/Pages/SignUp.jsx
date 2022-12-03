import React from 'react'
import { Button, InputBase, TextField, Box } from '@mui/material';
import './SignUp.css'
import  {SignUpApi} from '../Services/UserServices' 
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
const lastNameRegex = /[A-Z]{1}[a-z]{2,}/;
function SignUp() {
    const [regexObj, setRegexObj] = React.useState({
        firstNameBorder: false,
        firstNameHelper: "",
        lastNameBorder: false,
        lastNameHelper: "",
    });
    const [signupObj, setSignupObj] =
        React.useState({
            firstName: "",
            lastName: "",
            email: "", password: "", service: "advance"
        });
    const takeFirstname = (event) => {
        setSignupObj((prevState) => ({ ...prevState, firstName: event.target.value }));
    };

    const takeLastname = (event) => {
        setSignupObj((prevState) => ({ ...prevState, lastName: event.target.value }));
    };
    const takeUsername = (event) => {
        setSignupObj((prevState) => ({ ...prevState, email: event.target.value }));
    };

    const takePassword = (event) => {
        setSignupObj((prevState) => ({ ...prevState, password: event.target.value, }));
    };
    const submit = () => {
        let firstnameTest = firstNameRegex.test(signupObj.firstName);
        let lastnameTest = lastNameRegex.test(signupObj.lastName);
        let usernameTest = emailRegex.test(signupObj.email);
        let passwordTest = passwordRegex.test(signupObj.password);
        if (firstnameTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                firstnameBorder: true,
                firstnameHelper: "enter valid firstname",
            }));
        } else if (firstnameTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                firstnameBorder: false,
                firstnameHelper: "",
            }));
        }
        if (lastnameTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                lastnameBorder: true,
                lastnameHelper: "enter valid lastname",
            }));
        } else if (lastnameTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                lastnameBorder: false,
                lastnameHelper: "",
            }));
        }
        if (usernameTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                usernameBorder: true,
                usernameHelper: "Choose a Gmail address",
            }));
        } else if (usernameTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                usernameBorder: false,
                usernameHelper: "",
            }));
        }
        if (passwordTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Enter a password",
            }));
        } else if (passwordTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: "",
            }));
        }
        if (firstnameTest === true && lastnameTest === true && usernameTest === true && passwordTest === true) {
            SignUpApi(signupObj)
                .then((resp) => { console.log(resp); localStorage.setItem('token', resp.data.id) })
                .catch((error) => { console.log(error) })
        }
    };



    return (

        <Box sx={{
            display: 'flex',
            margin: 'Auto',
            justifyContent: 'center',
            marginTop: '20vh',
        }}>

            <Box
                sx={{
                    width: 482,
                    // height: 300,
                    // backgroundColor: 'pink',
                    // backgroundColor: '#fefefe',
                    border: '1px solid grey',
                    boxSizing: 'border-box',

                    padding: '13px',
                    maxHeight: '532px',
                    minHeight: '532px'
                }}
            >
                {/* <div className='SignUp-text'>
                    SignUp
                </div> */}



                <Box
                    sx={{
                        fontSize: 'large',
                        fontWeight: 500,
                        margin: '14px',

                    }}
                >      <div className='LastNameText'>
                        FIRSTNAME
                    </div>

                    <TextField placeholder='  FirstName'
                        varient="filled"
                        error={regexObj.firstnameBorder}
                        onChange={takeFirstname}
                        helperText={regexObj.firstnameHelper}
                        //  label="Password"
                        fullWidth={true}
                        size='small'
                        border="none"
                    ></TextField>

                    <div className='LastNameText'>
                        LASTNAME
                    </div>

                    <TextField placeholder='  LastName'
                        varient="filled"
                         fullWidth={true}
                         error={regexObj.lastnameBorder}
                         onChange={takeLastname}
                         helperText={regexObj.lastnameHelper}
                        // label="Password"
                        size='small'
                        border="none"
                    ></TextField>


                </Box>

                <div className='Text'>
                    USERNAME
                </div>


                <Box
                    sx={{
                        fontSize: 'large',
                        fontWeight: 500,
                        margin: '14px',

                    }}
                >
                    <TextField placeholder='  UserName'
                        varient="filled"
                        fullWidth={true}
                        error={regexObj.usernameBorder}
                         onChange={takeUsername}
                         helperText={regexObj.usernameHelper}
                        // // label="Password"
                        size='small'
                        border="none"
                    ></TextField>
                </Box>
                <div className='Text'>
                    PASSWORD
                </div>


                <Box
                    sx={{
                        fontSize: 'large',
                        fontWeight: 500,
                        margin: '14px',

                    }}
                >
                    <TextField placeholder='  Password'
                        varient="filled"
                        fullWidth={true}
                        error={regexObj.passwordBorder}
                         onChange={takePassword}
                         helperText={regexObj.passwordHelper}
                        label="Password"
                        size='small'
                        border="none"
                    ></TextField>
                </Box>

                <Box
                    sx={{
                        backgroundColor: '#e64864',
                        border: '1px solid grey',
                        fontSize: 'large',
                        fontWeight: 500,
                        margin: '14px',
                        borderRadius: '50px',
                        mt: '25px'
                    }}
                >
                    <Button
                        fullWidth={true}
                         onClick={submit}
                        fontSize="large"
                        id="margin-top-button"

                    >SignUp
                    </Button>


                </Box>
            </Box>
            <Box
                sx={{
                    width: 482,
                    // height: 300,
                    backgroundColor: 'pink',
                    // backgroundColor: '#fefefe',
                    border: '1px solid grey',
                    boxSizing: 'border-box',

                    padding: '157px',
                    maxHeight: '532px',
                    minHeight: '532px',
                    textAlign: 'center',
                    paddingTop: '207px',

                }}
            >
                {/* <div className='SignUp-text'> */}
                {/* SignUp */}
                {/* </div> */}

                <div className='Text'>
                    WELCOME TO SIGNUP
                </div>
                Existing Account?
                <Button

                    // onClick={submitSignUp}
                    fontSize="large"
                    id="margin-top-button2"
                    size='small'
                    border='2px solid white'


                >SignIn
                </Button>


            </Box>
        </Box>
    )
}

export default SignUp


