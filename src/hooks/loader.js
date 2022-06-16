import React from "react";
import useWindowDimensions from "../hooks/getDimensions"
import mainloader from "../Assets/img/loader.svg";

function Loader() {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className="" style={{marginTop: -90}}>
        <div
          className="position-fixed h-100 w-100"
          style={{
            zIndex: 1100,
            marginLeft: width > 992 ? 0 : 0,
            background: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-wrap align-items-center justify-content-center">
              <img width={154} className="mt-n5 loading" src={mainloader} alt="" />
              <h2
                className="text-white w-100 text-center mt-5"
              >
                Minting is in process
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loader;
