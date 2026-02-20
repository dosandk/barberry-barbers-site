import {
  Button as MuiButton,
  type ButtonOwnProps as MuiButtonProps
} from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, ...props }: ButtonProps) => (
  <MuiButton {...props}>{children}</MuiButton>
);
