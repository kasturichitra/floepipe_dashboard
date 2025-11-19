import { useDispatch } from "react-redux";
import { useCallback } from "react";
import Call_Api from "../../Handileapicall/call_api";
import { addWallet } from "../../redux/slice/wallet/walletSlice";

const useGetWallet = () => {
    const dispatch = useDispatch();
    const fetchWallet = useCallback(async () => {
        try {
            const token = JSON.parse(localStorage.getItem("token"));
            const response = await Call_Api(
                "/wallet/MerchantWallet",
                "GET",
                null,
                token
            );
            if (response.success) {
                dispatch(addWallet(response?.response?.wallet));
            } else {
                console.error(response);
            }
        } catch (err) {
            console.error(err);
        }
    }, [dispatch]);
    return fetchWallet;
};

export default useGetWallet;
