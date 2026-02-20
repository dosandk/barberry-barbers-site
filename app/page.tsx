"use client";

import { Avatar, Button } from '@eleks-ui/components';
import { ArrowDownward, AccessAlarmOutlined } from '@mui/icons-material';
import { useEleksUITheme } from '@eleks-ui/theme';

const ThemeSwitcher = () => {
  const { mode, toggleTheme } = useEleksUITheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {mode === 'dark' ? 'light' : 'dark'}
    </button>
  );
};

export default function Home() {
  return (
    <div>
      App

      <Avatar>AV</Avatar>
      <Button>Click me baybe!</Button>

      <ArrowDownward />
      <AccessAlarmOutlined />

      <ThemeSwitcher />
    </div>
  );
}
