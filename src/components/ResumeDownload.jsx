import React from "react";

const Resume = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // method to get PDF file
    fetch("OliviaConley_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "OliviaConley_Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <center>
        <button
          className="transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-100 duration-300 text-white rounded-full py-2 px-4"
          onClick={onButtonClick}
        >
          Resume
        </button>
      </center>
    </>
  );
};

export default Resume;
