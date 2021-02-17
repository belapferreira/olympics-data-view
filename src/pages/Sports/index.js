import React, { useState, useEffect, useCallback } from 'react';

import database from '../../services/olympic-winners.json';

import { Container, Content, DropdownCountry } from './styles';

import Header from '../../components/Header';
import OptionHeader from '../../components/OptionHeader';
import Table from '../../components/Table';
import GoldTitle from '../../components/GoldTitle';
import SilverTitle from '../../components/SilverTitle';
import BronzeTitle from '../../components/BronzeTitle';

export default function Sports() {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(0);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const columns = [
    {
      name: 'Sport',
      selector: 'sport',
      width: '40%',
      sortable: true,
    },
    {
      name: <GoldTitle />,
      selector: 'gold',
      width: '15%',
      sortable: true,
      right: true,
    },
    {
      name: <SilverTitle />,
      selector: 'silver',
      width: '15%',
      sortable: true,
      right: true,
    },
    {
      name: <BronzeTitle />,
      selector: 'bronze',
      width: '15%',
      sortable: true,
      right: true,
    },
    {
      name: 'Total',
      selector: 'total',
      width: '15%',
      sortable: true,
      right: true,
    },
  ];

  const handleSelectionYear = useCallback((event) => {
    setSelectedYear(event.target.value);
  }, []);

  const handleSelectionCountry = useCallback((event) => {
    setSelectedCountry(event.target.value);
  });

  useEffect(() => {
    async function loadSportsData() {
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

      const countrySorted = countryFiltered.sort();

      setSelectedCountry('Todos');

      countrySorted.unshift('Todos');

      setCountries(countrySorted);

      const sportsFiltered = database
        .filter(
          (value, index, array) =>
            index === array.findIndex((sport) => sport.sport === value.sport)
        )
        .map((sport) => sport.sport);

      const sportsSorted = sportsFiltered.sort();

      const totalSportsMedals = [];

      sportsSorted.forEach((sport) => {
        const sportData = database.filter((sports) => sports.sport === sport);

        countrySorted.forEach((countryItem) => {
          const countrySportData = sportData.filter(
            (countryInfo) => countryInfo.country === countryItem
          );

          yearsSorted.forEach((yearItem) => {
            const { gold, silver, bronze, country } = countrySportData
              .filter((yearData) => yearData.year === Number(yearItem))
              .reduce(
                (accumulator, current) => {
                  accumulator.gold += current.gold;
                  accumulator.silver += current.silver;
                  accumulator.bronze += current.bronze;
                  accumulator.country = current.country;

                  return accumulator;
                },
                { gold: 0, silver: 0, bronze: 0 }
              );

            totalSportsMedals.push({
              year: yearItem,
              sport,
              country,
              gold,
              silver,
              bronze,
              total: gold + silver + bronze,
            });
          });
        });
      });

      setData(totalSportsMedals.sort((a, b) => b.total - a.total));
    }
    loadSportsData();
  }, []);

  useEffect(() => {
    if (selectedYear !== 0) {
      const sportSummary = data.filter(
        (sport) => sport.year === Number(selectedYear)
      );

      const sports = sportSummary
        .filter(
          (value, index, array) =>
            index ===
            array.findIndex(
              (sportItem) =>
                sportItem.sport === value.sport && value.sport !== ''
            )
        )
        .map((sportItem) => sportItem.sport);

      const sportsCountrySummary = [];

      if (selectedCountry === 'Todos') {
        sports.forEach((sport) => {
          const { gold, silver, bronze } = sportSummary
            .filter((sportData) => sportData.sport === sport)
            .reduce(
              (accumulator, current) => {
                accumulator.gold += current.gold;
                accumulator.silver += current.silver;
                accumulator.bronze += current.bronze;

                return accumulator;
              },
              { gold: 0, silver: 0, bronze: 0 }
            );

          sportsCountrySummary.push({
            sport,
            gold,
            silver,
            bronze,
            total: gold + silver + bronze,
          });
        });
      } else if (selectedCountry !== 'Todos') {
        sports.forEach((sport) => {
          const { gold, silver, bronze } = sportSummary
            .filter((sportData) => sportData.sport === sport)
            .filter((countryData) => countryData.country === selectedCountry)
            .reduce(
              (accumulator, current) => {
                accumulator.gold += current.gold;
                accumulator.silver += current.silver;
                accumulator.bronze += current.bronze;

                return accumulator;
              },
              { gold: 0, silver: 0, bronze: 0 }
            );

          sportsCountrySummary.push({
            sport,
            gold,
            silver,
            bronze,
            total: gold + silver + bronze,
          });
        });
      }

      setFilteredData(sportsCountrySummary.sort((a, b) => b.total - a.total));
    }
  }, [selectedYear, selectedCountry]);

  return (
    <Container>
      <Header />

      <Content>
        <h1 id="title">Medals - Sports</h1>

        <OptionHeader
          leftRoute="/"
          rightRoute="/medalists"
          years={years}
          onChange={handleSelectionYear}
          value={selectedYear}
          left="General"
          right="Medalists"
        />

        <DropdownCountry>
          <span>Country</span>
          <select value={selectedCountry} onChange={handleSelectionCountry}>
            {countries.map((country) => (
              <option key={(item) => item.value}>{country}</option>
            ))}
          </select>
        </DropdownCountry>

        <Table data={filteredData} columns={columns} />
      </Content>
    </Container>
  );
}
