import React from 'react';
class Botao3 extends React.Component{
    constructor(props){
        super(props)
        //this.shoot = this.shoot.bind(this)
    }
    shoot = () =>{
        alert(this);
    }
    render(){
        return(
            <button onClick={this.shoot}>Botão 3</button>
        );
    }
}
export default Botao3;
