// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// Custom function to clean the dist folder before build
function cleanOutputDir() {
  const outDir = 'dist';
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
    console.log(`✅ Cleaned "${outDir}" directory`);
  }
}

// Clean the output directory
cleanOutputDir();

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
    emptyOutDir: true, // Ensure Vite clears it before every build
  },
});
