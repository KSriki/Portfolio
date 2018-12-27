




import React from 'react';
import { Card, CardImg, CardText, CardBody, Container,
  CardTitle, CardSubtitle, Button,Collapse } from 'reactstrap';


  class Event extends React.Component {
        render(){

            const evt = this.props.event;

            return evt ? (<div><Container>
                Type: {evt.type}, 
                Repo: {evt.repo.name},
                Time: {evt.created_at}
            </Container></div>) : null
        }
  }


  export default Event;