function creatTabla(){
    let body = document.getElementsByTagName('body')[0]; //obtiene la referencia del elemento body
    let tbl = document.createElement('table'); //crea el elemento table
    let tblBody = document.createElement('tbody'); //crea el elemento tbody

    //creamos las celdas
    for(let i=0; i<= 4; i++) {
        //aqui se crean las hileras
        let hileras = document.createElement('tr');
        for(let j=0; j<4; j++) {
            let celda = document.createElement('td');
            let textoCelda = document.createTextNode('hilera es fila ' +i+', columna' +j);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        tblBody.appendChild(hilera); //agrega la hilara al final del elemento
    }
    tabla.appendChild(tblBody);//posiciona el tbody debajo del elemento table
    body.appendChild(tabla);
    table.setAttribute('border', '2');
}