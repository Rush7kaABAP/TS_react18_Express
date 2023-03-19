import styles from './styles.module.css';
import classnames from 'classnames';
import { Size } from '../../constants/ui';

export const ButtonViewVariant = {
  prime: 'prime',
  second: 'second',
};

interface ButtonProps{
    children?: any,
    onClick ?: (e:any) => void,
    disabled ?: boolean,
    className?: string,
    size ?: string,
    viewVariant ?: string,
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  className,
  size = Size.m,
  viewVariant = ButtonViewVariant.prime,
}) => {
  return (
    <button
      className={classnames(
        styles.root,
        className,
        styles[size],
        styles[viewVariant]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
