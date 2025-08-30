import React from "react";

const DatePretty = ({ datepretty }) => {
  const sdate = datepretty.split("T");
  const stime = sdate[1].split(".");
  return (
    <div>
      <h3>Date: {sdate[0]}</h3>
      <h3>Time: {stime[0]}</h3>
    </div>
  );
};

export default DatePretty;
