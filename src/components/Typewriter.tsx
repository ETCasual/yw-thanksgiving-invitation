import { type FunctionComponent } from "react";
import { Typewriter as Typer } from "react-simple-typewriter";

interface TypewriterProps {
  text: string;
}
export const Typewriter: FunctionComponent<TypewriterProps> = ({ text }) => {
  return <Typer key={text} words={[text]} typeSpeed={40} />;
};
