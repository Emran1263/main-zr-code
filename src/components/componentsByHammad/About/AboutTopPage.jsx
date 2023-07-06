import React, { useState } from "react";
import Spinner from "../../componentsByAhmad/Spinner";

export default function AboutTopPage() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="width-100">
      {loading && <Spinner/>}
      <div className="res-1440-40 AboutTopPageCnt">
        <img
          className="AboutTopPageCntImg"
          onLoad={() => {
            setLoading(false);
          }}
          src="/images/aboutBackground.png"
          alt=""
        />
      </div>
    </div>
  );
}
