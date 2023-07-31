import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles : [],
            loading:false,
            page : 1

        }
    }

    async componentDidMount(){
        // const country = document.getElementById("#country").value
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9857ed05f67d4e04a81beefeda614a13&page=1&pageSize=20"
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({articles : parseData.articles,totalResults : parseData.totalResults})
    }

    handelPreviousClick = async()=>{
        let url =` https://newsapi.org/v2/top-headlines?country=in&apiKey=9857ed05f67d4e04a81beefeda614a13&page=${this.state.page - 1}&pageSize=20`
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles : parseData.articles
        })

    }

    handelNextClick = async ()=>{
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
        let url =` https://newsapi.org/v2/top-headlines?country=in&apiKey=9857ed05f67d4e04a81beefeda614a13&page=${this.state.page + 1}&pageSize=20`
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles : parseData.articles
        })
    }
    }

   

  render() {
    return (
      <div className='container my-4'>
        <h1 className='text-center'>News Bites top headlines</h1>
        <div className='row'>
        {this.state.articles.map((element)=>{
           return <div  key={element.url}>
            <NewsItem  title={element.title} description={element.description} imgUrl={element.urlToImage} 
            newsUrl={element.url}/>
           </div>
        })}
          </div>
          <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelPreviousClick}>&larr; Previous </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handelNextClick}>Next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default News
