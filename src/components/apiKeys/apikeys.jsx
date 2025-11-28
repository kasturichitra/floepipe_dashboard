import { useEffect, useState } from "react";
import { ApirequestHandler } from "../../utils/Apis/apiRequestHandler";
import { HandleCreateLiveKeys, HandleCreateTestKeys, HandleFetchLiveKeys,HandleFetchTestKeys } from "../../utils/Apis/api";
import Loader from "../common/Loader";

const ApiKeys = () => {
    const [activeTab, setActiveTab] = useState("Live");
    const [LiveKeys, setLiveKeys] = useState([]);
    const [TestKeys, setTestKeys] = useState([]);
    const [apierrorMessage, setApiErrormessage] = useState('');
    const [loading, setLoading] = useState(false)
    const MerchatID = 'MERCHANT39309978';


    const CreateKeys = async () => {
        setApiErrormessage('');
        setLoading(true)
        const ApiURL = activeTab === 'Live' ?
            HandleCreateLiveKeys({ MerchatID: MerchatID })
            : HandleCreateTestKeys({ MerchatID: MerchatID })
        await ApirequestHandler(
            async () => await ApiURL,
            setLoading,
            (res) => {
                const { response } = res;
                console.log(res)
                activeTab === 'Live' ? setLiveKeys([...LiveKeys, response]) : setTestKeys([...TestKeys, response])
                setApiErrormessage('');
                setLoading(false)
            },
            (errMessage) => {
                console.log('Error:', errMessage);
                setApiErrormessage(errMessage);
                setLoading(false)
            }
        )
    }

    const FetchKeys = async () => {
        setApiErrormessage('');
        setLoading(true)
        const ApiURL = activeTab === 'Live' ?
            HandleFetchLiveKeys({ MerchatID: MerchatID })
            : HandleFetchTestKeys({ MerchatID: MerchatID })
        await ApirequestHandler(
            async () => ApiURL,
            setLoading,
            (res) => {
                const { response } = res;
                console.log(res);
                activeTab === 'Live' ? setLiveKeys(response) : setTestKeys(response)
                setApiErrormessage('');
                setLoading(false)
            },
            (errMessage) => {
                console.log("Error:", errMessage);
                setApiErrormessage(errMessage);
                setLoading(false)
            }
        )
    }
    useEffect(() => {
        FetchKeys()
    }, [activeTab])

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mb-4 rounded-lg bg-white px-6 py-3 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">API Keys</h2>
            </div>

            <div className="mb-6 flex gap-2">
                <button
                    onClick={() => setActiveTab("Live")}
                    className={`rounded-md px-6 py-2 text-sm font-medium ${activeTab === "Live"
                        ? "bg-purple-600 text-white"
                        : "bg-white text-purple-600 border"
                        }`}
                >
                    Live API Keys
                </button>

                <button
                    onClick={() => setActiveTab("Test")}
                    className={`rounded-md px-6 py-2 text-sm font-medium ${activeTab === "Test"
                        ? "bg-purple-600 text-white"
                        : "bg-white text-purple-600 border"
                        }`}
                >
                    Test API Keys
                </button>
            </div>
            <div className="rounded-xl border-2 border-dashed border-purple-400 bg-purple-50 p-6 text-center">
                {loading ? <Loader /> :

                    <button className="rounded-md bg-green-600 px-6 py-2 ms-1 text-sm font-semibold text-white shadow hover:bg-purple-700"
                        onClick={() => CreateKeys()}
                    >
                        Add {activeTab} New
                    </button>
                }
                <p className="mt-2 text-xs text-purple-600">
                    Note: You can add a maximum of 3 IPs, 3 left.
                </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl bg-white shadow">
                <table className="w-full border-collapse text-sm">
                    <thead className="bg-purple-50 text-purple-700">
                        <tr>
                            <th className="px-4 py-3 text-left">Si.no</th>
                            <th className="px-4 py-3 text-left">MerchantId</th>
                            <th className="px-4 py-3 text-left">ClientId</th>
                            <th className="px-4 py-3 text-left">SecretKey</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            activeTab === 'Live' && LiveKeys && (LiveKeys.length > 0) && LiveKeys.map((keys, ind) => (
                                <tr>
                                    <td className="px-4 py-6 text-left">
                                        {ind+1}
                                    </td>
                                    <td className="px-4 py-6 text-left">
                                        {keys?.MerchantId}
                                    </td>
                                    <td className="px-4 py-6 text-left">
                                        {keys?.client_id}
                                    </td>
                                    <td className="px-4 py-6 text-left">
                                        {keys?.secret_key}
                                    </td>
                                </tr>
                            ))
                        }
                        {
                            activeTab === 'Test' && TestKeys && (TestKeys.length > 0) && TestKeys.map((keys, ind) => (
                                <tr>
                                    <td className="px-4 py-6 text-left">
                                        {ind+1}
                                    </td>
                                    <td className="px-4 py-6 text-left">
                                        {keys?.MerchantId}
                                    </td>
                                    <td className="px-4 py-6 text-left">
                                        {keys?.client_id}
                                    </td>
                                    <td className="px-4 py-6 text-left">
                                        {keys?.secret_key}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ApiKeys