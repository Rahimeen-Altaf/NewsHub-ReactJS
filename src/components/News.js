import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const captilized = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    useEffect(() => {  
      document.title = `NewsHub -  ${captilized(props.category)} News`;
      updateNews();
      //eslint-disable-next-line
    }, []);
    

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    const fetchMoreData = async ()  => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
      };

        return (
          <>
            <h1 className="text-center" style={{ margin: "40px 0px", marginTop: '90px' }}>
              NewsHub - Top <code>{captilized(props.category)}</code>{" "}
              Headlines
            </h1>

            {loading && <Spinner/>}

            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length < totalResults}
              loader={<Spinner />}
            >

        <div className="container">
            <div className="row">
              {!loading &&
                articles.map((element) => {
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
                        category={props.category}
                        />
                    </div>
                  );
                })}
            </div>
        </div>
             </InfiniteScroll>
          </>
    );
}

News.defaultPropType = {
    country: 'in',
    pageSize: 8,
    apiKey: 'c5ea547c0beb4519aa1ab749b0b57ae2',
    category: 'technology'
}

News.prototype = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey: PropTypes.string,
    category: PropTypes.string
}

export default News