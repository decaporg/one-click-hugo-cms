import React from "react";
import format from "date-fns/format";

export default class ConfigPreview extends React.Component {
    render() {
        const {entry} = this.props;
        return <div>
           	<p>Page Name | {entry.getIn(["data", "title"])}</p>
          </div>
    }
}
