import React from "react";

class StorePicker extends React.Component {
  state = {
    myInput: "",
  };

  handleOnChange = (event) => {
    this.setState({
      myInput: event.target.value,
    });
  };

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.state.myInput;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          value={this.state.myInput}
          onChange={(e) => this.handleOnChange(e)}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
