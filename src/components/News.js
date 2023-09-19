import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
        "source": {
        "id": "fox-news",
        "name": "Fox News"
        },
        "author": "Ryan Gaydos",
        "title": "Michigan State announces intention to fire Mel Tucker over sexual misconduct allegations",
        "description": "Michigan State University announced its intention to fire football coach Mel Tucker as he faces allegations of sexual misconduct involving an activist and rape survivor.",
        "url": "https://www.foxnews.com/sports/michigan-state-announces-intention-fire-mel-tucker-sexual-misconduct-allegations",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/09/cbc6de43-Mel-Tucker.jpg",
        "publishedAt": "2023-09-18T20:37:32Z",
        "content": "Mel Tuckers status with Michigan State football is officially on the clock.\r\nAlan Haller, the schools vice president and athletics director, announced Michigan State gave Tucker notice that the schoo… [+1703 chars]"
        },
        {
        "source": {
        "id": "espn",
        "name": "ESPN"
        },
        "author": null,
        "title": "Michigan State begins process of firing coach Mel Tucker - ESPN",
        "description": "Michigan State has begun the process of firing football coach Mel Tucker for cause amid an ongoing investigation into sexual harassment allegations.",
        "url": "https://www.espn.com/college-football/story/_/id/38433108/michigan-state-begins-process-firing-coach-mel-tucker",
        "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0228%2Fr980235_1296x729_16%2D9.jpg",
        "publishedAt": "2023-09-18T20:18:00Z",
        "content": "Sep 18, 2023, 04:18 PM ET\r\nMichigan State has begun the process of firing football coach Mel Tucker for cause.\r\nThe school released a statement Monday announcing that it intends to terminate Tucker's… [+1866 chars]"
        },
        {
        "source": {
        "id": "espn",
        "name": "ESPN"
        },
        "author": "Mark Schlabach",
        "title": "Phil Mickelson says he's not betting on football this season - ESPN",
        "description": "Phil Mickelson said he isn't wagering on football games this season as he continues to recover from a gambling addiction in a statement posted to social media Monday.",
        "url": "https://www.espn.com/golf/story/_/id/38433034/phil-mickelson-says-not-betting-football-season",
        "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0617%2Fr1187530_1296x729_16%2D9.jpg",
        "publishedAt": "2023-09-18T20:14:00Z",
        "content": "Six-time major champion Phil Mickelson said he isn't wagering on football games this season as he continues to recover from a gambling addiction.\r\nMickelson's statement on social media on Monday come… [+3248 chars]"
        },
        {
        "source": {
        "id": "fox-sports",
        "name": "Fox Sports"
        },
        "author": null,
        "title": "Michigan State informs Mel Tucker it plans to terminate his contract for cause",
        "description": "Michigan State athletic director Allan Hallar has filed a letter to suspended football coach Mel Tucker, expressing his intent to fire him for cause.",
        "url": "http://www.foxsports.com/stories/college-football/michigan-state-informs-mel-tucker-it-plans-to-terminate-his-contract-for-cause",
        "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/09/1408/814/Mel-Tucker.jpg?ve=1&tl=1",
        "publishedAt": "2023-09-18T20:12:11Z",
        "content": "Michigan State has provided Mel Tucker with written notice of the school's intent to terminate his contract for cause.\r\nThe school's athletic director, Allan Hallar, released the following statement … [+1100 chars]"
        },
        {
        "source": {
        "id": "associated-press",
        "name": "Associated Press"
        },
        "author": "LARRY LAGE",
        "title": "Michigan State tells football coach Mel Tucker it will fire him for misconduct with rape survivor",
        "description": "Michigan State informed suspended football coach Mel Tucker on Monday that he will be fired without compensation for misconduct involving activist and rape survivor Brenda Tracy in a sordid case that dates back more than a year.",
        "url": "https://apnews.com/246ff49e66a8a1a3f692d6710da791ae",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/f1bb6ac362a94053b5fa12f874f7d34c/3000.jpeg",
        "publishedAt": "2023-09-18T20:07:29Z",
        "content": "Michigan State informed suspended football coach Mel Tucker on Monday that he will be fired without compensation for misconduct involving activist and rape survivor Brenda Tracy in a sordid case that… [+2909 chars]"
        },
        {
        "source": {
        "id": "espn",
        "name": "ESPN"
        },
        "author": null,
        "title": "Bengals - 'Hard to say' if Joe Burrow (calf) can play in Week 3 - ESPN",
        "description": "One week before the Cincinnati Bengals are scheduled to host the Los Angeles Rams for \"Monday Night Football\" in Cincinnati, coach Zac Taylor said he's not sure quarterback Joe Burrow will be able to play.",
        "url": "https://www.espn.com/nfl/story/_/id/38432940/bengals-hard-say-joe-burrow-calf-play-week-3",
        "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0917%2Fr1225957_1296x729_16%2D9.jpg",
        "publishedAt": "2023-09-18T20:03:00Z",
        "content": "Sep 18, 2023, 04:03 PM ET\r\nOne week before the Cincinnati Bengals are scheduled to host the Los Angeles Rams for \"Monday Night Football\" in Cincinnati, coach Zac Taylor said he's not sure quarterback… [+798 chars]"
        },
        {
        "source": {
        "id": "fox-sports",
        "name": "Fox Sports"
        },
        "author": "Bryan Fischer",
        "title": "College football contenders, pretenders ahead of Week 4",
        "description": "Conference play heats up this week, including the Big 12 debut for Cincinnati vs. Oklahoma on \"Big Noon Kickoff.\" Which teams look like real conference title contenders so far?",
        "url": "http://www.foxsports.com/stories/college-football/college-football-contenders-pretenders-ahead-of-week-4",
        "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/09/1408/814/09.17.23_Big-Noon-Kickoff-Preview_16x9.jpg?ve=1&tl=1",
        "publishedAt": "2023-09-18T16:19:37Z",
        "content": "As conference play begins in earnest for much of college football this weekend, including the Big 12 debut for Cincinnati hosting Oklahoma in the \"Big Noon Kickoff\" game on Saturday, it's time to tak… [+22885 chars]"
        },
        {
        "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
        },
        "author": null,
        "title": "Paedophile football coach Barry Bennell dies in prison",
        "description": "A judge at Bennell's sentencing in 2020 describes the abuser as \"the devil incarnate\".",
        "url": "http://www.bbc.co.uk/news/uk-england-manchester-66847569",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14188/production/_121521328_5acf69ba-224c-4d74-89cb-d8e87f844d1f.jpg",
        "publishedAt": "2023-09-18T15:37:26.0945348Z",
        "content": "Paedophile former football coach Barry Bennell has died in prison aged 70.\r\nBennell, also known as Richard Jones, was jailed for 30 years in 2018 after being convicted of 52 child sexual offences aga… [+1069 chars]"
        },
        {
        "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
        },
        "author": "Brad Shepard",
        "title": "Top 10 Running Back Performances Through Week 3 of the College Football Season",
        "description": "Sure, it's a small sample set, but after the first three (or, in some cases, four) games of the season, the top of the running back performances for 2023…",
        "url": "https://bleacherreport.com/articles/10089753-top-10-running-back-performances-through-week-3-of-the-college-football-season",
        "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1694926944/shlmjvjuoiwgzaslojqe.jpg",
        "publishedAt": "2023-09-18T11:00:00Z",
        "content": "Justin Casterline/Getty Images\r\nYou can debate and squabble over the placement of a lot of guys on this list, but there's really no doubt at this point of the season who the nation's top running back… [+1807 chars]"
        },
        {
        "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
        },
        "author": "Joel Reuter",
        "title": "College Football 2023: Winners and Losers from Week 3",
        "description": "Alabama does not have a starting quarterback, Florida State is not the College Football Playoff contender we thought they were and Kansas State went from…",
        "url": "https://bleacherreport.com/articles/10089729-college-football-2023-winners-and-losers-from-week-3",
        "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1694907833/mucwe4cwvt0hdwufdx7a.jpg",
        "publishedAt": "2023-09-17T00:16:56Z",
        "content": "Brian Bahr/Getty Images\r\nConsidering it was only a seven-point spread, South Alabama beating Oklahoma State only ranks as a mild surprise from a betting standpoint.\r\nIt's the way they won that makes … [+1353 chars]"
        },
        {
        "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
        "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
        "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
        "publishedAt": "2020-04-27T07:20:43Z",
        "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        };
    };
  render() {
    return (
    <div className="container my-3">
        <h1>NewsHub - Top Headlines</h1>
        <div className="row">
            <div className="col-md-4">
               <NewsItem title='Cricket' description='desc' imageUrl='https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif' newsUrl="TODO"/>
            </div>
            <div className="col-md-4">
               <NewsItem title='Cricket' description='desc'/>
            </div>
            <div className="col-md-4">
               <NewsItem title='Cricket' description='desc'/>
            </div>
        </div>
    </div>
    )
  }
}

export default News