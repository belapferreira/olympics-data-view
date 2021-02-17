import React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

import { Container } from './styles';

export default function Table({ data, columns }) {
  const customStyles = {
    headCells: {
      style: {
        fontSize: '16px',
        fontWeight: 700,
      },
    },
  };

  return (
    <Container>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        paginationRowsPerPageOptions={[10, 50, 150, 300, 600, 900]}
        pagination
        persistTableHead
      />
    </Container>
  );
}

Table.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  columns: PropTypes.instanceOf([]),
};

Table.defaultProps = {
  data: [],
  columns: [],
};
