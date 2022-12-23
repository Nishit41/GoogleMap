
import React from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Modal, Box, TextField, Button } from '@mui/material'
import { deleteItemApi, getlocationDataApi, updateItemApi } from '../Services/DataServices'
// import './Tabularview.css'

import { useState } from 'react'
//  import { makeStyles } from "@material-ui/core/styles";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    // "@media screen w"
    button: {
        backgroundColor: 'blue',
        color: 'black',



        // "@media screen and (minwidth:320px) and (maxwidth:400px)":{
        //                width:'5px',
        //  }
    },
   



    paddingIcon: {
        // display:'flex',
        // flexDirection:'row',
        // justifyContent:'space-around',
        textAlign:'center',
        gap:'15px'
    },
    headcss: {
        padding: '5px',
        background: 'aquamarine',
        height: '40px',
        // border: 2px solid red
        textAlign: 'center',
    },

    Table: {
        background: "blue",
        border: "2px solid red",
        margin: "auto",
        width:"-webkit-fill-available",
    },
    TableContent: {
        background: "white",
        textAlign: "center",
        width: "max-content",
        margin:'auto',
        marginTop: "20vh",
        border: "2px solid",
        color: "crimson",
        fontWeight: "800",

    },
    eachrow:{
        backgroundColor: "cornsilk",
        
    },
    id:{
        color:"green",
    },
     ['@media only screen and (min-width:320px) and (max-width:480px)']:{
         TableContent:{
          width:'54vw',
          margin:'auto',
          marginTop:'20vh',
          }
      },
      padding:{
            padding:'5px',


      }



});
function TabularView() {
    const classes = useStyles();


    const [locationData, setLocationData] = React.useState([]);
    const [latitude, setLatitude] = React.useState(" ");
    const [longitude, setLongitude] = React.useState(" ");
    const [id, setId] = React.useState("");
    const [first, setfirst] = useState("second");
    const [open, setOpen] = React.useState(false);
    // console.log("this is latitude data id",id);
    console.log("This is from ary", locationData);
    // setLatitude("Nicffdt");
    console.log("thisis from usestate latitude", latitude);
    console.log("thisis from usestate id", id);
    console.log("thisis from usestate longitude", longitude);
    console.log(first);

    //  locationData


    // console.log("from filter method data",data))



    //  })

    // const obj = locationData[0];

    // console.log(obj);
    // let id = obj.id;
    // console.log(id,"from object");

    React.useEffect(() => { GetData() }, [])

    // React.useEffect(() => {

    const GetData = () => {
        getlocationDataApi().then(resp => {
            // return (
            setLocationData(resp.data)
            // setfirst("Nishit")
            //  locationData.filter((data, i) => {
            //     if (i === 0 ) {
            //         return (

            //             setId(data.id),
            //             setLatitude(data.latitude),
            //              setLongitude(data.latitude) 
            //            )                         
            //     }
            // }),
            console.log("thisisfromaios api ", resp.data)
            // )
        }
        ).catch(err => console.log(err))
    }
    // setLocationData(resp)
    // }, [])

    const deleteItem = (id) => {
        deleteItemApi(id).then(resp => console.log(resp)).catch(err => console.log(err))
        GetData();
    }
    const editItem = (id, latitude, longitude, index) => {
        console.log("edit item");
        setOpen(true);
        console.log("id is ", id, latitude, longitude);
        // alert(`${id,latitude,longitude}`);
        setId(id);
        setLatitude(latitude);
        setLongitude(longitude);



        // updateItemApi(id).then(resp => console.log(resp)).catch(err => console.log(err))

    }

    function updateUser() {
        let updateDataObj = { id, latitude, longitude };
        console.log(updateDataObj);

        updateItemApi(id, updateDataObj)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
        GetData();
    }





    return (

        <div>

            <table className={classes.Table}>


                <tr className={classes.headcss}>
                    <th>id</th>
                    <th>latitude</th>
                    <th>longitude</th>
                    {/* <td> */}
                    <th>Edit</th>
                    {/* </td> */}

                </tr>


                {
                    locationData.map((data, index) => (
                        <tr className={classes.eachrow}>
                            {/* <td>{index}</td> */}
                            <td>{data.id}</td>
                            <td>{data.latitude}</td>
                            <td>{data.longitude}</td>
                            <td className={classes.paddingIcon}>
                             <ModeEditIcon 
                             onClick={() => editItem(data.id, data.latitude, data.longitude, index)}>
                            </ModeEditIcon>{' '}{' '}{' '}{' '}
                            {' '}{' '}{' '}{' '}{' '}{' '}
                                
                                 <DeleteOutlineOutlinedIcon onClick={() => deleteItem(data.id)}>  </DeleteOutlineOutlinedIcon>

                            </td>

                        </tr>

                    ))
                }
                 </table>






                <Modal

                    open={open} onClose={() => setOpen(false)}

                      
                >
                    <Box
                     className={classes.TableContent}
                    // top="50%"
                    // left="40%"
                    // sx={{width:'10vw'}}
                    >
                        <br />
                        Id
                        <br />
                        {/* <TextField id="outlined-basic" label="Id" variant="outlined" */}
                        <span className = {classes.id}>
                        {id}
                        </span>
                        {/* size='small' /> */}
                        <br />

                        Latitude

                        <br />
                        <br />

                        <TextField id="outlined-basic" label="Latitude" variant="outlined"
                          sx={{padding:'5px'}}  value={latitude} onChange={(e) => { setLatitude(e.target.value) }} size='small' />
                        <br />
                        <br />
                        Longitude
                        <br />
                        <br />
                      
                        <TextField id="outlined-basic" label="Longitude" variant="outlined"
                        sx={{padding:'5px'}}
                         value={longitude} onChange={(e) => { setLongitude(e.target.value) }} size='small'
                        />
                        <br />
                        <br />
                        <Button
                            variant="contained"
                            className={classes.button}
                            onClick={updateUser}
                        >
                            Update
                        </Button>
                        <br />
                        <br />

                    </Box>


                </Modal>






                {/* </Paper> */}
           



        </div>
    )
}

export default TabularView