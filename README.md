# Vinicius Machado — Million Portfolio

Portfólio premium em Vite + React, com motion, mockups 3D em CSS/DOM, MacBook, celulares, cards flutuantes, parallax, tilt no mouse e copy voltada para recrutadores.

## Rodar local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy rápido

- Vercel: importar o repositório e usar `npm run build` com pasta `dist`.
- Cloudflare Pages: framework `Vite`, build `npm run build`, output `dist`.

## Onde editar

- Conteúdo: `src/data/content.js`
- Layout principal: `src/App.jsx`
- Estilos globais e 3D: `src/styles/global.css`
- Componentes 3D: `src/components/Macbook3D.jsx` e `src/components/Phone3D.jsx`

## Observação

Os MacBooks/celulares são modelos 3D em CSS/HTML para máxima performance e sem depender de arquivos GLB pesados. O efeito final é 3D, responsivo, animado e com tilt interativo.
