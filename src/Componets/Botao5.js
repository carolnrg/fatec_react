import React from 'react';
class Botao5 extends React.Component{
    shoot (t){
        alert(t);
    }
    render(){
        return(
            <button onClick={this.shoot.bind(this,"Você Clicou")}>Botão 5</button>
        );
    }
}
export default Botao5;
