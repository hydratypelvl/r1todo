const NewPage = () => {

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-6">
          <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
              <strong>⚠ Uzmanību!</strong> Apskati jaunās mājas lapas uzlabojumus, labākai pieredzei.
          </div>

          <h2 className="text-2xl font-bold text-gray-800">🚀 Jaunās Funkcijas</h2>
          <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">&#10003;</span>
                <span>Uzlabota Veiktspēja</span>
              </li>
              <li className="flex items-center space-x-2">
                  <span className="text-green-500">&#10003;</span>
                  <span>Uzlabots Kalendārs</span>
              </li>
              <li className="flex items-center space-x-2">
                  <span className="text-green-500">&#10003;</span>
                  <span>Servisu Maiņa</span>
              </li>
              <li className="flex items-center space-x-2">
                  <span className="text-green-500">&#10003;</span>
                  <span>Kopējo Darbu Atrāde</span>
              </li>
              <li className="flex items-center space-x-2">
                  <span className="text-green-500">&#10003;</span>
                  <span>Uzlabota Tabula</span>
              </li>
              <li className="flex items-center space-x-2">
                  <span className="text-green-500">&#10003;</span>
                  <span>Tumšā Režīma Atbalsts</span>
              </li>
          </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-4">📌 Detalizētas Funkcijas</h3>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 border rounded-lg">
                <h4 className="font-semibold text-gray-800">⚡ Veiktspējas Uzlabojumi</h4>
                <p className="text-gray-600">Lapa ielādējas <b>zibenīgi</b>, līdz pat 20x reižu ātrāk, vairs nav jāgaida 1min līdz lapa ielādējas.</p>
            </div>

            <div className="p-4 bg-gray-50 border rounded-lg">
                <h4 className="font-semibold text-gray-800">📅 Uzlabots Kalendārs</h4>
                <p className="text-gray-600">Vairs nav manuāli jāievada datums. Ar vienas pogas palīdzību iespējams izvēlēties jebkuru datumu sākot no 2023.gada 26.septembra līdz pat nākamajai nedēļai.</p>
            </div>

            <div className="p-4 bg-gray-50 border rounded-lg">
                <h4 className="font-semibold text-gray-800">🔧 Servisu Maiņa</h4>
                <p className="text-gray-600">Tagad ir iespējams apskatīties arī Kalnciema ielas pierakstu. Nospiežot pogu ir iespējams mainīt servisus starp <b>Ulbroku</b> un <b>Kalnciemu</b>.</p>
            </div>
 
            <div className="p-4 bg-gray-50 border rounded-lg">
                <h4 className="font-semibold text-gray-800">🚗 Kopējo Darbu Atrāde</h4>
                <p className="text-gray-600">Atrāda atlasītās dienas kopējos darbus, tajā skaitā arī <b>močus</b> un <b>kondicionieru</b> uzpildes!</p>
            </div>

            <div className="p-4 bg-gray-50 border rounded-lg">
                <h4 className="font-semibold text-gray-800">📝 Uzlabota Tabula</h4>
                <p className="text-gray-600">Tabulai ir vairāki uzlabojumi:</p>
                <ul className='text-gray-600 text-sm list-disc pl-6'>
                  <li>Pievienotas kolonnas <b>auto modelis</b> un <b>tips</b></li>
                  <li>Telefona kolonnai ir redzami pēdējie 4 cipari</li>
                  <li>Kolonnas ir iespējams izslēgt</li>
                  <li>Kolonnā <b>Tips</b> rāda kāda tipa darbs tas būs</li>
                </ul>
            </div>

            <div className="p-4 bg-gray-50 border rounded-lg">
                <h4 className="font-semibold text-gray-800">🌙 Tumšais režīms</h4>
                <p className="text-gray-600">Viegli pārslēdzieties starp gaišo vai tumšo režīmu, lapa automātiski pielāgojas ierīces režīmam.</p>
            </div>  
            {/* <div className="mt-6 text-center">
              <a href="" target="_blank" 
                className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition">
                  🌍 Apskati Manu Jauno Mājas lapu šeit
              </a>
            </div> */}
        </div>
    </div>
    );
};
  
export default NewPage;



