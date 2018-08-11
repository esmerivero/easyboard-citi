function creatTabla(){
  miTabla = document.createElement("table");
  miTabla.setAttribute("id", "miTabla");
  miTabla.align = "center";

  f = 5;
  c = 5;

  for(let i=0; i<f; i++) {
      tr = document.createElement("tr");

      for(let j=0; j<c; j++) {
          td = document.createElement("input");
          td.setAttribute("type", "text");
          td.setAttribute("placeholder", i+","+j);
          tr.appendChild(td);
      }
      miTabla.appendChild(tr);
  }

  document.body.appendChild(miTabla);