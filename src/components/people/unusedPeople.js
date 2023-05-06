import React from 'react';
import getData from '../../utils/getData';
import PeopleModal from './PeopleModal';

export default class People extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people:{},
            peopleLoaded:false
        }
    }

    componentDidMount() {
        //get data
        getData('people/')
            .then((json) => {
                this.setState({
                    people:json,
                    peopleLoaded:true
                })
            }).catch((err) => {
                console.log(err);
        });
    }
    
    render() {
        const {people, peopleLoaded} = this.state;

        //first case
        if(!peopleLoaded) return (
        <div>
            <h2>Faculty</h2>
            <p>Loading...</p>
        </div>
        );

        //when we have data!
        return (
            <div>
                <h2>{people.title}</h2>
                <h6>{people.subTitle}</h6>
                <h3>Faculty</h3>
                <div className='peopleList'>
                    {/* loop through all of the faculty */}
                    {people.faculty.map( (person) => 
                        <div className='peopleListItem'>
                            <img src={person.imagePath} style={{maxWidth:"150px"}} alt='me'></img>
                            <PeopleModal {...person}/>
                        </div>
                    )}
                </div>

                <h3>Staff</h3>
                <div className='peopleList'>
                    {/* loop through all of the staff */}
                    {people.staff.map( (person) => 
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

