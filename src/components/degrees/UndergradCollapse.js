import React, { useEffect, useState } from 'react';
import { Collapse, List } from 'antd';
import './Degrees.css';
import getData from '../../utils/getData';

const UndergradCollapse = () => {
    const [degreeData, getDegrees] = useState([]);
    const { Panel } = Collapse;

    useEffect(() => {getData("degrees/undergraduate/").then((data) => getDegrees(data.undergraduate))});
    
    return(
        <div className='accordion'>
            <h2>Undergraduate</h2>
            <Collapse bordered={false}>
                {degreeData.map( (degree, index) => 
                    <Panel header={degree.title + " (" + degree.degreeName.toUpperCase() + ")"} key={index + 1}>
                        <p>{degree.description}</p>
                        <h4>Concentrations:</h4>
                        <List
                            size="small"
                            bordered
                            dataSource={degree.concentrations}
                            renderItem={(item) => <List.Item>{item}</List.Item>}
                        />
                    </Panel>
                )}    
            </Collapse>
        </div>
    )
}

export default UndergradCollapse;