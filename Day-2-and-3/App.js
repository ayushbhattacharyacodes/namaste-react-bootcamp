/*
*
Role of Parcel

1.Hot Module Replacement HMR (uses #2)
2.File Watching Algorithm (C++) 
3.Bundling
4.MINIFYING
5.cleaning our code 
6.dev end prod build
7.super fast
8.Image Optimization
9.Caching while development
10.File Compression
11.Compatible  with older version
12.HTTPS on dev (--https)
13.Consistent Hashing Algorithm
14.changing port numbers
15. Zero Config 
16.Transitive dependencies
17.browserslist
18.Created server
19.Tree Shaking - removing unwanted codes

**/

import React from "react";
import ReactDOM from "react-dom/client";
import "./Header.css";
//using createElement
// const heading = React.createElement("h1", { id: "title" }, "Parcel !!");

const Heading2 = () => <p>Parcel!!</p>;

//using JSX
const heading2 = <h2 id="title2">Namaste React</h2>;

const Heading = () => {
  return (
    <div>
      <h1>Namaste React</h1>
      <p>This is a functional component</p>
      {Heading2()}
      {heading2}
    </div>
  );
};

//Day-3 Assignment

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-logo">SuperFinds</h1>
      <form>
        <input
          id="search"
          name="search"
          type="search"
          placeholder="Search here.."
        />
        <span></span>
      </form>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="User"/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
