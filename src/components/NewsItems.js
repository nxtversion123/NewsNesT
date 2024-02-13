import React, { Component } from "react";

export default class NewsItems extends Component {
  
  render() {
   let  {title,descprition,imgUrl,newsUrl,author,date,source} = this.props //object destructuring
    return (
      <div className="container my-3" style={{}}>
        <div className="card" style={{ minHeight: "455px" }}>
          {/* <div
            style={{
              display: "flex",
              position: "absolute",
              right: "0",
              justifyContent: "flex-end",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div> */}
          <div>
            <span
              style={{
                blockSize: "25px",
                fontSize: "14px",
                zIndex: "1",
                left: "90%",
              }}
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            >
              {source}
              {/* <span class="visually"></span> */}
            </span>
          </div>
          <img
            style={{ maxHeight: "157px" }}
            src={
              !imgUrl
                ? "https://media.bnn.network/content/uploads/2024/02/cognizant-flowsource-20240201051250.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={{ background: "#4442" }}>
            <h5
              className="card-title d-flex center"
              style={{ fontWeight: "600" }}
            >
              {title}...
              {/* removed a class "start-100" */}
            </h5>
            <p className="card-text" style={{ fontSize: "large" }}>
              {descprition}...
            </p>
            {/* <p class="card-text">
              <small>By {author} on {date}</small>
            </p> */}
            <div className="time">
              <p style={{ fontSize: "medium", fontWeight: "600" }}>
                by {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </p>
            </div>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More!
            </a>
          </div>
        </div>
      </div>
    );
  }
}
