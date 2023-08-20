import React from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { generatePath, useNavigate } from 'react-router-dom';
import { routes } from 'lib/router/Router';
import { useGetAllProcessors } from 'lib/api/processors/useGetAllProcessors';
import ManufacturerImage from 'components/ManufacturerImage/ManufacturerImage';
import { useGetUserInfo } from 'lib/api/login/useGetUserInfo';

const Processors = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();

  const { data: userInfo } = useGetUserInfo();
  const { data: rows } = useGetAllProcessors();

  const columns = [
    { id: 'image', label: '', align: 'center' },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'manufacturerName', label: 'Manufacturer', minWidth: 100 },
    {
      id: 'socket',
      label: 'Socket',
      minWidth: 100,
    },
    {
      id: 'numberOfCores',
      label: 'Cores',
      minWidth: 100,
      align: 'right',
    },
    {
      id: 'numberOfThreads',
      label: 'Threads',
      minWidth: 100,
      align: 'right',
    },
    {
      id: 'baseClockSpeed',
      label: 'Base clock speed',
      minWidth: 100,
      align: 'right',
    },
    {
      id: 'boostClockSpeed',
      label: 'Boost clock speed',
      minWidth: 100,
      align: 'right',
    },
    {
      id: 'retailPrice',
      label: 'Price',
      minWidth: 100,
      align: 'right',
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onProcessorClick = (id) => {
    navigate(generatePath(routes.PROCESSORS_DETAILS, { id }));
  };

  const onCreateClick = () => {
    navigate(generatePath(routes.PROCESSORS_CREATE));
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    onClick={() => onProcessorClick(row.id)}
                    sx={{ cursor: 'pointer' }}
                  >
                    {columns.map((column) => {
                      if (column.id === 'image') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <ManufacturerImage
                              manufacturerName={row.manufacturerName}
                            />
                          </TableCell>
                        );
                      } else {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {userInfo?.role === 'ROLE_ADMIN' && (
        <Box display="flex" justifyContent="end" pr={4}>
          <Button onClick={onCreateClick}>Create new processor</Button>
        </Box>
      )}
    </Paper>
  );
};

export default Processors;
