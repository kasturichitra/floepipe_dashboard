import React, { useState, useEffect } from "react";
import Call_Api from "../../Handileapicall/call_api";
import { path } from "../../common/path/path";
import gettingTokenFromLocalStorage from "../../common/getTokenFromLocalStorage/GetToken";
import { toast } from "react-toastify";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import data from "../../json/Data";
import "../../styles/IpAccess.css";

const Whitelistapis = () => {
    const [Ip, setIp] = useState("");
    const [whitelistedIps, setWhitelistedIps] = useState([]);
    const [comment, setComment] = useState("");
    const merchantId = ""
    const user = useSelector((state) => state?.user?.user);
    console.log("user in ipaccess", user)
    useEffect(() => {
        fetchWhitelistedIps();
    }, []);

    const fetchWhitelistedIps = async () => {
        try {
            // const token = await gettingTokenFromLocalStorage();
            // if (!token) return toast.error("Authentication token missing");

            const response = await Call_Api(path.IPWHITELIST, "GET", {merchantId});

            if (response?.success) {
                setWhitelistedIps(response?.response?.whitelistIP || []);
            } else {
                toast.warn(response?.message || "Failed to fetch whitelisted IPs");
            }
        } catch (error) {
            toast.error(error?.message || "Something went wrong!");
        }
    };

    const handleWhitelistApis = async () => {
        console.log("entering into handlewhitelist")
        try {
            // const token = await gettingTokenFromLocalStorage();
            // console.log("token in ipwhitelist",token)
            // if (!token) return toast.error("Authentication token missing");

            const response = await Call_Api(
                path.IPWHITELIST,
                "POST",
                { whitelist: Ip, Comment: comment }
            );
            console.log("response from whiteluistip",response)
            if (response?.success) {
                setIp("");
                setComment("");
                fetchWhitelistedIps();
                toast.success(response?.message || "IP successfully whitelisted!");
            }
        } catch (error) {
            toast.error(error?.message || "Something went wrong!");
        }
    };

    const handleDeleteIp = async (ip) => {
        try {
            const token = await gettingTokenFromLocalStorage();
            if (!token) return toast.error("Authentication token missing");

            const response = await Call_Api(
                path.IPWHITELIST,
                "DELETE",
                { ipAddress: ip },
                token
            );

            if (response?.success) {
                fetchWhitelistedIps();
                toast.success("IP successfully removed!", { autoClose: true });
            } else {
                toast.warn(response?.message || "Failed to remove IP");
            }
        } catch (error) {
            toast.error(error?.message || "Something went wrong!");
        }
    };

    return (
        <div className="whitelist-wrapper">
            <div className="whitelist-container">
                <h4 className="whitelist-title">Whitelist IPs</h4>

                {/* Input Box */}
                <div className="input-section">
                    <input
                        type="text"
                        placeholder="Enter IP"
                        className="input-box"
                        value={Ip}
                        onChange={(e) => setIp(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Comments"
                        className="input-box"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />

                    <button className="add-btn" onClick={handleWhitelistApis}>
                        {data?.add}
                    </button>
                </div>

                {/* Dashed Purple Box */}
                <div className="dashed-box">
                    <p className="note-text">
                        Note: You can add a maximum of 10 IPs.
                    </p>
                </div>

                {/* TABLE */}
                <div className="table-container">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Time</th>
                                <th>IP Address</th>
                                <th>Status</th>
                                <th>Comments</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {whitelistedIps.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="no-data">
                                        No Whitelisted IPs found
                                    </td>
                                </tr>
                            )}

                            {whitelistedIps.map((ip, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{moment(ip?.date).format("YYYY-MM-DD HH:mm:ss")}</td>
                                    <td>{ip?.ipAddress}</td>

                                    <td>
                                        <span
                                            className={
                                                ip?.Active ? "status-active" : "status-inactive"
                                            }
                                        >
                                            {ip?.Active ? "Active" : "Inactive"}
                                        </span>
                                    </td>

                                    <td>{ip?.Comment}</td>

                                    <td>
                                        <button
                                            className="delete-btn"
                                            onClick={() => handleDeleteIp(ip?.ipAddress)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Whitelistapis;
