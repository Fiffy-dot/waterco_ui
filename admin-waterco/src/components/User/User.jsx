import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Spinner from "../Spinner/Spinner";
import { Form, Button } from "react-bootstrap";
import { GetAllUser, 
    DeleteUser, 
    UpdateUser } from "../Utils/AxiosFunctions";
import { CustomErrorMessage, CustomSuccessMessage } from "../Utils/CustomToastMessage";
import { UPDATE_ALL_USER  } from "../../reducers/types";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from "../Table/UserTable";

const User = () => {
    const { state, dispatch } = useContext(Context);
    const [isLoading, setLoading] = useState(false);
    const [pasword, setPassword] = useState("");
    const [userId, setUserId] = useState("");
    const Fields = [ "ID", "FIRST NAME", "LAST NAME", "EMAIL", "CITY", "COUNTRY"];

    const handleFormDelete = (e) => {
        e.preventDefault();
        console.log("user is", userId)
        DeleteUser(userId).then( res => {
            if (res.status === 200){
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

    const handleUpdateForm = () => {
        const data = {
            user_password : pasword
        }

        UpdateUser(data).then( res => {
            if (res.status === 200){
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
        if (!state.allUsers.length){
            setLoading(true);
            GetAllUser().then( res => {
                dispatch({ type: UPDATE_ALL_USER, payload: res.data.data});
                setLoading(false);
            }).catch( err => {
                CustomErrorMessage({ message: err.message});
                setLoading(false);
            })
        }
    }, [])

    const handleUpdateList = () => {
        setLoading(true);
        GetAllUser().then( res => {
            dispatch({ type: UPDATE_ALL_USER, payload: res.data.data});
            setLoading(false);
        }).catch( err => {
            CustomErrorMessage({ message: err.message});
            setLoading(false);
        })
    }

    const handleIdChange = (e) => {
        setUserId(e.target.value);
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
                            <span className="side-bar__list"><a href="#top">All User</a></span>
                        </div>
                        <div className="side-bar__item">
                            <i class="fas fa-table"></i>
                            <span className="side-bar__list"><a href="#update">Update password</a></span>
                        </div>
                        <div className="side-bar__item" href="create">
                            <i class="fas fa-table"></i>
                            <span className="side-bar__list"><a href="#delete">Delete user</a></span>
                        </div>
                        <div className="side-bar__item" onClick={handleUpdateList}>
                            <i className="fas fa-retweet"></i>
                            <span className="side-bar__list">UPDATE LIST Data</span>
                        </div>
                    </SideBar>
                    <div className="page-infor">
                        <h2 id="top" className="mb-5 mt-5 text-center">VIEW ALL USER</h2>
                        <UserTable
                            fields={Fields}
                            data={state.allUsers} 
                            count={state.allUsers.length}
                        />


                        <Form className="form" onSubmit={(e) => handleFormDelete(e)}>
                        <h2 className="mb-5 text-center">REMOVE USER</h2>
                        <Form.Row>
                            <Form.Label>USER ID</Form.Label>
                            <Form.Control
                            as="select"
                            className="mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                            onChange={(e) => handleIdChange(e)}
                          >
                            {state.allUsers.map((user, idx) => {
                                return (
                                    <option value={user.email_address} key={idx}>{`${user.first_name} ${user.last_name}`}</option>
                                )
                            })}
                            </Form.Control>
                            <Button type="submit">DELETE</Button>
                            </Form.Row>
                        </Form>



                    <Form id="update" className="form" onSubmit={(e) => e.preventDefault()}>
                        <h2 className="mb-5 text-center">UPDATE PASSWORD</h2>
                        <Form.Row onSubmit={(e) => e.preventDefault()}>
                            <Form.Label>
                                Password
                            </Form.Label>    
                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
                            <Button onClick={handleUpdateForm}>UPDATE</Button>     
                        </Form.Row>
                    </Form>

                    <div className="gotop-div">
                    <Button className="gotop"><a href="#top">GO TO TOP <i class="fas fa-arrow-up"></i></a></Button>
                    </div>
                </div>
            </div>}
        </div>
    </div>
)}

export default User;