import React, {useEffect, useState} from "react";
import "./JobPost.css"

function JobPost(props) {
    useEffect( () => {
        fetchItems()
    }, []);

    const [items, setItems] = useState([]),

    const fetchItems = async() => {
        const data = await fetch('/');
        const items = await data.json();
        setItems(items);
    }

    return (
        <>
            {
                items.map(item => (
                <li className="Item">
                <h2>{items.title}</h2>
                <h3>{items.company}</h3>
            </li>
            ))
                }          

        </>
    )   

};

export { JobPost }