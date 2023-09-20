import React, { Component } from "react";

export class NewsItem extends Component {
  
  
  render() {
    
    let { title, description, imageUrl, newsUrl, author, date, source, category } = this.props;
    const badgeColor = () => {
      switch (category) {
        case 'sports':
          return 'primary';
        case 'science':
          return 'warning';
        case 'technology':
          return 'secondary';
        case 'business':
          return 'info';
        case 'general':
          return 'danger';
        case 'health':
          return 'success';
        default:
          return 'primary';
      }
    };
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
        <span className={`badge rounded-pill bg-${badgeColor(category)}`}>
              {source}
              </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://media.cnn.com/api/v1/images/stellar/prod/230918191320-alabama-band-director-tased-arrested-091823.jpg?c=16x9&q=w_800,c_fill"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
