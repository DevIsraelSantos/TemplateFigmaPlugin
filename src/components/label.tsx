import { h } from "preact";
import React from "preact/compat";
import { SizeProps, SizeType } from "../types/size";

interface LabelProps extends SizeProps {
  children: React.ReactNode;
  class?: string;
  black?: boolean;
}

export default function Label({ black, ...props }: LabelProps) {
  const sizeText = props.xs
    ? "text-xs"
    : props.sm
    ? "text-sm"
    : props.lg
    ? "text-lg"
    : props.xl
    ? "text-xl"
    : "";

  return (
    <span class={`${black && "text-black"} ${sizeText} ${props.class}`}>
      {props.children}
    </span>
  );
}
