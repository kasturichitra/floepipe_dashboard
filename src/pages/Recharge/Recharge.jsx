import { ClassNames } from "@emotion/react";
import KycReuseComponet from "../../components/common/KycInputOut";
import { RechargeOperators, RechargePlans,RechargeOffersPlans,RechargeURL,RechargeOldPlans } from "../../utils/KYCContext/kycContex";

export const RechargeOperatorsPage = () => {
    return (<KycReuseComponet data={RechargeOperators} /> );
};

export const RechargePlansPage = ()=>{
    return (
        <KycReuseComponet data={RechargePlans} />
    )
}
export const RechargeOffersPage = ()=>{
    return (
        <KycReuseComponet data={RechargeOffersPlans} />
    )
}
export const RechargeURLPage = ()=>{
    return (
        <KycReuseComponet data={RechargeURL} />
    )
}
export const RechargeOldPlansPage = ()=>{
    return (
        <KycReuseComponet data={RechargeOldPlans} />
    )
}
