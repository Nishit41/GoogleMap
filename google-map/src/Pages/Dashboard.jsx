import React from 'react'
 import {getDataApi} from '../Services/DataServices'

function Dashboard() {
  // let Product; 
     const GetData = () => {
        getDataApi().then((response)=>{
      
            console.log(response.data);
            // Product = [response.data];
            // console.log("this is my product"+Product)

         })
      }
     React.useEffect(()=>{GetData()})





  return (
    <div > 
            <h1>ProductList</h1>





    </div>
  )
}

export default Dashboard