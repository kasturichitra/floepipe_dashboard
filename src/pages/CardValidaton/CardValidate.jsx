import KycReuseComponet from "../../components/common/KycInputOut";
import { cardVerify } from "../../utils/KYCContext/kycContex";

const CardValidationPage = () => {

    return (
        <KycReuseComponet data={cardVerify}/>
    );
};

export default CardValidationPage;