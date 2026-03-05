/**
 * NOTE: AUTO-GENERATED FILE.
 * Source: Figma Variables (tokens)
 * fileKey: BpvKv4FZpzUKLb9nzDLm9Q
 */

import { createTheme, ThemeOptions } from '@mui/material';

const commonOptions = {
  breakpoints: {
    values: {
      xl: 1536,
      lg: 1200,
      md: 900,
      sm: 600,
      xs: 444
    }
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
    none: 0
  },
  typography: {
    h1: {
      fontFamily: "Inter, Helvetica, Arial, sans-serif"
    },
    h2: {
      fontFamily: "Inter, Helvetica, Arial, sans-serif"
    },
    h3: {
      fontFamily: "Inter, Helvetica, Arial, sans-serif"
    },
    h4: {
      fontFamily: "Inter, Helvetica, Arial, sans-serif"
    },
    h5: {
      fontFamily: "Inter, Helvetica, Arial, sans-serif"
    },
    h6: {
      fontFamily: "Inter, Helvetica, Arial, sans-serif"
    },
    body1: {
      fontFamily: "Inter, Helvetica, Arial, sans-serif"
    },
    body2: {
      fontFamily: "Inter, Helvetica, Arial, sans-serif"
    },
    subtitle1: {
      fontFamily: "Inter, Helvetica, Arial, sans-serif"
    },
    subtitle2: {
      fontFamily: "Inter, Helvetica, Arial, sans-serif"
    },
    overline: {
      fontFamily: "Inter, Helvetica, Arial, sans-serif"
    },
    caption: {
      fontFamily: "Inter, Helvetica, Arial, sans-serif"
    }
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        thumb: ({ theme }: any) => ({
          backgroundColor: (theme.palette as any)._components?.switch?.knobFillEnabled
        }),
        track: ({ theme }: any) => ({
          backgroundColor: (theme.palette as any)._components?.switch?.slideFill
        }),
        switchBase: ({ theme }: any) => ({
          '&.Mui-disabled .MuiSwitch-thumb': {
            backgroundColor: (theme.palette as any)._components?.switch?.knowFillDisabled
          }
        })
      }
    },
    MuiAvatar: {
      styleOverrides: {
        colorDefault: ({ theme }: any) => ({
          backgroundColor: (theme.palette as any)._components?.avatar?.fill
        })
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: ({ theme }: any) => {
          const input = (theme.palette as any)._components?.input;

          return {
            '&.MuiInput-root::before': {
              borderBottomColor: input?.standard?.enabledBorder
            },
            '&.MuiInput-root:hover:not(.Mui-disabled, .Mui-error)::before': {
              borderBottomColor: input?.standard?.hoverBorder
            },
            '&.MuiFilledInput-root': {
              backgroundColor: input?.filled?.enabledFill
            },
            '&.MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error)': {
              backgroundColor: input?.filled?.hoverFill
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: input?.outlined?.enabledBorder
            },
            '&:hover:not(.Mui-disabled, .Mui-error) .MuiOutlinedInput-notchedOutline':
            {
              borderColor: input?.outlined?.hoverBorder
            }
          };
        }
      }
    },
    MuiRating: {
      styleOverrides: {
        iconEmpty: ({ theme }: any) => ({
          color: (theme.palette as any)._components?.rating?.enabledBorder
        }),
        iconFilled: ({ theme }: any) => ({
          color: (theme.palette as any)._components?.rating?.activeFill
        })
      }
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          backgroundColor: (theme.palette as any)._components?.snackbar?.fill
        })
      }
    },
    MuiChip: {
      styleOverrides: {
        colorDefault: ({ theme }: any) => {
          const chip = (theme.palette as any)._components?.chip;

          return {
            '&:hover': {
              backgroundColor: chip?.defaultHoverFill
            },
            '&.Mui-focusVisible': {
              backgroundColor: chip?.defaultFocusFill
            },
            '&.MuiChip-outlined': {
              borderColor: chip?.defaultEnabledBorder
            },
            '& .MuiChip-deleteIcon': {
              color: chip?.defaultCloseFill
            }
          };
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }: any) => ({
          backgroundColor: (theme.palette as any)._components?.tooltip?.fill
        })
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          backgroundColor: (theme.palette as any)._components?.backdrop?.fill
        })
      }
    },
    MuiAppBar: {
      styleOverrides: {
        colorDefault: ({ theme }: any) => ({
          backgroundColor: (theme.palette as any)._components?.appBar?.defaultFill
        })
      }
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        ol: ({ theme }: any) => ({
          '& > li > button.MuiButtonBase-root': {
            backgroundColor: (theme.palette as any)._components?.breadcrumbs?.collapseFill
          }
        })
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }: any) => {
          const alert = (theme.palette as any)._components?.alert;

          return {
            '&.MuiAlert-standard.MuiAlert-colorError': {
              color: alert?.error?.color,
              backgroundColor: alert?.error?.background
            },
            '&.MuiAlert-standard.MuiAlert-colorWarning': {
              color: alert?.warning?.color,
              backgroundColor: alert?.warning?.background
            },
            '&.MuiAlert-standard.MuiAlert-colorInfo': {
              color: alert?.info?.color,
              backgroundColor: alert?.info?.background
            },
            '&.MuiAlert-standard.MuiAlert-colorSuccess': {
              color: alert?.success?.color,
              backgroundColor: alert?.success?.background
            }
          };
        }
      }
    },
    MuiStepConnector: {
      styleOverrides: {
        line: ({ theme }: any) => ({
          borderColor: (theme.palette as any)._components?.stepper?.connector
        })
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }: any) => {
          const input = (theme.palette as any)._components?.input;

          return {
            '& .MuiInput-root::before': {
              borderBottomColor: input?.standard?.enabledBorder
            },
            '& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error)::before': {
              borderBottomColor: input?.standard?.hoverBorder
            },
            '& .MuiFilledInput-root': {
              backgroundColor: input?.filled?.enabledFill
            },
            '& .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error)': {
              backgroundColor: input?.filled?.hoverFill
            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: input?.outlined?.enabledBorder
            },
            '& .MuiOutlinedInput-root:hover:not(.Mui-disabled, .Mui-error) .MuiOutlinedInput-notchedOutline':
            {
              borderColor: input?.outlined?.hoverBorder
            }
          };
        }
      }
    }
  }
};

const lightOptions = {
  palette: {
    mode: "light",
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
      _states: {
        hover: "rgba(0, 0, 0, 0.04)",
        selected: "rgba(0, 0, 0, 0.08)",
        focus: "rgba(0, 0, 0, 0.12)",
        focusVisible: "rgba(0, 0, 0, 0.3)"
      }
    },
    primary: {
      main: "#0045E6",
      dark: "#0032A6",
      light: "#6291FF",
      contrastText: "#FFFFFF",
      _states: {
        hover: "rgba(0, 69, 230, 0.04)",
        selected: "rgba(0, 69, 230, 0.08)",
        focus: "rgba(0, 69, 230, 0.12)",
        focusVisible: "rgba(0, 69, 230, 0.3)",
        outlinedBorder: "rgba(0, 69, 230, 0.5)"
      }
    },
    secondary: {
      main: "#688692",
      dark: "#4C626A",
      light: "#98ACB4",
      contrastText: "#FFFFFF",
      _states: {
        hover: "rgba(104, 134, 146, 0.04)",
        selected: "rgba(104, 134, 146, 0.08)",
        focus: "rgba(104, 134, 146, 0.12)",
        focusVisible: "rgba(104, 134, 146, 0.3)",
        outlinedBorder: "rgba(104, 134, 146, 0.5)"
      }
    },
    action: {
      active: "rgba(0, 0, 0, 0.56)",
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.08)",
      focus: "rgba(0, 0, 0, 0.12)",
      disabled: "rgba(0, 0, 0, 0.38)",
      disabledBackground: "rgba(0, 0, 0, 0.12)"
    },
    error: {
      main: "#D32F2F",
      dark: "#C62828",
      light: "#EF5350",
      contrastText: "#FFFFFF",
      _states: {
        hover: "rgba(211, 47, 47, 0.04)",
        selected: "rgba(211, 47, 47, 0.08)",
        focusVisible: "rgba(211, 47, 47, 0.3)",
        outlinedBorder: "rgba(211, 47, 47, 0.5)"
      }
    },
    warning: {
      main: "#EF6C00",
      dark: "#E65100",
      light: "#FF9800",
      contrastText: "#FFFFFF",
      _states: {
        hover: "rgba(239, 108, 0, 0.04)",
        selected: "rgba(239, 108, 0, 0.08)",
        focusVisible: "rgba(239, 108, 0, 0.3)",
        outlinedBorder: "rgba(239, 108, 0, 0.5)"
      }
    },
    info: {
      main: "#0288D1",
      dark: "#01579B",
      light: "#03A9F4",
      contrastText: "#FFFFFF",
      _states: {
        hover: "rgba(2, 136, 209, 0.04)",
        selected: "rgba(2, 136, 209, 0.08)",
        focusVisible: "rgba(2, 136, 209, 0.3)",
        outlinedBorder: "rgba(2, 136, 209, 0.5)"
      }
    },
    success: {
      main: "#2E7D32",
      dark: "#1B5E20",
      light: "#4CAF50",
      contrastText: "#FFFFFF",
      _states: {
        hover: "rgba(46, 125, 50, 0.04)",
        selected: "rgba(46, 125, 50, 0.08)",
        focusVisible: "rgba(46, 125, 50, 0.3)",
        outlinedBorder: "rgba(46, 125, 50, 0.5)"
      }
    },
    common: {
      black_states: {
        main: "#000000",
        hover: "rgba(0, 0, 0, 0.04)",
        selected: "rgba(0, 0, 0, 0.08)",
        focus: "rgba(0, 0, 0, 0.12)",
        focusVisible: "rgba(0, 0, 0, 0.3)",
        outlinedBorder: "rgba(0, 0, 0, 0.5)"
      },
      white_states: {
        main: "#FFFFFF",
        hover: "rgba(255, 255, 255, 0.04)",
        selected: "rgba(255, 255, 255, 0.08)",
        focus: "rgba(255, 255, 255, 0.12)",
        focusVisible: "rgba(255, 255, 255, 0.3)",
        outlinedBorder: "rgba(255, 255, 255, 0.5)"
      }
    },
    _components: {
      avatar: {
        fill: "#BDBDBD"
      },
      input: {
        standard: {
          enabledBorder: "rgba(0, 0, 0, 0.42)",
          hoverBorder: "#000000"
        },
        filled: {
          enabledFill: "rgba(0, 0, 0, 0.06)",
          hoverFill: "rgba(0, 0, 0, 0.09)"
        },
        outlined: {
          enabledBorder: "rgba(0, 0, 0, 0.23)",
          hoverBorder: "#000000"
        }
      },
      switch: {
        knobFillEnabled: "#FAFAFA",
        slideFill: "#000000",
        knowFillDisabled: "#F5F5F5"
      },
      rating: {
        enabledBorder: "rgba(0, 0, 0, 0.23)",
        activeFill: "#FFB400"
      },
      snackbar: {
        fill: "#323232"
      },
      chip: {
        defaultCloseFill: "#000000",
        defaultHoverFill: "rgba(0, 0, 0, 0.12)",
        defaultEnabledBorder: "#BDBDBD",
        defaultFocusFill: "rgba(0, 0, 0, 0.2)"
      },
      tooltip: {
        fill: "rgba(97, 97, 97, 0.9)"
      },
      backdrop: {
        fill: "rgba(0, 0, 0, 0.5)"
      },
      appBar: {
        defaultFill: "#F5F5F5"
      },
      breadcrumbs: {
        collapseFill: "#F5F5F5"
      },
      alert: {
        error: {
          color: "#5F2120",
          background: "#FDEDED"
        },
        warning: {
          color: "#663C00",
          background: "#FFF4E5"
        },
        info: {
          color: "#014361",
          background: "#E5F6FD"
        },
        success: {
          color: "#1E4620",
          background: "#EDF7ED"
        }
      },
      stepper: {
        connector: "#BDBDBD"
      }
    }
  }
} as ThemeOptions;

const darkOptions = {
  palette: {
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.38)",
      _states: {
        hover: "rgba(255, 255, 255, 0.08)",
        selected: "rgba(255, 255, 255, 0.16)",
        focus: "rgba(255, 255, 255, 0.12)",
        focusVisible: "rgba(255, 255, 255, 0.3)"
      }
    },
    primary: {
      main: "#6291FF",
      dark: "#2D6CFF",
      light: "#A6C1FF",
      contrastText: "#FFFFFF",
      _states: {
        hover: "rgba(98, 145, 255, 0.08)",
        selected: "rgba(98, 145, 255, 0.16)",
        focus: "rgba(98, 145, 255, 0.12)",
        focusVisible: "rgba(98, 145, 255, 0.3)",
        outlinedBorder: "rgba(98, 145, 255, 0.5)"
      }
    },
    secondary: {
      main: "#B9C6CC",
      dark: "#819AA4",
      light: "#F7FAFC",
      contrastText: "rgba(0, 0, 0, 0.87)",
      _states: {
        hover: "rgba(206, 147, 216, 0.08)",
        selected: "rgba(206, 147, 216, 0.16)",
        focus: "rgba(206, 147, 216, 0.12)",
        focusVisible: "rgba(206, 147, 216, 0.3)",
        outlinedBorder: "rgba(206, 147, 216, 0.5)"
      }
    },
    action: {
      active: "rgba(255, 255, 255, 0.56)",
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(255, 255, 255, 0.16)",
      focus: "rgba(255, 255, 255, 0.12)",
      disabled: "rgba(255, 255, 255, 0.38)",
      disabledBackground: "rgba(255, 255, 255, 0.12)"
    },
    error: {
      main: "#F44336",
      dark: "#D32F2F",
      light: "#E57373",
      contrastText: "#FFFFFF",
      _states: {
        hover: "rgba(244, 67, 54, 0.08)",
        selected: "rgba(244, 67, 54, 0.16)",
        focusVisible: "rgba(244, 67, 54, 0.3)",
        outlinedBorder: "rgba(244, 67, 54, 0.5)"
      }
    },
    warning: {
      main: "#FFA726",
      dark: "#F57C00",
      light: "#FFB74D",
      contrastText: "rgba(0, 0, 0, 0.87)",
      _states: {
        hover: "rgba(255, 167, 38, 0.08)",
        selected: "rgba(255, 167, 38, 0.16)",
        focusVisible: "rgba(255, 167, 38, 0.3)",
        outlinedBorder: "rgba(255, 167, 38, 0.5)"
      }
    },
    info: {
      main: "#29B6F6",
      dark: "#0288D1",
      light: "#4FC3F7",
      contrastText: "rgba(0, 0, 0, 0.87)",
      _states: {
        hover: "rgba(41, 182, 246, 0.08)",
        selected: "rgba(41, 182, 246, 0.16)",
        focusVisible: "rgba(41, 182, 246, 0.3)",
        outlinedBorder: "rgba(41, 182, 246, 0.5)"
      }
    },
    success: {
      main: "#66BB6A",
      dark: "#388E3C",
      light: "#81C784",
      contrastText: "rgba(0, 0, 0, 0.87)",
      _states: {
        hover: "rgba(102, 187, 106, 0.08)",
        selected: "rgba(102, 187, 106, 0.16)",
        focusVisible: "rgba(102, 187, 106, 0.3)",
        outlinedBorder: "rgba(102, 187, 106, 0.5)"
      }
    },
    common: {
      black_states: {
        main: "#000000",
        hover: "rgba(0, 0, 0, 0.08)",
        selected: "rgba(0, 0, 0, 0.16)",
        focus: "rgba(0, 0, 0, 0.12)",
        focusVisible: "rgba(0, 0, 0, 0.3)",
        outlinedBorder: "rgba(0, 0, 0, 0.5)"
      },
      white_states: {
        main: "#FFFFFF",
        hover: "rgba(255, 255, 255, 0.08)",
        selected: "rgba(255, 255, 255, 0.16)",
        focus: "rgba(255, 255, 255, 0.12)",
        focusVisible: "rgba(255, 255, 255, 0.3)",
        outlinedBorder: "rgba(255, 255, 255, 0.5)"
      }
    },
    _components: {
      avatar: {
        fill: "#757575"
      },
      input: {
        standard: {
          enabledBorder: "rgba(255, 255, 255, 0.42)",
          hoverBorder: "#FFFFFF"
        },
        filled: {
          enabledFill: "rgba(255, 255, 255, 0.09)",
          hoverFill: "rgba(255, 255, 255, 0.12)"
        },
        outlined: {
          enabledBorder: "rgba(255, 255, 255, 0.23)",
          hoverBorder: "#FFFFFF"
        }
      },
      switch: {
        knobFillEnabled: "#E0E0E0",
        slideFill: "rgba(255, 255, 255, 0.38)",
        knowFillDisabled: "#757575"
      },
      rating: {
        enabledBorder: "rgba(255, 255, 255, 0.23)",
        activeFill: "#FFB400"
      },
      snackbar: {
        fill: "#2C2C2C"
      },
      chip: {
        defaultCloseFill: "#FFFFFF",
        defaultHoverFill: "rgba(255, 255, 255, 0.12)",
        defaultEnabledBorder: "#616161",
        defaultFocusFill: "rgba(255, 255, 255, 0.2)"
      },
      tooltip: {
        fill: "rgba(97, 97, 97, 0.9)"
      },
      backdrop: {
        fill: "rgba(0, 0, 0, 0.5)"
      },
      appBar: {
        defaultFill: "#272727"
      },
      breadcrumbs: {
        collapseFill: "#757575"
      },
      alert: {
        error: {
          color: "#F4C7C7",
          background: "#160B0B"
        },
        warning: {
          color: "#FFE2B7",
          background: "#191207"
        },
        info: {
          color: "#B8E7FB",
          background: "#071318"
        },
        success: {
          color: "#CCE8CD",
          background: "#0C130D"
        }
      },
      stepper: {
        connector: "#757575"
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
