import React from 'react'

const TableCases = ({countries}) => { 
    countries.sort((a,b) =>   b.cases - a.cases);
    return (
        <div className="table" >
            {countries.map( ({country,cases,countryInfo}) =>
            (
            <tr >
                <td className="table__country"><img src={countryInfo.flag} width={18}/>{country}</td>
                <td><strong>{cases}</strong></td>
            </tr>))}
        </div>
    )
}
export default TableCases;