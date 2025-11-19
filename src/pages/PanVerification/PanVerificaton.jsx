import KycReuseComponet from "../../components/common/KycInputOut";
import { panVerify } from "../../utils/KYCContext/kycContex";


const PanVerification = () => {

    return (
        <KycReuseComponet data={panVerify}/>
    );
};

export default PanVerification;