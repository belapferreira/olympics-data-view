import React, { useState, useEffect, useCallback } from 'react';

import database from '../../services/olympic-winners.json';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import OptionHeader from '../../components/OptionHeader';
import GeneralTable from '../../components/GeneralTable';

export default function Main() {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(0);

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleSelectionYear = useCallback((event) => {
    setSelectedYear(event.target.value);
  }, []);

  useEffect(() => {
    async function loadGeneralData() {
      const yearsFiltered = database
        .filter(
          (value, index, array) =>
            index === array.findIndex((year) => year.year === value.year)
        )
        .map((year) => year.year);

      const yearsSorted = yearsFiltered.sort((a, b) => b - a);

      setSelectedYear(yearsSorted[0]);

      setYears(yearsSorted);

      const countryFiltered = database
        .filter(
          (value, index, array) =>
            index ===
            array.findIndex((country) => country.country === value.country)
        )
        .map((country) => country.country);

      const totalMedals = [];

      countryFiltered.forEach((country) => {
        const countryData = database.filter(
          (countries) => countries.country === country
        );

        const countryDataYears = countryData
          .filter(
            (value, index, array) =>
              index === array.findIndex((year) => year.year === value.year)
          )
          .map((year) => year.year);

        countryDataYears.forEach((year) => {
          const { gold, silver, bronze } = countryData
            .filter((yearSelected) => yearSelected.year === year)
            .reduce(
              (accumulator, current) => {
                accumulator.gold += current.gold;
                accumulator.silver += current.silver;
                accumulator.bronze += current.bronze;

                return accumulator;
              },
              { gold: 0, silver: 0, bronze: 0 }
            );

          totalMedals.push({
            year,
            country,
            gold,
            silver,
            bronze,
            total: gold + silver + bronze,
          });
        });
      });

      setData(totalMedals.sort((a, b) => b.total - a.total));
    }
    loadGeneralData();
  }, []);

  useEffect(() => {
    if (selectedYear !== 0) {
      const countrySummary = data.filter(
        (country) => country.year === Number(selectedYear)
      );

      setFilteredData(countrySummary);
    }
  }, [selectedYear]);

  return (
    <Container>
      <Header />

      <Content>
        <h1 id="title">Medals - General</h1>

        <OptionHeader
          route="/medalists"
          years={years}
          onChange={handleSelectionYear}
          value={selectedYear}
        >
          Medalists
        </OptionHeader>

        <GeneralTable data={filteredData} />
      </Content>
    </Container>
  );
}
