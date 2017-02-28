import React, { Component } from 'react';

class Aperture extends Component {
  render() {
    return (
      <div className="aperture">
        <div className="page_header">
          <h1>Apperture</h1>
        </div>
        <div className="photography_page_content">
          <p>
            Aperture refers to the opening of a lens's diaphragm through which light passes. It is calibrated in f/stops and is generally written as numbers such as 1.4, 2, 2.8, 4, 5.6, 8, 11 and 16. The lower f/stops give more exposure because they represent the larger apertures, while the higher f/stops give less exposure because they represent smaller apertures.
          </p>
          <img src="https://c1.staticflickr.com/3/2568/32949491521_a86c8d865d_o.png" alt="aperture_1"/>
          <h4>Depth of Field</h4>
          <p>
            Aperture has a direct impact on the depth of field. Depth of field is defined as "the zone of acceptable sharpness in front of and behind the subject on which the lens is focused." Simply put: how sharp or blurry is the area behind your subject.
          </p>
          <div className="aperture_equation">
            <span>Small aperture</span> - <span>Lower f/stop</span> - <span>Less depth of field</span> - <span>Blurrier background</span><br></br>
            <span>Large aperture</span> - <span>Higher f/stop</span> - <span>Greater depth of field</span> - <span>Sharper background</span>
          </div>
          <img src="https://c1.staticflickr.com/1/534/32231174144_227a1ef469_o.jpg" alt="aperture_2"/>
          <h4>Aperture Affects Shutter Speed</h4>
          <p>
            The aperture value affects shutter speed. Using a low f/stop means more light is entering the lens and therefore the shutter needs less opening time to obtain the correct exposure; and vice versa with high f/stops.
          </p><br></br>

          <h4>Choosing the Aperture</h4>
          <p>
            In most landscape photography you’ll see small aperture settings selected by photographers. This ensures that everything from the foreground to the horizon is relatively in focus.
          </p><br></br>
          <p>
            On the other hand in portrait photography it can be very handy to have your subject perfectly in focus but to have a nice blurry background in order to ensure that your subject is the main focal point and that other elements in the shot are not distracting. In this case you’d choose a large aperture to ensure a shallow depth of field.
          </p><br></br>
          <p>
            Macro photographers tend to be big users of large apertures to ensure that the element of their subject that they are focusing in on totally captures the attention of the viewer of their images while the rest of the image is completely thrown out of focus.
          </p>
        </div>
      </div>
    );
  }
}

export default Aperture;
