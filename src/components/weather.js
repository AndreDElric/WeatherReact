import React from "react";



      const Weather = props => (
  <div className="weather__info">
   {
     props.city && props.country && <p className="weather__key"> Місцеположення:
       <span className="weather__value"> { props.city }, { props.country }</span>
     </p>
   }
   {
     props.temp && <p className="weather__key"> Температура:
       <span className="weather__value"> { props.temp } C </span>
     </p>
   }
   {
     props.pressure && <p className="weather__key"> Тиск:
       <span className="weather__value"> { props.pressure } мбар  </span>
     </p>
   }
   {
     props.humidity && <p className="weather__key">Вологість:
       <span className="weather__value"> { props.humidity } % </span>
     </p>
   }
   {
     props.speed && <p className="weather__key">Швидкість вітру:
       <span className="weather__value"> { props.speed } км/год </span>
     </p>
   }
   {
     props.description && <p className="weather__key"> Загальний опис:
       <span className="weather__value"> { props.description } </span>
   </p>
   }
   {
     props.error && <p className="weather__error">{ props.error }</p>
   }
  </div>
);


export default Weather;
