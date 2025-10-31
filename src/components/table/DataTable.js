// src/components/ui/DataTable.jsx
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
  Checkbox
} from '@mui/material';
import { useIntl } from 'react-intl';

const DataTable = ({
  columns,
  data,
  page = 0,
  rowsPerPage = 10,
  onPageChange = () => {},
  onRowsPerPageChange = () => {},
  onSort,
  totalCount = 0,
  selectable = false,
  selectedRows = [],
  onSelectRow,
  onSelectAllRows
}) => {
  const Intl = useIntl()
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(columnId);
    onSort?.(columnId, isAsc ? 'desc' : 'asc');
  };

  const handleSelectAll = (event) => {
    onSelectAllRows?.(event.target.checked ? data.map(row => row.id) : []);
  };

  const handleSelectRow = (event, id) => {
    onSelectRow?.(id, event.target.checked);
  };

  return (
    <Paper elevation={2} sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {selectable && (
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selectedRows.length > 0 && selectedRows.length < data.length}
                    checked={data.length > 0 && selectedRows.length === data.length}
                    onChange={handleSelectAll}
                  />
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  sortDirection={orderBy === column.field ? order : false}
                  sx={{ fontWeight: 'bold', backgroundColor: 'primary.main', color: 'white' }}
                >
                  {column.sortable ? (
                    <TableSortLabel
                      active={orderBy === column.field}
                      direction={orderBy === column.field ? order : 'asc'}
                      onClick={() => handleSort(column.field)}
                    >
                      {column.headerName}
                    </TableSortLabel>
                  ) : (
                    column.headerName
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow 
                key={row.id} 
                hover
                selected={selectedRows.includes(row.id)}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {selectable && (
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedRows.includes(row.id)}
                      onChange={(event) => handleSelectRow(event, row.id)}
                    />
                  </TableCell>
                )}
                {columns.map((column) => (
                  <TableCell key={column.field}>
                    {column.renderCell ? column.renderCell(row) : 
                     column.format ? column.format(row[column.field]) : 
                     row[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        labelRowsPerPage={Intl.formatMessage({id:"table-row-in-page"})}
        labelDisplayedRows={({ from, to, count }) => 
          `${from}-${to} از ${count !== -1 ? count : `more than ${to}`}`
        }
      />
    </Paper>
  );
};

export default DataTable;