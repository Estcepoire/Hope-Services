import React from 'react';
import {Inertia} from "@inertiajs/inertia";

const Index = ({ materialGroups }) => {
    return (
        <div>
            <h1>Material Types</h1>
            <a href="/material-groups/create">Create</a>
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
                {materialGroups.map((materialGroup) => (
                    <tr key={materialGroup.id}>
                        <td>{materialGroup.id}</td>
                        <td>{materialGroup.name}</td>
                        <td>
                            <a href={`/material-groups/${materialGroup.id}/edit`}>Edit</a> |
                            <button onClick={() => Inertia.delete(`/material-groups/${materialGroup.id}`)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Index;
