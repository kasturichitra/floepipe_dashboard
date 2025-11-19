import KycReuseComponet from "../../components/common/KycInputOut";
import { panDOBVerify } from "../../utils/KYCContext/kycContex";

const PanDobVerification = () => {

    return (
        <KycReuseComponet data={panDOBVerify}/>
    );
};

export default PanDobVerification;