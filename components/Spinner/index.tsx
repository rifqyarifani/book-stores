import React, { useState, CSSProperties } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#584cda",
};

const Spinner = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState('#ffffff')
  return (
    <div className="sweet-loading">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Spinner