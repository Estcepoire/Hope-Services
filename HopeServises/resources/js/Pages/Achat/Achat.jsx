import "./Achat.css";

import { PhotoIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";
import { useState } from 'react';

export default function Achat({ materialTypes }) {

    return (
        <div class="mx-auto px-4 h-auto sm:px-8 lg:px-8 w-full max-w-4xl shadow-md md:shadow-lg">
            <form action="/submit-order" method="POST" class="bg-white rounded px-8 pt-6 pb-8 mb-8">
                <div class="mb-4">
                    <label class="block text-gray-500 text-sm font-bold mb-2" for="phone-number">
                        Numéro Téléphone
                    </label>
                    <input class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="phone-number" type="tel" placeholder="Numéro téléphone"/>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-500 text-sm font-bold mb-2" for="email-address">
                        Email
                    </label>
                    <input class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="email-address" type="email" placeholder="Votre email"/>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-500 text-sm font-bold mb-2" for="delivery-option">
                        Choix de Livraison
                    </label>
                    <select class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="delivery-option">
                        <option>Standard (3-5 jours)</option>
                        <option>Express (1-2 jours)</option>
                    </select>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Valider
                    </button>
                </div>
            </form>
        </div>
    );
}
