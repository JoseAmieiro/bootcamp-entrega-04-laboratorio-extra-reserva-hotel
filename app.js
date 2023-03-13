
function calcularPrecio(event) {
  event.preventDefault()
  const noches = parseInt(document.getElementById("noches").value);
  const parking = parseInt(document.getElementById("parking").value);
  var precioBase = getRoomPrice();
  var precioBaseSpa = isCheched(precioBase);
  var ocupationPrice = ocupationRoom(precioBaseSpa);

  const precioTotal = (ocupationPrice * noches) + (parking * 10);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `El precio total de la estancia es de: ${precioTotal} €.`;
}

function getRoomPrice () {
  const habitacion = document.getElementById("habitacion").value;
  let precioBase;
  switch (habitacion) {
    case "standard":
      precioBase = 100;
      break;
    case "junior-suite":
      precioBase = 120;
      break;
    case "suite":
      precioBase = 150;
      break;
  }
  return precioBase;
}

function isCheched (precioBase) {
  const spa = document.getElementById("spa").checked;
  if (spa) {
    precioBase += 20;
  }
  return precioBase;
}

function ocupationRoom (precioBaseSpa) {
  const ocupacion = document.getElementById("ocupacion").value;
  switch (ocupacion) {
    case "individual":
      precioBaseSpa *= 0.75;
      break;
    case "triple":
      precioBaseSpa *= 1.25;
      break;
      default: precioBaseSpa;
  }
  return precioBaseSpa;
}

const botonCalcular = document.getElementById("calcular");
botonCalcular.addEventListener("click", (event) => calcularPrecio(event));

