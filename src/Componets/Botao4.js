import React from 'react';
class Botao4 extends React.Component{
    shoot = (t) =>{
        alert(t);
    }
    render(){
        return(
            <button onClick={()=>this.shoot("Você Clicou")}>Botão 4</button>
        );
    }
}
export default Botao4;
