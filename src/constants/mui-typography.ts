export const Fonts = [
  'Inter',
  'sans-serif'
].join(',')

export const Typography = {
  fontFamily: Fonts,
  h1: {
    fontWeight: 900,
    fontSize: 96,
    lineHeight: '110px',
    letterSpacing: '-0.02em'
  },
  h2: {
    fontWeight: 700,
    fontSize: 64,
    lineHeight: '77px',
    letterSpacing: '-0.02em'
  },
  h3: {
    fontWeight: 700,
    fontSize: 40,
    lineHeight: '48px',
    letterSpacing: '-0.02em'
  },
  h4: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: '39px',
    letterSpacing: '-0.02em'
  },
  h5: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: '29px',
    letterSpacing: '-0.02em'
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '32px'
  },
  subtitle2: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '32px'
  },
  body1: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '28px'
  },
  body2: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '28px'
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    'subtitle1': React.CSSProperties
    'subtitle2': React.CSSProperties
    'body1': React.CSSProperties
    'body2': React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    ['subtitle1']?: React.CSSProperties
    ['subtitle2']?: React.CSSProperties
    ['body1']?: React.CSSProperties
    ['body2']?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'subtitle1': true
    'subtitle2': true
    'body1': true
    'body2': true
  }
}
