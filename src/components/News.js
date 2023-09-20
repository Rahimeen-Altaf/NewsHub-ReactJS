import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"



export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        };
        document.title = `NewsHub -  ${this.captilized(this.props.category)} News`;
    };

    captilized = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        apiKey: 'c5ea547c0beb4519aa1ab749b0b57ae2',
        category: 'technology'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        apiKey: PropTypes.string,
        category: PropTypes.string
    }

    async componentDidMount() {
        this.updateNews();
    }

    updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    fetchMoreData = async ()  => {
        this.setState({
            page: this.state.page + 1
        })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
      };

    handlePreviousClick = async () => {
       this.setState({page: this.state.page - 1});
       this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({page: this.state.page + 1});
        this.updateNews();
    }

    render() {
        return (
          <>
            <h1 className="text-center" style={{ margin: "40px 0px" }}>
              NewsHub - Top <code>{this.captilized(this.props.category)}</code>{" "}
              Headlines
            </h1>

            {this.state.loading && <Spinner/>}

            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length < this.state.totalResults}
              loader={<Spinner />}
            >

        <div className="container">
            <div className="row">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  let {
                      title,
                      description,
                      urlToImage,
                    url,
                    author,
                    publishedAt,
                    source,
                } = element;
                
                return (
                    <div className="col-md-4" key={url}>
                      <NewsItem
                        title={title ? title.slice(0, 45) : ""}
                        description={
                            description ? description.slice(0, 88) : ""
                        }
                        imageUrl={urlToImage}
                        newsUrl={url}
                        author={author}
                        date={publishedAt}
                        source={source.name}
                        category={this.props.category}
                        />
                    </div>
                  );
                })}
            </div>
        </div>
             </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-dark"
                onClick={this.handlePreviousClick}
              >
                &larr; Previous
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                type="button"
                className="btn btn-dark"
                onClick={this.handleNextClick}
              >
                Next &rarr;
              </button>
            </div> */}
          </>
        );
    }
}

export default News