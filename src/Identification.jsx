import React, { useState } from "react";
import Heading from "./Heading";
import { BiChevronRight } from "react-icons/bi";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./Identification.css";
import { Link } from "react-router-dom";

const Identification = () => {
  return (
    <>
      <Heading />
      <div className="Detailflow">
        <RiCheckboxCircleFill className="Check" />
        <p className="textflow">Basic Details</p>
        <BiChevronRight className="Arrow" />
        <RiCheckboxCircleFill className="Check" />
        <p className="textflow">Next of Kin</p>
        <BiChevronRight className="Arrow" />
        <p style={{ color: "#E60000", fontWeight: "700" }} className="textflow">
          Identity
        </p>
        <BiChevronRight className="Arrow" />
        <p className="textflow">Reference</p>
      </div>
      <div className="page">
        <div className="General">
          <form className="register">
            <h2 className="Details">Identification</h2>
            <div className="formDiv">
              <div>
                <p className="topText">Type of ID</p>
                <select
                  className="no-outline"
                  placeholder="Select a prefered means of Identification"
                >
                  <option value="" disabled selected>
                    Select a prefered means of Identification
                  </option>
                  <option>Nigerian Passport</option>
                  <option>Driver's Lisence</option>
                  <option>National Identification Number</option>
                </select>
              </div>
            </div>
            <div className="formDiv">
              <div>
                <p className="topText">Identity Number</p>
                <input
                  type="string"
                  placeholder="Enter the number on your ID Card"
                  id="Number"
                  name="Number"
                />
              </div>
            </div>
            <div className="Upload">
              <p className="Upid">Upload ID</p>
              <p className="Upim">
                Upload an image of your ID. (Not larger than 2MB)
              </p>
            </div>
            <div>
              <p className="Upid">Upload Proof of Address</p>
              <p className="Upim">
                Any document with your provided address on it.
              </p>
            </div>
            <div className="Uploadfile">
              <AiOutlineCloudUpload />
              <input
                type="file"
                placeholder="Click here or drag and drop your file"
                id="File"
                Name="File"
              />
            </div>
            <div className="Move">
              <button className="Back">
                {" "}
                <AiOutlineArrowLeft />
                <Link className="Barrow" to="/NextofKin">
                  Back
                </Link>
              </button>
              <button className="Kin">
                <Link className="uncoloredlink" to="/References">
                  Next: References
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Identification;
