import React from 'react';
class Botao2 extends React.Component{
    shoot(){
        alert("Você Clicou!");
    }
    render(){
        return(
            <button onClick={this.shoot}>Botão 2</button>
        );
    }
}
export default Botao2;
