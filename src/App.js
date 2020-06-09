import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Eduardo Mendoza",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: { title: "Eduardo Mendoza, Front-End Developer" },
      about: { title: "About Me" },
      contact: { title: "Let/'s Talk!" },
    };
  }

  render() {
    return <div>Hello from React!</div>;
  }
}

export default App;
