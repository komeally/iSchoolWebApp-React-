import React, { useEffect, useState } from 'react';
import getData from '../../utils/getData';
import ExpandableCard from './ExpandableCard';

const Minors = () => {
    const [minors, getMinors] = useState([]);

    useEffect(() => {getData("minors/UgMinors/").then((data) => getMinors(data.UgMinors))});

    return (
        <div>
            <h2>Our Minors</h2>
            <div className='minorList'>
                {minors.map( (minor) => 
                    <ExpandableCard name={minor.title} description={minor.description} note={minor.note}/> 
                )}
            </div>
        </div>
    )
}


export default Minors;