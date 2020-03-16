import { defineConfig } from 'umi';

let HOST_URL = '';
export default defineConfig({
  theme: {
    'primary-color': '#3385ff',
    'fill-body': '#F2F2F2',
  },
  proxy: {
    '/api': {
      target: HOST_URL,
      changeOrigin: true,
      pathRewrite: { '/api': '' },
    },
  },
  title: '会务H5',
  // plugins: [
  //   ['umi-plugin-react', {
  //     dynamicImport: true
  //   }]
  // ]
});
