import React, { Component } from 'react'
import Profile from './Profile';
import ProfileClass from './ProfileClass';

// const About2 = () => {
//   return (
//     <div>
//       About Us
//       <Profile/>
//     </div>
//   )
// }

class About extends Component{
  
  constructor(props){
    super(props);
    console.log("Parent - Constructor");
  }

  componentDidMount(){
    console.log("Parent Component Did Mount called");
  }

  render(){
    console.log("Parent Render called")
    return(
      <div>
        About Us
        <Profile/>
        <ProfileClass/>
      </div>
    )
  }
}
export default About