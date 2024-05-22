import "./AnnouncementList.css";

const AnnouncementList = () => {
  return (
      <div className="p-5">
          <h1 className="text-4xl text-gray-950"><b>Achat de matériaux</b></h1>
          <section className="mt-8 flex flex-row">
              <form className="basis-1/4 px-10 py-8 mx-4">
                <div className="space-y-4">
                    <div className="mt-2">
                        <label
                            htmlFor="seach"
                            className="text-base font-semibold leading-7 text-gray-900"
                        >
                            Recherche
                        </label>
                        <input
                            id="search"
                            name="search"
                            type="text"
                            className="block w-full rounded-md border-0 py-2 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="localisation"
                            className="text-base font-semibold leading-7 text-gray-900"
                        >
                            Localisation
                        </label>
                        <input
                            id="localisation"
                            name="localisation"
                              type="text"
                              placeholder="Antananarivo"
                            className="block w-full rounded-md border-0 py-2 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="material_type"
                            className="text-base font-semibold leading-7 text-gray-900"
                        >
                            Type de materiau
                        </label>
                        <input
                            id="material_type"
                            name="material_type"
                            type="text"
                            className="block w-full rounded-md border-0 py-2 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-5 w-full rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Filtrer
                </button>
              </form>
              <div className="basis-3/4 flex flex-row flex-wrap justify-around px-5">
                <div className="rounded mt-5 basis-5/12 overflow-hidden shadow-lg">
                    <img className="w-full" src="https://www.wastetrade.com/wp-content/uploads/2024/05/Plastic-PVC-UPVC-Window-Frame-Shred-7921-1-1024x576-1.jpg?v=1716304114" alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">LDPE - Film LDPE</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                          </p>
                          <p className="mt-5">Quantité dispo: <b>100kg</b></p>
                          <p>Localisation: <b>Antanarivo</b></p>
                          <p>Prix: <b>1000 Ar</b></p>
                    </div>
                </div>
                <div className="rounded mt-5 basis-5/12 overflow-hidden shadow-lg">
                    <img className="w-full" src="https://www.wastetrade.com/wp-content/uploads/2024/05/Plastic-PVC-UPVC-Window-Frame-Shred-7921-1-1024x576-1.jpg?v=1716304114" alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">LDPE - Film LDPE</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                          </p>
                          <p className="mt-5">Quantité dispo: <b>100kg</b></p>
                          <p>Localisation: <b>Antanarivo</b></p>
                          <p>Prix: <b>1000 Ar</b></p>
                    </div>
                </div>
                <div className="rounded mt-5 basis-5/12 overflow-hidden shadow-lg">
                    <img className="w-full" src="https://www.wastetrade.com/wp-content/uploads/2024/05/Plastic-PVC-UPVC-Window-Frame-Shred-7921-1-1024x576-1.jpg?v=1716304114" alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">LDPE - Film LDPE</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                          </p>
                          <p className="mt-5">Quantité dispo: <b>100kg</b></p>
                          <p>Localisation: <b>Antanarivo</b></p>
                          <p>Prix: <b>1000 Ar</b></p>
                    </div>
                </div>
              </div>
          </section>
    </div>
  )
}

export default AnnouncementList