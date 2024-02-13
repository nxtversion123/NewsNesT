import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import NewsItems from './components/NewsItems';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link,
  // useRouteMatch,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// cmnb,cp,cs

export default class App extends Component {
  // n = "sam";
  pageSize = 8;
  apiKey = "f65ab442ee0543deafe133d25984b425";
  //   apiKey = process.env.REACT_APP_NEWS_API;
  
  state = {
    progress: 0,
  };
  setProgress = (Progress) => {
    this.setState({ progress: Progress });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#4443" }}>
        <Router>
          <Navbar />
          <LoadingBar
            height={8}
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          {/* HI SAM This Is CLass Based Compnent {this.n} */}
          {/* <NewsItems />*/}
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgres={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgres={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgres={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgres={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgres={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgres={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                  apiKey={this.apiKey}
                />
              }
            ></Route>

            <Route
              exact
              path="/science"
              element={
                <News
                  setProgres={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgres={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
