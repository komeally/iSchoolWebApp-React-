import React from 'react';
import getData from '../../utils/getData';
import EmploymentTable from './EmploymentTable';
import CoopTable from './CoopTable';

export default class Employment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employers:{},
            employersLoaded: false
        }
    }

    componentDidMount() {
        getData("employment/introduction/")
            .then((json) => {
                this.setState({
                    employers:json.introduction,
                    employersLoaded:true
                })
            }).catch((err) => {
                console.log(err);
        });
    }

    render() {
        const {employers, employersLoaded} = this.state;

        if(!employersLoaded) return <div><h1>Loading...</h1></div>;

        return(
            //this return brings in all employer data combined with the datagrids
            <div>
                <h2>Employment Information</h2>
                <h3 style={{marginBottom: "1em"}}>{employers.title}</h3>
                <h4>{employers?.content[0].title}</h4> 
                <p>{employers?.content[0].description}</p>
                <EmploymentTable/>
                <h4>{employers?.content[1].title}</h4>
                <p>{employers?.content[1].description}</p>
                <CoopTable/>
            </div>
        )
    }
}
