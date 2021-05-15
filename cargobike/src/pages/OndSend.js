import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";
import { InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { auth, db } from "../components/firebase/Firebase";
import { useHistory } from "react-router";





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
  });

const Send__delivery = styled.div`
  padding-top: 150px;
  margin-left:35px;
  width:400px;
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
    border-radius:25px;
    margin-top:60px;
    width:100%;
    height:400px;
    margin-left:25px;
    background:white;

    > Row {
        padding:25px;
    }

    > Row > h1 {
        color:grey;
    }

    > Row date {
        margin-left:140px;
        padding-left:100px;
    }
`;

const TimePicker = styled.div`
display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 25px;
    width: 100%;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: flex-end;
    text-align: center;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    padding-left:25px;
    margin-top:20px;
`


function OndSend() {
    const [datum, setDatum] = useState("");
  const [locatie, setLocatie] = useState("");
  const [type, setType] = useState("");
  const [tijd, setTijd] = useState("");

  const addNewReservation = (event) => {
    event.preventDefault();
             
  

    db.collection('reserveringen').doc(auth.uid).set({
        datum: datum,
        locatie: locatie,
        type: type,
        tijd: tijd
    })
    // console.log(uid);
    history.push("/OndDashboard");
  };

  const history = useHistory();
    const classes = useStyles();
  return (
    <div>
      <Send__delivery>
        <Row>
          <HeaderContainer>
            <Col md={4}>
              <ThisCol>
                <ArrowBackIcon style={{ fill: "#fff" }} />
                <h2 style={{ color: "white" }}>Terug</h2>
              </ThisCol>
            </Col>
            <Row>
              <ThisRow>
                <h1>Een zending aanmaken</h1>
              </ThisRow>
            </Row>
            <Row>
                <ThatRow>
                    <h3>
                        Een overzicht van alle bezorgingen.
                    </h3>
                </ThatRow>
            </Row>
          </HeaderContainer>
          <MakeSendOrder>
            <row>
                <h1>Zending reserveren</h1>
            </row>
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
                <h4>Moment</h4>
                </Col>

                <Col>
                {/* <InputLabel id="label">Age</InputLabel> */}
                    <Select labelId="label" id="select" value="20">
                    <MenuItem value={tijd} onChange={(e) => setTijd(e.target.value)}><b>Ochtend / </b> 6:30 - 8:00</MenuItem>
                    <MenuItem value={tijd} onChange={(e) => setTijd(e.target.value)}><b>Middag / </b> 11:30 - 1:30</MenuItem>
                    <MenuItem value={tijd} onChange={(e) => setTijd(e.target.value)}><b>Eind middag / </b> 3:30 - 5:00</MenuItem>
                    <MenuItem value={tijd} onChange={(e) => setTijd(e.target.value)}><b>Avond / 6:00 - 7:30</b> </MenuItem>
                    <MenuItem disabled value="20">Selecteer een tijd</MenuItem>
                </Select>
                </Col>
            </Row>

            <Row>
                <Col>
                <h4>Type cargobike</h4>
                </Col>

                <Col>
                {/* <InputLabel id="label">Age</InputLabel> */}
                    <Select labelId="label" id="select" value="20">
                    <MenuItem value={type} onChange={(e) => setType(e.target.value)}><b>Cargobike standard</b></MenuItem>
                    <MenuItem value={type} onChange={(e) => setType(e.target.value)}><b>Cargobike Deluxe</b></MenuItem>
                    <MenuItem disabled value="20">Selecteer een tijd</MenuItem>
                </Select>
                </Col>
            </Row>
            </TimePicker>
            <ButtonContainer>

                <Button onClick={addNewReservation}>
                            Deze zending reserveren
                </Button>
            </ButtonContainer>
          </MakeSendOrder>
        </Row>
      </Send__delivery>
    </div>
  );
}

export default OndSend;
