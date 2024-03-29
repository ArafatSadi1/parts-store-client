import React from "react";
import { useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen">
      <CircleLoader color={"#057AFF"} loading={loading} size={50} />
    </div>
  );
};

export default Loading;
