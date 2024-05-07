import React from "react";
import { Inertia } from "@inertiajs/inertia";


const Index = ({ materials }) => {
    console.log(materials);
    return (
        <div>
            <h1>Materials</h1>
            <a href="/materials/create">Create</a>
            <br/>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Material Group</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {materials.map((material) => (
                    <tr key={material.id}>
                        <td>{material.id}</td>
                        <td>{material.name}</td>
                        <td>{material.material_group.name}</td>
                        <td>
                            <a href={`/materials/${material.id}/edit`}>Edit</a> |
                            <button onClick={() => Inertia.delete(`/materials/${material.id}`)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}


export default Index;
