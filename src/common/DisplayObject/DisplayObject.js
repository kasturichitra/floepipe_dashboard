const DisplayObject = ({ obj }) => {
  const renderObject = (obj) => {
    return Object.entries(obj).map(([key, value]) => (
      <div key={key} style={{ marginBottom: "8px",color:'white' }}>
        <strong style={{ color: "#000" }}>{key}:</strong>{" "}
        {value === null || value === "" ? (
          <span style={{ color: "#000" }}>N/A</span>
        ) : typeof value === "boolean" ? (
          <span style={{ color: value ? "green" : "red" }}>
            {value.toString()}
          </span>
        ) : Array.isArray(value) ? (
          <div style={{ marginLeft: "20px" }}>
            <ul>
              {value.map((item, index) => (
                <li key={index} style={{ wordBreak: "break-word", color: "#000" }}>
                  {typeof item === "object" && item !== null
                    ? renderObject(item)
                    : item.toString()}
                </li>
              ))}
            </ul>
          </div>
        ) : typeof value === "object" ? (
          <div style={{ marginLeft: "20px" }}>{renderObject(value)}</div>
        ) : (
          <span style={{ color: "#000", wordBreak: "break-word" }}>{value}</span>
        )}
      </div>
    ));
  };

  return (
    <div>
      {obj && typeof obj === "object" ? (
        renderObject(obj)
      ) : (
        <p style={{ color: "#000" }}>No data to display</p>
      )}
    </div>
  );
};

export default DisplayObject;
