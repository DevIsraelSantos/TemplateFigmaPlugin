import { h } from "preact";
import React from "preact/compat";

interface ContainerProps {
  children: React.ReactNode;
  class?: string;
  full?: boolean;
}

export default function FlexContainer({
  children,
  full,
  ...props
}: ContainerProps) {
  return (
    <div class={`flex flex-col ${full && "w-full h-full"} ${props.class}`}>
      {children}
    </div>
  );
}
