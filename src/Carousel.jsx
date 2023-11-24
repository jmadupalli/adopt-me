import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="grid grid-cols-2 p-5">
        <img src={images[active]} alt="animal hero"></img>
        <div className="grid grid-cols-4 gap-5 p-20">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={
                index == active
                  ? "cursor-pointer rounded-lg border-4 border-solid border-amber-300"
                  : "cursor-pointer rounded-lg border-4 border-solid border-black"
              }
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
