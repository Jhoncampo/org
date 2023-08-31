import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componets/Header/Header.js';
import Formulario from './componets/Formulario/Formulario.js';
import MiOrg from './componets/MiOrg';
import Equipo from './componets/Equipo';
import Footer from './componets/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrar]   = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://www.github.com/Jhoncampo.png",
      nombre: "Jhon Eduard Campo",
      puesto: "Instrucutor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://www.github.com/Jhoncampo.png",
      nombre: "Eduard Campo",
      puesto: "Desarrollador",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarine Quijada",
      puesto: "Instrucutora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Chistian Velasco",
      puesto: "Instrucutor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Móvil",
      foto: "https://www.github.com/Jhoncampo.png",
      nombre: "Jhon Eduard Campo",
      puesto: "Desarrollo",
      fav: false
    },
  ])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ])

  //Ternario --> condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador" , colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador

  const eliminarColaborador = (id) =>{
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id )
    actualizarColaboradores(nuevosColaboradores)
  }

  //Acualizar color de equipo
  const actualizarColor = (color, id) =>{
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipos
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id:uuid() }])
  }

  const like = (id) =>{
    console.log(id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }


  /*{ mostrarFormulario ? <Formulario/> : <></>} */
  return (
    <div>
      <Header />
      
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map( (equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        )
      }
      <Footer/>
      
    </div>
  );
}

export default App;
