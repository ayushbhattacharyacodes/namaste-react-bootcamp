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

**/

import React from "react";
import  ReactDOM  from "react-dom/client";
const heading = React.createElement("h1", { id: "title" }, "Hello Parcel !!");
const heading2 = React.createElement("h2", { id: "title2" }, "Hi!!");
const container = React.createElement("div", { class: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);