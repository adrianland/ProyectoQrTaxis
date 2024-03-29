import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

class CardAuthor extends React.Component {
  constructor(props) {
    super(props);

    
  }
  
  render() {
    const stylo={
      backgroundColor: "Transparent",
      backgroundRepeat:"noRepeat",
      border: "none",
      cursor:"pointer",
      overflow: "hidden",
      outline:"none"
    }
    return (
      <div className="author">
        <a href={this.props.link ? this.props.link :"#" }>
          <img
            className="avatar border-gray"
            src={this.props.avatar}
            alt={this.props.avatarAlt}
          />
          <h5 className="title">{this.props.title}</h5>
        </a>
        <p className="description">{this.props.description}</p>
      </div>
    );
  }
}

CardAuthor.propTypes = {
  // Where the user to be redirected on clicking the avatar
  link: PropTypes.string,
  avatar: PropTypes.string,
  avatarAlt: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default CardAuthor;
