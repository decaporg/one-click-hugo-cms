import React from "react";

export default class FooterPreview extends React.Component {
  render() {
    const {entry} = this.props;
    return <div className="measure-narrow center mb4">

      <p className="f3 lh-title light-gray b tc mb2">{entry.getIn(["data", "title"])}</p>
      <p>{entry.getIn(["data", "blurb"])}</p>

    </div>;
  }
}

