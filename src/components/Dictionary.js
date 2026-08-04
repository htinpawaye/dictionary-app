import React,{useState} from 'react';
import axios from 'axios';
import '../css/Dictionary.css';

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    let apiKey = `bf3f9f396370566c3abta48aeo525af1`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    function handleResponse(response) {
        console.log(response.data.meanings[0].definition);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleInputChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form className="mb-3 text-center mt-3" onSubmit={handleSubmit}>
                <input type="search" placeholder="Type a word..." onChange={handleInputChange} className="search"/>
            </form>
        </div>
    )
}