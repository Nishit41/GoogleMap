import React from 'react'
import Box from '@mui/material/Box';
 import { grey } from '@mui/material/colors';
import { Button, InputBase, TextField,makeStyles} from '@mui/material';
// import { makeStyles } from '@mui/styles';
import './SignIn.css'
import { textAlign } from '@mui/system';
import { SignInApi } from '../Services/UserServices';
import { useNavigate } from 'react-router-dom';
// const useStyles = makeStyles({
    //  field: {

     //    padding: '100px',
        // backgroundColor: 'red',
        // marginTop: '100px',
        //  margin: 100
// //        display: 'block'
    //   },
    // });
  
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
// const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
// const lastNameRegex = /[A-Z]{1}[a-z]{2,}/;


function SignIn() {
    // const classes = useStyles();
    const navigate = useNavigate();
    const [regexObj, setRegexObj] = React.useState({
        emailBorder: false,
        emailHelper: "",
        passwordBorder: false,
        passwordHelper: "",
        firstNameBorder: false,
        firstNameHelper: "",
        lastNameBorder: false,
        lastNameHelper: ""
    });



    const [signinObj, setSigninObj] = React.useState({
        email: "", password: ""
        , firstName: " ",
        lastName: " "
    });



    const takeEmail = (event) => {
        setSigninObj((prevState) => ({ ...prevState, email: event.target.value }));
    };

    const takePassword = (event) => {
        console.log("i m in take password");
        setSigninObj((prevState) => ({ ...prevState, password: event.target.value }));
    };



    const submit = () => {
        console.log(" i a in submiit inside");
        let emailTest = emailRegex.test(signinObj.email);
        let passwordTest = passwordRegex.test(signinObj.password);

        if (emailTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "enter correct email",
            }));
        } 
        else if (emailTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: false,
                emailHelper: "",
            }));
        }
        if (passwordTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "enter correct password",
              }));
        }
         else if (passwordTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: "",
            }));
        } 
        else if (passwordTest === true) 
        {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: "",
            }));
        }
        if (emailTest === true && passwordTest === true) {
            SignInApi(signinObj)
                .then((resp) => { console.log(resp); 
                    navigate('/BasicsTab');
                    localStorage.setItem('token', resp.data.access_token) 
            })
                .catch((error) => { console.log(error) })
        }

      }





    return (
        <Box sx={{
            display: 'flex',
            mt: 15,
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',

        }}>
            <Box
                sx={{
                    width: 432,
                    backgroundColor: '#fefefe',
                    border: '1px solid grey',
                    boxSizing: 'border-box',
                    padding: '60px',
                    maxHeight: '532px',
                    minHeight: '532px',

                }}
            >
                <Box
                    sx={{

                        // height: 20,
                        // backgroundColor: 'orange',
                        // border: '1px solid grey',
                        fontSize: 'xx-large',
                        fontWeight: 400,
                        margin: '14px',
                        display:'flex',
                        justifyContent:'space-between'
                    }}
                >
                    SignIn
                <Box sx={{
                      display:'flex',
                      justifyContent:'space-between'

                }}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnXAFAhDKdZhijZO1VzRa7-TmBz86-hkxcpaz4d4qCg&s' 
                    width='42' 
                    />
                     <img src='data:image/png;base64,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' 
                    width='42'

                    />
                </Box>



                </Box>

                <div className='Text'>
                    USERNAME
                </div>
                <Box
                    sx={{
                        // backgroundColor: '#ecebe9',
                        // border: '1px solid grey',
                        fontSize: 'large',
                        fontWeight: 500,
                        margin: '14px',
                        // borderRadius:'50px'

                    }}
                >
                    <TextField placeholder='  UserName'
                        fullWidth={true}
                        error={regexObj.emailBorder}
                        onChange={takeEmail}
                        helperText={regexObj.emailHelper}
                        size='small'
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
                        // label="Password"
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
                        margin: '18px',
                        borderRadius: '50px'
                    }}
                >
                    <Button
                        fullWidth={true}
                        onClick={submit}
                        id="margin-top-button"

                    >SignIn
                    </Button>


                </Box>
                <div className='RememberMe-ForgotPassword'>

                    <div Input className='Remember' type="checkbox">
                        RememberMe
                    </div>
                    <div className='Remember'>
                        ForgotPassword
                    </div>

                </div>



            </Box>


            <Box
                sx={{
                    width: 482,
                    // height: 300,
                    backgroundColor: '#d0213f',
                    // backgroundColor: '#fefefe',
                    border: '1px solid grey',
                    boxSizing: 'border-box',

                    padding: '157px',
                    maxHeight: '532px',
                    minHeight: '532px',
                    textAlign: 'center',
                    paddingTop: '207px',
                    color: 'red',

                }}
            >
                {/* <div className='SignUp-text'> */}
                {/* SignUp */}
                {/* </div> */}

                <p className='SignUp-Text-Paragraph'>
                    <strong>WELCOME TO LOGIN</strong>
                    <br/>
                
                   <small> Don't Have an Account</small>
                </p>
                <Button

                    // onClick={submitSignUp}
                    fontSize="large"
                    id="margin-top-button2"
                    size='small'
                    border='2px solid white'


                >SignUp
                </Button>


            </Box>







        </Box>






    )
}

export default SignIn