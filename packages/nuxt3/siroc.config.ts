import { defineSirocConfig } from 'siroc';

export default defineSirocConfig({
  rollup: {
    externals: ['vue']
  }
});
