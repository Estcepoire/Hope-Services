import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

const Form = ({ onSubmit, all_data = {}, initialData = {}, id = ''}) => {
    let [data, setData] = useState(all_data);
    const [materialTypeId, setMaterialTypeId] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        //console.log(initialData);
        setData(data);
    }, [data]);


    const handleSubmit = async (e) => {
        //console.log(data);
        e.preventDefault();
        if (onSubmit === 'handleCreate') {
            handleCreate();
        } else {
            handleUpdate();
        }
    };

    const handleCreate = () => {
        data = {
            name: data.name,
            material_type_id: 1
        }
        //console.log(data);
        Inertia.post('/material-groups', data);
    }

    const handleUpdate = () => {
        data = {
            name: data.name,
            material_type_id: 1
        }
        Inertia.put(`/material-groups/${id}`, data);
    }

    /**
     * CREATE TABLE material_groups (
     *     id SERIAL PRIMARY KEY,
     *     name VARCHAR(150) NOT NULL UNIQUE,
     *     material_type_id BIGINT REFERENCES material_types(id) NOT NULL
     * );
     */

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData({...data, name: e.target.value})}
                />
            </div>
            <div>
                <label htmlFor="material_type_id">Material Type</label>
                <select
                    id="material_type_id"
                    name="material_type_id"
                    value={materialTypeId}
                    onChange={(e) => setMaterialTypeId(e.target.value)}
                >
                    <option value="">Select Material Type</option>
                    {data.materialTypes.map((materialType) => (
                        <option key={materialType.id} value={materialType.id}>{materialType.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Save</button>
        </form>
    );
}


export default Form;
