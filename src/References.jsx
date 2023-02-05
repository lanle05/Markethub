import React, { useState } from "react";
import Heading from "./Heading";
import { BiChevronRight } from "react-icons/bi";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./References.css";

const References = () => {
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
        <RiCheckboxCircleFill className="Check" />
        <p className="textflow">Identity</p>
        <BiChevronRight className="Arrow" />
        <p style={{ color: "#E60000", fontWeight: "700" }} className="textflow">
          Reference
        </p>
      </div>
      <div className="page">
        <div className="General">
          <form className="register">
            <h2 className="Details">References</h2>
            <div className="Prov">
              <RiErrorWarningFill style={{ width: "30px" }} />
              <p>
                Provide two References that know you well enough, and can stand
                for you.
              </p>
            </div>
            <div>
              <p className="Refer">Reference 1</p>
              <div className="Holder">
                <img src="/Icons/Reference/remix-icons/line/user/Vector.svg" />
                <div className="Person">
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#353535",
                    }}
                  >
                    Manaish Kubuwa
                  </p>
                  <p className="Man">
                    Pastor{" "}
                    <img
                      style={{ marginLeft: "5pt", marginRight: "5pt" }}
                      src="/Icons/Dot.svg"
                    />{" "}
                    manish@gmail.com
                  </p>
                </div>
                <button className="Penedit">
                  <BiPencil />
                  Edit
                </button>
              </div>
            </div>
                <div>
                <p className="Refer">Reference 2</p>
                <button className="addRef">
                  <img style={{marginRight:"10px"}} src="/Icons/Addreference.svg"/>
                  Add reference details
                </button>
                </div>
            <div className="Move">
              <button className="Back">
                <AiOutlineArrowLeft />
                <Link className="Barrow" to="/Identification">
                  Back
                </Link>
              </button>
              <button className="Kin">Complete</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default References;
