/* Importing useState Hook*/
import React, { useState } from "react";


import './App.css';

function User_Data() {
  const [users, putUsers] = useState();

  /To Stop exceution till promise resolved/
/HTTP request/

  const callUsers = async () => {
    const scrap = await fetch("https://reqres.in/api/users?");
    const scrapsdata = await scrap.json();
    putUsers(scrapsdata.data);
  };

  //using .json for structured data

  // <> use as shorthand in place of React Fragments

  return (
    <>
      <header className="nav-section">
        <h1>Nikhil's React App</h1>
        <div className="button" onClick={callUsers}>FETCH USERS DATA</div>
      </header>
      <div className="horizental-section">
        {users?.map((current, index) => {
          return (
            <div className="card vertical-section" key={index}> 
              <img src={current.avatar} className="imgs" alt="Images Loading" />
              <div className="card-section">
                <h2 className="card-name-section">
                  {current.first_name} {current.last_name}
                </h2>
                <h4 className="emailtext">{current.email}</h4>
              </div>
            </div>
          );
        }
        )
        }
      </div>
      </>
  );
}

export default User_Data;
