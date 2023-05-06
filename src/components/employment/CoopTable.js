import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import getData from '../../utils/getData';

export default class CoopTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employer:{},
            employerLoaded: false
        }
    }

    componentDidMount() {
        getData('employment/coopTable/coopInformation/')
            .then((json) => {
                this.setState({
                    employer:json.coopInformation,
                    employerLoaded:true
                })
            }).catch((err) => {
                console.log(err);
        });
    }

    render() {
        const {employer, employerLoaded} = this.state;

        //columns for data
        const columns = [
            {field: 'employer', headerName: 'Employer', width: 150, editable: true},
            {field: 'degree', headerName: 'Degree', width: 150, editable: true},
            {field: 'city', headerName: 'City', width: 110, editable: true},
            {field: 'term', headerName: 'term', width: 160, editable: true},
          ];

          //making a row index field for every object in the array
          for (let index = 0; index < employer.length; index++) {
            employer[index].id = index;
          }

          if(!employerLoaded) return <div><h1>Loading...</h1></div>;
          
        return(
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    loading={!employer.length}
                    rows={employer}
                    columns={columns}
                    pageSize={100}
                    checkboxSelection
                    disableRowSelectionOnClick
                    sx={{
                        boxShadow: 2,
                        border: 2,
                        borderColor: 'primary.light',
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        },
                    }}
                />
            </Box>
        )
    }   
}