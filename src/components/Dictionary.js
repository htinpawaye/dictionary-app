import React,{useState} from 'react';

import '../css/Dictionary.css';

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleInputChange(event) {
        setKeyword(event.target.value);
        alert("searching"+ keyword);
    }
    return (
        <div className="Dictionary">
            <form className="mb-3" onSubmit={handleSubmit}>
                <input type="search" placeholder="Type a word..." onChange={handleInputChange} />
            </form>
        </div>
    )
}