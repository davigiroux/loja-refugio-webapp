import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const HomeContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  grid-template-rows: minmax(200px, auto) minmax(auto, 300px);
  gap: 30px;
`;

const LinkContainer = styled.div`
  display: grid;
  align-self: start;
  justify-content: center;
  justify-items: center;
  grid-template-columns: minmax(auto, 300px) minmax(auto, 300px);
  gap: 30px;

  a {
    border: 1px solid var(--primary);
    padding: 10px 15px;
    text-transform: uppercase;
    font-weight: 400;
    transition-duration: 0.2s;

    &:hover {
      text-decoration: none;
      background-color: var(--primary);
      color: var(--lightGrey);
      border: var(--lightGrey);
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Image
        src="/logo-refugio.png"
        width="600"
        height="320"
        alt="Logo da Loja Refúgio"
      />
      <LinkContainer>
        <Link href="/produtos/moda-feminina">Moda Feminina</Link>
        <Link href="/produtos/moda-masculina">Moda Masculina</Link>
      </LinkContainer>
    </HomeContainer>
  );
}

export default Home;
