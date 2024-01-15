document.addEventListener('DOMContentLoaded', (event) => {
    let datos= new FormData();
    let contador=0;
    document.getElementById("FormatoIngresos").addEventListener("submit", e => {

        e.preventDefault();
        let datosFormulario = new FormData(e.target);

        // Crear una nueva fila y celdas
        let fila = document.createElement('tr');
        let celdaNumero = document.createElement('td');
        let celdaNombre = document.createElement('td');
        let celdaTel=document.createElement('td');

        // Asignar el número a la celda correspondiente
        celdaNumero.textContent = contador++;

        for (let [clave, valor] of datosFormulario.entries()) {
            datos.append(clave, valor);
            if (clave==='fname'){
                // Asignar el nombre a la celda correspondiente
                celdaNombre.textContent = valor;
            }else if(clave==='ftel'){
                // Asignar el teléfono a la celda correspondiente
                celdaTel.textContent=valor;
            }
        }

        // Agregar las celdas a la fila
        fila.appendChild(celdaNumero);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaTel);

        // Agregar la fila a la tabla
        tabla.appendChild(fila);
    });
});
