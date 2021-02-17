import React, { useEffect, useState, useCallback } from 'react';

import database from '../../services/olympic-winners.json';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import OptionHeader from '../../components/OptionHeader';
import Table from '../../components/Table';
import GoldTitle from '../../components/GoldTitle';
import SilverTitle from '../../components/SilverTitle';
import BronzeTitle from '../../components/BronzeTitle';

export default function Medalist() {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(0);

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const columns = [
    {
      name: 'Athlete',
      selector: 'athlete',
      width: '20%',
      sortable: true,
    },
    {
      name: 'Sport',
      selector: 'sport',
      width: '12%',
      sortable: true,
    },
    {
      name: 'Country',
      selector: 'country',
      width: '20%',
      sortable: true,
    },
    {
      name: <GoldTitle />,
      selector: 'gold',
      width: '12%',
      sortable: true,
      right: true,
    },
    {
      name: <SilverTitle />,
      selector: 'silver',
      width: '12%',
      sortable: true,
      right: true,
    },
    {
      name: <BronzeTitle />,
      selector: 'bronze',
      width: '12%',
      sortable: true,
      right: true,
    },
    {
      name: 'Total',
      selector: 'total',
      width: '12%',
      sortable: true,
      right: true,
    },
  ];

  const handleSelectionYear = useCallback((event) => {
    setSelectedYear(event.target.value);
  }, []);

  useEffect(() => {
    async function loadMedalistData() {
      const yearsFiltered = database
        .filter(
          (value, index, array) =>
            index === array.findIndex((year) => year.year === value.year)
        )
        .map((year) => year.year);

      const yearsSorted = yearsFiltered.sort((a, b) => b - a);

      setSelectedYear(yearsSorted[0]);

      setYears(yearsSorted);

      const athleteFiltered = database
        .filter(
          (value, index, array) =>
            index ===
            array.findIndex(
              (athlete) =>
                athlete.athlete === value.athlete && value.athlete !== ''
            )
        )
        .map((athlete) => athlete.athlete);

      const athleteMedals = [];

      athleteFiltered.forEach((athlete) => {
        const athleteData = database.filter(
          (athleteItem) => athleteItem.athlete === athlete
        );

        yearsSorted.forEach((year) => {
          const { gold, silver, bronze, country, sport } = athleteData
            .filter((yearData) => yearData.year === Number(year))
            .reduce(
              (accumulator, current) => {
                accumulator.gold += current.gold;
                accumulator.silver += current.silver;
                accumulator.bronze += current.bronze;
                accumulator.country = current.country;
                accumulator.sport = current.sport;

                return accumulator;
              },
              { gold: 0, silver: 0, bronze: 0, country: '', sport: '' }
            );

          athleteMedals.push({
            year,
            athlete,
            country,
            sport,
            gold,
            silver,
            bronze,
            total: gold + silver + bronze,
          });
        });
      });

      setData(athleteMedals.sort((a, b) => b.total - a.total));
    }

    loadMedalistData();
  }, []);

  useEffect(() => {
    if (selectedYear !== 0) {
      const athleteSummary = data.filter(
        (athlete) => athlete.year === Number(selectedYear)
      );

      setFilteredData(athleteSummary);
    }
  }, [selectedYear]);

  return (
    <Container>
      <Header />
      <Content>
        <h1 id="title">Medals - Medalists</h1>

        <OptionHeader
          leftRoute="/"
          rightRoute="/sports"
          years={years}
          onChange={handleSelectionYear}
          value={selectedYear}
          left="General"
          right="Sports"
        />

        <Table data={filteredData} columns={columns} />
      </Content>
    </Container>
  );
}
