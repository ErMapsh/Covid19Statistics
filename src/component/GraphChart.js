import React, {useState} from 'react';
import LineChartGraph from './LineChartGraph';

// import AppContext from '../Context/AppContext';
// const Context = useContext(AppContext);
// const {GraphChartFetch, GraphData} = Context;

export default function GraphChart() {
  const [datasource, setdatasource] = useState([]);

  return (
    <>
      <LineChartGraph/>
    </>
  );
}
