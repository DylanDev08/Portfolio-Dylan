# Portfolio personal - Dylan Salcedo

Portfolio profesional con estetica de videojuego, creado para presentar perfil, experiencia, skills, formacion y proyectos reales ante empresas o reclutadores.

La version publica funciona como frontend estatico: no necesita base de datos, no consume claves privadas y no tiene formulario de solicitudes.

## Stack usado

- React
- Vite
- React Router
- CSS modular
- Datos locales versionados en el frontend
- Assets publicos para CV, foto de perfil y portadas

## Como se hizo desde cero

1. Se creo una aplicacion React con Vite.
2. Se separo la estructura en `app`, `components`, `features`, `pages`, `data`, `styles` y `lib`.
3. Se configuro React Router para que cada seccion sea una pantalla propia:
   - `/`
   - `/sobre-mi`
   - `/skills`
   - `/proyectos`
   - `/proyectos/listado`
   - `/experiencia`
   - `/formacion`
4. Se cargo la informacion profesional en `frontend/src/data/fallbackData.js`.
5. Se agrego una pantalla inicial estilo videojuego con boton `Play`.
6. Se construyo una portada previa para proyectos antes del listado.
7. Se agrego la foto de perfil en `frontend/public/profile-dylan.jpeg`.
8. Se agrego el CV descargable en `frontend/public/cv/CV_Dylan_Salcedo.pdf`.
9. Se eliminaron formularios publicos porque el objetivo no es vender paginas, sino presentar experiencia profesional.
10. Se definio una paleta oscura de negro, blanco y grises.

## Estructura principal

```text
frontend/
├── public/
│   ├── cv/
│   ├── projects/
│   └── profile-dylan.jpeg
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── features/
│   ├── pages/
│   └── styles/
└── package.json
```

## Ejecutar localmente

```bash
cd frontend
npm install
npm run dev
```

Abrir:

```text
http://localhost:5173
```

## Build de produccion

```bash
cd frontend
npm run build
```

El resultado queda en:

```text
frontend/dist
```

## Datos editables

Los datos visibles del portfolio estan en:

```text
frontend/src/data/fallbackData.js
```

Desde ahi se pueden cambiar:

- Perfil
- Links de GitHub y LinkedIn
- Skills
- Proyectos
- Experiencia
- Formacion

## Assets importantes

- Foto de perfil: `frontend/public/profile-dylan.jpeg`
- CV descargable: `frontend/public/cv/CV_Dylan_Salcedo.pdf`
- Portadas: `frontend/public/projects/`

## Seguridad

- No hay claves privadas en el frontend.
- No se sube `.env` con secretos.
- No se exponen credenciales.
- No se guardan contrasenas en el navegador desde el codigo.
- La descarga del CV usa un archivo publico estatico.

## Proyectos cargados

- Fortaleza Construcciones Portfolio
- Fortaleza Construcciones E-Commerce
- Fuck The Sys, tienda de ropa personalizada
- InnovaClick, agencia de marketing digital, diseno web, SEO y Meta Ads

## Pendientes posibles

- Reemplazar portadas SVG por capturas reales.
- Ajustar textos finos para cada empresa segun CV final.
- Deployar el frontend en Vercel, Netlify o similar.
