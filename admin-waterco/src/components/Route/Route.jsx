import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import RouteTable from "../Table/RouteTable";
import PremiseTable from "../Table/PremiseTable";
import Spinner from "../Spinner/Spinner";
import { Form, Button, Col } from "react-bootstrap";
import { CreateRoute, 
    GetAllRoute, 
    UpdateRoute, 
    GetAllPremiseInRoute} from "../Utils/AxiosRouteFunctions";
import { CustomErrorMessage, CustomSuccessMessage } from "../Utils/CustomToastMessage";
import { UPDATE_ALL_ROUTE,  UPDATE_PREMISE_ROUTE } from "../../reducers/types";
import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = () => {
    const { state, dispatch } = useContext(Context);
    const [isLoading, setLoading] = useState(false);
    const [routeName, setRouteName] = useState("");
    const [zoneId, setZoneId] = useState("");
    const [routeStatus, setRouteStatus] = useState("");
    const [routeIdSearched, setRouteId] = useState("");
    const Fields = [ "ID", "NAME", "ZONE ID", "STATUS"];
    const FieldsPremises = [ "ID", "Client ID", "Sector ID", "Route ID", "Zone ID",
    "Classfication", "Status"];



    const handleSubmitForm = () => {
        const data = {
            route_name : routeName,
            route_zone_id : zoneId,
            route_status : routeStatus
        }

        CreateRoute(data).then( res => {
            if (res.status === 200){
                setRouteName("")
                setZoneId("")
                setRouteStatus("")
                CustomSuccessMessage({ message : res.data.message })
            } 
        }).catch(err => {
            CustomErrorMessage({ message: err.message});
        })

    }

    const handleUpdateForm = () => {
        const data = {
            route_status : routeStatus
        }

        UpdateRoute(zoneId, data).then( res => {
            if (res.status === 200){
                setRouteName("")
                setZoneId("")
                setRouteStatus("")
                if (res.data.success){
                    CustomSuccessMessage({ message : res.data.message })
                } else {
                    CustomErrorMessage({ message : res.data.message })
                }
            } 
        }).catch(err => {
            CustomErrorMessage({ message: err.message});
        })

    }

    useEffect(() => {
        if (!state.allRoutes.length){
            setLoading(true);
            GetAllRoute().then( res => {
                dispatch({ type: UPDATE_ALL_ROUTE, payload: res.data.data});
                setLoading(false);
            }).catch( err => {
                CustomErrorMessage({ message: err.message});
                setLoading(false);
            })
        }
    }, [])

    const handleUpdateList = () => {
        setLoading(true);
        GetAllRoute().then( res => {
            dispatch({ type: UPDATE_ALL_ROUTE, payload: res.data.data});
            setLoading(false);
        }).catch( err => {
            CustomErrorMessage({ message: err.message});
            setLoading(false);
        })
    }

    const handleSearch = () => {
        setLoading(true);
        GetAllPremiseInRoute(routeIdSearched).then(res => {
            if (res.status === 200){
                console.log(res.data.data)
                console.log(state.allPremiseInRoute);
                if (res.data.success){
                    dispatch({ type: UPDATE_PREMISE_ROUTE, payload: res.data.data })
                    CustomSuccessMessage({message: res.data.message})
                } else {
                    CustomErrorMessage({ message:  res.data.message});
                }
            }
            setLoading(false);
        }).catch(err => {
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
                            <span className="side-bar__list"><a href="#top">All Routes</a></span>
                        </div>
                        <div className="side-bar__item" href="#premise">
                            <i class="fas fa-table"></i>
                            <span className="side-bar__list"><a href="#create">Premise in Route</a></span>
                        </div>
                        <div className="side-bar__item" href="create">
                            <i class="fas fa-table"></i>
                            <span className="side-bar__list"><a href="#create">Create Route</a></span>
                        </div>
                        <div className="side-bar__item" href="update">
                        <i class="fas fa-table"></i>
                        <span className="side-bar__list"><a href="#update">Update Route</a></span>
                    </div>
                        <div className="side-bar__item" onClick={handleUpdateList}>
                            <i className="fas fa-retweet"></i>
                            <span className="side-bar__list">UPDATE LIST payment</span>
                        </div>
                    </SideBar>
                    <div className="page-infor">
                        <h2 id="top" className="mb-5 mt-5 text-center">VIEW ALL ROUTE</h2>
                        <RouteTable
                            fields={Fields}
                            data={state.allRoutes} 
                            count={state.allRoutes.length}
                        />
                        <h2 id="premise" className="mb-1 mt-1 text-center">VIEW ALL PREMESISE IN ROUTE {routeIdSearched} </h2>

                        <Form className="form mt-1" onSubmit={(e) => e.preventDefault()}>
                            <Form.Row>
                                <Form.Label>ROUTE ID</Form.Label>
                                <Form.Control type="text" placeholder="ROUTE ID" onChange={(e) => setRouteId(Number(e.target.value))}/>
                                <Button onClick={handleSearch}>SEARCH</Button>
                            </Form.Row>
                        </Form>

                        {console.log(state.allPremiseInRoute)}
                        {  
                            state.allPremiseInRoute && <PremiseTable
                            fields={FieldsPremises}
                            data={state.allPremiseInRoute} 
                            count={state.allPremiseInRoute.length}
                        />}

                        <Form id="create" className="form" onSubmit={(e) => e.preventDefault()}>
                            <h2 className="mb-5 text-center">CREATE ROUTE</h2>
                            <Form.Row>                        
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>ROUTE NAME</Form.Label>
                                <Form.Control type="text" placeholder="ROUTE NAME" onChange={(e) => setRouteName(e.target.value)}/>
                            </Form.Group>
                            </Form.Row>
            
                        
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>ZONE ID</Form.Label>
                                    <Form.Control placeholder="ZONE ID" onChange={(e) => setZoneId(Number(e.target.value))}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>STATUS</Form.Label>
                                    <Form.Control placeholder="STATUS" onChange={(e) => setRouteStatus(e.target.value)}/>
                                </Form.Group>
                            </Form.Row>
                            
                            <Button className="button-submit" variant="primary" type="submit" onClick={handleSubmitForm}>
                                SUBMIT
                            </Button>
                        </Form>

                    <Form id="update" className="form" onSubmit={(e) => e.preventDefault()}>
                    <h2 className="mb-5 text-center">UPDATE ROUTE</h2>
                    <Form.Row>                        
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>ROUTE ID</Form.Label>
                        <Form.Control type="text" placeholder="PREMISE ID" onChange={(e) => setZoneId(Number(e.target.value))}/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>STATUS</Form.Label>
                        <Form.Control placeholder="STATUS" onChange={(e) => setRouteStatus(e.target.value)}/>
                        </Form.Group>
                    </Form.Row>
                    <Button className="button-submit" variant="primary" type="submit" onClick={handleUpdateForm}>
                        UPDATE
                    </Button>
                    </Form>
                    <div className="gotop-div">
                    <Button className="gotop"><a href="#top">GO TO TOP <i class="fas fa-arrow-up"></i></a></Button>
                    </div>
                    </div>
                </div>
            }
            </div>
        </div>
    )
}

export default Routes;