import React, { Component } from 'react'

export class NewsItem extends Component {
  

  render() {
    let{title,description,imgUrl,newsUrl} = this.props
    return (
      <div>
       <div className="card mb-3 my-3" >
        <div className="row g-0">
            <div className="col-md-4">
            <img src={!imgUrl ? "https://khabaronline24.in/public/user/images/3d-world-news.jpg":imgUrl} className="img-fluid rounded-start" alt="file-pic"/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem