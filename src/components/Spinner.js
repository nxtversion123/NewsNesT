import React, { Component } from 'react'
import loading from './loading.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <p
          className="text-center"
          style={{
            marginBottom: "",
            // display: "flex",
            fontSize: "xxx-large",
            fontWeight: "600",
            color: "crimson",
            position: "relative",
            top: "130px",
          }}
        >
          Loading...
        </p>
        <img src={loading} alt="loading" />
      </div>
    );
  }
}
