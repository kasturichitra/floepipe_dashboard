import { useEffect, useState } from "react";
import { ApirequestHandler } from "../../utils/Apis/apiRequestHandler";
import { HandleCreateIP, HandleFetchIP } from "../../utils/Apis/api";
import Loader from "../common/Loader";

const WhiteListIP = () => {
    const [whitelistIPs, setWhitelistIPs] = useState([]);
    const [ipAddress, setIpAddress] = useState("");
    const [comments, setComments] = useState("");
    const [apierrorMessage, setApiErrormessage] = useState("");
    const [loading, setLoading] = useState(false);

    const MerchatID = "MERCHANT39309978";

    const ipRegex = /^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/;

    const CreateIP = async () => {
        if (!ipRegex.test(ipAddress)) {
            setApiErrormessage("Please enter a valid IP address");
            return;
        }

        setApiErrormessage("");
        setLoading(true);
        const detailsTosend = {
                MerchatID: MerchatID,
                ip_address: ipAddress,
                comments: comments,
            }
            console.log('data to send ', detailsTosend)
        await ApirequestHandler(
            async () => await HandleCreateIP(detailsTosend),
            setLoading,
            (res) => {
                const { WhiteListData } = res;
                console.log(res);
                setWhitelistIPs(WhiteListData);
                setIpAddress("");
                setComments("");
                setLoading(false);
            },
            (errMessage) => {
                console.log("Error:", errMessage);
                setApiErrormessage(errMessage);
                setLoading(false);
            }
        );
    };

    // {
    //     Active: true,
    //     ipAddress: '192.168.0.220',
    //     date: '2025-02-07T07:18:23.666Z',
    //     _id: '67a5b3bf5a1234b94ab8d9c3'
    //   },

    const FetchIPs = async () => {
        setApiErrormessage("");
        setLoading(true);

        await ApirequestHandler(
            async () => HandleFetchIP({ MerchatID: MerchatID }),
            setLoading,
            (res) => {
                const { whitelistIP } = res;
                console.log(res)
                setWhitelistIPs(whitelistIP || []);
                setLoading(false);
            },
            (errMessage) => {
                console.log("Error:", errMessage);
                setApiErrormessage(errMessage);
                setLoading(false);
            }
        );
    };

    useEffect(() => {
        FetchIPs();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-6">

            <div className="mb-4 rounded-lg bg-white px-6 py-3 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">Whitelist IPs</h2>
            </div>


            <div className="rounded-xl border-2 border-dashed border-purple-400 bg-purple-50 p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Enter IP Address"
                        value={ipAddress}
                        onChange={(e) => setIpAddress(e.target.value)}
                        className="w-full rounded-md border px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                    />

                    <input
                        type="text"
                        placeholder="Comments (optional)"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        className="w-full rounded-md border px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                    />

                    {loading ? (
                        <Loader />
                    ) : (
                        <button
                            onClick={CreateIP}
                            className="rounded-md bg-green-600 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-green-700"
                        >
                            Add IP
                        </button>
                    )}
                </div>

                <p className="mt-2 text-xs text-purple-600">
                    Note: You can add a maximum of 3 IPs.
                </p>

                {apierrorMessage && (
                    <p className="mt-2 text-sm text-red-600">{apierrorMessage}</p>
                )}
            </div>

            {/* Table */}
            <div className="mt-6 overflow-hidden rounded-xl bg-white shadow">
                <table className="w-full border-collapse text-sm">
                    <thead className="bg-purple-50 text-purple-700">
                        <tr>
                            <th className="px-4 py-3 text-left">Si. No</th>
                            <th className="px-4 py-3 text-left">IP Address</th>
                            <th className="px-4 py-3 text-left">ActiveStatus</th>
                        </tr>
                    </thead>

                    <tbody>
                        {whitelistIPs && whitelistIPs.length > 0 ? (
                            whitelistIPs.map((ip, ind) => (
                                <tr key={ind} className="border-t">
                                    <td className="px-4 py-4">{ind + 1}</td>
                                    <td className="px-4 py-4">{ip?.ipAddress}</td>
                                    <td className="px-4 py-4">
                                        <button
                                            className={`px-4 py-1.5 rounded text-xs font-semibold transition
      ${ip?.Active
                                                    ? "bg-green-100 text-green-700 border border-green-300 hover:bg-green-200"
                                                    : "bg-red-100 text-red-700 border border-red-300 hover:bg-red-200"
                                                }`}
                                        >
                                            {ip?.Active ? "Active" : "DeActive"}
                                        </button>
                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="py-6 text-center text-gray-500">
                                    No Whitelisted IPs found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WhiteListIP;
