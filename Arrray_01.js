function content() {

/* const productos = [
    { id: 1, nombre: "pantalon", precio: 100 },
    { id: 2, nombre: "zapato", precio: 1700 },
    { id: 3, nombre: "gorra", precio: 600 },
    { id: 4, nombre: "camisa", precio: 1400 },
  ];
  
  let nombre = prompt("Ingrese el nombre del producto");
  let producto = productos.find(item => item.nombre === nombre);
  
  if(producto === undefined){
    alert("producto no encontrado");
  }else{
    let mensaje = `
  Id: ${producto.id}
  Nombre: ${producto.nombre}
  Precio: $${producto.precio}
  `;
  alert(mensaje);
  } */



/* const servicios = [
  {asesor:"Jhon Gomez", reserva: "Barba Express", info:"Perfilado con patillera y tijeras. *Restricciones: sin ritual de toallas.", precio: 12000, horario: "8:00am"},
  {asesor:"Joao Caetano", reserva: "Barba Lord", info:"El barbero quita el volumen de la barba con sus herramientas", precio: 12000, horario: "8:00am"},
  {asesor:"Jairo Espitia", reserva: "Barba Lord Superior", info:"Corte y mantenimiento de a barba, para siempre estar impecable, incluye ritual de toallas en frío", precio: 12000, horario: "8:00am"},
];

let reserva = prompt("Ingrese el nombre del servicio a reservar");

let servicio = servicios.find(item => item.reserva === reserva);

if( servicio === undefined ){
  alert("Servicio no identificado, por favor ingresa un servicio de la lista");
}else{
  let mensaje =`Tu asesror sera ${servicio.asesor}\n\nEl servicio de ${servicio.reserva}:\n${servicio.info} \n\n Valor: ${servicio.precio} \n Horario de ${servicio.horario}`;
  alert(mensaje);
}
} */
function nombreUsuario(){
    
  alert("Biervenidos a Aneska - Asesroria de imagen");

  let nombre = prompt("Ingrese su nombre");

  if( nombre === ''){

    nombre = prompt("Ingrese su nombre");

 }

  alert(`Bienvenido ${nombre} ya puedes empezar a reservar`);



const servicios = [
  {id:1, asesor:"Jhon Gomez", reserva: "Barba Express", info:"Perfilado con patillera y tijeras. *Restricciones: sin ritual de toallas.", precio: 12000, horario: "8:00am"},
  {id:2, asesor:"Joao Caetano", reserva: "Barba Lord", info:"El barbero quita el volumen de la barba con sus herramientas", precio: 12000, horario: "8:00am"},
  {id:3, asesor:"Jairo Espitia", reserva: "Barba Lord Superior", info:"Corte y mantenimiento de a barba, para siempre estar impecable, incluye ritual de toallas en frío", precio: 12000, horario: "8:00am"},
];

let id = +prompt(('Reserva el servicio de tu interes: \n1: Barba Express \n2: Barba Lord \n3: Barba Lord Superior'));

let servicio = servicios.find(item => item.id === id);

if( servicio === undefined ){
  alert("Servicio no identificado, por favor ingresa un servicio de la lista");
}else{
  let mensaje =`${nombre} Tu asesor sera ${servicio.asesor}\n\nEl servicio de ${servicio.reserva}:\n${servicio.info} \n\n Valor: ${servicio.precio} \n Horario de ${servicio.horario}`;
  alert(mensaje);
}

return nombre;

}
nombreUsuario();
}

  /////////////////////////
/*   const productos = [
    { id: 1, nombre: "pantalon", precio: 100 },
    { id: 2, nombre: "zapato", precio: 1700 },
    { id: 3, nombre: "gorra", precio: 600 },
    { id: 4, nombre: "camisa", precio: 1400 },
  ];
  
  let precio = parseInt(prompt("Ingrese el precio mínimo"));
  let filtrados = productos.filter(item => item.precio > precio);
  
  filtrados.forEach(item => {
    let mensaje = ` Id: ${item.id} Nombre: ${item.nombre} Precio: $${item.precio}`;
  alert(mensaje);
  }); */
  ///
//   men de lo visto hasta el momento:
//   https://dev.to/gdcodev/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d
  
/*   const items = [
    { name: 'Pikachu', lastname: 'Aguilar',  price: 21 },
    { name: 'Charmander', lastname: 'Molina',  price: 37 },
    { name: 'Pidgey', lastname: 'Arzuza',  price: 45 },
    { name: 'Squirtle', lastname: 'Gonzales',  price: 60 }
  ];
  
  console.log(
    items.sort((a, b) => {
      if (a.name > b.name) {
          return 1;
      }
      if (a.name < b.name) {
          return -1;
      }
    
      return 0;
    })
  ); */
  ///////////
/*   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  
  https://github.com/andresf2448/Coder-34005 */

//   REPO/APUNTE SOBRE TEMA DE HOY PARA VER DESPUES DE CLASE =) ---> https://github.com/GiorgioCode/practicas-js/blob/master/14_funciones_orden_superior/script.js
  
  
  
  
  
  
  