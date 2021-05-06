import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import BillTable from "../Table/BillTable";
import BillAddForm from "../Form/BillAddForm";
import Spinner from "../Spinner/Spinner";
import { viewBills, CreatBill, UpdateBill} from "../Utils/AxiosBillFunction";
import { CustomErrorMessage } from "../Utils/CustomToastMessage";
import { UPDATE_ALL_BILLS, UPDATE_NUMBER_BILLS } from "../../reducers/types";
import "./Bill.scss";

const Bill = () => {
    const { state, dispatch } = useContext(Context);
    const [isLoading, setLoading] = useState(false);
    const [viewData, setViewData] = useState(true);
    const [addData, setAddData] = useState(false);
    const [updateData, setUpdateData] = useState(false);
    const Fields = [ "bill_id", "balance", "bill_client_id", "bill_staff_id" ];

    useEffect(() => {
        if (!state.allBills.length){
            setLoading(true);
            viewBills().then( res => {
                dispatch({ type: UPDATE_ALL_BILLS, payload: res.data.data});
                dispatch({ type: UPDATE_NUMBER_BILLS, payload: res.data.count});
                setLoading(false);
            }).catch( err => {
                CustomErrorMessage({ message: err.message});
                setLoading(false);
            })
        }
        console.log(state.allBills)
    }, [])

    const switchAddForm = () => {
        setViewData(false);
        setUpdateData(false);
        setAddData(true);
    }

    const switchUpdateForm = () => {
        setViewData(false);
        setAddData(false);
        setUpdateData(true);
    }

    const switchTable = () => {
        setAddData(false);
        setUpdateData(false);
        setViewData(true);
    }

    const handleUpdateList = () => {
        setLoading(true);
        viewBills().then( res => {
            dispatch({ type: UPDATE_ALL_BILLS, payload: res.data.data});
            dispatch({ type: UPDATE_NUMBER_BILLS, payload: res.data.count});
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
                        <div className="side-bar__item" onClick={switchTable}>
                            <i class="fas fa-table"></i>
                            <span className="side-bar__list">View All Bill</span>
                        </div>
                        <div className="side-bar__item" onClick={switchAddForm}>
                            <i class="fas fa-plus"></i>
                            <span className="side-bar__list">Create a bill</span>
                        </div>
                        <div className="side-bar__item" onClick={switchUpdateForm}>
                            <i class="fas fa-edit"></i>
                            <span className="side-bar__list">Update a bill</span>
                        </div>
                        <div className="side-bar__item" onClick={handleUpdateList}>
                            <i class="fas fa-retweet"></i>
                            <span className="side-bar__list">Update a bill</span>
                        </div>
                    </SideBar>
                    <div className="page-infor">
                        {viewData && <BillTable
                            fields={Fields}
                            data={state.allBills} 
                            count={state.numberAllBill}
                        />}

                        { addData && <BillAddForm title="CREATE BILL" submitForm={CreatBill}/>}

                        { updateData && <BillAddForm title="UPDATE BILL" submitForm={UpdateBill} />}
                    </div>
                </div>
            }
            </div>    
        </div>
    )
}

export default Bill;