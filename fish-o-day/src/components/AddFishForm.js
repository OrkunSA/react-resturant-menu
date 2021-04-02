import React from "react";
import PropTypes from "prop-types";
class AddFishForm extends React.Component {
  static propTypes = {
    addFish: PropTypes.func,
  };

  state = {
    name: "",
    price: "",
    status: "available",
    desc: "",
    image: "",
  };

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.state.name,
      price: parseFloat(this.state.price),
      status: this.state.status,
      desc: this.state.desc,
      image: this.state.image,
    };
    this.props.addFish(fish);
    this.setState({
      name: "",
      price: "",
      status: "available",
      desc: "",
      image: "",
    });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          name="name"
          type="text"
          onChange={this.handleOnChange}
          value={this.state.name}
          placeholder="Name"
        />
        <input
          name="price"
          type="text"
          onChange={this.handleOnChange}
          value={this.state.price}
          placeholder="Price"
        />
        <select name="status" onChange={this.handleOnChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleOnChange}
          value={this.state.desc}
          placeholder="Desc"
        />
        <input
          name="image"
          type="text"
          onChange={this.handleOnChange}
          value={this.state.image}
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
