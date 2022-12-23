 export const locationDetails = (location) =>
    {
        console.log(location,"Action called");
     return{    

            type:"LOCATION_DETAILS",
             data: location,
      }
}