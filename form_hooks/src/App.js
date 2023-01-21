import { useState } from 'react';
import Button from './Components/Button/Button';
import Form from './Components/Form/Form';
import Input from './Components/Input/Input';

function App() {
  const [data, setData] = useState({
    Nombres: "",
    Apellidos: "",
    Email: "",
    Contrasenha: "",
    Confirmar: "",
  })

  return (
    <div>
      <Form data={data} setData={setData}>
        <Input tipo="text" labelText="Nombres" data={data} handleData={setData} />
        <Input tipo="text" labelText="Apellidos" data={data} handleData={setData} />
        <Input tipo="email" labelText="Email" data={data} handleData={setData} />
        <Input tipo="password" labelText="Contrasenha" data={data} handleData={setData} />
        <Input tipo="password" labelText="Confirmar" data={data} handleData={setData} />
        <Button />
      </Form>
    </div>
  );
}

export default App;