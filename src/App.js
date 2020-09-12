import React from "react";
import Info from "./components/info"
import Weather from "./components/weather"
import Form from "./components/form"
import Sora from "./components/sora"

const API_KEY ="a10d2595129a7ca2b81cf6251407efb2"

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    pressure: undefined,
    speed: undefined,
    error: undefined,
  }

    gettingWeather = async (event)=> {
      event.preventDefault();
      var  city= event.target.elements.city.value;


        if(city){
          const api_url = await
          fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
          const data = await api_url.json();
          console.log(data);

          if(data.cod === '404'){
            this.setState({
              error: 'Введіть правильну назву англійською'
            })
            return;
          }


        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          speed: data.wind.speed,
          description: data.weather[0].description,
          pressure: data.main.pressure,
          error: undefined
        });
     } else{
       this.setState({
         temp: undefined,
         city: undefined,
         country: undefined,
         pressure: undefined,
         humidity: undefined,
         speed: undefined,
         description: undefined,
         error: "Будь ласка, введіть місто",
       })
     }
    }

  render(){
    return(

      <div className="wrapper">
      <div className="main">
      <div className="container">
      <div className="row">
       <div className="col-sm-5 info">
       <Info/>
       </div>
       <div className="col-sm-7 form">
       <Sora weatherMet={this.gettingWeat}/>
       <Form weatherMethod={this.gettingWeather}/>
       <Weather
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        speed={this.state.speed}
        description={this.state.description}
        pressure={this.state.pressure}
        error={this.state.error}
              />
       </div>
       </div>
        </div>
       </div>
      </div >
    );
  }
}


export default App;
