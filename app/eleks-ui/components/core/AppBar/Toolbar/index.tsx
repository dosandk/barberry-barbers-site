import {
  Toolbar as MuiToolbar,
  type ToolbarOwnProps as MuiToolbarProps
} from '@mui/material';

export interface ToolbarProps extends MuiToolbarProps {
  children?: React.ReactNode;
}

export const Toolbar = ({ children, ...rest }: ToolbarProps) => {
  return <MuiToolbar {...rest}>{children}</MuiToolbar>;
};
