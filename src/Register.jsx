import React, { useState } from "react";
import Heading from "./Heading";
import "./Register.css";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [selectedOption, setselectedOption] = useState("");
  return (
    <>
      <Heading />
      <div className="Detailflow">
        <p style={{ color: "#E60000", fontWeight: "700" }} className="textflow">
          Basic Details
        </p>
        <BiChevronRight className="Arrow" />
        <p className="textflow">Next of Kin</p>
        <BiChevronRight className="Arrow" />
        <p className="textflow">Identity</p>
        <BiChevronRight className="Arrow" />
        <p className="textflow">Reference</p>
      </div>
      <div className="page">
        <form className="register">
          <h2 className="Details">Rider Details</h2>
          <div className="General">
            <div className="Gender">
              <p>Gender</p>
              <label style={{ marginRight: "30px" }}>
                <input
                  type="radio"
                  value="Male"
                  checked={selectedOption === "Male"}
                  onChange={(e) => setselectedOption(e.target.value)}
                />
                Male
              </label>
              <label style={{ marginRight: "100px" }}>
                <input
                  type="radio"
                  accent-color="#E60000"
                  value="Female"
                  checked={selectedOption === "Female"}
                  onChange={(e) => setselectedOption(e.target.value)}
                />
                Female
              </label>
            </div>
            <div className="formDiv">
              <div className="">
                <p className="topText">Name of Rider</p>
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
                <p className="topText">Date of Birth</p>
                <input
                  type="date"
                  placeholder="Set your date of Birth"
                  id="Birthdate"
                  name="Birthdate"
                ></input>
              </div>
            </div>
            <div className="streetDiv">
              <div>
                <p className="topText">Contact Address</p>
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
            <div className="formDiv">
              <div>
                <p className="topText">Password</p>
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter your password"
                  id="Password"
                  name="Password"
                />
                <button
                className="Pass"
                  onClick={() => {
                    setPasswordShown(!passwordShown);
                  }}
                  type="button"
                >
                  {passwordShown ? <FiEyeOff className="Eye"/> : <FiEye className="Eye"/>}
                </button>
              </div>
            </div>
            <div className="Move">
              <button className="Kin">
                <Link className="uncoloredlink" to="/NextofKin">
                  Next: Next of Kin
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
