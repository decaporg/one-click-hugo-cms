import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
        <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>

        <div className="bg-grey-1 pv4">
          <div className="flex-l mhn1-l ph3 center mw7">
            <h2 className="f2 b lh-title mb2 w-40-l">{entry.getIn(["data", "blurb", "heading"])}</h2>
            <p className="w-60-l mb0">{entry.getIn(["data", "blurb", "text"])}</p>
          </div>
        </div>

        <div className="bg-off-white pv4">
          <div className="ph3 mw7 center">
            <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "intro", "heading"])}</h2>
            <p className="mb4 mw6">{entry.getIn(["data", "intro", "text"])}</p>

            <div className="flex-ns mhn2-ns mb3">
              {(entry.getIn(["data", "products"]) || []).map((product, i) => <div className="ph2-ns w-50-ns" key={i}>
                <img src={getAsset(product.get("image"))} alt="" className="center db mb3" style={{width: "240px"}}/>
                <p>{product.get("text")}</p>
              </div>)}
            </div>

            <div className="tc">
              <a href="#" className="btn raise">See all products</a>
            </div>
          </div>
        </div>

        <div className="bg-grey-1 pv4">
          <div className="ph3 mw7 center">

            <div className="flex-l mhn2-l">
              <div className="w-40-l ph2-l">
                <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "values", "heading"])}</h2>

                <p>{entry.getIn(["data", "values", "text"])}</p>
              </div>

              <div className="w-60-l ph2-l">
                <img src="/img/home-about-section.jpg" alt="" className="mb3"/>
              </div>
            </div>

            <div className="tc">
              <a href="{{.buttonLink}}" className="btn raise">Read more</a>
            </div>

          </div>
        </div>


    </div>
  }
}