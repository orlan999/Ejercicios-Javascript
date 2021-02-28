//Objeto consola
console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensje informativo");
console.log("Un registro de lo que ha pasado en nuestra aplicación");
let nombre = "Orlando",
    apellido = "Bello",
    edad = 22;
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);
console.clear();
console.log(window);
console.log(document);
console.dir(window);
console.dir(document);
console.clear();
console.group("Cursos de @jonmircha en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();
console.groupCollapsed("Cursos de @jonmircha en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();
console.clear();
console.log(console);
console.table(Object.entries(console).sort());
const numeros = [1, 2, 3, 4, 5],
    vocales = ["a", "e", "i", "o", "u"];
console.table(numeros);
console.table(vocales);
const perro = {
    nombre: "Boni",
    raza: "Boxer",
    color: "cafe"
}
console.table(perro);
console.clear();
console.time('Cuanto tiempo tarda mi código');
const arreglo = Array(1000000);
for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}
console.timeEnd('Cuanto tiempo tarda mi código');
//console.log(arreglo);
console.clear();
for (let i = 0; i <= 100; i++) {
    console.count("código for");
    console.log(i);
}
console.clear();
let x = 3,
    y = 2,
    pruebaXY = "Se espera que X siempre sea menor que Y";
console.assert(x < y, { x, y, pruebaXY });

//Objeto Date
console.log(Date());
let fecha = new Date();
console.log(fecha);
//día del mes
console.log(fecha.getDate());
//día de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDay());
//mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());
let cumpleOrl = new Date(1984, 4, 23);
console.log(cumpleOrl);

//Objeto Math
console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7.8));
console.log(Math.ceil(7.2));
console.log(Math.floor(7.8));
console.log(Math.round(7.49));
console.log(Math.sqrt(81));
console.log(Math.pow(2, 5));
console.log(Math.sign(-0.3)); // -1 0 1
console.log(Math.random());
console.log(Math.round(Math.random() * 1000));
