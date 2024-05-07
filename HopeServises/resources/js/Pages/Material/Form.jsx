import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";


const Form = ({ onSubmit, all_data = {}, initialData = {}, id = ''}) => {
    let [data, setData] = useState(all_data);
    const [materialGroupId, setMaterialGroupId] = useState(initialData.material_group_id);
    const [name, setName] = useState(initialData.name);

    useEffect(() => {
        setData(data);
        setName(initialData.name);
        setMaterialGroupId(initialData.material_group_id);
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
        Inertia.post('/materials', {
            name: name,
            material_group_id: materialGroupId
        });
    }

    const handleUpdate = () => {
        Inertia.put(`/materials/${id}`, {
            name: name,
            material_group_id: materialGroupId
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
                <label htmlFor="material_group_id">Material Group</label>
                <select
                    id="material_group_id"
                    name="material_group_id"
                    value={materialGroupId}
                    onChange={(e) => setMaterialGroupId(e.target.value)}
                >
                    <option value="">Select Material Group</option>
                    {data.materialGroups.map((materialGroup) => (
                        <option key={materialGroup.id} value={materialGroup.id}>{materialGroup.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}


export default Form;
