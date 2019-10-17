import React from "react";

class Message extends React.Component {
  
    // constructor(){
    //     super();
    //     this.state = { isModalOpen: false };
    //   }
    //   handleAdd= () =>{
    //     this.setState({ isModalOpen: true });
    //   }
    //   handleClose= () =>{
    //     this.setState({ isModalOpen: false });
    //   }
    render() {
    return (
      <article style={{width: 300, margin: 30}} class="message is-small is-success">
        <div class="message-header">
          <p>{this.props.title}</p>
          <button class="delete" aria-label="delete"></button>
          {/* <AddModal isOpen={this.state.isModalOpen} handleClose={this.handleClose}/> */}
        </div>
        <div class="message-body">
          {this.props.message}
          <strong>{this.props.messageStrong}</strong>
        </div>
      </article>
    );
  }
}
export default Message;
