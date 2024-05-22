import React from 'react';
import {Inertia} from "@inertiajs/inertia";

const Index = ({ materialTypes }) => {
    return (
        <div>
            <h1>Material Types</h1>
            <a href="/material-types/create">Create</a>
            <br/>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {materialTypes.map((materialType) => (
                    <tr key={materialType.id}>
                        <td>{materialType.id}</td>
                        <td>{materialType.name}</td>
                        <td>
                            <a href={`/material-types/${materialType.id}/edit`}>Edit</a> |
                            <button onClick={() => Inertia.delete(`/material-types/${materialType.id}`)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Index;
