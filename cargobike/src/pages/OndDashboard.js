// css apart maken voor dit component
import '../OndReservering.css';
import React, { useState } from 'react'
// import React, {useEffect, useState} from 'react'
import CurrentRoute from '../components/CurrentRoute';
import SaleModels from '../components/SaleModels';
import DashboardGreeting from '../components/user/DashboardGreeting';
import CurrentAgenda from '../components/employee/CurrentAgenda';
import { Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Container } from 'react-bootstrap';

import ph_img from "../img/Placeholder.png";

import Dialog from '@material-ui/core/Dialog';


import { InputLabel, FormControl, MenuItem, Select, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { auth, db } from "../components/firebase/Firebase";

// import { db } from '../components/firebase/Firebase';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import styled from "styled-components";



//Components
import GoogleMap from '../components/GoogleMap';
import CbStatCard from '../components/CbStatCard';
import OnderdeelStatus from '../components/OnderdeelStatus';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'



const AddbuttonReservering = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 2;
    margin-left: 40%;
    margin-bottom: 15%;

    > .MuiFab-primary {
        background-color: #796ff6;
    }
`;

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },

    formControl: {
        minWidth: 100
    }
  });

const Send__delivery = styled.div`
  width:400px;
  overflow-x: hidden;
`;

const HeaderContainer = styled.div`
    /* display:flex; */
    align-items:center;
    width:80%;
`

const ThisCol = styled.div`
  display: flex;
  justify-content: safe-center;
  padding-right: 100px;
  border-radius: 15px;
  :hover {
    background-color: #83b555;
    width: 80px;
    border-radius: 15px;
    cursor:pointer;
  }
`;

const ThisRow = styled.div`
  margin-left: 35px;
  > h1 {
    color: white !important;
  }
`;

const ThatRow = styled.div`
  margin-left: 36px;
  > h3 {
    color: white !important;
    font-weight:100;
  }
`;

const MakeSendOrder = styled.div`
    display:flex;
    flex-direction: column;
    
    align-items:flex-start;
    
    /* flex-wrap: wrap; */
    /* justify-content:center; */
    /* align-items:center; */
    border-radius:35px;
    margin-top:10px;
    margin-bottom: 30px;
    width:100%;
    height:430px;
    margin-left:25px;
    background:white;
    overflow: hidden;

    > Row {
        padding:25px;
    }

    > Row > h1 {
        font-size: 24px;
        font-weight 600;
        color: #9cd06b;
    }

    > Row date {
        margin-left:140px;
        padding-left:100px;
    }

    > Row > .MuiInputBase-input {
        font: inherit;
        color: currentColor;
        width: 290px;
        border: 0;
        height: 1.1876em;
        margin: 0;
        display: block;
        padding: 6px 0 7px;
        min-width: 0;
        background: none;
        box-sizing: content-box;
        animation-name: mui-auto-fill-cancel;
        letter-spacing: inherit;
        animation-duration: 10ms;
        -webkit-tap-highlight-color: transparent;

    } 
`;

const TimePicker = styled.div`
    margin-top: 20px;
    margin-left: 25px;
    width: 85%;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    
`

const TextCol = styled.div`
    width:100%;
    height:100%;
    display:table;
    margin-top:10px;
`

const TextCol2 = styled.div`
    width:100%;
    height:100%;
    display:table;
    margin-top:27px;
`

const ButtonContainer = styled.div`
    padding-left:25px;
    margin-top:20px;
`

const Scrollbar = styled.div`
display: flex;
overflow-x: scroll;
`

const Scrollbar_item = styled.div`
    margin: 20px;
`

const Contentbox = styled.div`
    margin-top: 5vh;
    background-color: white;
    border-radius: 15px;
    padding: 15px;
    width: 100%;
    margin-bottom: 10px;
    display: inline-block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    color: black;
`

const ContentBox_h1 = styled.h1`
    color: #88C053;
    font-size: 20px;
    font-weight: 600;
`

const ContentBox_p = styled.p`
    color: #838383;
    font-weight: 600;
    font-size: 14;
    margin: 0;
    padding: 0;
`

const ContentBottom = styled.div`
    margin-top: -3vh;
    background-color: white;
    padding: 15px;
    width: 100%;
    margin-bottom: 10px;
    display: inline-block;
    color: black;
`

const Info_box = styled.div`
    background-color: #F5FAF1;
    border-radius: 13px;
    padding: 9px;
    width: 5.7em;
    overflow: hidden;
    margin-left: 25px;
    margin-bottom: 14px;
    margin-top: 6px;
    height: 63px;
`

const Info_label = styled.p`
    color: #838383;
    font-weight: 600;
    font-size: 18;
    margin: 0px;
    margin-left: 0px;
`

const Info_data = styled.p`
    color: #88C053;
    font-weight: 400;
    font-size: 16;
    margin: 0px;
`

const Info_image = styled.img`
    width: 100%;
`

const RentCargobike = styled.div`
    padding: 20px;
    padding-bottom: 0px;
    overflow:hidden;
    position: relative;
    z-index: 1;
    border-radius: 20px;
    width: 240px;
    background-color: white;
    margin-top: -20px;
    min-height: 250px;
 
`

function OndDashboard() {
    const history = useHistory();

    const handleNewDelivery = () => {
        history.push("/OndSend")
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
     };

    const handleClose = () => {
         setOpen(false);
     };

     const [datum, setDatum] = useState("");
     const [locatie, setLocatie] = useState("");
     const [type, setType] = useState("");
     const [tijd, setTijd] = useState("");
     const [adres, setAdres] = useState("");
     const [postcode, setPostcode] = useState("");
   
     const addNewReservation = (event) => {
       event.preventDefault();
                
       db.collection('reserveringen').doc(auth.uid).set({
           datum: datum,
           type: type,
           tijd: tijd,
           adres: adres,
           postcode, postcode
       })
       // console.log(uid);
       handleClose()
       history.push("/OndReservering");
     };
   
     const [select, setSelect] = useState(1)
   
     const [select2, setSelect2] = useState(1)
     
     const handleExitNewDelivery = () => {
       history.push("/OndDashboard")
   }
   
       const classes = useStyles();

    return (
        
        <div className='OndDashboard'>
            
        <AddbuttonReservering>
            <Fab variant="extended" color="primary" onClick={handleClickOpen}>
                 <AddIcon />
                 Pakket Verzenden
            </Fab>
        </AddbuttonReservering>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Send__delivery>
        <Row>

          <MakeSendOrder>
            <row>
                <h1>Pakket Verzenden</h1>
            </row>

            <Row style={{paddingLeft: 40, marginBottom: '30px', width: '100%'}}>
            <TextField 
            id="standard-basic" 
            label="Adres"
            value={adres}
            onChange={(e) => setAdres(e.target.value)} 
            />
            </Row>

            <Row style={{paddingLeft: 40, marginBottom: '30px', width: '100%'}}>
            <TextField 
            id="standard-basic" 
            label="Postcode" 
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)} 
            />
            </Row>

            <Row style={{paddingLeft: 40}} className="date">
            <form className={classes.container} noValidate>

                <TextField
                    id="date"
                    // label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    value={datum}
                    onChange={(e) => setDatum(e.target.value)}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </form>
            </Row>

            <TimePicker>       
            <Row>
                <Col>
                <TextCol>
                <h3>Moment</h3>
                </TextCol>
                </Col>

                <Col>
                <FormControl className={classes.formControl}>
                {/* <InputLabel id="label">Tijdstip</InputLabel> */}
                    <Select 
                    placeholder="test"
                    labelId="label"
                    id="select" 
                    value={select} 
                    displayEmpty
                    onChange={
                        (e) => setSelect(e.target.value)
                    }  
                    onClick={
                        (e) => setTijd(e.target.value)
                    }  
                    >
                    <MenuItem disabled value="">Selecteer een tijd</MenuItem>
                    <MenuItem value='6:30 - 8:00' onChange={(e) => setType(e.target.value)}><b>Ochtend - </b> 6:30 - 8:00</MenuItem>
                    <MenuItem value="11:30 - 1:30"><b>Middag - </b> 11:30 - 13:30</MenuItem>
                    <MenuItem value="3:30 - 5:00"><b>Eind middag - </b> 15:30 - 17:00</MenuItem>
                    <MenuItem value="6:00 - 7:30"><b>Avond - </b> 17:00 - 19:30 </MenuItem>
                </Select>
                </FormControl>
                </Col>
            </Row>
            <Row>
                <Col>
                <TextCol2>
                <h3>Wat wil je versturen?</h3>
                </TextCol2>
                </Col>

                <Col>
                <FormControl className={classes.formControl}>
                <InputLabel id="label"> </InputLabel>
                    <Select 
                    labelId="label" 
                    id="select" 
                    value={select2}
                    displayEmpty 
                    onChange={(e) => setSelect2(e.target.value)}
                    onClick={
                        (e) => setType(e.target.value)
                    }  >
                    <MenuItem disabled value="">Pakket grootte</MenuItem>
                    <MenuItem 
                    value="Past in een brievenbus" 
                    onChange={(e) => setType(e.target.value)}>
                        <b>Brievenbuspakje</b>
                        </MenuItem>
                    <MenuItem 
                    value="Past niet in een brievenbus" 
                    onChange={(e) => setType(e.target.value)}>
                        <b>Pakket</b>
                        </MenuItem>
                    

                    <MenuItem disabled value="">Selecteer type</MenuItem>
                    <MenuItem value="Cargobike standard" onChange={(e) => setType(e.target.value)}><b>Cargobike Standaard</b></MenuItem>
                    <MenuItem value="Cargobike Deluxe" onChange={(e) => setType(e.target.value)}><b>Cargobike Deluxe</b></MenuItem>
                    <MenuItem value="Cargobike Extended" onChange={(e) => setType(e.target.value)}><b>Cargobike Extended</b></MenuItem>

                </Select>
                </FormControl>
                </Col>
            </Row>
            </TimePicker>
            <ButtonContainer>

                <Button onClick={addNewReservation} variant="contained" min-width="300px" color="secondary">
                            Deze zending toevoegen
                </Button>
            </ButtonContainer>
          </MakeSendOrder>
        </Row>
      </Send__delivery>
      </Dialog>

            {/* Dashboard begroeting voor de gebruiker met reserveringen */}
            <DashboardGreeting />

            <Col xs={12} md={12}>
              <h1 className="RecentActivity"><ArrowForwardIosIcon className="Icon_Margin" style={{ fontSize: 14, color:'white' }} />Zending voor 23-10-25, 13:15 naar Stationsweg</h1> 
              <h2 className="RecentActivity_Desc">36 pakketten</h2>
            </Col>

            <Col xs={12} md={12}>
              <h1 className="RecentActivity2"><ArrowForwardIosIcon className="Icon_Margin" style={{ fontSize: 14, color:'white' }} />Zending voor 18-09-25, 14:45 naar Zernike</h1>
              <h2 className="RecentActivity_Desc2">42 pakketten</h2>
            </Col>
        
            {/* Card met Actuele route */}
             <CurrentRoute />
        
             <Container className="Title_dash">
                <Row>
                    <Col xs={12} md={8}>
                        <h1 className="BezorgerTitles">Huur een Cargobike</h1>
                    </Col>
                </Row>
            </Container>

             <ContentBottom>

            <Scrollbar>
                <Scrollbar_item>
                    <RentCargobike>
                        <Row>
                            <Col xs={10}>
                                <h1 className="Card_title_Cargobike">Cargobike</h1>
                                <h2 className="Card_Under_Title">Standaard</h2>
                            </Col>

                        <Row>
                            <Info_box>
                             <Info_label>Radius</Info_label>
                                <Info_data>40 km</Info_data>
                            </Info_box>
                            <Info_box>
                                    <Info_label>Capaciteit</Info_label>
                                    <Info_data>120 Liter</Info_data>
                                </Info_box>
                            <Info_image src={ph_img}/>
                        </Row>

                        </Row>
                    </RentCargobike>
                </Scrollbar_item>

                <Scrollbar_item>
                    <RentCargobike>
                        <Row>
                            <Col xs={10}>
                                <h1 className="Card_title_Cargobike">Cargobike</h1>
                                <h2 className="Card_Under_Title">Deluxe</h2>
                            </Col>

                        <Row>
                            <Info_box>
                             <Info_label>Radius</Info_label>
                                <Info_data>40 km</Info_data>
                            </Info_box>
                            <Info_box>
                                    <Info_label>Capaciteit</Info_label>
                                    <Info_data>120 Liter</Info_data>
                                </Info_box>
                            <Info_image src={ph_img}/>
                        </Row>

                        </Row>
                    </RentCargobike>
                </Scrollbar_item>

                <Scrollbar_item>
                    <RentCargobike>
                        <Row>
                            <Col xs={10}>
                                <h1 className="Card_title_Cargobike">Cargobike</h1>
                                <h2 className="Card_Under_Title">Extended</h2>
                            </Col>

                        <Row>
                            <Info_box>
                                <Info_label>Radius</Info_label>
                                <Info_data>40 km</Info_data>
                            </Info_box>
                            <Info_box>
                                <Info_label>Capaciteit</Info_label>
                                <Info_data>120 Liter</Info_data>
                            </Info_box>
                            <Info_image src={ph_img}/>
                        </Row>

                        </Row>
                    </RentCargobike>
                </Scrollbar_item>
                

            </Scrollbar>
            

            </ContentBottom>

        </div>  
    )
}

export default OndDashboard
