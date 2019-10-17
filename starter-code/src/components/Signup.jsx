import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

class Signup extends React.Component {
  render() {
    return (
        <div class="Signup">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="******" />
        <CoolButton label="Submit" className="button is-small is-success is-rounded my-class"></CoolButton>
        </div>
        )
    }
  }
  export default Signup;