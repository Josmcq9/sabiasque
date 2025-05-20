document.addEventListener('DOMContentLoaded', function() {
    const fraseElement = document.getElementById('frase');
    const explicacionElement = document.getElementById('explicacion'); // Obtenemos el elemento de la explicación

    // Constante con la lista de frases y sus explicaciones
    const datosSabiasQue = [
        { frase: "Un estornudo viaja a más de 160 km/h.", explicacion: "Un estornudo es una reacción involuntaria del cuerpo para expulsar irritantes de las vías respiratorias. La velocidad a la que viaja el aire puede ser sorprendente debido a la fuerza con la que se contraen los músculos respiratorios." },
        { frase: "Las uñas crecen más rápido en la mano dominante.", explicacion: "La razón exacta no se comprende completamente, pero se cree que un mayor uso y, por lo tanto, una mayor circulación sanguínea en la mano dominante, podría estimular un crecimiento más rápido de las uñas." },
        { frase: "El ojo humano distingue 10 millones de colores.", explicacion: "El ojo humano posee millones de células fotorreceptoras llamadas conos que son sensibles a diferentes longitudes de onda de luz (rojo, verde, azul), permitiendo al cerebro percibir una vasta gama de colores a través de sus combinaciones." },
        { frase: "Más bacterias en la boca que personas en el mundo.", explicacion: "La boca humana es un ecosistema complejo y alberga cientos de especies diferentes de bacterias. Muchas de estas bacterias son inofensivas e incluso beneficiosas para la salud bucal y digestiva." },
        { frase: "La risa es contagiosa por las neuronas espejo.", explicacion: "Las neuronas espejo son un tipo de neuronas que se activan tanto cuando realizamos una acción como cuando observamos a alguien más realizando la misma acción. Se cree que son fundamentales para la empatía y la imitación, lo que explica por qué la risa o el bostezo pueden ser 'contagiosos'." },
        { frase: "El cerebro humano pesa 1.4 kg.", explicacion: "Aunque es una parte relativamente pequeña del cuerpo, el cerebro consume una cantidad desproporcionada de energía y oxígeno. Su peso de alrededor de 1.4 kg en adultos es promedio, pero su complejidad funcional es inmensa." },
        { frase: "El fémur es el hueso más fuerte.", explicacion: "El fémur, ubicado en el muslo, es el hueso más largo y fuerte del cuerpo humano. Su robustez le permite soportar el peso corporal y las fuerzas generadas durante actividades como caminar, correr y saltar." },
        { frase: "Saliva para llenar dos piscinas en la vida.", explicacion: "A lo largo de la vida, una persona produce una cantidad asombrosa de saliva. La saliva es esencial para la digestión, la lubricación de la boca y la protección contra bacterias, entre otras funciones vitales." },
        { frase: "El corazón late 100,000 veces al día.", explicacion: "El corazón humano es un músculo increíblemente trabajador que bombea sangre continuamente para suministrar oxígeno y nutrientes a todo el cuerpo. Este ritmo constante de aproximadamente 100,000 latidos diarios demuestra su vital importancia." },
        { frase: "El pelo crece 15 cm al año.", explicacion: "El crecimiento del cabello varía entre individuos y factores como la genética, la dieta y la salud general. En promedio, el cabello humano crece alrededor de 1.25 centímetros (aproximadamente media pulgada) al mes, sumando unos 15 cm al año." },
        { frase: "La jirafa se limpia las orejas con la lengua.", explicacion: "Las jirafas tienen lenguas muy largas, que pueden medir hasta 45 centímetros (18 pulgadas). Esta adaptación les permite alcanzar y limpiar sus propias orejas, así como deshojar las ramas de los árboles que comen." },
        { frase: "El colibrí vuela hacia atrás.", explicacion: "Los colibríes son las únicas aves capaces de volar hacia atrás. Su estructura alar única y la capacidad de rotar sus alas 180 grados les permiten una maniobrabilidad aérea excepcional, incluyendo el vuelo estacionario y hacia atrás." },
        { frase: "El guepardo es el más rápido.", explicacion: "El guepardo es el animal terrestre más rápido, capaz de alcanzar velocidades de hasta 110-120 kilómetros por hora (70-75 mph) en carreras cortas. Está diseñado para la velocidad, con un cuerpo ligero y flexible, y garras no retráctiles para una mejor tracción." },
        { frase: "El elefante no puede saltar.", explicacion: "Los elefantes, a pesar de su tamaño y fuerza, no pueden saltar. Esto se debe a la estructura de sus patas, que no están adaptadas para el despegue vertical, y a que no tienen los mismos músculos de la pantorrilla que la mayoría de los mamíferos capaces de saltar." },
        { frase: "La lengua de ballena azul pesa como un elefante.", explicacion: "La ballena azul es el animal más grande de la Tierra, y su lengua puede pesar hasta 4 toneladas, lo que es comparable al peso de un elefante adulto. Esta enorme lengua es crucial para su alimentación por filtración." },
        { frase: "Gusanos regeneran partes del cuerpo.", explicacion: "Algunas especies de gusanos, como las planarias, tienen una notable capacidad de regeneración. Si se les corta en varias partes, cada fragmento puede regenerar un gusano completo, incluyendo su cabeza y órganos internos." },
        { frase: "Los ojos del camaleón se mueven independientemente.", explicacion: "Los camaleones tienen una visión excepcional. Sus ojos pueden moverse de forma independiente el uno del otro, lo que les permite observar dos direcciones diferentes a la vez, una adaptación clave para la caza y la detección de depredadores." },
        { frase: "El calamar gigante tiene los ojos más grandes.", explicacion: "El calamar gigante posee los ojos más grandes de cualquier criatura viviente, llegando a tener un diámetro de hasta 27 centímetros (11 pulgadas). Estos ojos enormes son una adaptación para ver en las profundidades oscuras del océano." },
        { frase: "Las estrellas de mar no tienen cerebro ni sangre.", explicacion: "Las estrellas de mar, o asteroideos, no poseen un cerebro centralizado. Su sistema nervioso es una red descentralizada. En lugar de sangre, utilizan agua de mar que circula a través de un sistema vascular acuífero." },
        { frase: "Las mariposas saborean con los pies.", explicacion: "Las mariposas tienen receptores del gusto en sus patas, específicamente en sus tarsos. Esto les permite 'probar' las plantas sobre las que se posan para determinar si son adecuadas para poner huevos o si contienen néctar." },
        { frase: "El sonido viaja 4 veces más rápido en el agua.", explicacion: "La velocidad del sonido depende del medio a través del cual viaja. En el agua, que es más densa e incompresible que el aire, las moléculas están más juntas, lo que permite que las ondas sonoras se transmitan más rápidamente." },
        { frase: "Un rayo alcanza 30,000 °C.", explicacion: "Un rayo es una descarga eléctrica atmosférica poderosa. La temperatura del canal de un rayo puede ser extremadamente alta, superando la temperatura de la superficie del Sol, debido a la inmensa energía liberada en un corto período de tiempo." },
        { frase: "El sol es una estrella mediana.", explicacion: "Aunque el Sol es enorme en comparación con la Tierra, en el contexto del universo y otras estrellas, es considerado una estrella de tamaño mediano (una enana amarilla). Existen estrellas mucho más grandes y masivas que nuestro Sol." },
        { frase: "La Tierra tiene agua líquida.", explicacion: "La presencia de agua líquida en la superficie es una característica fundamental que distingue a la Tierra y es esencial para la vida tal como la conocemos. Su órbita en la 'zona habitable' y su atmósfera permiten que el agua se mantenga en este estado." },
        { frase: "Júpiter es el planeta más grande.", explicacion: "Júpiter es el planeta más grande de nuestro sistema solar, con una masa que es dos veces y media la de todos los demás planetas combinados. Es un gigante gaseoso compuesto principalmente de hidrógeno y helio." },
         {
        frase: "Un estornudo viaja a más de 160 km/h.",
        explicacion: "Un estornudo es una reacción involuntaria y poderosa del cuerpo para expulsar irritantes de las vías respiratorias. La velocidad a la que el aire es expulsado es sorprendentemente alta."
    },
    {
        frase: "Las uñas crecen más rápido en la mano dominante.",
        explicacion: "Aunque la ciencia aún no lo explica completamente, se cree que el mayor uso y, por ende, el aumento del flujo sanguíneo en la mano dominante puede estimular un crecimiento un poco más acelerado de las uñas."
    },
    {
        frase: "El ojo humano puede distinguir 10 millones de colores diferentes.",
        explicacion: "Nuestros ojos tienen células especializadas llamadas conos que son sensibles a la luz roja, verde y azul. La combinación de estas señales permite a nuestro cerebro percibir una gama increíblemente amplia de tonalidades."
    },
    {
        frase: "Hay más bacterias en la boca humana que personas en todo el mundo.",
        explicacion: "La boca es un ecosistema complejo que alberga una gran diversidad de microorganismos. Aunque el número exacto varía, se estima que existen miles de millones de bacterias en una boca sana."
    },
    {
        frase: "La risa es contagiosa debido a las neuronas espejo.",
        explicacion: "Las neuronas espejo son células cerebrales que se activan tanto cuando realizamos una acción como cuando observamos a alguien más realizarla. Se cree que son responsables de la empatía y la imitación, incluyendo el 'contagio' de emociones como la risa."
    },
    {
        frase: "El cerebro humano pesa alrededor de 1.4 kilogramos.",
        explicacion: "A pesar de ser una parte relativamente pequeña del cuerpo, el cerebro es un órgano extremadamente complejo y energéticamente demandante, responsable de todas nuestras funciones cognitivas y corporales."
    },
    {
        frase: "El fémur es el hueso más fuerte y largo del cuerpo humano.",
        explicacion: "Ubicado en el muslo, el fémur es crucial para soportar el peso corporal y permitir el movimiento de las piernas, siendo capaz de resistir fuerzas considerables."
    },
    {
        frase: "En el transcurso de una vida, una persona produce suficiente saliva como para llenar dos piscinas.",
        explicacion: "La saliva es esencial para la digestión, lubricación de la boca, protección contra bacterias y mantenimiento de la salud bucal. Su producción es continua y abundante."
    },
    {
        frase: "El corazón humano late alrededor de 100,000 veces al día.",
        explicacion: "Este músculo vital trabaja incansablemente para bombear sangre por todo el cuerpo, suministrando oxígeno y nutrientes a cada célula, lo que subraya su increíble resistencia y eficiencia."
    },
    {
        frase: "El pelo humano crece aproximadamente 15 centímetros al año.",
        explicacion: "Aunque la tasa de crecimiento varía entre individuos y factores como la genética y la nutrición, esta es una estimación promedio del crecimiento anual del cabello en la mayoría de las personas."
    },
    {
        frase: "Las jirafas pueden limpiarse las orejas con su propia lengua.",
        explicacion: "La lengua de una jirafa es notablemente larga, pudiendo medir hasta 45 centímetros. Esta adaptación les permite alcanzar y limpiar cómodamente sus orejas, así como manipular las hojas de las que se alimentan."
    },
    {
        frase: "El colibrí es la única ave que puede volar hacia atrás.",
        explicacion: "Gracias a su capacidad para girar sus alas 180 grados en el hombro, los colibríes poseen una maniobrabilidad aérea excepcional, lo que les permite volar en todas las direcciones, incluyendo hacia atrás y permanecer suspendidos en el aire."
    },
    {
        frase: "El guepardo es el animal terrestre más rápido, alcanzando velocidades de hasta 120 km/h.",
        explicacion: "Este felino está diseñado para la velocidad, con un cuerpo esbelto y flexible, largas patas y garras no retráctiles que le proporcionan una tracción superior para cazar a sus presas en carreras cortas."
    },
    {
        frase: "Los elefantes no pueden saltar.",
        explicacion: "A diferencia de la mayoría de los mamíferos, los elefantes carecen de la estructura muscular y ósea necesaria en sus patas traseras para impulsarse en un salto. Su gran peso también influye en esta limitación."
    },
    {
        frase: "La lengua de una ballena azul pesa lo mismo que un elefante adulto.",
        explicacion: "Siendo el animal más grande del planeta, la ballena azul tiene una lengua masiva que puede llegar a pesar hasta 4 toneladas, lo que es comparable al peso de un elefante grande."
    },
    {
        frase: "Algunos gusanos tienen la capacidad de regenerar partes de su cuerpo.",
        explicacion: "Especies como las planarias son famosas por su increíble capacidad de regeneración. Si se dividen en varias partes, cada fragmento puede regenerar un organismo completo y funcional."
    },
    {
        frase: "Los ojos del camaleón se mueven de forma independiente el uno del otro.",
        explicacion: "Esta asombrosa adaptación les permite a los camaleones observar dos direcciones diferentes a la vez, lo que es extremadamente útil para detectar presas y depredadores simultáneamente."
    },
    {
        frase: "El calamar gigante tiene los ojos más grandes del reino animal.",
        explicacion: "Los ojos de un calamar gigante pueden medir hasta 27 centímetros de diámetro, lo que les permite captar la luz de forma muy eficiente en las profundidades oscuras del océano."
    },
    {
        frase: "Las estrellas de mar no tienen cerebro ni sangre.",
        explicacion: "En lugar de un cerebro central, las estrellas de mar tienen un sistema nervioso radial. Su sistema circulatorio se basa en agua de mar que circula a través de un sistema vascular acuífero."
    },
    {
        frase: "Las mariposas saborean con sus pies.",
        explicacion: "Las mariposas tienen quimiorreceptores, o 'papilas gustativas', en sus patas. Cuando se posan sobre una planta, pueden 'probarla' para determinar si es una fuente adecuada de néctar o para poner huevos."
    },
    {
        frase: "El sonido viaja aproximadamente 4 veces más rápido en el agua que en el aire.",
        explicacion: "La densidad y la incompresibilidad del agua permiten que las vibraciones sonoras se transmitan con mayor eficiencia y velocidad que en el aire, donde las moléculas están más dispersas."
    },
    {
        frase: "Un rayo puede alcanzar temperaturas de hasta 30,000 °C.",
        explicacion: "La descarga eléctrica de un rayo es tan intensa que calienta el aire circundante a temperaturas extremadamente altas, superando incluso la temperatura de la superficie del Sol por un breve instante."
    },
    {
        frase: "El Sol es una estrella de tamaño mediano.",
        explicacion: "Aunque nos parece inmenso, el Sol es clasificado como una estrella enana amarilla. Existen estrellas mucho más grandes y masivas en el universo, algunas de las cuales son gigantes o supergigantes."
    },
    {
        frase: "La Tierra es el único planeta conocido con agua líquida en su superficie.",
        explicacion: "La presencia de océanos, ríos y lagos de agua líquida es una característica distintiva de la Tierra y es un factor fundamental para la existencia de vida tal como la conocemos."
    },
    {
        frase: "Júpiter es el planeta más grande de nuestro sistema solar.",
        explicacion: "Júpiter es un gigante gaseoso cuya masa es dos veces y media la de todos los demás planetas de nuestro sistema solar combinados. Su tamaño es tan colosal que podría contener más de 1,300 Tierras."
    },
    {
        frase: "Los anillos de Saturno están compuestos principalmente de hielo y roca.",
        explicacion: "Estos impresionantes anillos consisten en miles de millones de partículas que varían en tamaño, desde granos de polvo hasta rocas grandes, formadas principalmente por hielo de agua con algunas impurezas rocosas."
    },
    {
        frase: "Urano es el único planeta que gira de lado.",
        explicacion: "A diferencia de la mayoría de los planetas, que giran con un eje de rotación casi perpendicular a su órbita, el eje de Urano está inclinado casi 98 grados, lo que hace que parezca 'rodar' sobre su costado."
    },
    {
        frase: "Neptuno es el planeta más ventoso del sistema solar.",
        explicacion: "Neptuno es conocido por sus vientos increíblemente rápidos, que pueden alcanzar velocidades de hasta 2,100 kilómetros por hora, impulsando grandes tormentas y sistemas climáticos."
    },
    {
        frase: "Plutón fue reclasificado como 'planeta enano' en 2006.",
        explicacion: "Aunque durante mucho tiempo se consideró el noveno planeta, la Unión Astronómica Internacional cambió su clasificación debido a que no cumple con el criterio de haber 'limpiado' su órbita de otros objetos."
    },
    {
        frase: "Nuestra galaxia, la Vía Láctea, es una galaxia espiral barrada.",
        explicacion: "Esto significa que tiene una estructura en espiral con un 'brazo' central de estrellas. El sistema solar se encuentra en uno de sus brazos espirales, a unos dos tercios del camino desde el centro."
    },
    {
        frase: "El universo observable contiene miles de millones de galaxias.",
        explicacion: "Las estimaciones actuales sugieren que hay al menos 2 billones de galaxias en el universo observable, cada una con miles de millones de estrellas, planetas y otros objetos celestes."
    },
    {
        frase: "La luz del Sol tarda aproximadamente 8 minutos y 20 segundos en llegar a la Tierra.",
        explicacion: "Debido a la inmensa distancia entre el Sol y la Tierra (aproximadamente 150 millones de kilómetros), la luz, que viaja a una velocidad finita, necesita este tiempo para recorrer el trayecto."
    },
    {
        frase: "Un año luz es una medida de distancia, no de tiempo.",
        explicacion: "Un año luz representa la distancia que la luz recorre en el vacío durante un año terrestre, que es aproximadamente 9.46 billones de kilómetros (5.88 billones de millas)."
    },
    {
        frase: "Los agujeros negros son regiones del espacio con una gravedad tan extrema que nada puede escapar de ellos.",
        explicacion: "Se forman a partir del colapso de estrellas muy masivas. Su gravedad es tan intensa que ni siquiera la luz puede superarla, lo que los hace 'negros'."
    },
    {
        frase: "La edad estimada del universo es de 13.8 mil millones de años.",
        explicacion: "Esta estimación se basa en mediciones cosmológicas, como la tasa de expansión del universo y el estudio de la radiación de fondo de microondas, que son remanentes del Big Bang."
    },
    {
        frase: "El agua es una de las pocas sustancias que existe naturalmente en los tres estados de la materia en la Tierra.",
        explicacion: "Podemos encontrar agua en estado sólido (hielo), líquido (agua) y gaseoso (vapor de agua) en nuestro planeta, lo que es fundamental para sus ciclos climáticos y para la vida."
    },
    {
        frase: "El agua hierve a 100 °C (212 °F) a nivel del mar.",
        explicacion: "Esta es la temperatura a la que el agua líquida se convierte en vapor bajo la presión atmosférica estándar. El punto de ebullición puede variar con la altitud."
    },
    {
        frase: "El agua se congela a 0 °C (32 °F) a nivel del mar.",
        explicacion: "Esta es la temperatura a la que el agua líquida se convierte en hielo bajo la presión atmosférica estándar. Es un punto crítico para muchos procesos naturales y biológicos."
    },
    {
        frase: "El hielo flota en el agua porque es menos denso.",
        explicacion: "A diferencia de la mayoría de las sustancias, el agua se expande y se vuelve menos densa cuando se congela, formando una estructura cristalina que permite que el hielo flote, lo que es vital para la vida acuática en climas fríos."
    },
    {
        frase: "El aire que respiramos está compuesto principalmente de nitrógeno y oxígeno.",
        explicacion: "Aproximadamente el 78% del aire es nitrógeno y el 21% es oxígeno. El 1% restante se compone de gases como argón, dióxido de carbono y trazas de otros elementos."
    },
    {
        frase: "El oxígeno es un elemento esencial para la vida en la Tierra.",
        explicacion: "Es fundamental para la respiración de la mayoría de los seres vivos, permitiendo la producción de energía en las células. También es crucial en procesos como la combustión."
    },
    {
        frase: "El dióxido de carbono es un gas de efecto invernadero.",
        explicacion: "Aunque es vital para la fotosíntesis, el dióxido de carbono atrapa el calor en la atmósfera terrestre, contribuyendo al efecto invernadero y al calentamiento global cuando sus concentraciones aumentan."
    },
    {
        frase: "La capa de ozono nos protege de la dañina radiación ultravioleta del Sol.",
        explicacion: "Situada en la estratosfera, esta capa de ozono (O3) actúa como un escudo natural, absorbiendo la mayor parte de la radiación UV que, de otra forma, causaría graves daños a los seres vivos y ecosistemas."
    },
    {
        frase: "El viento es simplemente aire en movimiento.",
        explicacion: "El viento se genera por las diferencias en la presión atmosférica. El aire se desplaza de zonas de alta presión a zonas de baja presión, creando corrientes que varían en fuerza y dirección."
    },
    {
        frase: "Las nubes son masas visibles de pequeñas gotas de agua o cristales de hielo.",
        explicacion: "Se forman cuando el vapor de agua en la atmósfera se enfría y se condensa alrededor de partículas microscópicas, como polvo o polen, formando estas estructuras que observamos en el cielo."
    },
    {
        frase: "La lluvia es la forma más común de precipitación en la que el agua cae en estado líquido.",
        explicacion: "Se produce cuando las gotas de agua en las nubes crecen lo suficiente como para que la gravedad las arrastre hacia la superficie de la Tierra."
    },
    {
        frase: "La nieve es una forma de precipitación sólida compuesta de cristales de hielo.",
        explicacion: "Se forma en las nubes cuando las temperaturas son lo suficientemente bajas como para que el vapor de agua se congele directamente en cristales de hielo que se agrupan en copos."
    },
    {
        frase: "El granizo son bolas irregulares de hielo que caen de las nubes.",
        explicacion: "Se forman en el interior de fuertes tormentas, donde las corrientes de aire ascendentes y descendentes hacen que las gotas de agua se congelen, crezcan y se vuelvan a congelar en capas."
    },
    {
        frase: "El arcoíris es un fenómeno óptico causado por la luz solar y las gotas de agua.",
        explicacion: "Se forma cuando la luz del Sol se refracta y se refleja en las gotas de lluvia o rocío, dividiéndose en su espectro de colores y creando el icónico arco en el cielo."
    },
    {
        frase: "El primer vuelo controlado y sostenido fue realizado por los hermanos Wright en 1903.",
        explicacion: "Este hito revolucionario en la historia de la aviación tuvo lugar el 17 de diciembre de 1903, con su aeronave 'Wright Flyer' en Kitty Hawk, Carolina del Norte."
    },
    {
        frase: "El primer automóvil moderno de gasolina fue creado por Karl Benz en 1885.",
        explicacion: "El 'Motorwagen' de Benz, patentado en 1886, es ampliamente reconocido como el nacimiento del automóvil tal como lo conocemos, sentando las bases para la industria automotriz."
    },
    {
        frase: "El teléfono fue patentado por Alexander Graham Bell en 1876.",
        explicacion: "Su invención transformó la comunicación a distancia, permitiendo la transmisión de la voz humana a través de cables, lo que revolucionó la sociedad."
    },
    {
        frase: "Thomas Edison es ampliamente acreditado con la invención de la bombilla incandescente práctica en 1879.",
        explicacion: "Aunque otros inventores trabajaron en la tecnología, Edison desarrolló un filamento de carbono duradero que hizo que la bombilla fuera comercialmente viable y accesible al público."
    },
    {
        frase: "La primera computadora programable fue conceptualizada por Charles Babbage en la década de 1830.",
        explicacion: "Su 'Máquina Analítica' era un diseño visionario que incluía elementos clave de los ordenadores modernos, aunque nunca se construyó completamente en su época."
    },
    {
        frase: "El primer mensaje de texto (SMS) se envió en 1992.",
        explicacion: "Este simple mensaje, que decía 'Merry Christmas', marcó el inicio de la comunicación móvil por texto, una herramienta que se convertiría en omnipresente."
    },
    {
        frase: "El primer sitio web fue puesto en línea por Tim Berners-Lee en 1991.",
        explicacion: "Este sitio explicaba los principios de la World Wide Web y cómo se podía usar, sentando las bases para la explosión de Internet tal como la conocemos hoy."
    },
    {
        frase: "El primer correo electrónico fue enviado por Ray Tomlinson en 1971.",
        explicacion: "Tomlinson introdujo el uso del símbolo '@' para separar el nombre de usuario del nombre del equipo, un estándar que perdura hasta el día de hoy."
    },
    {
        frase: "La Gran Muralla China tiene una longitud total de más de 20,000 kilómetros.",
        explicacion: "Esta vasta serie de fortificaciones fue construida a lo largo de siglos para proteger las fronteras del imperio chino de invasiones, siendo una de las estructuras más grandes jamás construidas por el hombre."
    },
    {
        frase: "La Torre Eiffel mide 324 metros de altura.",
        explicacion: "Construida para la Exposición Universal de París en 1889, esta icónica estructura de hierro forjado fue la más alta del mundo durante 41 años y sigue siendo un símbolo de París."
    },
    {
        frase: "El Coliseo de Roma podía albergar a más de 50,000 espectadores.",
        explicacion: "Este anfiteatro elíptico, construido en el siglo I d.C., era el escenario de combates de gladiadores, recreaciones de batallas y espectáculos públicos para el disfrute de la población romana."
    },
    {
        frase: "Las Pirámides de Giza son tumbas para faraones egipcios.",
        explicacion: "Estas monumentales estructuras fueron construidas como necrópolis para los faraones de la Cuarta Dinastía, siendo las únicas de las Siete Maravillas del Mundo Antiguo que aún permanecen en gran parte intactas."
    },
    {
        frase: "El Taj Mahal es un impresionante mausoleo ubicado en la India.",
        explicacion: "Fue construido por el emperador mogol Shah Jahan en memoria de su amada esposa, Mumtaz Mahal. Es una obra maestra arquitectónica y un símbolo del amor eterno."
    },
    {
        frase: "La Estatua de la Libertad fue un regalo de Francia a Estados Unidos.",
        explicacion: "Fue obsequiada para conmemorar el centenario de la Declaración de Independencia de Estados Unidos y simboliza la amistad entre ambas naciones y la libertad."
    },
    {
        frase: "El Big Ben es en realidad el nombre de la gran campana dentro de la torre del reloj en Londres.",
        explicacion: "Aunque comúnmente se usa para referirse a toda la torre del reloj del Palacio de Westminster, el nombre oficial de la torre es 'Elizabeth Tower'."
    },
    {
        frase: "La Ópera de Sídney tiene una forma distintiva que se asemeja a conchas o velas.",
        explicacion: "Este icónico edificio australiano, reconocido mundialmente, es famoso por su diseño arquitectónico modernista y es uno de los centros de artes escénicas más concurridos."
    },
    {
        frase: "El Cristo Redentor se encuentra en la cima del Cerro del Corcovado en Río de Janeiro, Brasil.",
        explicacion: "Esta icónica estatua art déco de Jesús de Nazaret es un símbolo cultural tanto de la ciudad de Río como de Brasil, y es una de las Nuevas Siete Maravillas del Mundo."
    },
    {
        frase: "Machu Picchu es una antigua ciudadela inca en los Andes peruanos.",
        explicacion: "Construida en el siglo XV, es un impresionante ejemplo de la arquitectura inca y un testimonio de su avanzada ingeniería y conexión con la naturaleza."
    },
    {
        frase: "El sistema métrico se basa en el metro, el kilogramo y el segundo.",
        explicacion: "Es el sistema de unidades de medida más utilizado a nivel mundial, caracterizado por su coherencia y facilidad de uso, basado en múltiplos de diez."
    },
    {
        frase: "El sistema imperial de unidades incluye el pie, la libra y el segundo.",
        explicacion: "Aunque ha sido reemplazado en gran parte por el sistema métrico, todavía se utiliza en algunos países, como Estados Unidos y el Reino Unido para ciertas mediciones."
    },
    {
        frase: "El primer calendario conocido fue desarrollado por los antiguos egipcios.",
        explicacion: "Este calendario solar de 365 días fue crucial para la agricultura, ya que les permitía predecir las crecidas anuales del río Nilo, vitales para sus cosechas."
    },
    {
        frase: "El reloj de sol fue uno de los primeros instrumentos para medir el tiempo.",
        explicacion: "Funcionaba proyectando la sombra de un objeto (gnomon) sobre una superficie marcada con horas, indicando la hora del día según la posición del Sol."
    },
    {
        frase: "El reloj de agua, o clepsidra, medía el tiempo mediante el flujo de agua.",
        explicacion: "Estos antiguos dispositivos medían el tiempo observando la cantidad de agua que goteaba de un recipiente a otro o por el nivel del agua en un recipiente graduado."
    },
    {
        frase: "Los primeros relojes mecánicos se desarrollaron en Europa en el siglo XIV.",
        explicacion: "Estos avances tecnológicos permitieron una medición del tiempo más precisa y sentaron las bases para la relojería moderna, marcando el paso de una medición del tiempo basada en la naturaleza a una artificial."
    },
    {
        frase: "El reloj de péndulo fue inventado por Christiaan Huygens en el siglo XVII.",
        explicacion: "La regularidad del movimiento del péndulo lo convirtió en el cronometrador más preciso de su época, revolucionando la navegación y la astronomía."
    },
    {
        frase: "Los relojes de cuarzo se hicieron populares en el siglo XX debido a su precisión y asequibilidad.",
        explicacion: "Estos relojes utilizan las vibraciones de un cristal de cuarzo para mantener el tiempo, siendo significativamente más exactos que los relojes mecánicos y más económicos de producir."
    }
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
        const index = dayOfYear % datosSabiasQue.length;
        return datosSabiasQue[index];
    }

    // Función para mostrar la frase y su explicación en la página
    function mostrarFraseDelDia() {
        const { frase, explicacion } = obtenerFraseDelDia(); // Ahora obtenemos frase y explicación
        fraseElement.textContent = `"${frase}"`;
        explicacionElement.textContent = explicacion; // Asignamos la explicación
    }

    mostrarFraseDelDia();
});