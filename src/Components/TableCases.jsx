import React from 'react'

const TableCases = ({countries,onSelect}) => { 
    countries.sort((a,b) =>   b.cases - a.cases);
    return (
        <div className="table" >
            {countries.map( ({country,cases,countryInfo}) =>
            (
            <tr  onClick={() =>onSelect(countryInfo.iso2)}>
               <div id={countryInfo.iso2}>
               <td  className="table__country"><img src={countryInfo.flag} width={18}/>{country}</td>
                <td><strong>{cases}</strong></td>
               </div>
            </tr>))}
        </div>
    )
}
export default TableCases;