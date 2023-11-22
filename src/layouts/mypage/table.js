import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'empName', headerName: 'Emp name', width: 130 },
  { field: 'level', headerName: 'Level', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
  },
  
  
];

const rows = [
  { id: 1, empName: ' Goutami Jadhav', level: 'LTTS-3', age: 23 },
  { id: 2, empName: ' charishma pappala', level: 'LTTS-3', age: 23 },
  { id: 3, empName: ' Motish g', level: 'LTTS-3', age: 22 },
  { id: 4, empName: ' rohini singh', level: 'LTTS-4', age: 24 },
  { id: 5, empName: ' praveen singh', level: 'LTTS-3', age: 22 },
  { id: 6, empName: ' sharuk singh', level: 'LTTS-5', age: 45 },
  { id: 7, empName: ' pratiksha j', level: 'LTTS-3', age: 25 },
  { id: 8, empName: ' ishwar k', level: 'LTTS-2', age: 35 },
  { id: 9, empName: ' goutam kolar', level: 'LTTS-3', age: 50 },
  
];

export default function DataTable1() {
    
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}