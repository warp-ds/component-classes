/* eslint-env node */
import dts from "vite-plugin-dts";
import { presetWarp } from '@warp-ds/uno'
import uno from 'unocss/vite'
import { classes } from './classes.js';

export default () => {
  return {
    plugins: [
      uno({
        presets: [presetWarp({ skipPreflight: true })],
        mode: 'dist-chunk',
        safelist: classes,
      }),  
      dts({
        insertTypesEntry: true,
      }),  
    ],
    build: {
        emptyOutDir: false,
        rollupOptions: {
            output: {
              assetFileNames: `assets/components.[ext]`
            }
        }
    }
  };
};