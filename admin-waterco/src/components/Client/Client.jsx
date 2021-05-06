import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import ClientTable from "../Table/ClientTable";
import Spinner from "../Spinner/Spinner";
import { ViewAllMember } from "../Utils/AxiosClientRequest";
import { CustomErrorMessage } from "../Utils/CustomToastMessage";
import { UPDATE_ALL_MEMBER, UPPDATE_NUMBER_MEMBER } from "../../reducers/types";

const Client = () => {
    const { state, dispatch } = useContext(Context);
    const [isLoading, setLoading] = useState(false);
    const Fields = [ "ID", "First Name", "Last Name", "Email", 
    "balance", "Payment Plan", "Sector ID", "Zone ID"];

    useEffect(() => {
        if (!state.allMembers.length){
            setLoading(true);
            ViewAllMember().then( res => {
                dispatch({ type: UPDATE_ALL_MEMBER, payload: res.data.data});
                dispatch({ type: UPPDATE_NUMBER_MEMBER, payload: res.data.count});
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
        ViewAllMember().then( res => {
            dispatch({ type: UPDATE_ALL_MEMBER, payload: res.data.data});
            dispatch({ type: UPPDATE_NUMBER_MEMBER, payload: res.data.count});
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
                            <span className="side-bar__list">View All client</span>
                        </div>
                        <div className="side-bar__item" onClick={handleUpdateList}>
                            <i class="fas fa-retweet"></i>
                            <span className="side-bar__list">UPDATE client LIST</span>
                        </div>
                    </SideBar>
                    <div className="page-infor">
                        <ClientTable
                            fields={Fields}
                            data={state.allMembers} 
                            count={state.numberMembers}
                        />
                    </div>
                </div>
            }
            </div>    
        </div>
    )
}

export default Client;