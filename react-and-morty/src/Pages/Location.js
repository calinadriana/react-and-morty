import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards"
import InputGroup from "../components/Filters/Category/InputGroup";

const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let {dimension, created,type, name } = info;
  let [number, setNumber] = useState(1);


  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let location = await Promise.all(
        data.residents.map((item) => {
          return fetch(item).then((res) => res.json());
        })
      );
       setResults(location)
      //console.log(data);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Location :
          <span className="text-primary">
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center">Dimension: {dimension === "" ? "Unknown" : dimension}</h5>
        <h5 className="text-center">Created: {created === "" ? "Unknown" : created}</h5>
        <h5 className="text-center">Type: {type === "" ? "Unknown" : type}</h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Location</h4>
        <InputGroup name="Location" setID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location