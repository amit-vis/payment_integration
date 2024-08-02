import axios from "axios";
import { createContext, useContext } from "react";

const APIContext = createContext();

export const useApi = ()=>{
    const value = useContext(APIContext);
    return value
}

export const APIProvider = ({children})=>{
    const getAPI = async ()=>{
        const response = await axios.post("https://api.sandbox.paypal.com/v1/oauth2/token",{
            grant_type: "client_credentials"
        },{
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            auth:{
                username: "AUjDp9X5px67pa_ItLpdQmrj2lIj0AYUKB5K0eH8rb1mpgQuTByW-BUFnL3OebMFCQywPdeZy7amP96S",
                password: "EO-IRp2e7JU4-tCkwG4Kec_6-Nzo-28ZcKTpafo7nhZrUDKWC6WiefAilqcr-7GFhB-O9jPI3lagr3PP"
            }
        })
        localStorage.setItem("accessToken", response.data.access_token);
    }

    const createPayment = async (paymenetdata)=>{
        try {
            const token = localStorage.getItem("accessToken");
            const response = await axios.post("https://api.sandbox.paypal.com/v1/payments/payment", paymenetdata,{
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response.data
        } catch (error) {
            alert(error.message)
        }
    }

    const executePayment = async (paymentId, payerId)=>{
        try {
            const token = localStorage.getItem("accessToken");
            const response = await axios.post(`https://api.sandbox.paypal.com/v1/payments/payment/${paymentId}/execute`,{
                payer_id: payerId
            },{
                headers:{
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
            })
            return response.data

        } catch (error) {
            alert(error.message)
        }
    }
    return(
        <APIContext.Provider value={{getAPI,createPayment,executePayment}}>
            {children}
        </APIContext.Provider>
    )
}