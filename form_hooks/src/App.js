import Form from './Components/Form/Form';
import Input from './Components/Input/Input';

function App() {
  return (
    <div>
      < Form >
        <Input tipo="text" labelText="Nombre/s" />
        <Input tipo="text" labelText="Apellido/s" />
        <Input tipo="email" labelText="E-mail" />
        <Input tipo="password" labelText="Contrasenha" />
        <Input tipo="password" labelText="Confirmar Contrasenha" />
      </Form>
    </div>
  );
}

export default App;
