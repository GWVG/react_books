import { useState } from "react";

function BookCreate ({ onCreate })
{
    const [title, setTitle] = useState('');

    const handleChange = (event) =>
    {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };

    return <div className="bookCreate">
        <h3>Add new book</h3>
        <form onSubmit={handleSubmit}>
            <label>Enter title: </label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button">Submit</button>
        </form>
    </div>;
}

export default BookCreate;