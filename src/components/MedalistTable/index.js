import React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

import { FiAward } from 'react-icons/fi';

import { Container } from './styles';

export default function MedalistTable({ data }) {
  const customStyles = {
    headCells: {
      style: {
        fontSize: '16px',
        fontWeight: 700,
      },
    },
  };

  const columns = React.useMemo(
    () => [
      {
        name: 'Athlete',
        selector: 'athlete',
        width: '25%',
        sortable: true,
      },
      {
        name: 'Country',
        selector: 'country',
        sortable: true,
      },
      {
        name: 'Sport',
        selector: 'sport',
        sortable: true,
      },
      {
        name: <FiAward />,
        selector: 'gold',
        sortable: true,
        style: { color: '#efc026' },
        right: true,
      },
      {
        name: <FiAward />,
        selector: 'silver',
        sortable: true,
        style: { color: '#abb8bc' },
        right: true,
      },
      {
        name: <FiAward />,
        selector: 'bronze',
        sortable: true,
        style: { color: '#cb7738' },
        right: true,
      },
      {
        name: 'Total',
        selector: 'total',
        sortable: true,
        right: true,
      },
    ],
    []
  );

  return (
    <Container>
      <DataTable
        title="Ranking"
        columns={columns}
        data={data}
        customStyles={customStyles}
      />
    </Container>
  );
}

MedalistTable.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

MedalistTable.defaultProps = {
  data: [],
};
