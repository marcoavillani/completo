// $.getJSON("moneda2.json", function (res, estado) {
//   if (estado === "success") {
//     let misDatos = res;
//     for (const dato of misDatos) {
//       $("#primerSelect").append(`
//                                   <option selected value="${dato.baseid}">
//                                     <h1>${dato.basecode}</h1>
//                                   </option>
//       `);
//       $("#segundoSelect").append(`
//                                   <option selected value="${dato.baseid}">
//                                     <h1>${dato.basecode}</h1>
//                                   </option>
//       `);
//     }
//   }
// });

$.getJSON("moneda3.json", function (res, estado) {
  if (estado === "success") {
    let misDatos = res;
    for (const dato of misDatos) {
      $("#primerSelect").append(`
                                  <option value="${dato.id}">
                                    <h1>${dato.code}</h1>
                                  </option>
      `);
      $("#segundoSelect").append(`
                                  <option value="${dato.id}">
                                    <h1>${dato.code}</h1>
                                  </option>
      `);
    }
  }
});

$("#primerSelect").on("change", convertir);

// $("#segundoSelect").on("change", function () {
//   const car2 = $("#segundoSelect").find(":selected").val();
//   // console.log(car2);
// });

$("#segundoSelect").on("change", convertir);

// $("#myForm").on("change textInput input", (e) => {
//   let valIngresado = e.target.value;
//   const nuevoValor = valIngresado * 10;
//   $("#textoConvertido")[0].value = nuevoValor;
// });

$("#myForm").on("change textInput input", convertir);

// function convertir() {
//   let de = document.querySelector("#primerSelect").value;
//   let valorDe = document.querySelector("#valorDe").value;
//   let a = document.querySelector("#segundoSelect").value;
//   fetch("./moneda2.json")
//     .then((response) => response.json())
//     .then((data) => {
//       let rates = data[de - 1].rates;
//       let convertido = valorDe * rates.USD;
//       document.querySelector("#textoConvertido").value = convertido;
//     });
// }

function convertir() {
  let de = document.querySelector("#primerSelect").value;
  let valorDe = document.querySelector("#valorDe").value;
  let a = document.querySelector("#segundoSelect").value;
  fetch("./moneda3.json")
    .then((response) => response.json())
    .then((data) => {
      let rateBase = data[de - 1].rate;
      let rateDestino = data[a - 1].rate;
      let convertido = (valorDe * rateDestino) / rateBase;
      document.querySelector("#textoConvertido").value = convertido.toFixed(3);
    })
    .catch((error) =>
      console.log(`Hubo un problema en la petición Fetch ${error.message}`)
    );
}
