import axios from "axios";
import EXResponse from "../../components/common/response";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";

const KycReuseComponet = ({ data }) => {

    const [formData, setFormData] = useState({});
    const [apiResponse, setApiResponse] = useState({})
    const HandleChangeInput = (e) => {
        const formName = e.target.name;
        const formValue = e.target.value;
        setFormData({ ...formData, [formName]: formValue });
    }
    const HandleVerificaton = async () => {
        console.log('Handle Verificaton')
        try {
            const responseData = await axios.post(`${data?.apiUrl?.URLS}`, formData)
            console.log('Handle verification data ===>', responseData);
            const finaldata = responseData?.data;
            console.log('handle Final Response ===>', finaldata)
            setApiResponse(finaldata);
        } catch (error) {
            console.log('Handle Verification ==>', error);
        }
    }

    return (
        <div className="mainDashBaord font-sans h-screen overflow-auto w-screen">
            <div className="Container grid grid-cols-1 lg:grid-cols-2 gap-1 p-3">

                {/* LEFT INPUT SECTION */}
                <div className="border border-gray-300 rounded-xl bg-white shadow p-4">
                    <div className="text-3xl font-bold text-gray-800 tracking-wide">
                        {data?.title?.header} Verification
                    </div>
                    <p className="text-gray-600 text-sm mt-1">
                        {data?.title?.headerTitle}
                    </p>

                    <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow p-6">
                        {data?.inputParams?.map((input, index) => (
                            <div key={index} className="mb-4">
                                <label className="block text-sm font-semibold text-purple-900 mb-2">
                                    {input.replace(/([A-Z])/g, ' $1').toUpperCase()} :
                                </label>

                                <input
                                    type="text"
                                    placeholder={`Enter ${input}`}
                                    name={`${input}`}
                                    className="
                                        w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg
                                        shadow-sm focus:ring-2 focus:ring-purple-600 focus:border-purple-600
                                    "
                                    onChange={(e) => HandleChangeInput(e)}
                                />
                            </div>
                        ))}
                        <button
                            className=" mt-6 w-full bg-purple-700 text-white py-2.5 rounded-lg
    font-semibold tracking-wide shadow transition
    hover:shadow-[0_0_15px_rgba(139,92,246,0.7)]
    active:shadow-inner active:bg-purple-900"
                            onClick={() => HandleVerificaton()}
                        >
                            {data?.title?.submitButton}
                        </button>
                    </div>
                </div>

                {/* RIGHT OUTPUT SECTION */}
                <div className="outPutContainer h-screen overflow-auto">
                    <div className="p-4 border border-gray-300 rounded-xl bg-white shadow">
                        <div className="bg-[#0d1117] text-white p-5 rounded-xl">
                            <div className="bg-white text-gray-900 mb-4 p-3 rounded-lg shadow border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <span className="bg-orange-500 text-white px-3 py-2 rounded font-semibold text-sm">
                                        POST:
                                    </span>
                                    <select
                                        className="
                                            w-full border border-gray-300 rounded-md px-3 py-2 text-sm
                                            focus:ring-2 focus:ring-orange-400 focus:border-orange-400
                                        "
                                    >
                                        <option>{data?.apiUrl?.liveUrl}</option>
                                        <option>{data?.apiUrl?.testUrl}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Curl mt-6">
                                <div className="text-lg font-semibold mb-2">Example Request</div>

                                <div
                                    className="
                                        bg-[#0d1117] text-white p-4 rounded-lg border border-gray-700
                                        font-mono overflow-x-auto max-h-[400px] relative
                                    "
                                >
                                    <div className="bg-gray-600 text-white px-2 py-1 rounded text-sm inline-block font-bold">
                                        Curl
                                    </div>

                                    <pre className="mt-2 whitespace-pre-wrap text-sm">
                                        <code className="language-bash">
                                            {data?.exampleCurl || EXResponse.AadhaarNumberCurl}
                                        </code>
                                    </pre>

                                    <button
                                        className="
                                            absolute top-3 right-3 text-xs px-2 py-1 border border-gray-400
                                            rounded hover:bg-white hover:text-black transition
                                        "
                                        onClick={() =>
                                            navigator.clipboard.writeText(
                                                data?.exampleCurl || EXResponse.AadhaarNumberCurl
                                            )
                                        }
                                    >
                                        📋 Copy
                                    </button>
                                </div>
                            </div>
                            <div className="ExResponse mt-8 ">
                                <div className="text-lg font-semibold mb-2">Example Response</div>

                                <div className="flex justify-between items-center mb-2">
                                    <button className="bg-gray-700 text-white px-2 py-1 rounded">
                                        Response
                                    </button>
                                    <button className="bg-gray-700 text-green-400 px-6 py-1 rounded">
                                        200
                                    </button>
                                    <button className="bg-gray-700 text-orange-300 px-6 py-1 rounded">
                                        400
                                    </button>
                                    <button className="bg-gray-700 text-red-400 px-6 py-1 rounded">
                                        503
                                    </button>
                                    <button className="bg-gray-700 text-red-400 px-6 py-1 rounded">
                                        504
                                    </button>

                                    <button
                                        className="
                                            border border-gray-400 text-gray-300 px-2 py-1 rounded text-sm
                                            hover:bg-gray-300 hover:text-black transition
                                        "
                                        onClick={() =>
                                            navigator.clipboard.writeText(
                                                JSON.stringify(
                                                    data?.exampleResponse || EXResponse.AadhaarNumberResponse,
                                                    null,
                                                    2
                                                )
                                            )
                                        }
                                    >
                                        📋 Copy
                                    </button>
                                </div>

                                <SyntaxHighlighter
                                    language="json"
                                    style={atomOneDark}
                                    className="json-highlighter rounded-lg overflow-hidden"
                                >
                                    {
                                        apiResponse ? JSON.stringify(apiResponse, null, 2)
                                            : JSON.stringify(
                                                data?.exampleResponse || EXResponse.AadhaarNumberResponse,
                                                null,
                                                2
                                            )
                                    }
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KycReuseComponet;

