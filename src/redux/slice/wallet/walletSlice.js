import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    Wallet: null
};

const WalletSlice = createSlice({
    name: 'Wallet',
    initialState,
    reducers: {
        addWallet: (state, action) => {
                state.Wallet = action.payload
            }
        }
    }
);

export const { addWallet } = WalletSlice.actions;

export default WalletSlice.reducer;
