import React, { Component } from "react";
import ProfileClass from "./ProfileClass";
import UserContext from "../../helpers/userContext";

// const About2 = () => {
//   return (
//     <div>
//       About Us
//       <Profile/>
//     </div>
//   )
// }

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent - Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount called");
  }

  render() {
    console.log("Parent Render called");
    return (
      <div>
        <UserContext.Consumer>
          {({ user }) => (
            <h4>
              {user.name} {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <div>
          <p>
            Eat St. was created with vision of delivering food while on foot.
          </p>
          {/* <Profile/> */}
          <ProfileClass />
        </div>
      </div>
    );
  }
}
export default About;
