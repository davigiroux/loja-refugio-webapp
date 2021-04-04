import { CenterGrid } from '../components/styles/GlobalGridStyles';

function Contato() {
  return (
    <CenterGrid>
      <div>
        <h3 style={{ borderBottom: '2px solid var(--primary)' }}>Telefone</h3>
        <p>Moda masculina: "telefone do Thiago</p>
        <p>Moda feminina: "telefone da Tay"</p>
        <h3 style={{ borderBottom: '2px solid var(--primary)' }}>Email</h3>
        <p>lojarefugiocg@gmail.com</p>
      </div>
    </CenterGrid>
  );
}

export default Contato;
