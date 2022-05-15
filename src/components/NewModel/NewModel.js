import React from "react";
import axios from "../../api/axios";
import { useRef, useState, useEffect, useContext } from "react";

import classes from "./NewModel.module.css";
const Create_Model_URL = "api/models"
const NewModel = () => {
  const [errMsg, setErrMsg] = useState("");

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [height, setHeight] = useState("");
  const [shoesize, setShoesize] = useState("");
  const [haircolor, setHaircolor] = useState("");
  const [eyecolor, setEyecolor] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        Create_Model_URL,
        JSON.stringify(
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNo: phonenumber,
                addresLine1: address1,
                addresLine2: address2,
                zip: zip,
                city: city,
                country: country,
                birthDate: birthday,
                nationality: nationality,
                height: 0,
                shoeSize: 0,
                hairColor: haircolor,
                eyeColor: eyecolor,
                comments: comments,
                password: password
              }
        ),
        {
          headers: { 
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
              "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));

    } catch (err) {     
     
    }
  };

  return (
    <section className={classes.newModel}>
      <h2>Tilføj en ny model</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="firstName">Firstname</label>
          <input
            type="text"
            id="firstname"
            autoComplete="on"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstName}
            
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="lastName">Lastname</label>
          <input
            type="text"
            id="lastname"
            autoComplete="on"
            onChange={(e) => setLastname(e.target.value)}
            value={lastName}
            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="on"
            onChange={(e) => setPwd(e.target.value)}
            value={password}
            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Phone number</label>
          <input
            type="text"
            id="phone-number"
            autoComplete="on"
            onChange={(e) => setPhonenumber(e.target.value)}
            value={phonenumber}
            
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address 1</label>
          <input
            type="text"
            id="address1"
            autoComplete="on"
            onChange={(e) => setAddress1(e.target.value)}
            value={address1}
            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address 2</label>
          <input
            type="text"
            id="address2"
            autoComplete="on"
            onChange={(e) => setAddress2(e.target.value)}
            value={address2}
            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="zipcode">Zip code</label>
          <input
            type="text"
            id="zip"
            autoComplete="on"
            onChange={(e) => setZip(e.target.value)}
            value={zip}

            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            autoComplete="on"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="city">Country</label>
          <input
            type="text"
            id="country"
            autoComplete="on"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            id="birthday"
            autoComplete="on"
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="nationality">Nationality</label>
          <input
            type="text"
            id="nationality"
            autoComplete="on"
            onChange={(e) => setNationality(e.target.value)}
            value={nationality}
            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            id="height"
            autoComplete="on"
            onChange={(e) => setHeight(e.target.value)}
            value={height}
            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="height">Shoesize</label>
          <input
            type="text"
            id="shoesize"
            autoComplete="on"
            onChange={(e) => setShoesize(e.target.value)}
            value={shoesize}
            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="haircolor">Hair color</label>
          <input
            type="text"
            id="haircolor"
            autoComplete="on"
            onChange={(e) => setHaircolor(e.target.value)}
            value={haircolor}
            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="eyecolor">Eye color</label>
          <input
            type="text"
            id="eyecolor"
            autoComplete="on"
            onChange={(e) => setEyecolor(e.target.value)}
            value={eyecolor}
            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="coments">Comments</label>
          <textarea
            type="text"
            id="nationality"
            autoComplete="on"
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          />
        </div>

        <div className={classes.actions}>
          <button>Opret</button>
        </div>
      </form>
    </section>
  );
};

export default NewModel;
