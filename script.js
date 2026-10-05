// ================================
// MATH ROCKET
// ================================

let nombreJugador = "";
let apellidoJugador = "";
let cursoJugador = "";

let puntos = 0;
let preguntaActual = 0;
let respuestasCorrectas = 0;
let racha = 0;
let mejorRacha = 0;

let tiempo = 10;
let temporizador = null;
let respondiendo = false;

let preguntasPartida = [];


// ================================
// BANCO DE PREGUNTAS
// 30 POR CADA CURSO
// ================================

const bancoPreguntas = {

    // ========================================
    // 1° MEDIO
    // ========================================

    "1° Medio": [

        {
            pregunta: "¿Cuánto es 25 + 18?",
            opciones: ["33", "43", "53", "63"],
            correcta: 1
        },
        {
            pregunta: "¿Cuánto es 72 - 35?",
            opciones: ["27", "37", "47", "57"],
            correcta: 1
        },
        {
            pregunta: "¿Cuánto es 8 × 7?",
            opciones: ["48", "54", "56", "64"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto es 96 ÷ 8?",
            opciones: ["10", "11", "12", "14"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto es 15 × 4?",
            opciones: ["45", "50", "60", "70"],
            correcta: 2
        },

        {
            pregunta: "¿Cuánto es 2³?",
            opciones: ["6", "8", "9", "12"],
            correcta: 1
        },
        {
            pregunta: "¿Cuánto es √64?",
            opciones: ["6", "7", "8", "9"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto es 5²?",
            opciones: ["10", "15", "20", "25"],
            correcta: 3
        },
        {
            pregunta: "¿Cuánto es 10²?",
            opciones: ["20", "50", "100", "200"],
            correcta: 2
        },

        {
            pregunta: "Si x + 7 = 15, ¿cuánto vale x?",
            opciones: ["6", "7", "8", "9"],
            correcta: 2
        },
        {
            pregunta: "Si x - 5 = 12, ¿cuánto vale x?",
            opciones: ["15", "17", "19", "20"],
            correcta: 1
        },
        {
            pregunta: "Si 2x = 18, ¿cuánto vale x?",
            opciones: ["7", "8", "9", "10"],
            correcta: 2
        },
        {
            pregunta: "Si x + 12 = 20, ¿cuánto vale x?",
            opciones: ["6", "7", "8", "9"],
            correcta: 2
        },
        {
            pregunta: "Si 3x = 21, ¿cuánto vale x?",
            opciones: ["6", "7", "8", "9"],
            correcta: 1
        },

        {
            pregunta: "¿Cuál es el 10% de 100?",
            opciones: ["5", "10", "15", "20"],
            correcta: 1
        },
        {
            pregunta: "¿Cuál es el 20% de 200?",
            opciones: ["20", "30", "40", "50"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el 50% de 80?",
            opciones: ["20", "30", "40", "50"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el 25% de 100?",
            opciones: ["15", "20", "25", "30"],
            correcta: 2
        },

        {
            pregunta: "¿Cuál es el área de un cuadrado de lado 5 cm?",
            opciones: ["10 cm²", "20 cm²", "25 cm²", "30 cm²"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el perímetro de un cuadrado de lado 6 cm?",
            opciones: ["12 cm", "18 cm", "24 cm", "36 cm"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el área de un rectángulo de 8 cm × 4 cm?",
            opciones: ["24 cm²", "32 cm²", "36 cm²", "40 cm²"],
            correcta: 1
        },
        {
            pregunta: "Un triángulo tiene base 10 cm y altura 4 cm. ¿Cuál es su área?",
            opciones: ["20 cm²", "30 cm²", "40 cm²", "50 cm²"],
            correcta: 0
        },

        {
            pregunta: "Si 2 cuadernos cuestan $2.000, ¿cuánto cuestan 4?",
            opciones: ["$2.000", "$3.000", "$4.000", "$5.000"],
            correcta: 2
        },
        {
            pregunta: "Si 5 lápices cuestan $1.500, ¿cuánto cuesta 1?",
            opciones: ["$200", "$300", "$400", "$500"],
            correcta: 1
        },
        {
            pregunta: "Si recorres 5 km en 1 hora, ¿cuántos km recorres en 3 horas?",
            opciones: ["10", "12", "15", "20"],
            correcta: 2
        },

        {
            pregunta: "¿Cuál es mayor?",
            opciones: ["0,5", "0,25", "0,2", "0,1"],
            correcta: 0
        },
        {
            pregunta: "¿Cuánto es 1/2 + 1/2?",
            opciones: ["1/2", "1", "2", "3/2"],
            correcta: 1
        },
        {
            pregunta: "¿Cuánto es 3/4 de 20?",
            opciones: ["10", "12", "15", "18"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto es 0,5 × 10?",
            opciones: ["2", "5", "10", "15"],
            correcta: 1
        },
        {
            pregunta: "¿Cuánto es 1000 ÷ 10?",
            opciones: ["10", "50", "100", "500"],
            correcta: 2
        }

    ],


    // ========================================
    // 2° MEDIO
    // ========================================

    "2° Medio": [

        {
            pregunta: "¿Cuánto es 12 × 6?",
            opciones: ["62", "72", "82", "92"],
            correcta: 1
        },
        {
            pregunta: "¿Cuánto es 144 ÷ 12?",
            opciones: ["10", "11", "12", "14"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto es 45 + 38?",
            opciones: ["73", "83", "93", "103"],
            correcta: 1
        },
        {
            pregunta: "¿Cuánto es 100 - 47?",
            opciones: ["43", "53", "63", "73"],
            correcta: 1
        },

        {
            pregunta: "¿Cuánto es 3²?",
            opciones: ["6", "9", "12", "15"],
            correcta: 1
        },
        {
            pregunta: "¿Cuánto es 2⁴?",
            opciones: ["8", "12", "16", "24"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto es √100?",
            opciones: ["5", "8", "10", "20"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto es 5³?",
            opciones: ["25", "75", "100", "125"],
            correcta: 3
        },

        {
            pregunta: "Si x + 8 = 20, ¿cuánto vale x?",
            opciones: ["10", "11", "12", "13"],
            correcta: 2
        },
        {
            pregunta: "Si 2x = 24, ¿cuánto vale x?",
            opciones: ["10", "12", "14", "16"],
            correcta: 1
        },
        {
            pregunta: "Si 3x = 27, ¿cuánto vale x?",
            opciones: ["6", "7", "8", "9"],
            correcta: 3
        },
        {
            pregunta: "Si x - 9 = 6, ¿cuánto vale x?",
            opciones: ["12", "14", "15", "16"],
            correcta: 2
        },
        {
            pregunta: "Si 2x + 4 = 14, ¿cuánto vale x?",
            opciones: ["4", "5", "6", "7"],
            correcta: 1
        },

        {
            pregunta: "¿Cuál es el 15% de 200?",
            opciones: ["20", "25", "30", "35"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el 25% de 400?",
            opciones: ["50", "75", "100", "125"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el 30% de 100?",
            opciones: ["20", "30", "40", "50"],
            correcta: 1
        },
        {
            pregunta: "Un producto cuesta $10.000 y tiene 10% de descuento. ¿Cuánto se paga?",
            opciones: ["$8.000", "$9.000", "$9.500", "$10.000"],
            correcta: 1
        },

        {
            pregunta: "Si y = 2x + 1, ¿cuánto vale y cuando x = 3?",
            opciones: ["5", "6", "7", "8"],
            correcta: 2
        },
        {
            pregunta: "Si f(x) = x + 4, ¿cuánto vale f(5)?",
            opciones: ["7", "8", "9", "10"],
            correcta: 2
        },
        {
            pregunta: "En y = 4x + 2, ¿cuál es la pendiente?",
            opciones: ["2", "4", "6", "8"],
            correcta: 1
        },
        {
            pregunta: "Si y = 3x, ¿cuánto vale y cuando x = 4?",
            opciones: ["7", "10", "12", "14"],
            correcta: 2
        },

        {
            pregunta: "¿Cuál es el área de un rectángulo de 10 × 5?",
            opciones: ["30", "40", "50", "60"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el perímetro de un cuadrado de lado 8?",
            opciones: ["16", "24", "32", "64"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto mide la suma de los ángulos interiores de un triángulo?",
            opciones: ["90°", "180°", "270°", "360°"],
            correcta: 1
        },

        {
            pregunta: "¿Cuál es la probabilidad de sacar un número par en un dado?",
            opciones: ["1/6", "1/3", "1/2", "2/3"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es la probabilidad de sacar un 6 en un dado?",
            opciones: ["1/2", "1/4", "1/6", "1/8"],
            correcta: 2
        },

        {
            pregunta: "¿Cuánto es 0,25 × 100?",
            opciones: ["2,5", "25", "50", "75"],
            correcta: 1
        },
        {
            pregunta: "¿Cuánto es 3/5 de 20?",
            opciones: ["8", "10", "12", "15"],
            correcta: 2
        },
        {
            pregunta: "Si 4 entradas cuestan $8.000, ¿cuánto cuesta una?",
            opciones: ["$1.000", "$2.000", "$3.000", "$4.000"],
            correcta: 1
        },
        {
            pregunta: "¿Cuánto es 2,5 + 1,5?",
            opciones: ["3", "4", "4,5", "5"],
            correcta: 1
        }

    ],


    // ========================================
    // 3° MEDIO
    // ========================================

    "3° Medio": [

        {
            pregunta: "¿Cuánto es 15 × 4?",
            opciones: ["45", "50", "60", "75"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto es 120 ÷ 6?",
            opciones: ["15", "20", "25", "30"],
            correcta: 1
        },
        {
            pregunta: "¿Cuánto es 2⁵?",
            opciones: ["16", "24", "32", "64"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto es √121?",
            opciones: ["9", "10", "11", "12"],
            correcta: 2
        },

        {
            pregunta: "Si 2x = 18, ¿cuánto vale x?",
            opciones: ["7", "8", "9", "10"],
            correcta: 2
        },
        {
            pregunta: "Si 3x + 2 = 14, ¿cuánto vale x?",
            opciones: ["3", "4", "5", "6"],
            correcta: 1
        },
        {
            pregunta: "Si x - 7 = 15, ¿cuánto vale x?",
            opciones: ["20", "21", "22", "23"],
            correcta: 2
        },
        {
            pregunta: "Si 2x + 6 = 20, ¿cuánto vale x?",
            opciones: ["6", "7", "8", "9"],
            correcta: 1
        },
        {
            pregunta: "Si x/3 = 5, ¿cuánto vale x?",
            opciones: ["8", "12", "15", "18"],
            correcta: 2
        },

        {
            pregunta: "Si f(x) = x + 5, ¿cuánto vale f(3)?",
            opciones: ["6", "7", "8", "9"],
            correcta: 2
        },
        {
            pregunta: "Si f(x) = 2x + 1, ¿cuánto vale f(4)?",
            opciones: ["7", "8", "9", "10"],
            correcta: 2
        },
        {
            pregunta: "En y = 5x + 2, ¿cuál es la pendiente?",
            opciones: ["2", "3", "5", "7"],
            correcta: 2
        },
        {
            pregunta: "Si f(x) = 3x, ¿cuánto vale f(5)?",
            opciones: ["8", "12", "15", "18"],
            correcta: 2
        },
        {
            pregunta: "Si f(x) = x², ¿cuánto vale f(4)?",
            opciones: ["8", "12", "16", "20"],
            correcta: 2
        },

        {
            pregunta: "¿Cuál es la probabilidad de sacar un número par en un dado?",
            opciones: ["1/6", "1/3", "1/2", "2/3"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es la probabilidad de sacar un 6 en un dado?",
            opciones: ["1/2", "1/4", "1/6", "1/8"],
            correcta: 2
        },
        {
            pregunta: "Una moneda tiene dos resultados posibles. ¿Cuál es la probabilidad de obtener cara?",
            opciones: ["1/4", "1/3", "1/2", "1"],
            correcta: 2
        },
        {
            pregunta: "En una bolsa hay 3 bolas rojas y 1 azul. ¿Cuál es la probabilidad de sacar la azul?",
            opciones: ["1/2", "1/3", "1/4", "3/4"],
            correcta: 2
        },
        {
            pregunta: "Al lanzar un dado, ¿cuál es la probabilidad de sacar un número mayor que 4?",
            opciones: ["1/6", "1/3", "1/2", "2/3"],
            correcta: 1
        },

        {
            pregunta: "¿Cuál es el 25% de 200?",
            opciones: ["25", "40", "50", "75"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el 30% de 300?",
            opciones: ["60", "90", "100", "120"],
            correcta: 1
        },
        {
            pregunta: "¿Cuánto es 0,5 × 80?",
            opciones: ["20", "30", "40", "50"],
            correcta: 2
        },

        {
            pregunta: "¿Cuál es el área de un círculo de radio 2 usando π ≈ 3?",
            opciones: ["6", "9", "12", "15"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el perímetro de un cuadrado de lado 9?",
            opciones: ["18", "27", "36", "81"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el área de un triángulo de base 12 y altura 5?",
            opciones: ["20", "30", "40", "60"],
            correcta: 1
        },

        {
            pregunta: "¿Cuánto es 4³?",
            opciones: ["12", "32", "64", "81"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el valor de 10²?",
            opciones: ["20", "50", "100", "200"],
            correcta: 2
        },
        {
            pregunta: "Si una entrada cuesta $4.000 y compras 3, ¿cuánto pagas?",
            opciones: ["$8.000", "$10.000", "$12.000", "$14.000"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto es 3/4 de 40?",
            opciones: ["20", "25", "30", "35"],
            correcta: 2
        },
        {
            pregunta: "Si tienes 60 puntos y ganas 20 más, ¿cuántos tienes?",
            opciones: ["70", "80", "90", "100"],
            correcta: 1
        }

    ],


    // ========================================
    // 4° MEDIO
    // ========================================

    "4° Medio": [

        {
            pregunta: "¿Cuánto es 20 × 4?",
            opciones: ["60", "70", "80", "90"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto es 144 ÷ 12?",
            opciones: ["10", "11", "12", "14"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto es 2⁶?",
            opciones: ["32", "48", "64", "72"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto es √144?",
            opciones: ["10", "11", "12", "14"],
            correcta: 2
        },

        {
            pregunta: "Si x + 10 = 25, ¿cuánto vale x?",
            opciones: ["10", "12", "15", "20"],
            correcta: 2
        },
        {
            pregunta: "Si 2x = 30, ¿cuánto vale x?",
            opciones: ["10", "12", "15", "20"],
            correcta: 2
        },
        {
            pregunta: "Si 3x + 3 = 18, ¿cuánto vale x?",
            opciones: ["4", "5", "6", "7"],
            correcta: 1
        },
        {
            pregunta: "Si 2x + 4 = 20, ¿cuánto vale x?",
            opciones: ["6", "7", "8", "9"],
            correcta: 2
        },
        {
            pregunta: "Si x/4 = 6, ¿cuánto vale x?",
            opciones: ["20", "24", "28", "30"],
            correcta: 1
        },

        {
            pregunta: "Si f(x) = 2x + 3, ¿cuánto vale f(4)?",
            opciones: ["9", "10", "11", "12"],
            correcta: 2
        },
        {
            pregunta: "Si f(x) = 3x + 1, ¿cuánto vale f(3)?",
            opciones: ["7", "9", "10", "12"],
            correcta: 2
        },
        {
            pregunta: "En y = 4x + 1, ¿cuál es la pendiente?",
            opciones: ["1", "2", "4", "5"],
            correcta: 2
        },
        {
            pregunta: "Si f(x) = x², ¿cuánto vale f(5)?",
            opciones: ["10", "20", "25", "30"],
            correcta: 2
        },
        {
            pregunta: "Si f(x) = x + 7, ¿cuánto vale f(8)?",
            opciones: ["14", "15", "16", "17"],
            correcta: 1
        },

        {
            pregunta: "¿Cuál es la probabilidad de sacar un 6 en un dado?",
            opciones: ["1/2", "1/4", "1/6", "1/8"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es la probabilidad de sacar un número par en un dado?",
            opciones: ["1/6", "1/3", "1/2", "2/3"],
            correcta: 2
        },
        {
            pregunta: "Una moneda tiene dos resultados. ¿Cuál es la probabilidad de cara?",
            opciones: ["1/4", "1/3", "1/2", "1"],
            correcta: 2
        },
        {
            pregunta: "Una bolsa tiene 2 bolas rojas y 2 azules. ¿Probabilidad de sacar roja?",
            opciones: ["1/4", "1/3", "1/2", "3/4"],
            correcta: 2
        },
        {
            pregunta: "En un dado, ¿probabilidad de sacar un número mayor que 3?",
            opciones: ["1/6", "1/3", "1/2", "2/3"],
            correcta: 2
        },

        {
            pregunta: "¿Cuál es el 50% de 160?",
            opciones: ["60", "70", "80", "90"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el 20% de 300?",
            opciones: ["40", "50", "60", "70"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el 25% de 400?",
            opciones: ["50", "75", "100", "125"],
            correcta: 2
        },

        {
            pregunta: "¿Cuál es el área de un rectángulo de 12 × 5?",
            opciones: ["50", "60", "70", "80"],
            correcta: 1
        },
        {
            pregunta: "¿Cuál es el perímetro de un cuadrado de lado 10?",
            opciones: ["20", "30", "40", "100"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el área de un triángulo de base 10 y altura 8?",
            opciones: ["20", "40", "60", "80"],
            correcta: 1
        },

        {
            pregunta: "¿Cuánto es 5³?",
            opciones: ["25", "75", "100", "125"],
            correcta: 3
        },
        {
            pregunta: "¿Cuánto es 3⁴?",
            opciones: ["27", "54", "81", "108"],
            correcta: 2
        },
        {
            pregunta: "¿Cuánto es 0,25 × 200?",
            opciones: ["25", "40", "50", "75"],
            correcta: 2
        },
        {
            pregunta: "Si una entrada cuesta $5.000 y compras 4, ¿cuánto pagas?",
            opciones: ["$15.000", "$20.000", "$25.000", "$30.000"],
            correcta: 1
        },
        {
            pregunta: "¿Cuánto es 3/5 de 50?",
            opciones: ["20", "25", "30", "35"],
            correcta: 2
        }
    ]
};


// ================================
// ELEMENTOS
// ================================

const inicio = document.getElementById("inicio");
const juego = document.getElementById("juego");
const resultado = document.getElementById("resultado");
const rocket = document.getElementById("rocket");
const ranking = document.getElementById("ranking");

const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const cursoInput = document.getElementById("curso");

const btnComenzar = document.getElementById("btnComenzar");
const btnRocket = document.getElementById("btnRocket");
const btnRankingRocket = document.getElementById("btnRankingRocket");
const btnVolver = document.getElementById("btnVolver");

const botonesRespuesta = [
    document.getElementById("respuesta0"),
    document.getElementById("respuesta1"),
    document.getElementById("respuesta2"),
    document.getElementById("respuesta3")
];


// ================================
// CAMBIAR PANTALLA
// ================================

function mostrarPantalla(pantalla) {

    document.querySelectorAll(".pantalla").forEach(p => {
        p.classList.remove("activa");
    });

    pantalla.classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ================================
// MEZCLAR PREGUNTAS
// ================================

function mezclarPreguntas(lista) {

    const copia = [...lista];

    for (let i = copia.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] =
            [copia[j], copia[i]];
    }

    return copia;
}


// ================================
// COMENZAR
// ================================

btnComenzar.addEventListener("click", () => {

    nombreJugador = nombreInput.value.trim();
    apellidoJugador = apellidoInput.value.trim();
    cursoJugador = cursoInput.value;

    if (
        nombreJugador === "" ||
        apellidoJugador === "" ||
        cursoJugador === ""
    ) {

        alert("Completa tu nombre, apellido y curso.");

        return;
    }

    puntos = 0;
    preguntaActual = 0;
    respuestasCorrectas = 0;
    racha = 0;
    mejorRacha = 0;

    preguntasPartida =
        mezclarPreguntas(
            bancoPreguntas[cursoJugador]
        ).slice(0, 7);

    document.getElementById("jugadorActual").textContent =
        nombreJugador + " " + apellidoJugador;

    document.getElementById("cursoActual").textContent =
        cursoJugador;

    mostrarPantalla(juego);

    mostrarPregunta();
});


// ================================
// MOSTRAR PREGUNTA
// ================================

function mostrarPregunta() {

    clearInterval(temporizador);

    respondiendo = true;

    const pregunta =
        preguntasPartida[preguntaActual];

    document.getElementById("numeroPregunta").textContent =
        preguntaActual + 1;

    document.getElementById("nivel").textContent =
        cursoJugador;

    document.getElementById("pregunta").textContent =
        pregunta.pregunta;

    document.getElementById("puntos").textContent =
        puntos;

    document.getElementById("racha").textContent =
        racha;

    document.getElementById("correctas").textContent =
        respuestasCorrectas;

    botonesRespuesta.forEach((boton, indice) => {

        boton.textContent =
            pregunta.opciones[indice];

        boton.disabled = false;

        boton.classList.remove(
            "correcta",
            "incorrecta"
        );

    });

    document.getElementById("mensaje").textContent = "";

    iniciarTemporizador();
}


// ================================
// TEMPORIZADOR
// ================================

function iniciarTemporizador() {

    tiempo = 10;

    actualizarTiempo();

    temporizador = setInterval(() => {

        tiempo--;

        actualizarTiempo();

        if (tiempo <= 0) {

            clearInterval(temporizador);

            tiempoAgotado();
        }

    }, 1000);
}


function actualizarTiempo() {

    document.getElementById("tiempo").textContent =
        tiempo;

    document.getElementById("barraTiempo").style.width =
        (tiempo * 10) + "%";
}


// ================================
// RESPUESTAS
// ================================

botonesRespuesta.forEach((boton, indice) => {

    boton.addEventListener("click", () => {

        comprobarRespuesta(indice);

    });

});


function comprobarRespuesta(indice) {

    if (!respondiendo) return;

    respondiendo = false;

    clearInterval(temporizador);

    const pregunta =
        preguntasPartida[preguntaActual];

    botonesRespuesta.forEach(boton => {
        boton.disabled = true;
    });

    if (indice === pregunta.correcta) {

        botonesRespuesta[indice]
            .classList.add("correcta");

        const puntosGanados =
            puntosPregunta();

        puntos += puntosGanados;

        respuestasCorrectas++;

        racha++;

        if (racha > mejorRacha) {
            mejorRacha = racha;
        }

        document.getElementById("mensaje").textContent =
            "✅ ¡Correcto! +" +
            puntosGanados +
            " puntos";

    } else {

        botonesRespuesta[indice]
            .classList.add("incorrecta");

        botonesRespuesta[pregunta.correcta]
            .classList.add("correcta");

        racha = 0;

        document.getElementById("mensaje").textContent =
            "❌ Incorrecto. 0 puntos";
    }

    document.getElementById("puntos").textContent =
        puntos;

    document.getElementById("racha").textContent =
        racha;

    document.getElementById("correctas").textContent =
        respuestasCorrectas;

    setTimeout(() => {

        siguientePregunta();

    }, 1000);
}


// ================================
// PUNTOS
// ================================

function puntosPregunta() {

    const valores = [
        100,
        100,
        150,
        150,
        200,
        250,
        300
    ];

    return valores[preguntaActual];
}


// ================================
// TIEMPO AGOTADO
// ================================

function tiempoAgotado() {

    if (!respondiendo) return;

    respondiendo = false;

    botonesRespuesta.forEach(boton => {
        boton.disabled = true;
    });

    const pregunta =
        preguntasPartida[preguntaActual];

    botonesRespuesta[pregunta.correcta]
        .classList.add("correcta");

    racha = 0;

    document.getElementById("mensaje").textContent =
        "⏰ ¡Se acabó el tiempo! 0 puntos";

    setTimeout(() => {

        siguientePregunta();

    }, 1000);
}


// ================================
// SIGUIENTE PREGUNTA
// ================================

function siguientePregunta() {

    preguntaActual++;

    if (preguntaActual >= 7) {

        terminarJuego();

    } else {

        mostrarPregunta();

    }
}


// ================================
// TERMINAR JUEGO
// ================================

function terminarJuego() {

    clearInterval(temporizador);

    document.getElementById("nombreFinal").textContent =
        nombreJugador + " " + apellidoJugador;

    document.getElementById("puntajeFinal").textContent =
        puntos;

    document.getElementById("preguntasCorrectas").textContent =
        respuestasCorrectas;

    document.getElementById("mejorRacha").textContent =
        mejorRacha;

    guardarRanking();

    mostrarPantalla(resultado);
}


// ================================
// GUARDAR RANKING
// ================================

function guardarRanking() {

    let rankingDatos =
        JSON.parse(
            localStorage.getItem("rankingMath")
        ) || [];

    rankingDatos.push({

        nombre: nombreJugador,

        apellido: apellidoJugador,

        curso: cursoJugador,

        puntos: puntos

    });

    rankingDatos.sort((a, b) =>
        b.puntos - a.puntos
    );

    localStorage.setItem(
        "rankingMath",
        JSON.stringify(rankingDatos)
    );
}


// ================================
// VER VIAJE
// ================================

btnRocket.addEventListener("click", () => {

    mostrarPantalla(rocket);

    iniciarViajeRocket();

});


// ================================
// COHETE
// ================================

function iniciarViajeRocket() {

    const cohete =
        document.getElementById("cohete");

    const nombreCohete =
        document.getElementById("nombreCohete");

    document.getElementById("rocketJugador")
        .textContent =
        nombreJugador + " " + apellidoJugador;

    document.getElementById("rocketPuntos")
        .textContent =
        puntos + " puntos";

    nombreCohete.textContent =
        nombreJugador + " " + apellidoJugador;

    cohete.className = "cohete";

    cohete.style.left = "4%";
    cohete.style.bottom = "50px";

    document.getElementById("resultadoRocket")
        .textContent =
        "🚀 ¡Preparando lanzamiento!";

    setTimeout(() => {

        cohete.classList.add("volando");

    }, 500);

    setTimeout(() => {

        if (puntos >= 800) {

            llegarPlaneta3();

        } else if (puntos >= 500) {

            llegarPlaneta2();

        } else if (puntos >= 300) {

            llegarPlaneta1();

        } else {

            noLlegaPlaneta();

        }

    }, 2800);
}


// ================================
// TIERRA
// 300 PUNTOS - SIN PREMIO
// ================================

function llegarPlaneta1() {

    const cohete =
        document.getElementById("cohete");

    cohete.className = "cohete";

    cohete.style.left = "25%";
    cohete.style.bottom = "38%";

    document.getElementById("resultadoRocket")
        .innerHTML = `
        🌎 <strong>¡Aterrizaste en la Tierra!</strong><br>
        ${nombreJugador}, conseguiste ${puntos} puntos.<br>
        🚀 <strong>No ganaste premio esta vez.</strong>
    `;
}


// ================================
// SATURNO
// 500 PUNTOS - 1 DULCE
// ================================

function llegarPlaneta2() {

    const cohete =
        document.getElementById("cohete");

    cohete.className = "cohete";

    cohete.style.left = "50%";
    cohete.style.bottom = "48%";

    document.getElementById("resultadoRocket")
        .innerHTML = `
        🪐 <strong>¡Llegaste a Saturno!</strong><br>
        ${nombreJugador}, conseguiste ${puntos} puntos.<br>
        🍬 <strong>Ganaste 1 dulce.</strong>
    `;
}


// ================================
// PLANETA FINAL
// 800 PUNTOS - 2 DÉCIMAS
// ================================

function llegarPlaneta3() {

    const cohete =
        document.getElementById("cohete");

    cohete.className = "cohete";

    cohete.style.left = "80%";
    cohete.style.bottom = "40%";

    document.getElementById("resultadoRocket")
        .innerHTML = `
        🌌 <strong>¡LLEGASTE AL PLANETA FINAL!</strong><br>
        ${nombreJugador}, conseguiste ${puntos} puntos.<br>
        ⭐ <strong>¡Ganaste 2 décimas!</strong>
    `;
}


// ================================
// NO LLEGA
// ================================

function noLlegaPlaneta() {

    const cohete =
        document.getElementById("cohete");

    cohete.style.left = "12%";

    document.getElementById("resultadoRocket")
        .innerHTML = `
        🚀 <strong>No alcanzaste un planeta.</strong><br>
        Necesitas al menos 300 puntos para llegar a la Tierra.
    `;
}


// ================================
// RANKING
// ================================

btnRankingRocket.addEventListener("click", () => {

    mostrarPantalla(ranking);

    mostrarRanking("1° Medio");

});


document.querySelectorAll(".filtro").forEach(boton => {

    boton.addEventListener("click", () => {

        document.querySelectorAll(".filtro")
            .forEach(b =>
                b.classList.remove("activo")
            );

        boton.classList.add("activo");

        mostrarRanking(
            boton.dataset.curso
        );

    });

});


function mostrarRanking(curso) {

    document.getElementById("cursoRanking")
        .textContent = curso;

    const lista =
        document.getElementById("listaRanking");

    let rankingDatos =
        JSON.parse(
            localStorage.getItem("rankingMath")
        ) || [];

    let jugadoresCurso =
        rankingDatos.filter(jugador =>
            jugador.curso === curso
        );

    jugadoresCurso.sort((a, b) =>
        b.puntos - a.puntos
    );

    jugadoresCurso =
        jugadoresCurso.slice(0, 10);

    lista.innerHTML = "";

    if (jugadoresCurso.length === 0) {

        lista.innerHTML = `
            <p style="color:#94a3b8; padding:25px;">
                Todavía no hay jugadores registrados.
            </p>
        `;

        return;
    }

    jugadoresCurso.forEach((jugador, indice) => {

        let medalla = "";

        if (indice === 0) {
            medalla = "🥇";
        } else if (indice === 1) {
            medalla = "🥈";
        } else if (indice === 2) {
            medalla = "🥉";
        } else {
            medalla = "#" + (indice + 1);
        }

        lista.innerHTML += `
            <div class="ranking-item">

                <div class="posicion">
                    ${medalla}
                </div>

                <div class="ranking-nombre">

                    <strong>
                        ${jugador.nombre}
                        ${jugador.apellido}
                    </strong>

                    <small>
                        ${jugador.curso}
                    </small>

                </div>

                <div class="ranking-puntos">
                    ${jugador.puntos} pts
                </div>

            </div>
        `;

    });

}


// ================================
// VOLVER AL INICIO
// ================================

btnVolver.addEventListener("click", () => {

    mostrarPantalla(inicio);

});