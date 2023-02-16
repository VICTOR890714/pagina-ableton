
function obtenerPrecioTotal(productos, precios) {

   productos = ["manzana","perras"];
   precios = [200,20000];

    if (productos.length !== precios.length) {
     console.error('La cantidad de productos y precios no coincide');
    } 
    let precioTotal = 0;
    for (let i = 0; i < productos.length; i++) {
      precioTotal += precios[i];
    }
  
    return precioTotal;
  }
  

  console.log(obtenerPrecioTotal());  