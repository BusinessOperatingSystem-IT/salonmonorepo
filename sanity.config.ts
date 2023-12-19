import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: 'ry1avrwn',
    dataset: 'production',
    title: 'Salon Monorepo',
    apiVersion: '2023-12-18',
    basePath: '/admin',
    plugins: [deskTool()]
})


export default config