import React, { Component } from "react";
import Form from "./components/Form/index";
import Card from "./components/Card/index";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    // Greet with some sample image. Who likes to see a blank page?!
    this.state = {
      images: [
        {
          url: "https://thumbs.dreamstime.com/z/zip-line-26475548.jpg",
          title: "Zip Lining"
        }
      ]
    };
    this.imageUpdatehHandler = this.imageUpdatehHandler.bind(this);
  }
  imageUpdatehHandler(event) {
    event.persist();
    event.preventDefault();
    const newImage = {
      url: event.target.url.value,
      title: event.target.title.value
    };
    this.setState({ images: [newImage, ...this.state.images] });
    event.target.reset();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Form handler={this.imageUpdatehHandler} />
        <Card feed={this.state.images} />
      </div>
    );
  }
}

export default App;
