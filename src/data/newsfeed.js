import $ from 'jquery';

const newsfeed = () => {

  console.log("yolo");

  $.ajax({
    type: 'GET',
    url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml',
    // url: 'http://feeds.bbci.co.uk/news/rss.xml',
    dataType: "json",
    success: function(response){


    },
  })
};

export default newsfeed;
