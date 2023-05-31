/* eslint-disable no-unused-vars */

/*
Fazt - Curso de ReactJS desde Cero para principiantes 2022:
https://youtu.be/rLoWMU4L_qE
*/

// introduccion a React
import { Saludar, UserCard } from '././components/Saludar'
import Product, { NavBar } from '././components/Product'
import { Button } from '././components/Button'
import Task from '././components/task/Task'
import { TiposDeComponentes } from '././components/TiposDeComponentes'
import EventHandlers from '././components/EventHandlers'
import FetchAPI from './components/FetchAPI'
import ReactIcons from '././components/ReactIcons'
import Arrays from '././components/Arrays'
import Contador from './components/Hooks/UseState/Contador'
import SaveInputValue from './components/Hooks/UseState/SaveInputValue'
import UseEffect from './components/Hooks/UseEffect/UseEffect'

// proyecto_tareas
import TaskList from './components/proyecto_tareas/TaskList'
import { TaskForm } from './components/proyecto_tareas/TaskForm'

// comentario de .js y .ts

function App() {

  return (
    <>
      {/* comentario de .jsx y .tsx */}
      <Product />
      <NavBar />
      <Saludar />
      <hr />
      <h3>Iterar props de un componente</h3>
      <UserCard
        name='Daniel'
        amount={1}
        married={true}
        points={[1, 2, 3]}
        address={{
          street: '123. main Street',
          city: 'medellin',
        }}
        greet={function () {
          alert('funcion')
        }}
      />
      <UserCard
        name='Daniel 2'
        amount={2}
        married={false}
        points={[4, 5, 6]}
        address={{
          street: '456. main Street',
          city: 'medellin 2',
        }}
        greet={function () {
          alert('funcion 2')
        }}
      />
      <hr />
      <Button text='Clickeame' />
      <Button text='' name='Daniel' />
      <Button text=' ' />
      {/* ERROR: El prop text es obligatorio definirlo, cuando NO se define su valor por defecto es undefined

    Warning: Failed prop type: The prop text is marked as requieren in Button, but its valur is undefined
    Button.propTypes = {
      text: PropTypes.string.isRequired,
    };
    */}
      {/* <Button /> */}
      {/* ERROR: Estoy definiendo el prop text del componente Button como tipo string y le estoy pasando un array
    Button.propTypes = {
      text: PropTypes.string.isRequired,
    };

    Warning: Failed prop type: Invalid prop `text` of type `array` supplied to `Button`, expected `string`.
    at Button */}
      {/* <Button text={[1, 2]} /> */}
      <hr />
      {/*<Task ready={true} />*/}
      <Task ready={false} />
      <hr />
      <TiposDeComponentes />
      <hr />
      <EventHandlers />
      <hr />
      <FetchAPI />
      <hr />
      <ReactIcons />
      <hr />
      <Arrays />
      <hr />
      <Contador />
      <hr />
      <SaveInputValue />
      <hr />
      <UseEffect />
      <br />
      <hr />
      <br />
      <TaskForm />
      <TaskList />
    </>
  )
}

export default App
