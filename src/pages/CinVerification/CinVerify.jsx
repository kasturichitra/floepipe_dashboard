import KycReuseComponet from "../../components/common/KycInputOut";
import { CINVerify } from "../../utils/KYCContext/kycContex";

const CinVerification = () => {

    return (
        <KycReuseComponet data={CINVerify}/>
    );
};

export default CinVerification;