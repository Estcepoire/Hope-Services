import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

const Form = ({ onSubmit, initialName = '', id = ''}) => {
    const [name, setName] = useState(initialName);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (onSubmit === 'handleCreate') {
            handleCreate();
        } else {
            handleUpdate();
        }
    };

    const handleCreate = () => {
        Inertia.post('/material-types', {
            name: name,
        });
    }

    const handleUpdate = () => {
        Inertia.put(`/material-types/${id}`, {
            name: name,
        });
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
}

export default Form;
