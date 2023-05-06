import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import getData from '../../utils/getData';

const columns = [
  {field: 'employer', headerName: 'Employer', width: 150, editable: true},
  {field: 'degree', headerName: 'Degree', width: 150, editable: true},
  {field: 'city', headerName: 'City', width: 110, editable: true},
  {field: 'title', headerName: 'Title', width: 160, editable: true},
];

const EmploymentTable = () => {
    const [tableData, populateTable] = useState([]);

    useEffect(() => {
        getData("employment/employmentTable/professionalEmploymentInformation/")
        .then((data) => {
          const table = data.professionalEmploymentInformation.map((info, i) => ({
            id: i + 1,
            employer: info.employer,
            degree: info.degree,
            city: info.city,
            title: info.title
          }));
          populateTable(table)
        })
    })

    return (
        <Box sx={{ height: 400, width: '100%'}}>
          <DataGrid
            rows={tableData}
            columns={columns}
            loading={!tableData.length}
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
    );
}
export default EmploymentTable;