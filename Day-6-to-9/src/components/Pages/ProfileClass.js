import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    console.log("Child Constructor called");
    super(props);
    this.state={
        count:0
    }
  }

  componentDidMount(){
    // this.timer = setInterval(()=>{
    //     console.log("Hello React!");
    // },1000)
    console.log("Child Component Did Mount called");
  }

  componentDidUpdate(){
    //write logic for api call dependency
    console.log("Component Did Update");
  }

  componentWillUnmount(){
//    clearInterval(this.timer);
   console.log("Component will Unmount");
  }

  render() {
    console.log("Child Render called");
    return (
      <div>
        <h2>This is Profile Class Component</h2>
        <p>{this.state.count}</p>
        <button onClick={()=>{this.setState({count:1})}}>Count</button>
      </div>
    );
  }
}

export default Profile;
