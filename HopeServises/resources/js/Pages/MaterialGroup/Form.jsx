import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

const Form = ({ onSubmit, all_data = {}, initialData = {}, id = ''}) => {
    let [data, setData] = useState(all_data);
    const [materialTypeId, setMaterialTypeId] = useState(initialData.material_type_id);
    const [name, setName] = useState(initialData.name);

    useEffect(() => {
        setData(data);
        setName(initialData.name);
        setMaterialTypeId(initialData.material_type_id);
    }, [data]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (onSubmit === 'handleCreate') {
            handleCreate();
        } else {
            handleUpdate();
        }
    };

    const handleCreate = () => {
        Inertia.post('/material-groups', {
            name: name,
            material_type_id: materialTypeId
        });
    }

    const handleUpdate = () => {
        Inertia.put(`/material-groups/${id}`, {
            name: name,
            material_type_id: materialTypeId
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
