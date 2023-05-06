//this is going to be our tabs!
//App > PeopleTabs > PeopleGroup > PeopleModal

import React from 'react'
import { Tab } from 'semantic-ui-react'
import getData from '../../utils/getData';
import PeopleGroup from './PeopleGroup';

//build this as a class

export default class PeopleTab extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            people:{},
            peopleLoaded:false
        }
        
    }

    componentDidMount() {
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

        const panes = [
            /*the 2 key="" below are VERY IMPORTANT, if the interaction
              doesn't change the state, then React will NOT redraw, so you can force it 
              to redraw if there is a key change.
            */
            { menuItem: 'Faculty', render: () => <Tab.Pane><PeopleGroup group={people.faculty} title="Faculty" key="1"/></Tab.Pane> },
            { menuItem: 'Staff', render: () => <Tab.Pane><PeopleGroup group={people.staff} title="Staff" key="2"/></Tab.Pane> }
        ]

        
        //this return is ONLY for display before data is loaded
        if(!peopleLoaded) return <div><h1>Loading...</h1></div>;

        //this return is for after the data is loaded!
        return(
            <div>
                <h1>{people.title}</h1>
                <h3>{people.subTitle}</h3>
                <Tab panes={panes}/>
            </div>
        );
    }
}

/*
const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic;
*/