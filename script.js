document.addEventListener('DOMContentLoaded', function() {
    const fraseElement = document.getElementById('frase');
    const autorElement = document.getElementById('autor');

    // Constante con la lista de frases (¡Añade o modifica aquí tus frases!)
    const frases = [
        { frase: "Un estornudo viaja a más de 160 km/h.", autor: "Curiosidad Humana" },
        { frase: "Las uñas crecen más rápido en la mano dominante.", autor: "Curiosidad Humana" },
        { frase: "El ojo humano distingue 10 millones de colores.", autor: "Curiosidad Humana" },
        { frase: "Más bacterias en la boca que personas en el mundo.", autor: "Curiosidad Humana" },
        { frase: "La risa es contagiosa por las neuronas espejo.", autor: "Curiosidad Humana" },
        { frase: "El cerebro humano pesa 1.4 kg.", autor: "Curiosidad Humana" },
        { frase: "El fémur es el hueso más fuerte.", autor: "Curiosidad Humana" },
        { frase: "Saliva para llenar dos piscinas en la vida.", autor: "Curiosidad Humana" },
        { frase: "El corazón late 100,000 veces al día.", autor: "Curiosidad Humana" },
        { frase: "El pelo crece 15 cm al año.", autor: "Curiosidad Humana" },
        { frase: "La jirafa se limpia las orejas con la lengua.", autor: "Curiosidad Animal" },
        { frase: "El colibrí vuela hacia atrás.", autor: "Curiosidad Animal" },
        { frase: "El guepardo es el más rápido.", autor: "Curiosidad Animal" },
        { frase: "El elefante no puede saltar.", autor: "Curiosidad Animal" },
        { frase: "La lengua de ballena azul pesa como un elefante.", autor: "Curiosidad Animal" },
        { frase: "Gusanos regeneran partes del cuerpo.", autor: "Curiosidad Animal" },
        { frase: "Los ojos del camaleón se mueven independientemente.", autor: "Curiosidad Animal" },
        { frase: "El calamar gigante tiene los ojos más grandes.", autor: "Curiosidad Animal" },
        { frase: "Las estrellas de mar no tienen cerebro ni sangre.", autor: "Curiosidad Animal" },
        { frase: "Las mariposas saborean con los pies.", autor: "Curiosidad Animal" },
        { frase: "El sonido viaja 4 veces más rápido en el agua.", autor: "Curiosidad Física" },
        { frase: "Un rayo alcanza 30,000 °C.", autor: "Curiosidad Física" },
        { frase: "El sol es una estrella mediana.", autor: "Curiosidad Espacial" },
        { frase: "La Tierra tiene agua líquida.", autor: "Curiosidad Espacial" },
        { frase: "Júpiter es el planeta más grande.", autor: "Curiosidad Espacial" },
        { frase: "Saturno tiene anillos de hielo y roca.", autor: "Curiosidad Espacial" },
        { frase: "Urano gira de lado.", autor: "Curiosidad Espacial" },
        { frase: "Neptuno es el más ventoso.", autor: "Curiosidad Espacial" },
        { frase: "Plutón es un planeta enano.", autor: "Curiosidad Espacial" },
        { frase: "La Vía Láctea es espiral.", autor: "Curiosidad Espacial" },
        { frase: "Miles de millones de galaxias.", autor: "Curiosidad Espacial" },
        { frase: "La luz del sol tarda 8 minutos y 20 segundos.", autor: "Curiosidad Espacial" },
        { frase: "Un año luz es distancia.", autor: "Curiosidad Espacial" },
        { frase: "Agujeros negros: gravedad extrema.", autor: "Curiosidad Espacial" },
        { frase: "El universo tiene 13.8 mil millones de años.", autor: "Curiosidad Espacial" },
        { frase: "El agua tiene tres estados.", autor: "Curiosidad Física" },
        { frase: "El agua hierve a 100 °C.", autor: "Curiosidad Física" },
        { frase: "El agua se congela a 0 °C.", autor: "Curiosidad Física" },
        { frase: "El hielo flota por ser menos denso.", autor: "Curiosidad Física" },
        { frase: "El agua pura no conduce electricidad.", autor: "Curiosidad Física" },
        { frase: "El aire es nitrógeno y oxígeno.", autor: "Curiosidad Química" },
        { frase: "El oxígeno es esencial.", autor: "Curiosidad Química" },
        { frase: "El dióxido de carbono es de efecto invernadero.", autor: "Curiosidad Química" },
        { frase: "El ozono protege de la radiación UV.", autor: "Curiosidad Química" },
        { frase: "El viento es aire en movimiento.", autor: "Curiosidad Física" },
        { frase: "Las nubes son gotitas de agua o hielo.", autor: "Curiosidad Meteorológica" },
        { frase: "La lluvia es agua que cae.", autor: "Curiosidad Meteorológica" },
        { frase: "La nieve es agua congelada que cae.", autor: "Curiosidad Meteorológica" },
        { frase: "El granizo son bolas de hielo.", autor: "Curiosidad Meteorológica" },
        { frase: "El arcoíris es un fenómeno óptico.", autor: "Curiosidad Meteorológica" },
        { frase: "El primer vuelo fue en 1903.", autor: "Curiosidad Histórica" },
        { frase: "El primer coche en 1885.", autor: "Curiosidad Histórica" },
        { frase: "El primer teléfono en 1876.", autor: "Curiosidad Histórica" },
        { frase: "La primera bombilla en 1879.", autor: "Curiosidad Histórica" },
        { frase: "La primera computadora en la década de 1830.", autor: "Curiosidad Histórica" },
        { frase: "El primer SMS fue en 1992.", autor: "Curiosidad Tecnológica" },
        { frase: "El primer sitio web fue en 1991.", autor: "Curiosidad Tecnológica" },
        { frase: "El primer correo electrónico en 1971.", autor: "Curiosidad Tecnológica" },
        { frase: "El primer videojuego en la década de 1950.", autor: "Curiosidad Tecnológica" },
        { frase: "El primer programa de televisión en la década de 1930.", autor: "Curiosidad Tecnológica" },
        { frase: "La Gran Muralla China tiene más de 20,000 km.", autor: "Curiosidad Arquitectónica" },
        { frase: "La Torre Eiffel mide 324 metros.", autor: "Curiosidad Arquitectónica" },
        { frase: "El Coliseo albergaba a 50,000 personas.", autor: "Curiosidad Arquitectónica" },
        { frase: "Las Pirámides de Giza son tumbas.", autor: "Curiosidad Arquitectónica" },
        { frase: "El Taj Mahal es un mausoleo.", autor: "Curiosidad Arquitectónica" },
        { frase: "La Estatua de la Libertad fue un regalo.", autor: "Curiosidad Arquitectónica" },
        { frase: "El Big Ben es una campana.", autor: "Curiosidad Arquitectónica" },
        { frase: "La Ópera de Sídney tiene forma de concha.", autor: "Curiosidad Arquitectónica" },
        { frase: "El Cristo Redentor está en Río.", autor: "Curiosidad Arquitectónica" },
        { frase: "Machu Picchu es una ciudadela inca.", autor: "Curiosidad Arquitectónica" },
        { frase: "El primer sello fue el Penny Black.", autor: "Curiosidad Histórica" },
        { frase: "El primer periódico en 1605.", autor: "Curiosidad Histórica" },
        { frase: "La primera biblioteca pública en 1854.", autor: "Curiosidad Histórica" },
        { frase: "El primer zoológico en 1752.", autor: "Curiosidad Histórica" },
        { frase: "El primer museo en el siglo III a. C.", autor: "Curiosidad Histórica" },
        { frase: "El primer parque nacional fue Yellowstone.", autor: "Curiosidad Histórica" },
        { frase: "El primer parque de atracciones fue Bakken.", autor: "Curiosidad Histórica" },
        { frase: "El primer centro comercial en 1954.", autor: "Curiosidad Histórica" },
        { frase: "El primer restaurante de comida rápida en 1921.", autor: "Curiosidad Histórica" },
        { frase: "La primera pizza en el siglo XVIII.", autor: "Curiosidad Culinaria" },
        { frase: "El chocolate es de semillas de cacao.", autor: "Curiosidad Culinaria" },
        { frase: "El café es de granos de la planta del café.", autor: "Curiosidad Culinaria" },
        { frase: "El té es de hojas de la planta del té.", autor: "Curiosidad Culinaria" },
        { frase: "El vino es de uvas fermentadas.", autor: "Curiosidad Culinaria" },
        { frase: "La cerveza es de granos fermentados.", autor: "Curiosidad Culinaria" },
        { frase: "El whisky es de granos fermentados.", autor: "Curiosidad Culinaria" },
        { frase: "El vodka es de granos o patatas.", autor: "Curiosidad Culinaria" },
        { frase: "La ginebra es de bayas de enebro.", autor: "Curiosidad Culinaria" },
        { frase: "El ron es de melaza o jugo de caña.", autor: "Curiosidad Culinaria" },
        { frase: "El tequila es de agave.", autor: "Curiosidad Culinaria" },
        { frase: "El sistema métrico es metro, kg y segundo.", autor: "Curiosidad Matemática" },
        { frase: "El sistema imperial es pie, libra y segundo.", autor: "Curiosidad Matemática" },
        { frase: "El primer calendario fue egipcio.", autor: "Curiosidad Histórica" },
        { frase: "El reloj de sol medía el tiempo.", autor: "Curiosidad Histórica" },
        { frase: "El reloj de agua medía el tiempo.", autor: "Curiosidad Histórica" },
        { frase: "El reloj mecánico es del siglo XIV.", autor: "Curiosidad Tecnológica" },
        { frase: "El reloj de péndulo es del siglo XVII.", autor: "Curiosidad Tecnológica" },
        { frase: "El reloj de cuarzo es del siglo XX.", autor: "Curiosidad Tecnológica" },
        { frase: "El reloj atómico es el más preciso.", autor: "Curiosidad Tecnológica" },
        { frase: "El tiempo es existencia y eventos en secuencia.", autor: "Curiosidad Filosófica" }
      ];
      
    // Función para obtener la frase del día
    function obtenerFraseDelDia() {
        // Obtener el número del día del año
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // Usar el día del año como índice para obtener la frase (usando el módulo para evitar errores de índice)
        const index = dayOfYear % frases.length;
        return frases[index];
    }

    // Función para mostrar la frase en la página
    function mostrarFraseDelDia() {
        const { frase, autor } = obtenerFraseDelDia();
        fraseElement.textContent = `"` + frase + `"`;
        autorElement.textContent = autor;
    }

    mostrarFraseDelDia();
});