import "./ProductSheet.css";


export default function ProductSheet() {
    
    return (
    
            <div class="mx-auto px-4 h-auto sm:px-8 lg:px-8 w-full max-w-6xl shadow-md md:shadow-lg">
                <div class="flex flex-wrap -m-2 ">
                    <div class="w-full h-auto sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-7/12 p-2">
                        <img src="https://www.wastetrade.com/wp-content/uploads/2024/05/Plastic-LDPE-LDPE-Reels-Natural-7759-1-774x1024-1.jpeg?v=1715683187" alt="Nom du produit" class="rounded-lg shadow-md object-cover w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-112"/>
                    </div>
                    <div class="w-full h-auto sm:w-1/2 md:w-1/3 lg:w-3/4 xl:w-5/12 p-2">
                        <div class="space-y-4">
                            <h2 class="text-xl font-semibold">Nom du Produit</h2>
                            <p class="text-sm text-gray-600"> <i class="bi bi-clipboard2-check"></i>Le lorem ipsum est,
                             en imprimerie, une suite de mots sans signification utilisée à 
                             titre provisoire pour calibrer une mise en page, le texte définitif 
                             venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page 
                             est achevée. Généralement, on utilise un texte en faux latin,
                             le Lorem ipsum ou Lipsum</p>
                            
                            <p class=""><i class="bi bi-tags">100 kg</i></p>
                            <br/>
                            <span class=""><i class="bi bi-coin">  € 99.99 </i></span>
                            <p><i class="bi bi-geo-alt-fill"></i> Andoharanofotsy</p>
                            <p><i class="bi bi-recycle"> </i>Type de matiere  </p>
                            
                            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"> Acheter </button>

                        </div>
                    </div>
                </div>
            </div>
    
    

    );
}
