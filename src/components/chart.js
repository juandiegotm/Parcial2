import React, { Component, useState, useEffect } from "react";
import { BarChart } from "react-d3-components";

const Chart = ({ pokemonsData }) => {
  const basicData = [
    {
      label: "somethingA",
      values: [
        { x: "SomethingA", y: 10 },
        { x: "SomethingB", y: 4 },
        { x: "SomethingC", y: 3 },
      ],
    },
  ];
  const [pokemons, setPokemons] = useState(pokemonsData || []);
  const [data, setData] = useState();

  useEffect(() => {
    if (pokemonsData.length > 0) {
      let values = pokemonsData.map((element) => {
        return {
          x: element.name,
          y: element.height,
        };
      });
      let newData = [
        {
          label: "Altura de los pokemoms",
          values,
        },
      ];
      console.log(newData)
      setData(newData);
    }
  }, [pokemonsData]);

  return (
    <BarChart
      data={data}
      width={800}
      height={800}
      margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
    />
  );
};

export default Chart;
