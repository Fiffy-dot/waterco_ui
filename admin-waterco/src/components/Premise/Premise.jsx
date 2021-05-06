import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import PremiseTable from "../Table/PremiseTable";
import Spinner from "../Spinner/Spinner"
import { Form, Button, Col } from "react-bootstrap";
import { GetAllPremise, 
    UpdatePremise, 
    CreatePremise } from "../Utils/AxiosPremiseFunction";
import { CustomErrorMessage, CustomSuccessMessage } from "../Utils/CustomToastMessage";
import { UPDATE_ALL_PREMISE  } from "../../reducers/types";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Premise.scss';

const Premises = () => {
    console.log("I ma here")
    const { state, dispatch } = useContext(Context);
    const [isLoading, setLoading] = useState(false);
    const [clinetId, setClientId] = useState("");
    const [sectorId, setSectorId] = useState("");
    const [routeId, setRouteId] = useState("");
    const [zoneId, setZoneId] = useState("");
    const [classification, setClassification] = useState("");
    const [premiseStatus, setPremiseStatus] = useState("");
    const Fields = [ "ID", "Client ID", "Sector ID", "Route ID", "Zone ID",
    "Classfication", "Status"];



    const handleSubmitForm = () => {
        const data = {
            premise_client_id: clinetId,
            premise_sector_id: sectorId,
            premise_route_id: routeId,
            premise_zone_id: zoneId,
            classfication: classification,
            premise_status: premiseStatus
        }

        CreatePremise(data).then( res => {
            if (res.status === 200){
                setClientId("")
                setSectorId("")
                setZoneId("")
                setRouteId("")
                setPremiseStatus("")
                setClassification("")
                CustomSuccessMessage({ message : res.data.message })
            } 
        }).catch(err => {
            CustomErrorMessage({ message: err.message});
        })

    }

    const handleUpdateForm = () => {
        const data = {
            premise_status: premiseStatus
        }

        UpdatePremise(clinetId, data).then( res => {
            if (res.status === 200){
                setClientId("")
                setSectorId("")
                setZoneId("")
                setRouteId("")
                setPremiseStatus("")
                setClassification("")
                CustomSuccessMessage({ message : res.data.message })
            } 
        }).catch(err => {
            CustomErrorMessage({ message: err.message});
        })

    }

    useEffect(() => {
        console.log("I am called")
        if (!state.allPremises.length){
            setLoading(true);
            GetAllPremise().then( res => {
                dispatch({ type: UPDATE_ALL_PREMISE, payload: res.data.data});
                setLoading(false);
            }).catch( err => {
                CustomErrorMessage({ message: err.message});
                setLoading(false);
            })
        }
    }, [])

    const handleUpdateList = () => {
        setLoading(true);
        GetAllPremise().then( res => {
            dispatch({ type: UPDATE_ALL_PREMISE, payload: res.data.data});
            setLoading(false);
        }).catch( err => {
            CustomErrorMessage({ message: err.message});
            setLoading(false);
        })
    }


    return(
        <div>
            <Header />
            <div>
            {
                isLoading ? 
                <Spinner /> 
                :
                <div className="content-page">
                    <SideBar>
                        <div className="side-bar__item">
                            <i class="fas fa-table"></i>
                            <span className="side-bar__list"><a href="#top">All premises</a></span>
                        </div>
                        <div className="side-bar__item">
                            <i class="fas fa-table"></i>
                            <span className="side-bar__list"><a href="#create">Create premise</a></span>
                        </div>
                        <div className="side-bar__item" href="update">
                        <i class="fas fa-table"></i>
                        <span className="side-bar__list"><a href="#update">Update premise</a></span>
                    </div>
                        <div className="side-bar__item" onClick={handleUpdateList}>
                            <i class="fas fa-retweet"></i>
                            <span className="side-bar__list">UPDATE LIST payment</span>
                        </div>
                    </SideBar>
                    <div className="page-infor">
                        <h2 id="top" className="mb-5 mt-5 text-center">VIEW ALL PREMESISE</h2>
                        <PremiseTable
                            fields={Fields}
                            data={state.allPremises} 
                            count={state.allPremises.length}
                        />

                        <Form id="create" className="form" onSubmit={(e) => e.preventDefault()}>
                            <h2 className="mb-5 text-center">CREATE PREMESISE</h2>
                            <Form.Row>                        
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Client ID</Form.Label>
                                <Form.Control type="text" placeholder="Client ID" onChange={(e) => setClientId(Number(e.target.value))}/>
                            </Form.Group>
                            </Form.Row>
                        
                            <Form.Group controlId="formGridAddress1">
                            <Form.Label>SECTOR ID</Form.Label>
                            <Form.Control placeholder="SECTOR ID" onChange={(e) => setSectorId(Number(e.target.value))}/>
                            </Form.Group>
                        
                            <Form.Group controlId="formGridAddress2">
                            <Form.Label>ROUTE ID</Form.Label>
                            <Form.Control placeholder="ROUTE ID" onChange={(e) => setRouteId(Number(e.target.value))}/>
                            </Form.Group>
                        
                            <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>ZONE ID</Form.Label>
                                <Form.Control placeholder="ZONE ID" onChange={(e) => setZoneId(Number(e.target.value))}/>
                            </Form.Group>
        
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>CLASSIFICATION</Form.Label>
                            <Form.Control placeholder="CLASSIFICATION" onChange={(e) => setClassification(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>STATUS</Form.Label>
                        <Form.Control placeholder="STATUS" onChange={(e) => setPremiseStatus(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                        
                        <Button className="button-submit" variant="primary" type="submit" onClick={handleSubmitForm}>
                            SUBMIT
                        </Button>
                    </Form>

                    <Form id="update" className="form" onSubmit={(e) => e.preventDefault()}>
                    <h2 className="mb-5 text-center">UPDATE PREMESISE</h2>
                    <Form.Row>                        
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>PREMISE ID</Form.Label>
                        <Form.Control type="text" placeholder="PREMISE ID" onChange={(e) => setClientId(Number(e.target.value))}/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>STATUS</Form.Label>
                        <Form.Control placeholder="STATUS" onChange={(e) => setPremiseStatus(e.target.value)}/>
                        </Form.Group>
                    </Form.Row>
                    <Button className="button-submit" variant="primary" type="submit" onClick={handleUpdateForm}>
                        SUBMIT
                    </Button>
                    </Form>
                    <div className="gotop-div">
                    <Button className="gotop"><a href="#top">Go Top <i class="fas fa-arrow-up"></i></a></Button>
                    </div>
                    </div>
                </div>
            }
            </div>
        </div>
    )
}

export default Premises;