import {
  Avatar as MuiAvatar,
  type AvatarOwnProps as MuiAvatarProps
} from '@mui/material';

export interface AvatarProps extends MuiAvatarProps {
  children?: React.ReactNode;
}

export const Avatar = ({ children, ...rest }: AvatarProps) => {
  return <MuiAvatar {...rest}>{children}</MuiAvatar>;
};
