import MeusPedidos from '../components/MeusPedidos';
import { useUsuario } from '../components/UsuarioHook';

function Pedidos() {
  const usuario = useUsuario();
  return <MeusPedidos usuario={usuario} />;
}

export default Pedidos;
