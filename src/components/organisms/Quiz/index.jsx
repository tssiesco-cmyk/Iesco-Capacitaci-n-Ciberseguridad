import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Section from "../../templates/Section";
import Eyebrow from "../../atoms/Eyebrow";
import SectionTitle from "../../atoms/SectionTitle";
import Button from "../../atoms/Button";
import Mono from "../../atoms/Mono";
import Card from "../../molecules/Card";
import { media } from "../../../styles/theme";
import { preguntas } from "../../../content/quiz";

const LETRAS = ["A", "B", "C"];

const Box = styled(Card)`
  max-width: var(--box-max, 820px);
  padding: 1.25rem 1rem;

  ${media.tablet} {
    padding: 1.5rem;
  }
  display: grid;
  gap: 1.25rem;
`;

const Progress = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
`;

const Question = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--title);

  &:focus {
    outline: none;
  }
`;

const Options = styled.ul`
  list-style: none;
  display: grid;
  gap: 0.75rem;
`;

const Option = styled.button`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  text-align: left;
  line-height: 1.45;
  padding: 0.85rem 1rem;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 2px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.light};
  color: var(--text);

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.navy};
  }

  &:disabled {
    cursor: default;
  }

  ${({ $estado, theme }) =>
    $estado === "correcta" &&
    css`
      border-color: ${theme.colors.navy};
      border-width: 3px;
    `}

  ${({ $estado, theme }) =>
    $estado === "incorrecta" &&
    css`
      border-color: ${theme.colors.navy};
      border-style: dashed;
    `}
`;

const Letter = styled.span`
  flex-shrink: 0;
  font-weight: 700;
  color: var(--accent);
  min-width: 1.2em;
`;

const OptionBody = styled.span`
  display: grid;
  gap: 0.25rem;
  min-width: 0;
`;

const Tag = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navy};
`;

const Feedback = styled.div`
  display: grid;
  gap: 0.4rem;
  border-left: 4px solid var(--accent);
  padding-left: 1rem;

  strong {
    font-size: 1.2rem;
    color: var(--title);
  }

  p {
    color: var(--soft);
  }
`;

const Score = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--title);

  &:focus {
    outline: none;
  }
`;

export default function Quiz() {
  const [indice, setIndice] = useState(0);
  const [elegida, setElegida] = useState(null);
  const [aciertos, setAciertos] = useState(0);
  const [terminado, setTerminado] = useState(false);

  const preguntaRef = useRef(null);
  const feedbackRef = useRef(null);
  const scoreRef = useRef(null);
  const focoPendiente = useRef(null);

  const p = preguntas[indice];
  const respondida = elegida !== null;
  const esUltima = indice === preguntas.length - 1;

  useEffect(() => {
    const destino = focoPendiente.current;
    focoPendiente.current = null;
    if (destino === "pregunta") preguntaRef.current?.focus();
    if (destino === "feedback") feedbackRef.current?.focus();
    if (destino === "score") scoreRef.current?.focus();
  }, [indice, elegida, terminado]);

  const elegir = (i) => {
    if (i === p.correcta) setAciertos((a) => a + 1);
    focoPendiente.current = "feedback";
    setElegida(i);
  };

  const siguiente = () => {
    if (esUltima) {
      focoPendiente.current = "score";
      setTerminado(true);
      return;
    }
    focoPendiente.current = "pregunta";
    setElegida(null);
    setIndice((n) => n + 1);
  };

  const reiniciar = () => {
    focoPendiente.current = "pregunta";
    setIndice(0);
    setElegida(null);
    setAciertos(0);
    setTerminado(false);
  };

  const estadoDe = (i) => {
    if (!respondida) return null;
    if (i === p.correcta) return "correcta";
    if (i === elegida) return "incorrecta";
    return null;
  };

  return (
    <Section id="quiz" variant="light" labelledBy="titulo-quiz">
      <Eyebrow>Quiz</Eyebrow>
      <SectionTitle id="titulo-quiz">Tres preguntas rápidas</SectionTitle>

      <Box>
        {terminado ? (
          <>
            <Score ref={scoreRef} tabIndex={-1} aria-live="polite">
              Acertaste {aciertos} de {preguntas.length}
            </Score>
            <div>
              <Button variant="ghost" onClick={reiniciar}>
                Volver a intentar
              </Button>
            </div>
          </>
        ) : (
          <>
            <Progress>
              Pregunta {indice + 1} de {preguntas.length}
            </Progress>
            <Question ref={preguntaRef} tabIndex={-1}>
              {p.pregunta}
            </Question>

            <Options>
              {p.opciones.map((op, i) => {
                const estado = estadoDe(i);
                return (
                  <li key={op.texto}>
                    <Option
                      $estado={estado}
                      disabled={respondida}
                      onClick={() => elegir(i)}
                    >
                      <Letter aria-hidden="true">{LETRAS[i]}</Letter>
                      <OptionBody>
                        <span>
                          <span className="sr-only">Opción {LETRAS[i]}: </span>
                          {op.mono ? <Mono>{op.texto}</Mono> : op.texto}
                        </span>
                        {estado === "correcta" && <Tag>✓ Respuesta correcta</Tag>}
                        {estado === "incorrecta" && <Tag>✗ Tu respuesta</Tag>}
                      </OptionBody>
                    </Option>
                  </li>
                );
              })}
            </Options>

            {respondida && (
              <>
                <Feedback ref={feedbackRef} tabIndex={-1} aria-live="polite">
                  <strong>{elegida === p.correcta ? "Correcto" : "No es esa"}</strong>
                  <p>{p.explicacion}</p>
                </Feedback>
                <div>
                  <Button onClick={siguiente}>
                    {esUltima ? "Ver resultado" : "Siguiente pregunta"}
                  </Button>
                </div>
              </>
            )}
          </>
        )}
      </Box>
    </Section>
  );
}
