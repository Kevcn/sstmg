//Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

//Components
//Pages
import Frame from './components/Frame.js';
import Home from './components/Home';
import Photography from './components/Photography';
import Workshop from './components/Workshop';
import Travel from './components/Travel'

//Travel Page
import Travel_home from './components/travel/travel_home';
import Italy from './components/travel/italy';
import France from './components/travel/france';
import Holland from './components/travel/holland';
import Turkey from './components/travel/turkey';

// Photography page
import Photography_home from './components/photography/Photography_home';
import Aperture from './components/photography/aperture';
import ISO from './components/photography/iso';
import Shutter from './components/photography/shutter';
import D5500 from './components/photography/d5500';
import Accessories from './components/photography/accessories';
import Portrait from './components/photography/portrait';
import Landscape from './components/photography/landscape';
import Nightscene from './components/photography/nightscene';
import Wideangle from './components/photography/wideangle';

//Route
const routes = (
  <Router history={browserHistory}>
    <Route component={Frame}>
      <Route path="/" component={Home} url="https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml"/>
      <Route path="travel" component={Travel}>
        <IndexRoute component={Travel_home}/>
        <Route path="italy" component={Italy}/>
        <Route path="france" component={France}/>
        <Route path="holland" component={Holland}/>
        <Route path="turkey" component={Turkey}/>
      </Route>
      <Route path="workshop" component={Workshop}/>
    </Route>
      <Route path="photography" component={Photography}>
        <IndexRoute component={Photography_home} landscape="https://c1.staticflickr.com/3/2106/33009660086_d8c0a1d549.jpg" portrait="https://c1.staticflickr.com/3/2481/32236024953_ebab2f32e0_o.jpg" nightscene="https://c1.staticflickr.com/4/3885/32206437264_bffa1c0f1a.jpg" d5500="https://c1.staticflickr.com/3/2123/32237303153_67b30817f1.jpg"/>
        <Route path="aperture" component={Aperture}/>
        <Route path="iso" component={ISO} title="ISO"/>
        <Route path="shutter" component={Shutter} title="Shutter Speed"/>
        <Route path="d5500" component={D5500} title="Nikon D5500"/>
        <Route path="accessories" component={Accessories} title="Accessories"/>
        <Route path="portrait" component={Portrait} title="Portrait"/>
        <Route path="landscape" component={Landscape} title="Landscape"/>
        <Route path="nightscene" component={Nightscene} title="Night Scene"/>
        <Route path="wideangle" component={Wideangle} title="Wide Angle Photography"/>
      </Route>
  </Router>
)




export default routes;
