import React, { useState, useEffect, useCallback } from 'react';

import database from '../../services/olympic-winners.json';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import OptionHeader from '../../components/OptionHeader';
import MedalistTable from '../../components/MedalistTable';

export default function Medalists() {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(0);

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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

      const medalistFiltered = database
        .filter(
          (value, index, array) =>
            index ===
            array.findIndex((athlete) => athlete.athlete === value.athlete)
        )
        .map((athlete) => athlete.athlete);

      const medalistAmount = [];

      medalistFiltered.forEach((athlete) => {
        const medalistData = database.filter(
          (medalist) => medalist.athlete === athlete
        );

        const medalistCountry = medalistData
          .filter(
            (value, index, array) =>
              index ===
              array.findIndex((country) => country.country === value.country)
          )
          .map((country) => country.country);

        const medalistSport = medalistData
          .filter(
            (value, index, array) =>
              index === array.findIndex((sport) => sport.sport === value.sport)
          )
          .map((sport) => sport.sport);

        const medalistAmountYears = medalistData
          .filter(
            (value, index, array) =>
              index === array.findIndex((year) => year.year === value.year)
          )
          .map((year) => year.year);

        medalistAmountYears.forEach((year) => {
          const { gold, silver, bronze } = medalistData
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

          medalistAmount.push({
            year,
            athlete,
            country: medalistCountry,
            sport: medalistSport,
            gold,
            silver,
            bronze,
            total: gold + silver + bronze,
          });
        });
      });

      setData(medalistAmount.sort((a, b) => b.total - a.total));
    }
    loadMedalistData();
  }, []);

  useEffect(() => {
    if (selectedYear !== 0) {
      const medalistSummary = data.filter(
        (medalist) => medalist.year === Number(selectedYear)
      );

      setFilteredData(medalistSummary);
    }
  }, [selectedYear]);

  return (
    <Container>
      <Header />
      <Content>
        <h1 id="title">Medals - Medalists</h1>

        <OptionHeader
          route="/"
          years={years}
          onChange={handleSelectionYear}
          value={selectedYear}
        >
          General
        </OptionHeader>

        <MedalistTable data={filteredData} />
      </Content>
    </Container>
  );
}
