import React from 'react';
import getData from '../../utils/getData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Degrees.css';
import {UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem} from 'reactstrap';
import ListGroup from 'react-bootstrap/ListGroup';

export default class GradAccordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            graduate: {},
            graduateLoaded: false
        }
    }

    componentDidMount() {
        getData("degrees/graduate/")
            .then((json) => {
                this.setState({
                    graduate:json.graduate,
                    graduateLoaded:true
                })
            }).catch((err) => {
                console.log(err);
        });
    }
    
    render() {
        const {graduate, graduateLoaded} = this.state

        if(!graduateLoaded) return <div><h1>Loading...</h1></div>;

        return (
            <div className='accordion'>
                <h2>Graduate</h2>
                    {graduate.filter((degree) => degree.hasOwnProperty('title'))
                    .map( (degree, index) => 
                        <UncontrolledAccordion defaultOpen="1">   
                            <AccordionItem>
                                <AccordionHeader targetId={toString(index + 1)}>{degree.title + "(" + degree.degreeName.toUpperCase() + ")"}</AccordionHeader>
                                <AccordionBody accordionId={toString(index + 1)}>
                                    <p>{degree.description}</p>
                                    <h4>Concentrations:</h4>
                                    <ListGroup>
                                        {degree.concentrations.map((concentration) => 
                                            <ListGroup.Item>{concentration}</ListGroup.Item>
                                        )}
                                    </ListGroup>
                                </AccordionBody>                    
                            </AccordionItem>
                        </UncontrolledAccordion>
                    )}
            </div>
        )
    }
}