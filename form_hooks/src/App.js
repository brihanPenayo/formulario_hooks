import Button from './Components/Button/Button';
import Form from './Components/Form/Form';
import Input from './Components/Input/Input';

// PARA SOLUCIONAR:
// COMO ACCEDER A LAS VARIABLES DESDE LA APP O DESDE EL COMPONENTE FORM
// PARA LUEGO MOSTRAR EN PANTALLA
// let data = {
//   nombre: nombre,
//   edad: edad,
//   curso: curso
// }

// crear lista de entradas, que tengan los atributos de mi input

// dentro del formulario hacer un mapeo de las entradas y asignar el key a cada input

// 

function App() {
  return (
    <div>
      <Form >
        <Input tipo="text" labelText="Nombre/s" />
        <Input tipo="text" labelText="Apellido/s" />
        <Input tipo="email" labelText="E-mail" />
        <Input tipo="password" labelText="Contrasenha" />
        <Input tipo="password" labelText="Confirmar Contrasenha" />
        <Button />
      </Form>
    </div>
  );
}

export default App;