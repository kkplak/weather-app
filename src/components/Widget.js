import React from 'react';
import Moment from 'react-moment';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Temperature from './Temperature'


function Widget() {
  return <div>
   <div class='widget'>

       <div class='widgetH'>
        Kantō Region Weather Forecast <br />
           <div id='hDate'><Moment format=' D MMM yyyy' /></div>
       </div>


       <div class='widgetM'>
         
         <div id='widgetNav'>
           <ul>
            <li><a href='./'>Temperature</a></li>
            <li><a href='#'>Prediction</a></li>
            <li><a href='#'>Wind</a></li>
           </ul>
         </div>
        <div id='chart'><Temperature /> </div>
       </div>


       <div class='widgetB'>
         <iframe 
       id="forecast_embed" 
       type="text/html" 
       frameborder="0" 
       height="245" 
       width="100%" 
       src="http://forecast.io/embed/#lat=35.6762&lon=139.6503&name=Tokyo&text-color=#eaeaea&units=si">
         </iframe>
       </div>

       <div class='widgetF'>
              <button  onclick="location.href='#'" id='bL'><HiArrowLeft id='arrowL'></HiArrowLeft>Kyoto</button>
              <button onclick="location.href='#'" id='bR'>Yokohama<HiArrowRight id='arrowR'></HiArrowRight></button>
       </div>
   </div>
</div>

  
}

export default Widget;





