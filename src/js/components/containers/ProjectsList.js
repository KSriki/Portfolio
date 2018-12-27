import React from 'react';

import ProjectCard from '../presentational/ProjectCard';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';

import projects from '../../constants/projects'

  export default class ProjectsList extends React.Component {







    render(){


        return (<div>
        <Container fluid>
        <h1>Some of my personal projects: </h1>
        <ListGroup>
            {projects.map(project => {return (<ListGroupItem><ProjectCard key={project.name} project={project}/> </ListGroupItem> )})}
            


        </ListGroup>
        </Container>
        </div>);

    }

}