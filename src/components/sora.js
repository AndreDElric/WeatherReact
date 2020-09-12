import React from "react";

const Sora = props => (
  <form onSubmit={props.weatherMet}>
  <input type="text" name="city" placeholder="Ваша пошта"/>
  <button>Підписатись</button>
  </form>

    );

export default Sora;
