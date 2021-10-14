// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
          borderRadius: 0,
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          // backgroundColor: theme.palette.GREEN,
          // boxShadow: theme.customShadows.z8,
          // "&:hover": {
          //   backgroundColor: theme.palette.GREEN,
          // },
          // width: 150,
        },
        containedPrimary: {
          boxShadow: "none",
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        contained: {
          color: "white",
          fontSize: 24,
        },
      },
    },
  };
}
