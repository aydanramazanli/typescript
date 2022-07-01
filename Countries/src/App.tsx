
import axios from "axios";
import { CountriesType } from "./Types";
import { useState, useEffect } from "react";
import SingleCountry from "./companents/SingleCountry";
import nextId from "react-id-generator";
import Loading from './companents/Loading';

function App() {
  const [country, setCountry] = useState<CountriesType[]>([]);
  const [loading, IsLoading] = useState<boolean>(false);

  const getCountries = async () => {
    IsLoading(true)
    try {
      const { data } = await axios.get<CountriesType[]>(
        "https://restcountries.com/v2/all"
      );
      setCountry(data);
    } catch (err) {
      console.log(err);
    } finally {
      IsLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className=" py-6 px-16">
        <Loading loading={loading}>
          <div className="grid grid-cols-4 gap-3">
      {
         country.map((single) => {
            return <SingleCountry key={nextId()} country={single} />;
          })}
          </div>
          </Loading>
    </div>
  );
}


export default App;
