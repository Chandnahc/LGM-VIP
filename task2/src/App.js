import "./styles.css";
import React, { useState } from "react";

const App = () => {
  // const [users, setUsers] = useState([]);
  // const loadUsers = async () => {
  //   const response = await fetch("https://reqres.in/api/users?page=1");
  //   const jsonResponse = await
  //   response.json();
  //   setUsers(jsonResponse);
  // }

  function showData() {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => {
        return response.json(); // we can return jason nas well as parts
      })
      .then((data) => {
        console.log(data);
        var value = data;
        var img1 = value["data"][0]["avatar"];
        document.getElementById("img1").src = img1;
        var img2 = value["data"][1]["avatar"];
        document.getElementById("img2").src = img2;
        var img3 = value["data"][2]["avatar"];
        document.getElementById("img3").src = img3;
        var img4 = value["data"][3]["avatar"];
        document.getElementById("img4").src = img4;
        var img5 = value["data"][4]["avatar"];
        document.getElementById("img5").src = img5;
        var img6 = value["data"][5]["avatar"];
        document.getElementById("img6").src = img6;
        ///// name
        var first1 = value["data"][0]["first_name"];
        var last1 = value["data"][0]["last_name"];
        document.getElementById("user_name1").innerHTML =
          "Name : " + first1 + " " + last1;
        var first1 = value["data"][1]["first_name"];
        var last1 = value["data"][1]["last_name"];
        document.getElementById("user_name2").innerHTML =
          "Name : " + first1 + " " + last1;
        var first1 = value["data"][2]["first_name"];
        var last1 = value["data"][2]["last_name"];
        document.getElementById("user_name3").innerHTML =
          "Name : " + first1 + " " + last1;
        var first1 = value["data"][3]["first_name"];
        var last1 = value["data"][3]["last_name"];
        document.getElementById("user_name4").innerHTML =
          "Name : " + first1 + " " + last1;
        var first1 = value["data"][4]["first_name"];
        var last1 = value["data"][4]["last_name"];
        document.getElementById("user_name5").innerHTML =
          "Name : " + first1 + " " + last1;
        var first1 = value["data"][5]["first_name"];
        var last1 = value["data"][5]["last_name"];
        document.getElementById("user_name6").innerHTML =
          "Name : " + first1 + " " + last1;
        /////mail
        var mail1 = value["data"][0]["email"];
        document.getElementById("user_mail1").innerHTML = "mail : " + mail1;
        var mail2 = value["data"][1]["email"];
        document.getElementById("user_mail2").innerHTML = "mail : " + mail2;
        var mail3 = value["data"][2]["email"];
        document.getElementById("user_mail3").innerHTML = "mail : " + mail3;
        var mail3 = value["data"][3]["email"];
        document.getElementById("user_mail4").innerHTML = "mail : " + mail3;
        var mail3 = value["data"][4]["email"];
        document.getElementById("user_mail5").innerHTML = "mail : " + mail3;
        var mail3 = value["data"][5]["email"];
        document.getElementById("user_mail6").innerHTML = "mail : " + mail3;
      });
  }
  return (
    <>
      <header className="header">
        <h1>User Info</h1>
        <button className="getInfo" onClick={showData()}>
          Get Users
        </button>
      </header>
      <div>
        <div className="preloader" id="preloader">
          {/* <p> loading </p> */}
        </div>
        <div className="row1">
          <div>
            <img src="#" id="img1" />
            <h2 id="user_name1">Name</h2>
            <h5 id="user_mail1">Gmail</h5>
          </div>
          <div>
            <img src="#" id="img2" />
            <h2 id="user_name2">Name</h2>
            <h5 id="user_mail2">Gmail</h5>
          </div>
          <div>
            <img src="#" id="img3" />
            <h2 id="user_name3">Name</h2>
            <h5 id="user_mail3">Gmail</h5>
          </div>
        </div>
        <div className="row2">
          <div>
            <img src="#" id="img4" />
            <h2 id="user_name4">Name</h2>
            <h5 id="user_mail4">Gmail</h5>
          </div>
          <div>
            <img src="#" id="img5" />
            <h2 id="user_name5">Name</h2>
            <h5 id="user_mail5">Gmail</h5>
          </div>
          <div>
            <img src="#" id="img6" />
            <h2 id="user_name6">Name</h2>
            <h5 id="user_mail6">Gmail</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;