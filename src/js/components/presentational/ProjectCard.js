import React from 'react';
import { Card, CardImg, CardText, CardBody, Container,
  CardTitle, CardSubtitle, Button,Collapse } from 'reactstrap';
  import YouTube from 'react-youtube'

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
        const opts = {
            height: '360',
            width: '100%',
          };

        return (
      
            <Card>
                {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                <CardBody>
                <CardTitle>{proj.name} - {proj.timeline}</CardTitle>
                <CardSubtitle>{proj.tagline}</CardSubtitle>
                <CardText>{proj.summary}</CardText>
                <Button outline color="secondary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Demo Video</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Container>
                        <YouTube
                            videoId={proj.demo}
                            opts={opts}
                            onReady={this._onReady}
                        />
                    </Container>
                </Collapse>
                </CardBody>
            </Card>
        
        )
    
    }
}

export default ProjectCard;