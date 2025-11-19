import KycReuseComponet from "../../components/common/KycInputOut";
import { accountVerify } from "../../utils/KYCContext/kycContex";

const AccountVerify = () => {

    return (
        <KycReuseComponet data={accountVerify}/>
    );
};

export default AccountVerify;