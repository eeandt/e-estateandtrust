import React from "react";

function MarginWrapper({ children }) {
  return <div className={`w-[min(1440px,90%)] mx-auto`}>{children}</div>;
}
export default MarginWrapper;
