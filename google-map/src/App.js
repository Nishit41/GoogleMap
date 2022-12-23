import logo from './logo.svg';
// import './App.css';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
// import GoogleView from './component/googleview';
import BasicsTab from './component/Header';
import TabPanel from './component/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
           {/* <SignIn/>           */}
      {/* <SignUp/>     */}
       {/* <Dashboard/>   */}
      
      
        {/* <TabPanel/>  */}
        

        <BrowserRouter> 
        <Routes>
                    <Route exact path="/" element={<SignIn/>} />
                     <Route path="/BasicsTab" element={<BasicsTab/>} /> 
                 

        </Routes>
        </BrowserRouter>
      </div>
  )
     
}

export default App;
