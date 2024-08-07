import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  let stateSelectRef = useRef();
  let resultParaRef = useRef();
  let firstNameInputRef = useRef();
  let firstNameResultRef = useRef();
  let lastNameInputRef = useRef();
  let lastNameResultRef = useRef();
  let ageInputRef = useRef();
  let ageResultRef = useRef();
  let maleRBRef = useRef();
  let femaleRBRef = useRef();
  let selectedGender;
  
  let selectedMartialstatus;
  let [selectedImage,setSelectedImage] = useState("./images/no image.png");
  let languagesKnown = {
    tel: false,
    hindi: false,
    eng: false,
    urdu: false,
    chinese: false,
    spanish: false,
    german: false,
    french: false,
    italian: false,
    arabic: false,
  };

  let onCreateAccount = () => {
    if (stateSelectRef.current.value == "Select State") {
      alert("Please Select your state.");
    } else {
      let salutation = "";

      if (selectedGender == "male") {
        salutation = "Mr.";
      }
      if (selectedGender == "female") {
        if (selectedMartialstatus == "single") {
          salutation = "Miss.";
        } else {
          salutation = "Mrs.";
        }
      }
      console.log(languagesKnown);
      resultParaRef.current.innerHTML = `${salutation}
       ${firstNameInputRef.current.value} 
       ${lastNameInputRef.current.value} is from 
       ${stateSelectRef.current.value}, You  Know These Languages  
             (
             ${languagesKnown.tel == true ? "Telugu," : ""}
      
             ${languagesKnown.hindi == true ? "Hindi," : ""} 
            
             ${languagesKnown.eng == true ? "English," : ""}
               ${languagesKnown.urdu == true ? "Urdu," : ""} 
               ${languagesKnown.spanish == true ? "Spanish," : ""} 
                ${languagesKnown.chinese == true ? "Chinese," : ""}
                ${languagesKnown. french== true ? "French," : ""}
                ${languagesKnown.german == true ? "German," : ""}
                ${languagesKnown.italian == true ? "Italian," : ""}
                ${languagesKnown.arabic == true ? "Arabic," : ""}
               

            )Congrats your account has been created welcome to the page.`;
    }
  };
  return (
    <div className="App">
      <form>
        <h2>Signup</h2>
        <div>
          <label>Profile Pic</label>
          <input type="file" onChange={(eo)=>{console.log(eo.target.files);

        let selectedImageStr = URL.createObjectURL(eo.target.files[0]);
        console.log(selectedImageStr);
        setSelectedImage(selectedImageStr);


          }}></input>
        </div>
        <div>
          <img className="profilepic" src={selectedImage}></img>
        </div>
        <div>
          <label>First Name</label>
          <input 
          type="text"
          minLength="2"
          maxLength="35"
          ref={firstNameInputRef}></input>
           <span className="span" ref={firstNameResultRef}></span>
        </div>
        <div>
          <label>Last Name</label>
          <input
          type="text"
          minLength="2"
          maxLength="35"
           ref={lastNameInputRef}></input>
          <span className="span" ref={lastNameResultRef}></span>
        </div>
        <div>
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            ref={maleRBRef}
            onChange={() => {
              if (maleRBRef.current.checked == true) {
                selectedGender = "male";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Male</label>
          <input
            type="radio"
            name="gender"
            ref={femaleRBRef}
            onChange={() => {
              if (femaleRBRef.current.checked == true) {
                selectedGender = "female";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Female</label>
        </div>
        <div>
          <label>Martial Status</label>
          <input
            type="radio"
            name="ms"
            onChange={(evenObj) => {
              console.log(evenObj);
              if (evenObj.target.checked == true) {
                selectedMartialstatus = "single";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Single</label>
          <input
            type="radio"
            name="ms"
            onChange={(evenObj) => {
              console.log(evenObj);
              if (evenObj.target.checked == true) {
                selectedMartialstatus = "married";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Married</label>
        </div>
        <div>
          <label>Age</label>
          <input
           type="number"
           minLength="1"
           maxLength="2"
           ref={ageInputRef}></input>
           <span className="span" ref={ageResultRef}></span>
        </div>
        <div>
          <label>E-mail</label>
          <input></input>
        </div>
        <div>
          <label>Password</label>
          <input></input>
        </div>
        <div>
          <label>Languages Known</label>

          <div className="inlineDiv">
            <label className="inline Label">Telugu</label>
            <input
              type="checkbox"
              onChange={(evenObj) => {
                console.log(evenObj);
                languagesKnown.tel = evenObj.target.checked;
              }}
            ></input>
            <label className="inline Label">Hindi</label>
            <input
              type="checkbox"
              onChange={(evenObj) => {
                console.log(evenObj);
                languagesKnown.hindi = evenObj.target.checked;
              }}
            ></input>
            <label className="inline Label">English</label>
            <input
              type="checkbox"
              onChange={(evenObj) => {
                console.log(evenObj);
                languagesKnown.eng = evenObj.target.checked;
              }}
            ></input>
            <label className="inline Label">Urdu</label>
            <input
              type="checkbox"
              onChange={(evenObj) => {
                console.log(evenObj);
                languagesKnown.urdu = evenObj.target.checked;
              }}
            ></input>
            <label className="inline Label">Spanish</label>
            <input
              type="checkbox"
              onChange={(evenObj) => {
                console.log(evenObj);
                languagesKnown.spanish = evenObj.target.checked;
              }}
            ></input>
            <label className="inline Label">Chinese</label>
            <input
              type="checkbox"
              onChange={(evenObj) => {
                console.log(evenObj);
                languagesKnown.chinese = evenObj.target.checked;
              }}
            ></input>
            <label className="inline Label">French</label>
            <input
              type="checkbox"
              onChange={(evenObj) => {
                console.log(evenObj);
                languagesKnown.french = evenObj.target.checked;
              }}
            ></input>
            <label className="inline Label">German</label>
            <input
              type="checkbox"
              onChange={(evenObj) => {
                languagesKnown.german = evenObj.target.checked;
                console.log(evenObj);
              }}
            ></input>
            <label className="inline Label">Italian</label>
            <input
              type="checkbox"
              onChange={(evenObj) => {
                console.log(evenObj);
                languagesKnown.italian = evenObj.target.checked;
              }}
            ></input>
            <label className="inline Label">Arabic</label>
            <input
              type="checkbox"
              onChange={(evenObj) => {
                console.log(evenObj);
                languagesKnown.arabic = evenObj.target.checked;
              }}
            ></input>
          </div>
        </div>
        <div>
          <label>Sate</label>
          <select
            ref={stateSelectRef}
            onChange={() => {
              let selectedState = stateSelectRef.current.value;

              if (selectedState == "Andhra Pradesh") {
                console.log("Amaravati.");
              } else if (selectedState == "Arunachal Pradesh") {
                console.log("Itanagar.");
              } else if (selectedState == "Assam") {
                console.log("Dispur");
            } else if (selectedState == "Bihar") {
                console.log("Patna");
            } else if (selectedState == "Chhattisgarh") {
                console.log("Raipur.");
            } else if (selectedState == "Goa") {
                console.log("Panaji.");
            } else if (selectedState == "Gujarat") {
                console.log("Gandhinagar.");
              } else if (selectedState == "Haryana") {
                console.log("Chandigarh");
              } else if (selectedState == "Himachal Pradesh") {
                console.log("Shimla.");
              } else if (selectedState == "Jharkhand") {
                console.log("Ranchi.");
              } else if (selectedState == "Karnataka") {
                console.log("Banglore");
              } else if (selectedState == "Kerala") {
                console.log("Tiruvanantapuram");
              } else if (selectedState == "Madhya Pradesh") {
                console.log("Bhopal");
              } else if (selectedState == "Maharashtra") {
                console.log("Mumbai");
              } else if (selectedState == "Manipur") {
                console.log("Imphal");
              } else if (selectedState == "Meghalaya") {
                console.log("Shillong");
              } else if (selectedState == "Mizoram") {
                console.log("Aizwal");
              } else if (selectedState == "Nagaland") {
                console.log("Kohima");
              } else if (selectedState == "Odisha") {
                console.log("Bhubaneshwar");
              } else if (selectedState == "Punjab") {
                console.log("Chandigarh");
              } else if (selectedState == "Rajasthan") {
                console.log("Jaipur");
              } else if (selectedState == "Sikkim") {
                console.log("Gangtok");
              } else if (selectedState == "Tamil Nadu") {
                console.log("Chennai");
              } else if (selectedState == "Telangana") {
                console.log("Hyderabad");
              } else if (selectedState == "Tripura") {
                console.log("Agartala");
              } else if (selectedState == "Uttar Pradesh") {
                console.log("Lucknow");
              } else if (selectedState == "Uttarakhand") {
                console.log("Dehradun");
              } else if (selectedState == "West Bengal") {
                console.log("Kolakata");
              }
            }}
          >
            <option>Select State</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>
          </select>
        </div>
        {/* <div>
          <label>Profile pic</label>
          <input></input>
        </div> */}
        <div>
          <label>Mobile.No</label>
          <input></input>
        </div>
        <div>
          <label>Address</label>
          <input></input>
        </div>
        
        <div>
          <button
            type="button"
            onClick={() => {
              onCreateAccount();
            }}
          >
            Create Account
          </button>
        </div>
        <p ref={resultParaRef}></p>
      </form>
      <br></br>
      <br></br>
      <Link to="/">Login</Link>
    </div>
  );
}

export default Signup;
