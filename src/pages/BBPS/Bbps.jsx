import KycReuseComponet from "../../components/common/KycInputOut"
import { BBPSBillerInfo, BBPSBillFetch, BBPSBillPay, BBPSBillQuickPay, BBPSBillValidation, BBPSCategory } from "../../utils/KYCContext/kycContex"

export const BbpsCategoryPage = ()=>{
    return (
        <KycReuseComponet data={BBPSCategory}/>
    )
};

export const BbpsBillerInfoPage = ()=>{
    return(
        <KycReuseComponet data={BBPSBillerInfo} />
    )
};

export const BbpsBillFetch = ()=>{
    return (
        <KycReuseComponet data={BBPSBillFetch} />
    )
}
export const BbpsBillPay = ()=>{
    return (
        <KycReuseComponet data={BBPSBillPay} />
    )
}
export const BbpsBillVallidation = ()=>{
    return (
        <KycReuseComponet data={BBPSBillValidation} />
    )
}
export const BbpsBillQuickPay = ()=>{
    return (
        <KycReuseComponet data={BBPSBillQuickPay} />
    )
}