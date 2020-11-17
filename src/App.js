import { Card,CardContent, FormControl,Select,MenuItem} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import InfoBox from "./Components/InfoBox";
//import {useFetchURL} from "./Tools/useFetchURL";
import TableCases from "./Components/TableCases";
import ChartInfo from "./Components/ChartInfo";
import numeral from "numeral";
function App() {
  const [selectedCountry,setSelectedCountry] = useState("all");
  const [countries,setCountries] = useState([]);
  const [covidInfo,setCovidInfo] = useState(null);
   const [casesType,setCasesType] = useState("cases")
  useEffect(async()=>{
   const url = selectedCountry ==="all"? "https://disease.sh/v3/covid-19/all" :`https://disease.sh/v3/covid-19/countries/${selectedCountry}`;
    
   const INFO = await fetch(url).then(r=> r.json());
   setCovidInfo(INFO);
   console.log(covidInfo);
   console.log(countries);

  }
  ,[selectedCountry]);

 useEffect(async()=>{
   
   const COUNTIRES = await fetch("https://disease.sh/v3/covid-19/countries").then(r=> r.json());
   setCountries(COUNTIRES);
  }
  ,[]);
 //const countries = useFetchURL("https://disease.sh/v3/covid-19/countries");
 //const covidInfo = useFetchURL(selectedCountry ==="all"? "https://disease.sh/v3/covid-19/all" :`https://disease.sh/v3/covid-19/countries/${selectedCountry}`);
 
 const onSelectChage = (e) => {
    setSelectedCountry(e.target.value);
   }
  const onInfoClick = (cases) => {
      setCasesType(cases);
  }
  return (
    countries && covidInfo  ?  
    (<div className="App">
      <div className="App__left">
      <div className="header">
            <h1 className="header__title">Covid-19 Tracker</h1>
            <FormControl className="header__select">
                <Select
                value={selectedCountry}
                variant="outlined"
                onChange={onSelectChage}
                >
                    <MenuItem key={"all"} value="all">Worldwide</MenuItem>
                    
                    {
                        countries.map(d =>(<MenuItem key={d.country} value={d.countryInfo.iso2}>{d.country}</MenuItem>))
                        
                    }
                    
                </Select>
            </FormControl>
        </div>
      <div className="infoBox__container">
      

      <InfoBox onInfoClick={onInfoClick} title={"Coronavirus casses"} currentCasesType={casesType} cassesType={"cases"} danger total={numeral(covidInfo.cases).format("0.0a")} casses={numeral(covidInfo.todayCases).format("0.0a")}/>
      
      

      <InfoBox onInfoClick={onInfoClick} title={"Coronavirus Recovered"} currentCasesType={casesType} cassesType={"recovered"} total={numeral(covidInfo.recovered).format("0.0a")} casses={numeral(covidInfo.todayRecovered).format("0.0a")}/>
      
       

      <InfoBox onInfoClick={onInfoClick} title={"Coronavirus Death"} currentCasesType={casesType} cassesType={"deaths"} danger total={numeral(covidInfo.deaths).format("0.0a")} casses={numeral(covidInfo.todayDeaths).format("0.0a")}/>
      
      </div>
    </div>
      <Card className="App__right">
        <CardContent>
          <TableCases countries={countries}/>
          <ChartInfo casesType={casesType}/>
        </CardContent>
      </Card>
    </div>)
    
    :
    
    (<div className="loading">
    <h3>Loading ...</h3>
</div>)
  );
}

export default App;
