import Typography from 'typography';

import 'typeface-roboto';
import 'typeface-ibm-plex-mono';
import 'typeface-ibm-plex-sans';

// 'IBM Plex Mono', monospace;
// 'Roboto', sans-serif;
// 'IBM Plex Sans', sans-serif;

const config = {
  title: 'typography-theme-sherpa-site',
  headerFontFamily: ['IBM Plex Mono', 'monospace'],
  bodyFontFamily: ['Roboto', 'sans-serif']
};

const typography = new Typography(config);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
};

export default typography;
