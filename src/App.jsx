import React from "react";
import Input from "./Form/input";
import useForm from "./Hooks/useForm";
import Slide from "./Slide";

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);


  function handleSubmit(event){
    event.preventDefault();
    if(cep.validate() && email.validate() && nome.validate()){
      console.log('Enviou');
    } else {
      console.log('Não enviou');
    }
  }

  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1'
    },
    {
      id: 'slide2',
      text: 'Slide 2'
    },
    {
      id: 'slide3',
      text: 'Slide 3'
    }
  ]

  return (
    <Slide slides={slides} />
    // <form onSubmit={handleSubmit}>
    //   <Input
    //     id="cep"
    //     label="CEP"
    //     type="text"
    //     placeholder="00000-000"
    //     {...cep}
    //   />

    //   <Input
    //     id="email"
    //     label="Email"
    //     type="email"
    //     {...email}
    //   />

    //   <Input
    //     id="nome"
    //     label="Nome"
    //     type="text"
    //     {...nome}
    //   />

    //   <Input
    //     id="sobrenome"
    //     label="Sobrenome"
    //     type="text"
    //     {...sobrenome}
    //   />
    //   <button>Enviar</button>
    // </form>
  );
};

export default App;
