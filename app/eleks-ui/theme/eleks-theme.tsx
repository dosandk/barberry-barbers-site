import { createTheme, ThemeOptions } from '@mui/material';

const commonOptions = {
  typography: {
    h1: {
      fontFamily: 'Inter, Helvetica, Arial, sans-serif'
    },
    h2: {
      fontFamily: 'Inter, Helvetica, Arial, sans-serif'
    },
    h3: {
      fontFamily: 'Inter, Helvetica, Arial, sans-serif'
    },
    h4: {
      fontFamily: 'Inter, Helvetica, Arial, sans-serif'
    },
    h5: {
      fontFamily: 'Inter, Helvetica, Arial, sans-serif'
    },
    h6: {
      fontFamily: 'Inter, Helvetica, Arial, sans-serif'
    },
    body1: {
      fontFamily: 'Inter, Helvetica, Arial, sans-serif'
    },
    body2: {
      fontFamily: 'Inter, Helvetica, Arial, sans-serif'
    },
    subtitle1: {
      fontFamily: 'Inter, Helvetica, Arial, sans-serif'
    },
    subtitle2: {
      fontFamily: 'Inter, Helvetica, Arial, sans-serif'
    },
    overline: {
      fontFamily: 'Inter, Helvetica, Arial, sans-serif'
    },
    caption: {
      fontFamily: 'Inter, Helvetica, Arial, sans-serif'
    }
  }
};

const lightOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#0045E6',
      dark: '#0032A6',
      light: '#6291FF',
      contrastText: '#FFFFFF',
      _states: {
        hover: 'rgba(0, 69, 230, 0.04)',
        selected: 'rgba(0, 69, 230, 0.08)',
        focus: 'rgba(0, 69, 230, 0.12)',
        focusVisible: 'rgba(0, 69, 230, 0.3)',
        outlinedBorder: 'rgba(0, 69, 230, 0.5)'
      }
    },
    secondary: {
      main: '#688692',
      dark: '#4C626A',
      light: '#98ACB4',
      contrastText: '#FFFFFF',
      _states: {
        hover: 'rgba(104, 134, 146, 0.04)',
        selected: 'rgba(104, 134, 146, 0.08)',
        focus: 'rgba(104, 134, 146, 0.12)',
        focusVisible: 'rgba(104, 134, 146, 0.3)',
        outlinedBorder: 'rgba(104, 134, 146, 0.5)'
      }
    },
    error: {
      contrastText: '#FFFFFF',
      main: '#D32F2F',
      _states: {
        hover: 'rgba(211, 47, 47, 0.04)',
        outlinedBorder: 'rgba(211, 47, 47, 0.5)',
        focusVisible: 'rgba(211, 47, 47, 0.3)'
      },
      dark: '#C62828'
    },
    warning: {
      contrastText: '#FFFFFF',
      main: '#EF6C00'
    },
    info: {
      contrastText: '#FFFFFF',
      main: '#0288D1'
    },
    success: {
      contrastText: '#FFFFFF',
      main: '#2E7D32'
    },
    _components: {
      switch: {
        slideFill: '#000000',
        knobFillEnabled: '#FAFAFA',
        knowFillDisabled: '#F5F5F5'
      }
    },
    common: {
      white_states: {
        main: '#FFFFFF',
        focusVisible: 'rgba(255, 255, 255, 0.3)'
      }
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.04)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      _states: {
        focusVisible: 'rgba(0, 0, 0, 0.3)'
      }
    }
  }
} as ThemeOptions;

const darkOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#6291FF',
      dark: '#2D6CFF',
      light: '#A6C1FF',
      contrastText: '#FFFFFF',
      _states: {
        hover: 'rgba(98, 145, 255, 0.08)',
        selected: 'rgba(98, 145, 255, 0.16)',
        focus: 'rgba(98, 145, 255, 0.12)',
        focusVisible: 'rgba(98, 145, 255, 0.3)',
        outlinedBorder: 'rgba(98, 145, 255, 0.5)'
      }
    },
    secondary: {
      main: '#B9C6CC',
      dark: '#819AA4',
      light: '#F7FAFC',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    error: {
      contrastText: '#FFFFFF',
      main: '#F44336',
      _states: {
        hover: 'rgba(244, 67, 54, 0.08)',
        outlinedBorder: 'rgba(244, 67, 54, 0.5)',
        focusVisible: 'rgba(244, 67, 54, 0.3)'
      },
      dark: '#D32F2F'
    },
    warning: {
      contrastText: 'rgba(0, 0, 0, 0.87)',
      main: '#FFA726'
    },
    info: {
      contrastText: 'rgba(0, 0, 0, 0.87)',
      main: '#29B6F6'
    },
    success: {
      contrastText: 'rgba(0, 0, 0, 0.87)',
      main: '#66BB6A'
    },
    _components: {
      switch: {
        slideFill: 'rgba(255, 255, 255, 0.38)',
        knobFillEnabled: '#E0E0E0',
        knowFillDisabled: '#757575'
      }
    },
    common: {
      white_states: {
        main: '#FFFFFF',
        focusVisible: 'rgba(255, 255, 255, 0.3)'
      }
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.08)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabled: 'rgba(255, 255, 255, 0.38)'
    },
    text: {
      primary: '#FFFFFF',
      _states: {
        focusVisible: 'rgba(255, 255, 255, 0.3)'
      }
    }
  }
} as ThemeOptions;

export const eleksLightTheme = createTheme({
  cssVariables: true,
  ...lightOptions,
  ...commonOptions
});

export const eleksDarkTheme = createTheme({
  cssVariables: true,
  ...darkOptions,
  ...commonOptions
});
