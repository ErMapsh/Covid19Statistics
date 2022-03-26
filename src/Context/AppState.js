import AppContext from './AppContext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppState = props => {
  // for data saving
  const [Data, setData] = useState([]);

  //for india
  const url = 'https://disease.sh/v3/covid-19/countries/India';
  const YesterdayUrl = 'https://disease.sh/v3/covid-19/countries/india?yesterday=true&strict=true';

  //for fetching data
  const fetchApi = async () => {
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  //for gloabl
  const gloableUrl = 'https://disease.sh/v3/covid-19/all';
  const gloableYesterdayUrl = 'https://disease.sh/v3/covid-19/all?yesterday=true';
  //fetching data
  const fetchApi1 = async () => {
    try {
      const response = await axios.get(gloableUrl);
      // console.log(response.data);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  //for MyCountry and Global Buttons
  const [BtnValue, SetBtnValue] = useState(1);

  const HandleOnMyCountry = () => {
    // console.log("handleCountry")
    SetBtnValue(1);
    //effect use for at least one time to run fetch
    fetchApi();
    getDataCountry();
  };

  const HandleOnGlobal = () => {
    // console.log("HandleGlobal")
    SetBtnValue(0);
    //effect use for at least one time to run fetch
    fetchApi1();
    getDataGlobal();
  };

   


  // -----------------For graph----------------
  const [GraphData, setGraphData] = useState(
    {
      labels: [],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ],
        }
      ]
    }
  ) 
  const getDataCountry = async () => {
    const response = await axios.get('https://disease.sh/v3/covid-19/historical/india?lastdays=30');
    const valuesInarray = Object.values(response.data.timeline.cases)//returns array
    // console.log(valuesInarray)

    const temp = valuesInarray.map(item => Number(item / 1000))
    // console.log(temp)
    setGraphData({ labels: [], datasets: [{ data: temp }] });
  }

  const getDataGlobal= async () => {
    const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=30');
    // console.log(response.data)
    const valuesInarray = Object.values(response.data.cases)//returns array
    // console.log(valuesInarray)

    const temp = valuesInarray.map(item => Number(item / 1000))
    // // console.log(temp)
    setGraphData({ labels: [], datasets: [{ data: temp }] });
  }




  return (
    <AppContext.Provider
      value={{ Data, fetchApi, BtnValue, HandleOnMyCountry, HandleOnGlobal, GraphData, getDataGlobal, getDataCountry  }}>
      {props.children}
      {/*Essentially, props.children is a special prop, automatically passed to every component */}
    </AppContext.Provider>
  );
};

export default AppState;
