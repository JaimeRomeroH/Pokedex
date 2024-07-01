const fetchPokemon = () => {
    const nombre = document.getElementById("nombre");
    let entrada = nombre.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${entrada}` 
    fetch(url).then((res) => {
        if (res.status != "200"){
            console.log(res);
            pokeImagen("./imagenes/pikachuError.jpg");
            limpiarDatos();
        }
        else {
            return res.json();
             
        }
        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;          //Buscamos la imagen del pokemon dentro de la pokeApi
        console.log(pokeImg);
        pokeImagen(pokeImg);
        
        let pokeTipo = data.types;                       
        if (pokeTipo.length == 2){                         //Si tiene dos tipos
            let openType1 = pokeTipo[0];
            let type1 = openType1.type.name;
            let openType2 = pokeTipo[1];
            let type2 = openType2.type.name;
            datos = [type1, type2];
            console.log(datos);
            pokeType(datos);
            
        }
        else{
            let openType1 = pokeTipo[0]                    //Si tiene solo un tipo
            let type1 = openType1.type.name;
            datos = [type1];
            console.log(datos);
            pokeType(datos);
            
        }
        
        
        let pokeEst = data.stats;
        let array=[];
        for (item = 0 ; item < pokeEst.length ; item++ ){
         
            let openStat = pokeEst[item];
            let nameStat = openStat.stat.name;
            let baseStat = openStat.base_stat;
            let effortStat = openStat.effort;
            let datoNombre = nameStat;
            let datoBase = baseStat;
            let datoEsf = effortStat;
            estadisticas = datoNombre +":"+datoBase +"\t" +"effort:"+datoEsf +"\n \n";
            array.push(estadisticas);
            console.log(array);
            pokeStat(array);
            

        }
        
        
        
        let pokeHab = data.abilities;
        let arreglo=[];
        for (item = 0 ; item < pokeHab.length ; item++){
            let openAb = pokeHab[item];
            let nameAb = openAb.ability.name;
            datoHabilidad = nameAb;
            arreglo.push(datoHabilidad)
            console.log(arreglo);
            pokeAbilities(arreglo);
        }
       
        
    })
}



const pokeImagen = (url) => {
    const pokeFoto = document.getElementById("pokeImg");
    pokeFoto.src = url;
}

const pokeType = (url) => {
    const pokeTp = document.getElementById("pokeTipo");
    pokeTp.value = url;
}

const pokeStat = (info) => {
    const pokeEstadisticas = document.getElementById("pokeEst");
    pokeEstadisticas.innerText = info;  
}

const pokeAbilities = (datos) => {
    const pokeHabilidad = document.getElementById("pokeHab");
    pokeHabilidad.innerText = datos;  
}

const limpiarDatos = () => {
    const pokeTp = document.getElementById("pokeTipo");
    const pokeEstadisticas = document.getElementById("pokeEst");
    const pokeHabilidad = document.getElementById("pokeHab");
    pokeTp.value = ""; 
    pokeEstadisticas.innerText = "";
    pokeHabilidad.innerText = "";       
}



