// 1 Variables basicas 
let nombre = "Angela ";
let edad = 25;
let ciudad = "Popayán";
console.log(`Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);

//2 Función con nombre libre
function operacionMatematica(a, b, c, d, e) {
    return (a + b + c) * d / e;
}
console.log("Resultado operación:", operacionMatematica(10, 5, 2, 3, 2));

//3 Función con parámetros
function saludarPersona(nombre, edad) {
    return `feliz cumpleaños${nombre} No parece que cumples ${edad} años.`;
}
console.log(saludarPersona("mamicarlina", 60));

//  5 Crear objeto
const persona = {
    nombre: "Angela",
    edad: 18,
    profesion: "progrmadora"
};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

// 6 Agregar propiedad 
persona.telefono = "3146767639";
console.log(persona);

// 7 Funcion con objeto
function mostrarinfopersonal(p) {
    console.log(`nombre: ${p.nombre}, profesion: ${p.profesion}`);
}

mostrarinfopersonal(persona);

//  8 Objeto estudiante
const estudiante = {
    nombre: "Angela",
    notas: {
        matematicas: 4.8,
        ingles: 5.0
    }
};
console.log("Nota de Matemáticas:", estudiante.notas.matematicas);
console.log("Nota de ingles:", estudiante.notas.ingles);


// --- PUNTO 9: Objeto carro ---
const carro = {
    marca: "Mazda",
    modelo: "2025",
    propietario: {
        nombre: "Angela Pabon",
        edad: 25
    }
};

// --- PUNTO 10: Función carro ---
function infoCarro(c) {
    console.log(`Marca: ${c.marca}, Propietario: ${c.propietario.nombre}`);
}
infoCarro(carro);

// --- PUNTO 11: Modificar propiedad ---
carro.propietario.edad = 26;
console.log("Edad actualizada del dueño:", carro.propietario.edad);