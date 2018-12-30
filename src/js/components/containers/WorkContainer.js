import React from 'react';

  import rs from 'reactstrap'; 
import ProjectsList from './ProjectsList';
import EventsList from './EventsList';


  export default class WorkContainer extends React.Component {




    render(){


        return (<React.Fragment>

            <ProjectsList/>
            {/* either work history or github activity */}
            <EventsList />
            {/* Work Goes Here */}
        </React.Fragment>);

    }

  }