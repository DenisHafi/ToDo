const inputBox = document.getElementById("input-box"); /* Shrani vnos v spremenljivko*/
const seznam = document.getElementById("seznam"); /* Shrani seznam v spremenljivko*/
function dodajTask(){ /* Ustvari funkcijo dodajTask */
    if(inputBox.value === ''){ /* Če je vnos prazen */
        alert("Prazno polje. Prosim dodajte besedilo.") /* Opozorilo */
    }
    else{ /*Če ni */
        let li = document.createElement("li"); /* Naredi Li element in ga shrani v spremenljivko*/
        li.innerHTML = inputBox.value; /* Vnos shrani v novo ustvarjeno spremenljivko*/
        seznam.appendChild(li); /* Seznamu taskov doda li, v  katerem je shranjen vnos */
        let span = document.createElement("span"); /* Naredi span element in ga shrani v spremenljivko*/
        span.innerHTML = "\u00d7"; /* V spremenljivko span doda X */
        span.classList.add("gumbic");
        li.appendChild(span); /* Spremenljivki li doda span(X)*/
    }
    inputBox.value = ""; /* Pocisti vnosno polje */
    shraniSeznam();
}

seznam.addEventListener("click",function(e){  /* Kateri element bo kliknjen */
    if(e.target.tagName === "LI"){ /* Če je li element (Besedilo in ikona checkbox) */
        e.target.classList.toggle("checked"); /* Uporabi CSS stil checked (prečrta besedilo in ikono) */
        shraniSeznam();
    }
    else if(e.target.tagName === "SPAN"){ /* Če je span element (X) */
        e.target.parentElement.remove(); /* Zbriše starševski element (li) */
        shraniSeznam();
    }
},false); 

function shraniSeznam(){
    localStorage.setItem("data",seznam.innerHTML);
}
function pokaziSeznam(){
    seznam.innerHTML = localStorage.getItem("data");
}
pokaziSeznam();