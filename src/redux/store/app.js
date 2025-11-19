import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../slice/User/userSlice'
import userTokenSlice from '../slice/token/tokenSlice'
import WalletSlice from '../slice/wallet/walletSlice'

export const store = configureStore({
    reducer: {
        user: UserSlice,
        userToken: userTokenSlice,
        wallet: WalletSlice
    }
});
