import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, date, source } = this.props;
    return (
      <div>
        <div className="card mb-3 my-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={!imgUrl ? "https://khabaronline24.in/public/user/images/3d-world-news.jpg" : imgUrl} className="img-fluid rounded-start"
                alt="file-pic" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success source">
                    {source}
                  </span>
                </h5><p className="card-text">{description}</p>
                <div className="btn-date">
                  <a href={newsUrl} target="blank" className="btn btn-outline-dark">
                    Read More
                  </a>
                  <p className="card-text"><small className="text-body-secondary">
                    Published : {new Date(date).toGMTString()}
                  </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
