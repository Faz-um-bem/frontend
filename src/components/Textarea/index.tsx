import React, { TextareaHTMLAttributes } from "react";

import { InputContent } from "./styles";

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

// eslint-disable-next-line
export function Textarea({ ...rest }: InputProps) {
  return <InputContent rows="5" {...rest} />;
}
