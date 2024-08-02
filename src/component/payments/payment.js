import { useEffect } from "react"
import { useApi } from "../../backend/context/APIContext"

export const Payments = ()=>{
    const {getAPI,createPayment} = useApi();
    useEffect(()=>{
        const initializePayment  = async ()=>{
            try {
                await getAPI();
                const paymentData = {
                    intent: "sale",
                    payer: {
                        payment_method: "paypal"
                    },
                    transactions: [{
                        amount: {
                            total: "10.00",
                            currency: "USD"
                        },
                        description: "Payment description"
                    }],
                    redirect_urls: {
                        return_url: "http://localhost:3000/success",
                        cancel_url: "http://localhost:3000/cancel"
                    }
                };
                const payment = await createPayment(paymentData);
                const approvalUrl = payment.links.find(link=> link.rel === "approval_url").href;
                window.location.href = approvalUrl;
            } catch (error) {
                console.error("Payment initialization error:", error);
            }
        }
        initializePayment()
    },[getAPI, createPayment])
    return(
        <>
        <h1>Processing Payment...</h1>
        </>
    )
}