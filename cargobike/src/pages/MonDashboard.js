/* eslint-disable react/jsx-pascal-case */
// css apart maken voor dit component
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import styled from "styled-components";
import { auth, db } from "../components/firebase/Firebase";
// import React, {useEffect, useState} from 'react'
import MonteurRoute from '../components/MonteurRoute';
import MonDashboardGreeting from '../components/user/MonDashboardGreeting';
import '../OndReservering.css';




// import { db } from '../components/firebase/Firebase';

// const AddbuttonReservering = styled.div`
//     position: fixed;
//     bottom: 0;
//     z-index: 2;
//     margin-left: 80%;
//     margin-bottom: 10%;

//     > .MuiFab-primary {
//         background-color: #796ff6;
//     }
// `;

// const ContentBottom = styled.div`
//     margin-top: 5vh;
//     background-color: white;
//     padding: 15px;
//     width: 100%;
//     margin-bottom: 10px;
//     display: inline-block;
//     color: black;
// `

const Scrollbar_item = styled.div`
    margin: 20px;
`

const Scrollbar = styled.div`
display: flex;
overflow-x: scroll;
`

const ContentBox_h1 = styled.h1`
    color: #88C053;
    font-size: 20px;
    font-weight: 600;
    margin-top: 40px;
`

const ContentBox_h1_alt = styled.h1`
    color: #88C053;
    font-size: 20px;
    font-weight: 600;
    margin-top: 40px;
    margin-left:24px;
`

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

const Contentbox = styled.div`
    background-color: white;
    border-radius: 15px;
    padding: 15px;
    padding-bottom: 0px;
    width: 100%;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    color: black;
    min-width: 300px;
    max-width: 500px;
`


const ContentBox_h2 = styled.h2`
    color: #88C053;
    font-weight: 400;
    font-size: 20;
`
const Info_box = styled.div`
    background-color: #F5FAF1;
    border-radius: 15px;
    padding: 10px;
    width: 6.5em;
    margin: 10px;
    overflow: hidden;
`
const Info_label = styled.p`
    color: #838383;
    font-weight: 600;
    font-size: 18;
    margin: 0px;
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

function OndDashboard() {

    // this event dispatcher gives the event listner the news we want a certain navigation for this user.
    const event = new Event('showNavbarMon');
    window.dispatchEvent(event);

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
       history.push("/OndDashboard");
     };
   
     const [select, setSelect] = useState(1)
   
     const [select2, setSelect2] = useState(1)
     
     const handleExitNewDelivery = () => {
       history.push("/OndDashboard")
   }
   
       const classes = useStyles();

       const [meldingen, setMeldingen] = useState([])

       useEffect(() => {
          db
              .collection('meldingen')
              .onSnapshot(snapshot => {
                  setMeldingen(snapshot.docs.map(doc => ({
                      melding : doc.data()
                      
                  })));
              })
      }, []);
     

    return (
        
        <div className='OndDashboard'>
            {/* Dashboard begroeting voor de gebruiker met reserveringen */}
            <MonDashboardGreeting />

            <Col xs={12} md={8}>
              <h1 className="RecentActivity"><ArrowForwardIosIcon style={{ fontSize: 14, color:'white' }} />Er zijn momenteel geen spoedgevallen</h1>
              <h2 className="RecentActivity_Desc">Laatst bijgewerkt: 36 sec. geleden</h2>
            </Col>

            {/* Card met monteur route */}
             <MonteurRoute />
        
            {/* Cards met Cargobike modellen*/}
            <Container>
                <ContentBox_h1_alt>Bekijk status van Cargobikes</ContentBox_h1_alt>
            </Container>
            
            <Scrollbar>
            {meldingen.map(({melding}) => (
                <Scrollbar_item>

                <div className="CargobikeStatus">  
                <a href={'../MonCargobikeBroken'}>
                <Contentbox>
                    <ContentBox_h1>NR 12 - {melding.desc}</ContentBox_h1>
                    <ContentBox_h2>Standaard Cargobike</ContentBox_h2>
                    <Row>
                        <Info_box>
                            <Info_label>Radius</Info_label>
                            <Info_data><strong>12%</strong> | 100%</Info_data>
                        </Info_box>
                        <Info_box>
                            <Info_label>Conditie</Info_label>
                            <Info_data>C1</Info_data>
                        </Info_box>
                        <Info_image src={melding.afbeelding}/>
                    </Row>
                </Contentbox>
                </a>
            </div>
                </Scrollbar_item>
            
                           ))
                        }
                {/* // <Scrollbar_item><CargobikeStatusTwo/></Scrollbar_item> */}
            </Scrollbar>
        </div>  
    )
}

export default OndDashboard
