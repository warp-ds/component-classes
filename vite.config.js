/* eslint-env node */
import { presetWarp } from '@warp-ds/uno'
import uno from 'unocss/vite'
import { classes } from './classes.js';

export default () => {
  return {
    plugins: [
      uno({
        presets: [presetWarp({ usePreflight: true })],
        mode: 'dist-chunk',
        safelist: classes,
      }),  

    ],
    build: {
        emptyOutDir: false,
        rollupOptions: {
            output: {
              assetFileNames: `assets/common.[ext]`
            }
        }
    }
  };
};