import React, { Component } from 'react';

class Portrait extends Component {
  render() {
    return (
      <div className="portrait">
        <div className="page_header">
          <h1>Portrait</h1>
        </div>
        <div className="photography_page_content">
          <p>
            You don’t really imagine that portrait photography is difficult until you are about to try to take your first professional portrait photo. Even if you have a good lens, say a 50mm or 24-70mm, your camera properly adjusted in manual mode, and warm lighting, some photos may simply turn out worse than the others.
          </p>
          <p>
            One reason for this may be composition. There are certain portrait formats and composition rules that are essential and this post will feature 5 composition techniques in portraits and tips on how to crop and shoot portrait images.
          </p>
          <h4>Wide angle</h4>
          <img src="https://c1.staticflickr.com/3/2319/32211681324_58d44d156d.jpg" alt="portrait_1"/>
          <p>
            This is a nice portrait format that can be used to point at certain features of your model with the help of the background. Use a wide-angle lens and place the model either against a plain one-colored background or take photos in some place that you can associate with your subject.
          </p>
          <h4>Close-up</h4>
          <img src="https://c1.staticflickr.com/3/2481/32236024953_c5baf6d29d.jpg" alt="portait_2"/>
          <p>
            Close-ups are very difficult to shoot as you should convey a part of your model’s personality in the picture. Focus on your subject’s eyes and don’t worry about including the background since it’s simply not necessary. Collaborate with your model and use a very fast shutter speed in order to capture the right candid moment. You can crop off the top of the head as the picture will seem more personal this way.
          </p>
          <h4>Head and shoulders</h4>
          <img src="https://c1.staticflickr.com/4/3894/32211679344_5e9f265208.jpg" alt="portait_3"/>
          <p>
            Place your subject’s eyes in the top third part of the picture. The perfect head and shoulders portrait has the background thrown out of focus and the subject’s face occupies most of the frame.
          </p>
          <h4>Above the chest and waist</h4>
          <img src="https://c1.staticflickr.com/1/650/32241760723_2c687a6eaf.jpg" alt="portait_4"/>
          <p>
            This portrait format helps the photographer channel all attention to the subject’s eyes, arms, and hands. Use posing techniques and a wide aperture for bokeh, make sure that both the subject and the background occupy the same amount of space in the shot, and don’t place your subject at the center of the picture. It can be cropped using a wide angle portrait.
          </p>
          <h4>Above the knees and ankles</h4>
          <img src="https://c1.staticflickr.com/1/545/32136769931_42e641c4f6.jpg" alt="portait_5"/>
          <p>
            This is yet another portrait format that may be cropped. Use a wide aperture for throwing the background out of focus, place your subject at the center or the thirds, and play with the background choice.
          </p>
        </div>
      </div>
    );
  }
}




export default Portrait;
