const cep = document.querySelector("#cep");

// evnto blur para saber oque foi digitado

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
            console.log(campo)
        }
    }
}

cep.addEventListener("blur",()=>{
    // subititui o traço
    let search = cep.value.replace("-","")
    const opitions = {
        method:"GET",
        mode:"cors",
        cache:"default"
    }

    // PEGARA A URL
    fetch(`https://viacep.com.br/ws/${search}/json/`, opitions).then(Response =>{Response.json().then(Date => showData(Date))

    })
    .catch(e => console.log("Deu erro: "+ e,MessageEvent))
    

    

})