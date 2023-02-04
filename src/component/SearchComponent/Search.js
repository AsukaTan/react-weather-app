import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, GeoOptions } from "../../api.js";

const Search = ({ onSearchData }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {

        return fetch(
            `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
            GeoOptions)
            .then(response => response.json())
            .then(response => {
                return{
                    options : response.data.map((city) =>{
                        return{
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.regionCode}` 
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }
    
    const handleChange = (searchData) => {
        setSearch(searchData);
        onSearchData(searchData);
    };

    return (
        <AsyncPaginate
            placeholder="Enter the city"
            debounceTimeout={1100}
            value={search}
            onChange={handleChange}
            loadOptions={loadOptions}
        />
    );
};

export default Search;