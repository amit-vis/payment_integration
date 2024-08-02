import { useLocation } from "react-router-dom";
import { useApi } from "../../backend/context/APIContext"
import { useEffect } from "react";

export const SuccessPage = ()=>{
    const {executePayment} = useApi();
    const location = useLocation();
    useEffect(() => {
        const executePaymentHandler = async () => {
            const urlParams = new URLSearchParams(location.search);
            const paymentId = urlParams.get("paymentId");
            const payerId = urlParams.get("PayerID");

            if (paymentId && payerId) {
                try {
                    const payment = await executePayment(paymentId, payerId);
                    console.log("Payment successful:", payment);
                } catch (error) {
                    console.error("Payment execution error:", error);
                }
            }
        };

        executePaymentHandler();
    }, [location, executePayment]);
    return(
        <>
            <h1>Payment Successful</h1>
        </>
    )
}