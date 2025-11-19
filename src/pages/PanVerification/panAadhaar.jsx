import KycReuseComponet from "../../components/common/KycInputOut";
import { panAadhaarVerify } from "../../utils/KYCContext/kycContex";


const PanAadhaar = () => {

    return (
        <KycReuseComponet data={panAadhaarVerify}/>
    );
};

export default PanAadhaar;