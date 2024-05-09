
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
import { Form } from "react-bootstrap";

function FilmesExercise(){
    let [value, setMoedas]  = useState(); 
    let [Moedas1, setMoedas1]  = useState(); 
    let [status, setStatus]  = useState({
        "variant": "",
        "message":""
    });  

    function alterarMoedas(value){
        setMoedas(value.target.value)
        } 


function buscarMoedas(){
 axios.get("https://economia.awesomeapi.com.br/json/last/usd-brl").then(function(response){ 
    setStatus({
        "variant": "success",
        "message": "Conversão Realizada com Sucesso (:"
    })
    setMoedas1(value * response.data.USDBRL.bid)
 
 
}).catch(function (error) {
    console.log(error);
    setStatus({
        "variant": "danger",
        "message": "Conversão não Realizada ):"
    })
});
}

return(
<>
<div className = "container"></div>
    <div className = "card"></div>
    <div class="card-title p-2 border-bottom card-header">
        <h3>Exercício </h3> </div>

        
     
    <div class="card-body"></div>
    <div class="row"></div>
    <div class="col-sm-12 col-md-12 col-lg-12">
        <div><select className= "form-select" aria-label="Default select example">
      <option value="1">BRL</option>
      <option value="2">USD</option>
      <option value="3">EUR</option>
    </select></div>
    <select className= "form-select" aria-label="Default select example">
      <option value="1">BRL</option>
      <option value="2">USD</option>
      <option value="3">EUR</option>
    </select>

                <label class="label-control"> Valor: </label>
                <input onChange={alterarMoedas} class="form-control" type="number" maxLength={8} placeholder='Digite o Valor'></input></div> 
                <button className='col-sm-12 col-md-12 col-lg-12 btn btn-success' onClick={buscarMoedas}> Calcular valor de Moeda </button>
                <Alert variant = {status.variant} >
                    {status.message}
                </Alert>

                <div className="col-12">
                    <div className="row-12">
                     Valor Alterado: {Moedas1}
                    </div>
                </div>
</>
)
}
export default FilmesExercise;
