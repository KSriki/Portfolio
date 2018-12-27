import React from 'react';
import { Card, CardImg, CardText, CardBody, Container,
  CardTitle, CardSubtitle, Button,Collapse } from 'reactstrap';

  //no conditional rendering needed since based on array and that array is never empty
class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }
    
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
    render(){

        const proj = this.props.project;
        return (
            <div>
            <Card>
                {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                <CardBody>
                <CardTitle>{proj.name}</CardTitle>
                <CardSubtitle>{proj.tagline}</CardSubtitle>
                <CardText>{proj.summary}</CardText>
                <Button onClick={this.toggle} style={{ marginBottom: '1rem' }}>Demo Video</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Container>
                        {proj.demo}
                    </Container>
                </Collapse>
                </CardBody>
            </Card>
            </div>
        )
    
    }
}

export default ProjectCard;