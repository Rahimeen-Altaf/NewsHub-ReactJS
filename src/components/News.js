import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    };

    async componentDidMount() {
        let url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fb3c7b4dff8747c1af48db106ebf5fb2&page=1';
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        });
    }

    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fb3c7b4dff8747c1af48db106ebf5fb2&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        });
    }

    handleNextClick = async () => {
        if(this.state.page + 1 > (Math.ceil(this.state.totalResults/20))) {

        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fb3c7b4dff8747c1af48db106ebf5fb2&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1
            });
        }
    }

  render() {
    return (
    <div className="container my-3">
        <h1>NewsHub - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element) => {
            let { title, description, urlToImage, url } = element;
            return <div className="col-md-4" key={url}>
               <NewsItem title={title?title.slice(0,45):""} description={description?description.slice(0,88):""} imageUrl={urlToImage} newsUrl={url}/>
            </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
    </div>
    )
  }
}

export default News