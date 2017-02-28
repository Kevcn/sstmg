import React from 'react';
import $ from 'jquery';

export default class Italy extends React.Component {

  componentDidMount(){
    $.ajax({
      type: 'GET',
      url: 'http://api.flickr.com/services/feeds/photos_public.gne?tags=italy&id=150866114@N02&format=json&jsoncallback=?',
      id: '150866114@N02',
      tags: "italy",
      dataType: "json",
      success: function(response){
        //store a list of image links fetched from flickr API
        let imgs = [];
        let imgsTitle = [];
        let entry = document.querySelector('.moments');

        response.items.forEach(function(element){
          imgs.push(element.media.m); //list of links.
          imgsTitle.push(element.title);
        });

        for(let i = 0; i < response.items.length; i++){
          //Creates DOM elements
          let anchor = document.createElement('a');
          let image = document.createElement('img');
          //Generates src and alt attribute for image tag
          let src = document.createAttribute('src');
          src.value = imgs[i];
          image.setAttributeNode(src);
          let alt = document.createAttribute('alt');
          alt.value = imgsTitle[i];
          image.setAttributeNode(alt);

          //TODO generate href attribute for each anchor elements

          //Append both <a> and <img> tags to the page.
          entry.appendChild(anchor).appendChild(image);
        }
      },
      //TODO ajax call error handling.
    })

    // Fetch images with tag 'italy_food'
    $.ajax({
      type: 'GET',
      url: 'http://api.flickr.com/services/feeds/photos_public.gne?tags=italy_food&id=150866114@N02&format=json&jsoncallback=?',
      id: '150866114@N02',
      tags: "italy_food",
      dataType: "json",
      success: function(response){
        //store a list of image links fetched from flickr API
        let imgs = [];
        let imgsTitle = [];
        let entry = document.querySelector('.food');

        response.items.forEach(function(element){
          imgs.push(element.media.m); //list of links.
          imgsTitle.push(element.title);
        });

        for(let i = 0; i < response.items.length; i++){
          //Creates DOM elements
          let anchor = document.createElement('a');
          let image = document.createElement('img');
          //Generates src and alt attribute for image tag
          let src = document.createAttribute('src');
          src.value = imgs[i];
          image.setAttributeNode(src);
          let alt = document.createAttribute('alt');
          alt.value = imgsTitle[i];
          image.setAttributeNode(alt);

          //TODO generate href attribute for each anchor elements

          //Append both <a> and <img> tags to the page.
          entry.appendChild(anchor).appendChild(image);
        }
      },
      //TODO ajax call error handling.
    })
  }

  showImage(e){
    e.preventDefault();
    console.log("wop");
    //show large image
  }

  render(){
    return(
      <div className="italy">
        <div className="main-content">
          <h1>Italy</h1>
          <h2>Route</h2>
          <p className="route">Rome -> Vatican -> Florence -> Venice</p>
          <hr/>
          <div className="moments flexbox">
            <h2>Places</h2>
          </div>
          <hr/>
          <div className="food flexbox">
            <h2>Food</h2>
          </div>
          <hr/>
          <h2>文艺复兴</h2>
          <a className="external_link" target="_blank" href="http://bbs.qyer.com/thread-1436338-1.html">了解文艺复兴 - 穷游神贴</a>
        </div>
      </div>
    );
  }
}
