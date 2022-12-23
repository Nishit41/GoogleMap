  import axios from "axios";
// // ACCESS_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pc2hpdHJhbmphbjQxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiTmlzaGl0QDQxIiwiaWF0IjoxNjcwMjU4NDIzLCJleHAiOjE2NzAyNjIwMjN9.pvB19umDtoJYVIien-BWdgApFxg8_9XB9nqc0uOV_mk"
 const headerConfig={
       headers: {

         Authorization:`Bearer ${localStorage.getItem("token")}`
      }
 }
 export const getDataApi  = () => {
     let response = axios.get("http://localhost:8000/products",headerConfig);
     return response;
 }
 export const locationDetailsApi  = (result) => {
  // console.log(result);
  let response = axios.post("http://localhost:8000/location",result,headerConfig);
  // console.log(response);
  return response;
}

export const getlocationDataApi = () =>{
  let response = axios.get("http://localhost:8000/location",headerConfig);
  return response;
}

export const deleteItemApi = (id) =>{
  console.log(`id from api dataservicesfolder${id}`);
  let response = axios.delete(`http://localhost:8000/location/${id}`,headerConfig);
  return response;
}

 export const updateItemApi = (id,updateDataObj)=>{
  let response = axios.put(`http://localhost:8000/location/${id}`,updateDataObj,headerConfig);
  return response;
}



