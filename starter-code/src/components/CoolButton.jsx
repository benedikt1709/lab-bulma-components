import React from "react";
import 'bulma/css/bulma.css';

class CoolButton extends React.Component {
  render() {
    console.log(this)
    return (
        <div>
        <button style={{margin: 10}} className={this.props.className}>{this.props.label}</button>
        </div>
        );
    }
  }
  export default CoolButton;