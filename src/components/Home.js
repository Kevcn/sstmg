import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import News from './home/News';
import Weather from './home/Weather';
import SearchBar from './home/SearchBar';
import Youtube from './home/Youtube';
import FavWebs from './home/FavWebs';

//Container component

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      news: [],
      warrington_weather: [],
      manchester_weather: [],
      sheffield_weather: [],
      youtubeTrend: [],
    };
  }

   componentDidMount(){
    // Ajax calls - top stories
    $.ajax({
      url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml',
      dataType: 'json',
      // cache: true,
      success: function(data) {
        //save only 4 latest news to state[news]
        let recentNews = data.items.slice(0,4);
        this.setState({
          news: recentNews,
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("Failed connection to BBC News feed.");
      }.bind(this)
    });

    // fetching Warrington weather
    $.ajax({
      url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fopen.live.bbc.co.uk%2Fweather%2Ffeeds%2Fen%2F2634739%2F3dayforecast.rss',
      dataType: 'json',
      success: function(data) {
        //save 3 days weather info to state [warrington_weather]
        let threeDaysWeather = data.items.slice(0,3);
        this.setState({
          warrington_weather: threeDaysWeather,
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("Failed connection to BBC weather feed.");
      }.bind(this)
    });

    // Fetching Manchester weather
    $.ajax({
      url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fopen.live.bbc.co.uk%2Fweather%2Ffeeds%2Fen%2F2643123%2F3dayforecast.rss',
      dataType: 'json',
      success: function(data) {
        //save 3 days weather info to state [manchester_weather]
        let threeDaysWeather = data.items.slice(0,3);
        this.setState({
          manchester_weather: threeDaysWeather,
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("Failed connection to BBC weather feed.");
      }.bind(this)
    });

    // fetching Sheffield weather
    $.ajax({
      url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fopen.live.bbc.co.uk%2Fweather%2Ffeeds%2Fen%2F2638077%2F3dayforecast.rss',
      dataType: 'json',
      success: function(data) {
        //save 3 days weather info to state [warrington_weather]
        let threeDaysWeather = data.items.slice(0,3);
        this.setState({
          sheffield_weather: threeDaysWeather,
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("Failed connection to BBC weather feed.");
      }.bind(this)
    });


    // Youtube Trend GB
   $.get(
          "https://www.googleapis.com/youtube/v3/videos",{
            part: 'snippet',
            // part: 'contentDetails',
            chart: 'mostPopular',
            regionCode: 'GB',
            maxResults: 4,
            key: 'AIzaSyDCCBIDHxUu8CQ1Q_CuNGP_TPiZpau9dNI'},
            function(data) {
              this.setState({
                youtubeTrend: data.items,
              });
              // console.log(data.items);
            }.bind(this)
        );


  }; // componentDidMount



  render() {
    let warrington_weather = this.state.warrington_weather.map((weathers) => {
      let details = weathers.title;
      // js string manipulation - fetch useful information
      let weather = details.substring(details.indexOf(":")+1,details.indexOf(","));
      let max = details.substring(details.indexOf("°C")-2, details.indexOf("°C")+2);
      let min = details.substring(details.lastIndexOf("°C")-2, details.lastIndexOf("°C")+2);
      // passing data down to presentitional components
          return <Weather title={weather}
                          max={max}
                          min={min}
                          key={weathers.guid} />
    });

    let manchester_weather = this.state.manchester_weather.map((weathers) => {
      let details = weathers.title;
      // js string manipulation - fetch useful information
      let weather = details.substring(details.indexOf(":")+1,details.indexOf(","));
      let max = details.substring(details.indexOf("°C")-2, details.indexOf("°C")+2);
      let min = details.substring(details.lastIndexOf("°C")-2, details.lastIndexOf("°C")+2);
      // passing data down to presentitional components
          return <Weather title={weather}
                          max={max}
                          min={min}
                          key={weathers.guid} />
    });

    let sheffield_weather = this.state.sheffield_weather.map((weathers) => {
      let details = weathers.title;
      // js string manipulation - fetch useful information
      let weather = details.substring(details.indexOf(":")+1,details.indexOf(","));
      let max = details.substring(details.indexOf("°C")-2, details.indexOf("°C")+2);
      let min = details.substring(details.lastIndexOf("°C")-2, details.lastIndexOf("°C")+2);
      // passing data down to presentitional components
          return <Weather title={weather}
                          max={max}
                          min={min}
                          key={weathers.guid} />
    });

    // Display news from state
    let news = this.state.news.map((news) => {
      return <News title={news.title}
                     desc={news.description}
                     img={news.thumbnail}
                     link={news.link}
                     key={news.title} />
    });

    // determine today, tomorrow and the date after tomorrow.
      let today, tomorrow, dat;

      switch (new Date().getDay()) {
          case 0:
              today = "Sunday";
              tomorrow = "Monday";
              dat = "Tuesday";
              break;
          case 1:
              today = "Monday";
              tomorrow = "Tuesday";
              dat = "Wednesday";
              break;
          case 2:
              today = "Tuesday";
              tomorrow = "Wednesday";
              dat = "Thursday";
              break;
          case 3:
              today = "Wednesday";
              tomorrow = "Thursday";
              dat = "Friday";
              break;
          case 4:
              today = "Thursday";
              tomorrow = "Friday";
              dat = "Satuday";
              break;
          case 5:
              today = "Friday";
              tomorrow = "Saturday";
              dat = "Sunday";
              break;
          case 6:
              today = "Saturday";
              tomorrow = "Sunday";
              dat = "Monday";
      }

    // render Youtube trend from state
    let youtubeTrend = this.state.youtubeTrend.map((trend) => {

      let link = "http://www.youtube.com/watch?v=" + trend.id;

      return <Youtube title={trend.snippet.title}
                     link={link}
                     img={trend.snippet.thumbnails.high.url}
                     key={trend.id} />
    });

    return (
      <div className="main-content home flexbox">
        <SearchBar />
        <FavWebs />
        <a className="github_icon" target="_blank" href="https://github.com/Kevcn/sstmg"><img src="https://octicons.github.com/img/og/mark-github.png" alt=""></img></a>
        <div className="flexbox flex-center news-section">
          <h2 className="subHeader">Top Stories</h2>
          {news}
        </div>
        <hr/>
        <div className="flexbox flex-center youtubeTrend-section">
          <h2 className="subHeader">Youtube Trend</h2>
          {youtubeTrend}
        </div>
        <hr/>
        <div className="flexbox flex-sb weather-section">
          <h2 className="subHeader">Weather</h2>
          <div className="weather-box">
            <h3>Warrington</h3>
              <table>
                <thead>
                  <tr>
                    <th>{today}</th>
                    <th>{tomorrow}</th>
                    <th>{dat}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {warrington_weather}
                  </tr>
                </tbody>
              </table>
          </div>
          <div className="weather-box">
            <h3>Manchester</h3>
              <table>
                <thead>
                  <tr>
                    <th>{today}</th>
                    <th>{tomorrow}</th>
                    <th>{dat}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {manchester_weather}
                  </tr>
                </tbody>
              </table>
          </div>
          <div className="weather-box">
            <h3>Sheffield</h3>
              <table>
                <thead>
                  <tr>
                    <th>{today}</th>
                    <th>{tomorrow}</th>
                    <th>{dat}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {sheffield_weather}
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    );
  }
}
