




import React from 'react';
import { Card, CardImg, CardText, CardBody, Container,
  CardTitle, CardSubtitle, Button,Collapse } from 'reactstrap';


  class Event extends React.Component {
        render(){

            const evt = this.props.event;
            const options = {weekday: 'short', month: 'short', day: 'numeric' };

            return evt ? (<React.Fragment><Container fluid className="text-justify" >
                {evt.type} for {evt.repo.name} @ {(new Date(evt.created_at)).toLocaleString('eng',options)}
            </Container></React.Fragment>) : null
        }
  }


  export default Event;