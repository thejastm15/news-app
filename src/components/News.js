import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
  
    {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Lifestyle Desk",
            "title": "World Brain Day: Understanding reasons for rise in brain strokes among youngsters - The Indian Express",
            "description": "According to Dr Gaurish Kenkre, general manager and head of Atharv Ability–Neuro Rehabilitation Centre, unhealthy lifestyles, marked by sedentary habits, poor dietary choices and elevated stress levels have become prevalent among the youth, raising their risk…",
            "url": "https://indianexpress.com/article/lifestyle/health/world-brain-day-rise-brain-strokes-youngsters-symptoms-causes-treatment-prevention-8852021/",
            "urlToImage": "https://images.indianexpress.com/2023/07/brain-stroke.jpg",
            "publishedAt": "2023-07-22T12:50:11Z",
            "content": "Every year, World Brain Day is celebrated on July 22 to raise awareness about brain health and neurological disorders. It is observed annually with the goal to encourage brain health, expand research… [+4185 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Sayantani Biswas",
            "title": "Rajasthan News: CM Gehlot takes a ‘Manipur silence’ dig on PM Modi amid criticism from cabinet minister | Mint - Mint",
            "description": "Rajasthan CM Ashok Gehlot criticized PM Modi for not visiting violence-hit Manipur while campaigning in other states. This follows the recent sexual assault incident in Manipur that has triggered a political blame-game ahead of the 2024 Lok Sabha elections.",
            "url": "https://www.livemint.com/politics/news/rajasthan-news-cm-gehlot-takes-a-manipur-silence-dig-on-pm-modi-amid-criticism-from-cabinet-minister-11690027147264.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/07/22/600x338/PTI07-22-2023-000075A-0_1690027271629_1690027305657.jpg",
            "publishedAt": "2023-07-22T12:40:22Z",
            "content": "Rajasthan Chief Minister and Congress leader Ashok Gehlot hit out at Prime Minister Narendra Modi alleging that the latter has time to visit poll-bound states, but not the violence strife Manipur. CM… [+2846 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Samsung Galaxy Watch owner? Three exciting apps coming to your gadget; just check them out - HT Tech",
            "description": "With Galaxy Unpacked event just a few days away, it has been revealed that as many as three exciting new Galaxy Watch apps are coming! Ths includes WhatsApp and Thermo Check apps.",
            "url": "https://tech.hindustantimes.com/tech/news/samsung-galaxy-watch-owner-three-exciting-apps-coming-to-your-gadget-just-check-them-out-71690027796301.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/07/22/1600x900/Samsung_Galaxy_Watch_1690028000140_1690028000570.jfif",
            "publishedAt": "2023-07-22T12:20:59Z",
            "content": "With the highly anticipated Galaxy Unpacked event just a few days away, Samsung is gearing up to launch three exciting new apps for its Galaxy Watch devices. Among the trio is the long-awaited WhatsA… [+2193 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Shivendra Kumar",
            "title": "Q1 results today: RBL Bank, AU Small Finance Bank post 43-44% YoY jump in profits - The Economic Times",
            "description": "RBL Bank's total revenue grew 18% YoY and 2% quarter-on-quarter (QoQ) to Rs 1,932 crore for the reported quarter versus Rs 1,641 crore in Q1FY23 and Rs 1,885 crore in Q4FY24.",
            "url": "https://economictimes.indiatimes.com/markets/stocks/earnings/q1-results-today-rbl-bank-au-small-finance-bank-post-43-44-yoy-jump-in-q1-profits/articleshow/102040050.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-102040050,width-1070,height-580,imgsize-127876,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-07-22T12:08:00Z",
            "content": "Private lenders RBL Bank and AU Small Finance Bank announced their June quarter earnings on Saturday. While RBL Bank's net profit jumped 43% year-on-year (YoY) to Rs 288 crore for the quarter ended J… [+3903 chars]"
        }
    ]

    constructor(){
        super();
        this.state = {
            articles : this.articles,

        }
    }

    async componentDidMount(){
        // const country = document.getElementById("#country").value
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9857ed05f67d4e04a81beefeda614a13"
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({articles : parseData.articles})
    }

   

  render() {
    return (
      <div className='container my-4'>
        <h1>News Bites top headlines</h1>
        <div className='row'>
        {this.state.articles.map((element)=>{
           return <div  key={element.url}>
            <NewsItem  title={element.title} description={element.description} imgUrl={element.urlToImage} 
            newsUrl={element.url}/>
           </div>
        })}
            
          </div>
      </div>
    )
  }
}

export default News
