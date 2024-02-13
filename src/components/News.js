import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "health",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

   capitalizeFirstCharacter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // articles ek varia-ble h jise this.article karke constrtor me acces kr sakte h
  // articles = [
  constructor(props) {
    super(props);
    console.log("hello constructor from News Componemt");
    this.state = {
      // Articles: this.articles,
      Articles: [],
      loading: false,
      page: 1,
      totalResults:0,
    };
  document.title = `${this.capitalizeFirstCharacter(this.props.category)} - NewsNesT `;
  // let headlineCategory 
  }
  async updateNews() {
    this.props.setProgres(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // app start ho to loading karni h
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      Articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      // jab app start ho to loading karni h aur load hone ke baad rokni h
      loading: false,
      //humare totalresults, parsedData me aa rahe h
      totalResults:parsedData.totalResults,
    });
    this.props.setProgres(100);
  }
  async componentDidMount() {
    console.log("cdm here");
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f65ab442ee0543deafe133d25984b425&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // // app start ho to loading karni h
    // this.setState({ loading: true });

    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   Articles: parsedData.articles,
    //   totalArticles: parsedData.totalResults,
    //   // jab app start ho to loading karni h aur load hone ke baad rokni h
    //   loading: false,
    // });
    this.updateNews();
  }
  // handlePrevClick = async () => {
  //   // console.log("prev");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   this.props.country
  //   // }&category=${
  //   //   this.props.category
  //   // }&apiKey=f65ab442ee0543deafe133d25984b425&page=${
  //   //   this.state.page - 1
  //   // }&pageSize=${this.props.pageSize}`;
  //   // this.setState({ loading: true });

  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();

  //   // this.setState({ loading: false });
  //   // // console.log(parsedData);
  //   // this.setState({ Articles: parsedData.articles });
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parsedData.articles,
  //   // });
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };
  // handleNextClick = async () => {
  //   // console.log("next");
  //   // if (
  //   //   !(
  //   //     this.state.page + 1 >
  //   //     Math.ceil(this.state.totalResults / this.props.pageSize)
  //   //   )
  //   // ) {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //     this.props.country
  //   //   }&category=${
  //   //     this.props.category
  //   //   }&apiKey=f65ab442ee0543deafe133d25984b425&page=${
  //   //     this.state.page + 1
  //   //   }&pageSize=${this.props.pageSize}`;
  //   //   // jab data fetch hoga tab loading true hogi to niche true set kari h
  //   //   this.setState({ loading: true });

  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   // jese hi data aaya to loading false kar denge
  //   //   this.setState({ loading: false });

  //   //   // console.log(parsedData);
  //   //   // this.setState({ articles: parsedData.articles });
  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     Articles: parsedData.articles,
  //   // });
  //   // }
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // app start ho to loading karni h
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
 this.setState({
   Articles: this.state.Articles.concat(parsedData.articles),
   totalResults: parsedData.totalResults,

 });
  }

  render() {
    console.log("render method starts here");
    // let ImgUrL =
    //   "https://cdn.vox-cdn.com/uploads/chorus_asset/file/23966628/the_verge_social_share.png";
    return (
      <div className="c">
        <h2
          className="text-center"
          style={{ margin: "40px", fontSize: "xxx-large", fontWeight: "600" }}
        >
          NewsNesT : Top HeadlineS - {this.capitalizeFirstCharacter(this.props.category)}
        </h2>
        {/* agar loading chal rahi h to  spinner dikhao */}
        {/* {this.state.loading && <Spinner />}  */}

        <InfiniteScroll
          dataLength={this.state.Articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.Articles.length !== this.state.totalArticles}
          loader={<Spinner />}
        >
          <div className="mx-5">
            <div className="row">
              {/*removed from below line in start !this.state.loading && */}
              {this.state.Articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title.slice(0, 40) : " "}
                      descprition={
                        element.description
                          ? element.description.slice(0, 50)
                          : " Emmanuel Macron was the chief guest at the 75th Republic Day"
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 <
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
