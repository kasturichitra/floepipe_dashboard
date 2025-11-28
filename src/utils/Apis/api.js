import axios from "axios";


const apiClient = axios.create({
  baseURL: process.env.REACT_APP_DASHBOARD_URL,
//   withCredentials: true,
//   timeout: 120000,
});

apiClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


// Api Routes function
const ApiVerification = (URLS,data)=>apiClient.post(URLS,data);

const HandleGetOtp = (data)=>apiClient.post('mobileNumber/mobileOtp',data);
const HandleVerifyOtp = (data)=>apiClient.post('mobileNumber/mobileotpVerify',data);
const HandleCreateLiveKeys = (data)=>apiClient.post("livekey/generateLiveCredentials",data);
const HandleCreateTestKeys = (data)=>apiClient.post("testkey/generateTestCredentials",data);
const HandleFetchLiveKeys = (data)=>apiClient.get(`livekey/getLiveKeys/${data?.MerchatID}`);
const HandleFetchTestKeys = (data)=>apiClient.get(`testkey/getKeys/${data?.MerchatID}`);
const HandleFetchIP = (data)=>apiClient.get(`IP/Getipwhitelist/${data?.MerchatID}`);
const HandleCreateIP = (data)=>apiClient.post(`IP/WhiteListIP`,data);

export {
    HandleGetOtp,
    HandleVerifyOtp,
    ApiVerification,
    HandleCreateLiveKeys,
    HandleCreateTestKeys,
    HandleFetchLiveKeys,
    HandleFetchTestKeys,
    HandleCreateIP,
    HandleFetchIP,
}










