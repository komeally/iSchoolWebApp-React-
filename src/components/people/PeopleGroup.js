import React from 'react';
import PeopleModal from './PeopleModal';
import './People.css'

export default class PeopleGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            group:props.group,
            title:props.title
        }
    }
    
    render() {
        const {group, title} = this.state;
        //when we have data!
        return (
            <div>
                <h3>{title}</h3>
                <div className='peopleList'>
                    {/* loop through all of the faculty */}
                    {group.map( (person) => 
                        <div className='peopleListItem'>
                            <img src={person.imagePath} style={{maxWidth:"150px"}} alt='me'></img>
                            <PeopleModal {...person}/>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}