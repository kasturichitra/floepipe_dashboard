
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const JsonResponseCard = ({ Details }) => {
  // Function to truncate long text values (limits to 20 words)
  const truncateJson = (data, wordLimit = 60) => {
    if (typeof data === "object" && data !== null) {
      return Array.isArray(data)
        ? data.map((item) => truncateJson(item, wordLimit)) // Handle arrays
        : Object.fromEntries(
            Object.entries(data).map(([key, value]) => {
              if (typeof value === "string") {
                let words = value.split("");
                return [
                  key,
                  words.length > wordLimit ? words.slice(0, wordLimit).join("") + "..." : value,
                ];
              } else if (typeof value === "object") {
                return [key, truncateJson(value, wordLimit)]; // Recursively handle nested objects
              }
              return [key, value];
            })
          );
    }
    return data;
  };

  // Get truncated JSON for display
  const truncatedDetails = truncateJson(Details);

  return (
    <div className="json-card" style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
      <div className="json-content bg-dark overflow-auto rounded-2" style={{ maxWidth: "100%" }}>
        <div>
          <button className="btn btn-secondary btn-sm m-2">Output :</button>
        </div>
        <div className="d-flex justify-content-between align-items-center text-light bg-danger px-2">
          <div>Response</div>
          <button
            className="btn bi-copy"
            onClick={() => navigator.clipboard.writeText(JSON.stringify(Details, null, 2))}
          ></button>
        </div>
        <pre className="json-pre text-start">
          <SyntaxHighlighter language="json" style={atomOneDark} className="json-highlighter" wrapLongLines>
            {JSON.stringify(truncatedDetails, null, 2)}
          </SyntaxHighlighter>
        </pre>
      </div>
    </div>
  );
};

export default JsonResponseCard;
