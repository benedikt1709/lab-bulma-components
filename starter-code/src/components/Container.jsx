import React from "react";

class Container extends React.Component {
  render() {
    return (
        <div style={{width: 1200}} class="container">{this.props.children}</div>
    );
  }
}

export default Container;