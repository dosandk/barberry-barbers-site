import {
  Paper as MuiPaper,
  type PaperOwnProps as MuiPaperProps
} from '@mui/material';

export interface PaperProps extends MuiPaperProps {
  children?: React.ReactNode;
}

export const Paper = ({ children, ...props }: PaperProps) => {
  return <MuiPaper {...props}>{children}</MuiPaper>;
};
