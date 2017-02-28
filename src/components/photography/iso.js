import React, { Component } from 'react';

class Iso extends Component {
  render() {
    return (
      <div className="iso">
        <div className="page_header">
          <h1>ISO</h1>
        </div>
        <div className="photography_page_content">
          <p>
            It is challenging to take good pictures without a good understanding of how ISO works and what it does. Camera ISO is one of the three pillars of photography (the other two being Aperture and Shutter Speed) and every photographer should thoroughly understand it, to get the most out of their equipment.
          </p>
          <br/>
          <h4>1. What is ISO?</h4>
          <p>
            In very basic terms, ISO is the level of sensitivity of your camera to available light. The lower the ISO number, the less sensitive it is to the light, while a higher ISO number increases the sensitivity of your camera. The component within your camera that can change sensitivity is called “image sensor” or simply “sensor”. It is the most important (and most expensive) part of a camera and it is responsible for gathering light and transforming it into an image. With increased sensitivity, your camera sensor can capture images in low-light environments without having to use a flash. But higher sensitivity comes at an expense – it adds grain or “noise” to the pictures.
          </p>
          <p>Consider the following picture;</p>
          <img src="https://c8.staticflickr.com/1/597/32134140831_149b18c88e_b.jpg" alt="iso_1"/><br/>
          <p>
            The difference is clear – the image on the right hand side at ISO 3200 has a lot more noise in it, than the one on the left at ISO 200.
          </p>
          <p>
            Every camera has something called “Base ISO“, which is typically the lowest ISO number of the sensor that can produce the highest image quality, without adding noise to the picture. On most of the new Nikon cameras such as Nikon D5100, the base ISO is typically 200, while most Canon digital cameras have the base ISO of 100. So, optimally, <span>you should always try to stick to the base ISO to get the highest image quality</span>. However, it is not always possible to do so, especially when working in low-light conditions.
          </p>
          <br/>
          <p>
            Typically, ISO numbers start from 100-200 (Base ISO) and increment in value in geometric progression (power of two). So, the ISO sequence is: 100, 200, 400, 800, 1600, 3200, 6400 and etc. The important thing to understand, is that each step between the numbers effectively doubles the sensitivity of the sensor. So, ISO 200 is twice more sensitive than ISO 100, while ISO 400 is twice more sensitive than ISO 200. This makes ISO 400 four times more sensitive to light than ISO 100, and ISO 1600 sixteen times more sensitive to light than ISO 100, so on and so forth. What does it mean when a sensor is sixteen times more sensitive to light? It means that it needs sixteen times less time to capture an image!
          </p>
          <br/>
          <ul>
            <span>ISO Speed Example:</span>
            <li>ISO 100 – 1 second</li>
            <li>ISO 200 – 1/2 of a second</li>
            <li>ISO 400 – 1/4 of a second</li>
            <li>ISO 800 – 1/8 of a second</li>
            <li>ISO 1600 – 1/16 of a second</li>
            <li>ISO 3200 – 1/32 of a second</li>
          </ul>
          <br/>
          <p>
            In the above ISO Speed Example, if your camera sensor needed exactly 1 second to capture a scene at ISO 100, simply by switching to ISO 800, you can capture the same scene at 1/8th of a second or at 125 milliseconds! That can mean a world of difference in photography, since it can help to freeze motion.
          </p>
          <br/>
          <h4>2. When to use low ISO</h4>
          <p>
            You should always try to stick to the lowest ISO (base ISO) of your camera, which is typically ISO 100 or 200, whenever possible. When there is plenty of light, you should always use the lowest ISO, to retain the most detail and to have the highest image quality. There are some cases where you might want to use low ISO in dim or dark environments – for example, if you have your camera mounted on a tripod or sitting on a flat surface.
          </p>
          <br/>
          <h4>3. When to increase ISO</h4>
          <p>
            You should increase the ISO when there is not enough light for the camera to be able to quickly capture an image. Anytime I shoot indoors without a flash, I set my ISO to a higher number to be able to capture the moment without introducing blur to the image. Other cases where you might want to increase ISO are when you need to get ultra-fast shots, like the bird picture I posted above. But before increasing the ISO, you should think if it is OK for you to introduce noise to the image.
          </p>
        </div>
      </div>
    );
  }
}

export default Iso;
