import React, { useState } from 'react';

const SearchBar = ({submit}) => {
    const [keyword, setKeyword] = useState('')
    const handleChange = (event) =>{
        setKeyword(event.target.value)
    }
    const handleSubmit = event =>{
        event.preventDefault()
        submit(keyword);
    }
    return (
        <>
            <form onSubmit = {handleSubmit} className="row" style={{ padding: 5, border: "grey 1px solid" }}>
                <label htmlFor="search">Video Search</label>
                <input onChange = {handleChange} placeholder="Enter a keyword" name="search" type="text" required />
            </form>
        </>
    );
};

export default SearchBar;