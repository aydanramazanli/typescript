import { count } from 'console'
import React, { FunctionComponent } from 'react'
import {CountriesType} from '../Types'

interface ICountryProps{
    country:CountriesType,

}



const SingleCountry : FunctionComponent<ICountryProps>=(props)=> {
   const {country} = props

  return (
    <div className="font-semibold text-center border-2 border-solid border-gray-500 text-stone-700">
      <h2>Name: {country.name}</h2>
      <h2>Capital : {country.capital}</h2>
     <h3>Area: {country.area}km</h3>
    
    </div>
  )
}
export default  SingleCountry