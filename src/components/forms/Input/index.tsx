import React, {
  ComponentType,
  CSSProperties,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useCallback,
  useState,
} from 'react';
import { FieldError } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error, InputContent } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  containerStyle?: CSSProperties;
  icon?: ComponentType<IconBaseProps>;
  name: string;
  error?: FieldError;
  isFilled?: boolean;
  disabled?: boolean;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    containerStyle = {},
    icon: Icon,
    name,
    error = null,
    isFilled = false,
    disabled = false,
    ...rest
  },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);
  // const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      style={containerStyle}
      disabled={disabled}
    >
      {Icon && <Icon size={20} />}
      <InputContent
        name={name}
        onFocus={handleInputFocus}
        onBlurCapture={handleInputBlur}
        ref={ref}
        disabled={disabled}
        {...rest}
      />

      {!!error && (
        <Error title={error.message}>
          <FiAlertCircle className="error" color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export const Input = forwardRef(InputBase);
