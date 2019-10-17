import React from "react";

class FormField extends React.Component {
  render() {
    return (
      <div style={{margin: 10}} class="columns">
        {/* <div class="is-one-th></div> */}
      <div class="is-three-fifths" className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
        </div>
      </div>
      {/* <div class="is-one-third"></div> */}
      </div>
    );
  }
}

export default FormField;
