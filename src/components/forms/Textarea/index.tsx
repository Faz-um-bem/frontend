import React, {
  forwardRef,
  TextareaHTMLAttributes,
  useCallback,
  useState,
} from 'react';
import { ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error, InputContent } from './styles';

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: FieldError;
  name: string;
  isFilled?: boolean;
  disabled?: boolean;
};

const TextareaBase: ForwardRefRenderFunction<HTMLTextAreaElement, InputProps> =
  (
    { name, error = null, isFilled = false, disabled = false, ...rest },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = useCallback(() => {
      setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
      setIsFocused(false);
    }, []);

    return (
      <Container
        disabled={disabled}
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        <InputContent
          name={name}
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          rows={5}
          ref={ref}
          disabled={disabled}
          {...rest}
        />

        {error && (
          <Error title={error.message}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </Container>
    );
  };

export const Textarea = forwardRef(TextareaBase);
