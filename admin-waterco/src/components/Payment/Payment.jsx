import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import PaymentTable from "../Table/PaymentTable";
import Spinner from "../Spinner/Spinner";
import Modal from "react-modal";
import { Form, Button } from "react-bootstrap";
import { ViewPayments, ViewPaymentByPremise } from "../Utils/AxiosPaymentFunction";
import { CustomErrorMessage } from "../Utils/CustomToastMessage";
import { UPDATE_PAYMENT_LIST, 
    UPDATE_PAYMENT_MEMBER, 
    UPDATE_PAYMENT_PREMISE,
    UPDATE_PAYMENT_PREMISE_NUMBER } from "../../reducers/types";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Payment.scss';

const Payment = () => {
    const { state, dispatch } = useContext(Context);
    const [isLoading, setLoading] = useState(false);
    const [viewData, setViewData] = useState(true);
    const [viewDataP, setDataP] = useState(false);
    const [id, setId] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const Fields = ["ID", "Client ID", "Premise ID", "Amount", "Date of Payment"];

    
    const customStyles = {
        content: {
        top: "50%",
        left: "50%",
        right: "0%",
        bottom: "auto",
        marginRight: "0%",
        width: "30%",
        padding: "5rem",
        transform: "translate(-50%, -50%)",
        },
    };

    
    const closeModal = () => {
        setIsOpen(false);
        setDataP(false);
        setId("");
        setViewData(true);
    };

    useEffect(() => {
        if (!state.allPayments.length){
            setLoading(true);
            ViewPayments().then( res => {
                dispatch({ type: UPDATE_PAYMENT_LIST, payload: res.data.data});
                dispatch({ type: UPDATE_PAYMENT_MEMBER, payload: res.data.count});
                setLoading(false);
            }).catch( err => {
                CustomErrorMessage({ message: err.message});
                setLoading(false);
            })
        }
        console.log(state.allBills)
    }, [])

    const handleUpdateList = () => {
        setLoading(true);
        ViewPayments().then( res => {
            dispatch({ type: UPDATE_PAYMENT_LIST, payload: res.data.data});
            dispatch({ type: UPDATE_PAYMENT_MEMBER, payload: res.data.count});
            setLoading(false);
        }).catch( err => {
            CustomErrorMessage({ message: err.message});
            setLoading(false);
        })
    }

    const handlePaymentByPremises = () => {
        setIsOpen(false);
        setLoading(true);
        ViewPaymentByPremise(id).then( res => {
            dispatch({ type: UPDATE_PAYMENT_PREMISE, payload: res.data.data});
            dispatch({ type: UPDATE_PAYMENT_PREMISE_NUMBER, payload: res.data.count});
            setLoading(false);
            setDataP(true);
        }).catch( err => {
            CustomErrorMessage({ message: err.message});
            setLoading(false);
            setViewData(true);
            
        })
    }

    const switchPage = () => {
        if (viewData){
            setViewData(false);
            setDataP(false);
            setIsOpen(true);
        } else {
            setDataP(false);
            setIsOpen(false);
            setViewData(true);
        }
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
                        <div className="side-bar__item" onClick={switchPage}>
                            <i class="fas fa-table"></i>
                            <span className="side-bar__list">All payment</span>
                        </div>
                        <div className="side-bar__item" onClick={switchPage}>
                        <i class="fas fa-table"></i>
                        <span className="side-bar__list">payment by premise</span>
                    </div>
                        <div className="side-bar__item" onClick={handleUpdateList}>
                            <i class="fas fa-retweet"></i>
                            <span className="side-bar__list">UPDATE LIST payment</span>
                        </div>
                    </SideBar>
                    <div className="page-infor text-center">
                        {viewData && <h2>ALL PAYMENT </h2> }
                        { !viewData && <h2>ALL PAYMENT PREMISE ID </h2> }
                        {viewData && <PaymentTable
                            fields={Fields}
                            data={state.allPayments} 
                            count={state.numberPayment}
                        />}
                        {viewDataP && <PaymentTable
                            fields={Fields}
                            data={state.allPaymentByPremises} 
                            count={state.numberAllPaymentByPremises}
                        />}
                    </div>
                </div>
            }
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <div className="model-close">
                <i className="fas fa-times fa-2x" onClick={closeModal}></i>
                </div>
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="form-model-title">PAYMENT BY PREMISES FORM</Form.Label>
                        <Form.Control className="form-model-input" type="text" placeholder="ID" onChange={(e) => setId(Number(e.target.value))}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handlePaymentByPremises}>
                        SEARCH
                    </Button>
                </Form>
            </Modal>
        </div>
    )
}

export default Payment;