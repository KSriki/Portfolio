


import React from 'react';

import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import Event from '../presentational/Event'

  export default class EventsList extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            eventsList: []
        }
    }
    componentDidMount(){
        fetch("https://api.github.com/users/KSriki/events?per_page=5").then(resp => resp.json()).then(events =>
        this.setState({ eventsList: [...this.state.eventsList, ...events] })
        )
    }

    render(){

     

        return (<React.Fragment>
        <Container fluid>
        <h1>My activity</h1>
        <ListGroup >
            {   this.state.eventsList.map(
                    evt => {
                        return (<ListGroupItem color="info"><Event event={evt}/></ListGroupItem>)
                    }
                )
            }
        </ListGroup>
        </Container>
        </React.Fragment>);

    }

}