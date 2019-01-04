import React from 'react';
import Header from '../presentational/Header';
import Summary from '../presentational/Summary';


  export default class AboutContainer extends React.Component {




    render(){


        return (
            <div id="about">
                <Header/>
                <Summary/>
            </div>
          );

    }

  }