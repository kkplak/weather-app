import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { HiMenuAlt4 } from "react-icons/hi";




class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tokyoWeather: [],

    }
  }

  componentDidMount() {
 this.fetchData();
}

fetchData(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=tokio&units=metric&APPID= your API KEY goes here ')
  .then(response => response.json())
  .then(data => {
     console.log(data); 

     var tokyo = data; 
     var tokyoWeather = data.weather[0].main; 
   

   
  
      this.setState({tokyo: tokyo}); 
      this.setState({tokyoMainWeather: tokyoWeather}); 
 
  })
  .catch(error => console.log('parsing failed', error))
}



  render() {
    return ( 
   
  <div class='weatherJS'>
      <div id='topNav'>
        <p>KKPLAK</p>
        <HiMenuAlt4></HiMenuAlt4>
       
       </div>
    <div id='temp'>{ this.state.tokyo && this.state.tokyo.main.temp.toFixed()}&deg;C</div> 
    <p id='city' >Tokyo</p>
    <p id='loc'>Greater Tokyo Area, Japan</p>
      <div id='time'>
         <Moment tz="Asia/Tokyo" interval={100} format='hh:mm a - dddd D MMM yyyy' />
      </div>


  </div>
   
   
    );
  }
}

export default Weather;