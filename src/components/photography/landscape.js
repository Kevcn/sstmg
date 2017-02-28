import React, { Component } from 'react';
import { Link } from 'react-router';

class Landscape extends Component {
  render() {
    return (
      <div className="landscape">
        <div className="page_header">
          <h1>Landscape</h1>
        </div>
        <div className="photography_page_content">
          <img src="https://c1.staticflickr.com/1/521/32924912721_0153dee8cf_o.jpg" alt="landscape_1"/>
          <p>
            Having a comprehensive understanding of wide angle photography is essential to taking a stunning landscape picture. Have a look at this quick wide angle photography introduction to get you up to speed.
            <Link to="/photography/wideangle">Read More...</Link>
          </p>
          <h4>Recommanded gear:</h4>
            <ul className="ul_bullet">
              <li>
                Wide-angle lens such as a 24mm which tends to be a good starting point for those wanting to try wide-angle photography
              </li>
              <li>
                Tripod – it's always advised to shoot with a tripod, particularly for landscape work as they slow you down and make you think about composition more. Something strong yet lightweight such as a Carbon Fibre tripod will give you the support you need without breaking your back after carrying up hills all day.
              </li>
            </ul>

            <h4>Add foreground interest</h4>
            <p>
              A large part of your shot will be foreground so if it's not very interesting it'll make your shot boring. If you find the spot your stood at doesn't have anything particularly interesting in foreground consider moving to a different location; if the vista you're trying to capture won't look as good from somewhere else switch lenses to one that has a long rather than wide focal length.
            </p><br></br>
            <p>
              When you're looking for foreground interest it can be anything from the shore of a lake to interesting boulder/rock formations or lines such as fallen tree trunks, paths and fences. A little bit of careful framing will also ensure that the foreground interest will help guide the eye through the shot to what's in the background.
            </p>
            <h4>Size matters</h4>
            <p>
              Objects that are towards the back of the frame will appear even smaller when photographed with a wider lens so you may have to move closer to your subject than you first thought. <span>Perspective distortion</span> can occur if you have objects such as a building too close to your lens. On buildings this can mean the front of the building appearing much larger than the rest of it. Wides also have a tendency to cause verticals to converge too so if you have a lot of verticals in your frame, make sure you keep an eye out for it. To avoid it, you can compose your shot so the verticals aren't in frame, shoot the shot as you wanted to so you can correct the distortion later at your computer or there is a chance you may like the effect. It can work quite well if shooting in forests, shooting up towards the sky through a circle of trees, for example.
            </p>
            <h4>Focus</h4>
            <p>
              When shooting with wide-angle lenses so you have fore-, middle- and background interest you must make sure you have front to back sharpness in your shot. Using a small aperture will give you the extensive <span><a href="">depth-of-field</a></span> you're looking for but if you find you have objects really close to your lens you may need to use hyperfocal focusing to get the shot you want.
            </p>
        </div>
      </div>
    );
  }
}

export default Landscape;
