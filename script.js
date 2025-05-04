const tasasCambio = {
    rio: 85,
    miami: 1000,
    barcelona: 1150,
    tokyo: 7,
    cuzco: 250,
    paris: 1150,
    roma: 1150,
    sidney: 650
  };
  
  const monedas = {
    rio: "reales",
    miami: "dólares",
    barcelona: "euros",
    tokyo: "yenes",
    cuzco: "soles",
    paris: "euros",
    roma: "euros",
    sidney: "dólares australianos"
  };
  
  document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const destino = document.getElementById("destino").value;
    const dias = parseInt(document.getElementById("dias").value);
  
    if (!destino || !dias || dias < 1) {
      document.getElementById("resultado").textContent = "Por favor, completa todos los campos correctamente.";
      return;
    }
  
    const tasa = tasasCambio[destino];
    const moneda = monedas[destino];
    const cantidadNecesaria = dias * 100;
    const pesosArg = cantidadNecesaria * tasa;
  
    document.getElementById("resultado").textContent = `Necesitás ${cantidadNecesaria} ${moneda}. Entonces juntá ${pesosArg.toLocaleString("es-AR")} pesos argentinos.`;
  });