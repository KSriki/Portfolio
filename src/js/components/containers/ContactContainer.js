import React from 'react';

  import {Container} from 'reactstrap'; 
  import { SocialIcon } from 'react-social-icons';

  export default class ContactContainer extends React.Component {




    render(){


        return (
          <footer id="contact">
                <Container fluid style={{width: "65%", textAlign:"center"}}>
                  <h3>Contact</h3>
                  
                  <SocialIcon url="https://github.com/KSriki" />
                  <SocialIcon url="https://www.linkedin.com/in/srikant-kumar-kalaputapu-98749271/" />
                  <SocialIcon url="https://medium.com/@skalaputapu" />
                  <SocialIcon url="mailto:skalaputapu@gmail.com" />
               
                </Container>
                </footer>
        );

    }

  }