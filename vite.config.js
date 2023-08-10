import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  plugins: [ViteMinifyPlugin({}), ViteImageOptimizer({})],
  base: '',
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/html/about.html'),
        altea: resolve(__dirname, 'src/html/design_altea.html'),
        alzheimer: resolve(__dirname, 'src/html/design_alzheimer.html'),
        appregla: resolve(__dirname, 'src/html/design_app-regla.html'),
        egresados: resolve(__dirname, 'src/html/design_egresados.html'),
        hokobi: resolve(__dirname, 'src/html/design_hokobi.html'),
        jovencitas: resolve(__dirname, 'src/html/design_jovencitas.html'),
        rotoscopia: resolve(__dirname, 'src/html/design_rotoscopia.html'),
        serenates: resolve(__dirname, 'src/html/design_serenates.html'),
        showreel: resolve(__dirname, 'src/html/design_showreels.html'),
        socvida: resolve(__dirname, 'src/html/design_socvida.html'),
        videocurriculum: resolve(__dirname, 'src/html/design_videocurriculum.html'),
        uxuidesign: resolve(__dirname, 'src/html/design-uxui.html'),
        design: resolve(__dirname, 'src/html/design.html'),
        telefonica: resolve(__dirname, 'src/html/telefonica.html'),
        uxui: resolve(__dirname, 'src/html/uxui.html'),
        website: resolve(__dirname, 'src/html/website.html'),
        bingo: resolve(__dirname, 'src/html/work_bingo.html'),
        copy: resolve(__dirname, 'src/html/work_c.html'),
        creatives: resolve(__dirname, 'src/html/work_creatives.html'),
        easybank: resolve(__dirname, 'src/html/work_easybank.html'),
        fylodark: resolve(__dirname, 'src/html/work_fylo-dark.html'),
        fylo: resolve(__dirname, 'src/html/work_fylo.html'),
        huddle2: resolve(__dirname, 'src/html/work_huddle-2.html'),
        huddle: resolve(__dirname, 'src/html/work_huddle.html'),
        insure: resolve(__dirname, 'src/html/work_insure.html'),
        loopstudios: resolve(__dirname, 'src/html/work_loopstudios.html'),
        skilled: resolve(__dirname, 'src/html/work_skilled.html'),
        thebright: resolve(__dirname, 'src/html/work_the-bright.html'),
        typemaster: resolve(__dirname, 'src/html/work_typemaster.html'),
        wordle: resolve(__dirname, 'src/html/work_wordle.html'),
        works: resolve(__dirname, 'src/html/works.html')
        // Añade aquí el resto de páginas que quieras.(nombre único: resolve(__dirname, 'src/html/archivo.html'))
      }
    },
    outDir: '../docs'
  }
});
