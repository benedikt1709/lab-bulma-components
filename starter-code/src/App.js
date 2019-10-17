import React, { Component } from "react";
import "./App.css";
import Signup from "./components/Signup.jsx";
import Message from "./components/Message.jsx";
import Container from "./components/Container.jsx";

class App extends Component {

    render() {
        return (
                <div class="App">
                <Container>
                <Signup />
                <Message isInfo title="Hello World" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " messageStrong="Pellentesque risus mi"></Message>
                </Container>
                </div>
        )
    }
}

export default App;