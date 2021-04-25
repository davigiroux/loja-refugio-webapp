import { CenterGrid } from '../components/styles/GlobalGridStyles';

function Contato() {
  const numeroMasculino = '+5567999778116';
  const numeroFeminino = '+5567991242757';
  const linkParaWhatsappFeminino = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    numeroFeminino
  )}`;
  const linkParaWhatsappMasculino = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    numeroMasculino
  )}`;
  return (
    <CenterGrid>
      <div>
        <h3 style={{ borderBottom: '2px solid var(--primary)' }}>Telefone</h3>
        <p>
          Moda masculina:{' '}
          <a
            style={{ fontWeight: '600' }}
            href={linkParaWhatsappMasculino}
            target="_blank"
            rel="noreferrer"
          >
            Whatsapp
          </a>
        </p>
        <p>
          Moda feminina:{' '}
          <a
            style={{ fontWeight: '600' }}
            href={linkParaWhatsappFeminino}
            target="_blank"
            rel="noreferrer"
          >
            Whatsapp
          </a>
        </p>
        <h3 style={{ borderBottom: '2px solid var(--primary)' }}>Email</h3>
        <p>lojarefugiocg@gmail.com</p>
      </div>
    </CenterGrid>
  );
}

export default Contato;
