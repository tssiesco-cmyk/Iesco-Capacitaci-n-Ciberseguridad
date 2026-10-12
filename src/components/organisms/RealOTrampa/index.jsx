import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Section from "../../templates/Section";
import Eyebrow from "../../atoms/Eyebrow";
import SectionTitle from "../../atoms/SectionTitle";
import Button from "../../atoms/Button";
import NumberBadge from "../../atoms/NumberBadge";
import Card from "../../molecules/Card";
import EmailMock from "../../molecules/EmailMock";
import ChatMock from "../../molecules/ChatMock";
import { media } from "../../../styles/theme";
import { casos } from "../../../content/casos";

const Intro = styled.p`
  color: var(--soft);
  margin: -0.75rem 0 2rem;
`;

const Progress = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 0.75rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  align-items: start;

  ${media.desktop} {
    grid-template-columns: 1.15fr 1fr;
    gap: 2rem;
  }
`;

const Choices = styled.div`
  display: grid;
  gap: 0.75rem;

  ${media.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  ${media.desktop} {
    grid-template-columns: 1fr;
  }
`;

const Question = styled.p`
  font-weight: 600;
  font-size: 1.15rem;
  margin-bottom: 0.25rem;

  ${media.tablet} {
    grid-column: 1 / -1;
  }

  ${media.desktop} {
    grid-column: auto;
  }
`;

const Result = styled(Card)`
  display: grid;
  gap: 1rem;
`;

const Verdict = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.25;
  color: var(--title);

  &:focus {
    outline: none;
  }
`;

const VerdictLine = styled.p`
  font-weight: 600;
`;

const ClueList = styled.ol`
  list-style: none;
  display: grid;
  gap: 0.6rem;

  li {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;
  }
`;

const Rule = styled.p`
  background: ${({ theme }) => theme.colors.light};
  border-left: 4px solid var(--accent);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  font-weight: 600;
`;

const Score = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--title);
`;

const Footnote = styled.p`
  margin-top: 2rem;
  font-size: 0.75rem;
  color: var(--soft);
`;

const respuestaTexto = (esTrampa) => (esTrampa ? "Es una trampa." : "Es real.");

export default function RealOTrampa() {
  const [indice, setIndice] = useState(0);
  const [eleccion, setEleccion] = useState(null); // null | "real" | "trampa"
  const [aciertos, setAciertos] = useState(0);

  const verdictRef = useRef(null);
  const progressRef = useRef(null);
  const focoPendiente = useRef(null);

  const caso = casos[indice];
  const respondido = eleccion !== null;
  const acerto = respondido && (eleccion === "trampa") === caso.esTrampa;
  const esUltimo = indice === casos.length - 1;

  // Mueve el foco al veredicto o al nuevo caso, para quien navega con teclado
  useEffect(() => {
    const destino = focoPendiente.current;
    focoPendiente.current = null;
    if (destino === "veredicto") verdictRef.current?.focus();
    if (destino === "caso") progressRef.current?.focus();
  }, [indice, eleccion]);

  const elegir = (opcion) => {
    const correcto = (opcion === "trampa") === caso.esTrampa;
    if (correcto) setAciertos((a) => a + 1);
    focoPendiente.current = "veredicto";
    setEleccion(opcion);
  };

  const siguiente = () => {
    focoPendiente.current = "caso";
    setEleccion(null);
    setIndice((i) => i + 1);
  };

  const reiniciar = () => {
    focoPendiente.current = "caso";
    setEleccion(null);
    setAciertos(0);
    setIndice(0);
  };

  const Mock = caso.id === "correo" ? EmailMock : ChatMock;

  return (
    <Section id="juego" variant="navy" labelledBy="titulo-juego">
      <Eyebrow>Juego</Eyebrow>
      <SectionTitle id="titulo-juego">¿Real o trampa?</SectionTitle>
      <Intro>Mira el mensaje 20 segundos y decide.</Intro>

      <Progress ref={progressRef} tabIndex={-1}>
        Caso {indice + 1} de {casos.length} · {caso.tipo}
      </Progress>

      <Grid>
        <Mock caso={caso} revealed={respondido} />

        {!respondido ? (
          <Choices role="group" aria-label="Tu respuesta">
            <Question>¿Qué crees?</Question>
            <Button variant="ghost" onClick={() => elegir("real")}>
              Es real
            </Button>
            <Button onClick={() => elegir("trampa")}>Es una trampa</Button>
          </Choices>
        ) : (
          <Result aria-live="polite">
            <Verdict ref={verdictRef} tabIndex={-1}>
              {acerto ? "¡Correcto!" : "Incorrecto"}
            </Verdict>
            <VerdictLine>
              {respuestaTexto(caso.esTrampa)}
              {caso.veredictoExtra && ` ${caso.veredictoExtra}`}
            </VerdictLine>

            <div>
              <p>Lo que la delata:</p>
              <ClueList>
                {caso.pistas.map((pista, i) => (
                  <li key={pista}>
                    <NumberBadge $size={1.5} aria-hidden="true">
                      {i + 1}
                    </NumberBadge>
                    <span>
                      <span className="sr-only">Pista {i + 1}: </span>
                      {pista}
                    </span>
                  </li>
                ))}
              </ClueList>
            </div>

            <Rule>Regla: {caso.regla}</Rule>

            {esUltimo ? (
              <>
                <Score>
                  Acertaste {aciertos} de {casos.length}
                </Score>
                <div>
                  <Button onClick={reiniciar}>Volver a jugar</Button>
                </div>
              </>
            ) : (
              <div>
                <Button onClick={siguiente}>Siguiente caso</Button>
              </div>
            )}
          </Result>
        )}
      </Grid>

      <Footnote>Los ejemplos usan marcas y nombres ficticios.</Footnote>
    </Section>
  );
}
