import React, { useState } from "react";
import Heading from "./Heading";
import { BiChevronRight } from "react-icons/bi";
import "./NextofKin.css";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Next_of_kin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <Heading />
      <div className="Detailflow">
        <RiCheckboxCircleFill className="Check" />
        <p className="textflow">Basic Details</p>
        <BiChevronRight className="Arrow" />
        <p style={{ color: "#E60000", fontWeight: "700" }} className="textflow">
          Next of Kin
        </p>
        <BiChevronRight className="Arrow" />
        <p className="textflow">Identity</p>
        <BiChevronRight className="Arrow" />
        <p className="textflow">Reference</p>
      </div>
      <div className="page">
        <div className="General">
          <form className="register">
            <h2 className="Details">Next of Kin</h2>
            <div className="formDiv">
              <div className="">
                <p className="topText">Name of Next of Kin</p>
                <input
                  type="text"
                  placeholder="E.g Micheal Blaine"
                  id="Name"
                  name="Name"
                />
              </div>
            </div>
            <div className="formDiv">
              <div>
                <p className="topText">Email Address</p>
                <input
                  type="email"
                  placeholder="E.g micheal@gmail.com"
                  id="Email"
                  name="Email"
                ></input>
              </div>
            </div>
            <div className="formDiv">
              <div>
                <p className="topText">Phone Number</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="Country">+234</p>
                  <input
                    type="string"
                    placeholder="Enter your phone number"
                    id="Phonenumber"
                    name="Phone Number"
                  />
                </div>
              </div>
            </div>
            <div className="formDiv">
              <div>
                <p className="topText">Relationship</p>
                <select className="no-outline" placeholder="Relationship">
                  <option value="" disabled selected>
                    Relationship
                  </option>
                  <option>Brother</option>
                  <option>Sister</option>
                  <option>Mother</option>
                  <option>Father</option>
                  <option>Friend</option>
                </select>
              </div>
            </div>
            <div className="streetDiv">
              <div>
                <p className="topText">Address of Next of Kin</p>
                <input className="no-outline street" placeholder="Street" />
              </div>
              <hr
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  color: "#D5D5D5",
                  borderStyle: "solid",
                }}
              />
              <div className="specAddress">
                <div>
                  <select className="no-outline" placeholder="Province">
                    <option value="" disabled selected>
                      Province
                    </option>
                    <option>Lagos</option>
                  </select>
                </div>
                <div>
                  <select className="no-outline" placeholder="City">
                    <option value="" disabled selected>
                      City
                    </option>
                    <option>Ikeja</option>
                  </select>
                </div>
                <div>
                  <input className="no-outline" placeholder="Postal Code" />
                </div>
              </div>
            </div>
            <div className="Move">
              <button className="Back">
                {" "}
                <AiOutlineArrowLeft />
                <Link className="Barrow" to="/">
                  Back
                </Link>
              </button>
              <button className="Kin">
                <Link className="uncoloredlink" to="/Identification">
                  Next: Identity
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Next_of_kin;
