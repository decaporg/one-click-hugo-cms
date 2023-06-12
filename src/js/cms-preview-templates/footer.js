import React from "react";
import format from "date-fns/format";

export default class FooterPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    return <div class="measure-narrow center mb4">

			  <p class="f3 lh-title light-gray b tc mb2">{entry.getIn(["data", "title"])}</p>
			  <p>{entry.getIn(["data", "blurb"])}</p>

		 </div>
  }
}
