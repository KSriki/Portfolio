



import React from 'react';

import { Jumbotron, Container } from 'reactstrap'; 




const Header = (props) => (
    <React.Fragment> <Jumbotron fluid className="border border-dark">
    <Container fluid>
      <h1 className="display-3">Hey, I'm Srikant Kumar Kalaputapu</h1>
      <p className="lead"> Software Engineer II </p>
      {/* add logo */}
    </Container>
  </Jumbotron></React.Fragment>
)

export default Header