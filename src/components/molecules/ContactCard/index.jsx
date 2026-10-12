import styled from "styled-components";
import Card from "../Card";

const Wrapper = styled(Card)`
  display: grid;
  gap: 0.5rem;
  align-content: start;
`;

const Label = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
`;

const Name = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--title);
`;

const Link = styled.a`
  font-weight: 600;
  text-underline-offset: 4px;
  word-break: break-word;
`;

const telHref = (telefono) => `tel:${telefono.replace(/[^\d+]/g, "")}`;

export default function ContactCard({ nombre, correo, telefono }) {
  return (
    <Wrapper>
      <Label>Contacto de TI</Label>
      <Name>{nombre}</Name>
      <Link href={`mailto:${correo}`}>
        <span className="sr-only">Correo: </span>
        {correo}
      </Link>
      <Link href={telHref(telefono)}>
        <span className="sr-only">Teléfono: </span>
        {telefono}
      </Link>
    </Wrapper>
  );
}
