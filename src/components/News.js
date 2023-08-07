import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 10,
    category: 'genaral'
  }

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1

    }
  }

  async updateNews() {
    const url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9857ed05f67d4e04a81beefeda614a13&page=${this.state.page}&pageSize=${this.props.pagesize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })

  }

  async componentDidMount() {
    this.updateNews();
  }

  handelPreviousClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();

  }

  handelNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }



  render() {
    return (
      <div className='container my-4'>
        <h1 className='text-center'>News Bites top headlines</h1>
        {this.state.loading && <Spinner />}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div key={element.url}>
              <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage}
                newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handelPreviousClick}>&larr; Previous </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handelNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
