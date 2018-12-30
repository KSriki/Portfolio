import React from 'react';

import ProjectCard from '../presentational/ProjectCard';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';

import projects from '../../constants/projects'

  export default class ProjectsList extends React.Component {







    render(){


        return (<React.Fragment>
        <Container fluid style={{width: "65%", textAlign:"center"}}>
        <h3>Some of my personal projects: </h3>
        <ListGroup>
            {projects.map(project => {return (<ListGroupItem key={project.name} ><ProjectCard project={project}/> </ListGroupItem> )})}
            


        </ListGroup>
        </Container>
        </React.Fragment>);

    }

}