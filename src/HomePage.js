import React, {Component} from 'react';
import Titre from './photo/TitreImg.jpg';
import "./index.css";

class HomePage extends Component {
  render(){

    return(
      <div id="title">
        <h1>Aftermath World Park</h1>
        <img src={Titre} />
      </div>
    )
  }

}


export default HomePage;
