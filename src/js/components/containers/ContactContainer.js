import React from 'react';

  import {Container} from 'reactstrap'; 
  import { SocialIcon } from 'react-social-icons';

  export default class ContactContainer extends React.Component {




    render(){


        return (
                <Container fluid>
                  <h1>Contact</h1>
                  <SocialIcon url="https://github.com/KSriki" />
                  <SocialIcon url="https://www.linkedin.com/in/srikant-kumar-kalaputapu-98749271/" />
                  <SocialIcon url="https://medium.com/@skalaputapu" />
                  <SocialIcon url="mailto:skalaputapu@gmail.com" />
               
                </Container>
        );

    }

  }