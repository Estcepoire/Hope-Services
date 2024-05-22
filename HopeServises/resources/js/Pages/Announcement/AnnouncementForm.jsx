import "./Announcement.css";

import { PhotoIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";
import { useState } from 'react';

export default function AnnouncementForm({ materialTypes }) {
    const [materialGroups, setMaterialGroups] = useState([])
    const [materials, setMaterials] = useState([])

    const { data, setData, post } = useForm({
        materialTypeId: null,
        materialGroupId: null,
        materialId: null,
        quantity: null,
        packageId: null,
        file: null,
        description: null
    })

    const fetchMaterialGroups = (materialTypeId) => {
        axios.get(route('api.material-groups.type', { material_type_id: materialTypeId }))
            .then(response => {
                setMaterialGroups(response.data)
            })
    }

    const fetchMaterials = (materialGroupId) => {
        axios.get(route('api.materials.group', { material_group_id: materialGroupId }))
            .then(response => {
                setMaterials(response.data)
            })
    }

    function submit(e) {
        e.preventDefault();
        post(route('announcement.store'));
    }

    return (
        <form onSubmit={submit}>
            <div className="space-y-3">
                <div className="mt-2">
                    <label
                        htmlFor="materialType"
                        className="text-base font-semibold leading-7 text-gray-900"
                    >
                        Type de matériau<b>*</b>
                    </label>
                    <select
                        id="materialType"
                        name="materialTypeId"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => { setData("materialTypeId", e.target.value);  fetchMaterialGroups(e.target.value)}}
                    >
                        <option value="-1">Choose</option>
                        {materialTypes.map((materialType) => {
                            return <option key={materialType.id} value={materialType.id}>{materialType.name}</option>
                        })}
                    </select>
                </div>
                <div className="mt-2">
                    <label
                        htmlFor="materialGroup"
                        className="text-base font-semibold leading-7 text-gray-900"
                    >
                        Groupe de matériau<b>*</b>
                    </label>
                    <select
                        id="materialGroup"
                        name="materialGroupId"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => {setData("materialGroupId", e.target.value); fetchMaterials(e.target.value)}}
                    >
                        <option value="-1">Choose</option>
                        {materialGroups.map((materialGroup) => {
                            return <option key={materialGroup.id} value={materialGroup.id}>{materialGroup.name}</option>
                        })}
                    </select>
                </div>
                <div className="mt-2">
                    <label
                        htmlFor="material"
                        className="text-base font-semibold leading-7 text-gray-900"
                    >
                        Matériau<b>*</b>
                    </label>
                    <select
                        id="material"
                        name="materialId"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setData("materialId", e.target.value)}
                    >
                        <option value="-1">Choose</option>
                        {materials.map((material) => {
                            return <option key={material.id} value={material.id}>{material.name}</option>
                        })}
                    </select>
                </div>
                <div className="mt-2">
                    <label
                        htmlFor="quantity"
                        className="text-base font-semibold leading-7 text-gray-900"
                    >
                        Quantité (en tonne)<b>*</b>
                    </label>
                    <input
                        id="quantity"
                        name="quantity"
                        value={data.quantity || ''}
                        type="number"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setData("quantity", e.target.value)}
                    />
                </div>
                <div className="mt-2">
                    <label
                        htmlFor="package"
                        className="text-base font-semibold leading-7 text-gray-900"
                    >
                        Comment est-il emballé ?
                    </label>
                    <select
                        id="package"
                        name="packageId"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setData("packageId", e.target.value)}
                    >
                        <option>Balles</option>
                        <option>Loose</option>
                        <option>Sac</option>
                    </select>
                </div>
                <div className="mt-2">
                    <label
                        htmlFor="cover-photo"
                        className="text-base font-semibold leading-7 text-gray-900"
                    >
                        Télécharger les photos du matériel<b>*</b>
                    </label>
                    <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-4 py-8">
                        <div className="text-center">
                            <PhotoIcon
                                className="mx-auto h-12 w-12 text-gray-300"
                                aria-hidden="true"
                            />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                    htmlFor="file"
                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                    <span>Upload file</span>
                                    <input
                                        id="file"
                                        name="file"
                                        type="file"
                                        className="sr-only"
                                        onChange={(e) => setData("file", e.target.files[0])}
                                    />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, JPEG up to 10MB
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <label
                        htmlFor="description"
                        className="text-base font-semibold leading-7 text-gray-900"
                    >
                        Description<b>*</b>
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="description"
                            name="description"
                            value={data.description || ''}
                            rows="3"
                            placeholder="Décrivez vos déchets"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setData("description", e.target.value)}
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Publier
                </button>
            </div>
        </form>
    );
}
