# Portfolio Dylan Salcedo

Portfolio profesional orientado a mostrar soluciones digitales, proyectos verificables, experiencia, documentación y formas de contacto.

La interfaz prioriza **qué problema resuelve cada proyecto**, qué valor aporta y recién después qué tecnologías se utilizaron. El objetivo es que empresas, reclutadores o clientes puedan entender rápidamente el trabajo sin recorrer una lista saturada de herramientas.

## Enfoque actual

- Arquitectura de información simplificada.
- Navegación principal reducida.
- Home orientada a problemas, soluciones y evidencia.
- Proyectos con estado explícito: publicado, en desarrollo o repo disponible.
- Diferenciación entre código propio, WordPress y TiendaNube.
- Documentación vinculada únicamente a recursos reales publicados en GitHub.
- Ejemplos de workflows sanitizados, sin credenciales ni webhooks reales.
- Diseño responsive con foco mobile-first y prevención de overflow.
- Accesibilidad básica: skip link, foco visible, navegación por teclado y reduced motion.
- SEO con canonical, Open Graph, Twitter Card y JSON-LD.

## Stack del portfolio

- React 19
- Vite
- React Router
- CSS modular por responsabilidades
- Datos locales versionados en `frontend/src/data/fallbackData.js`
- Vercel para el frontend público

## Rutas principales

- `/` — propuesta de valor, soluciones y proyectos destacados
- `/proyectos` — proyectos verificables
- `/servicios` — tipos de soluciones que desarrollo
- `/experiencia` — experiencia profesional
- `/documentacion` — READMEs y documentación real
- `/contacto` — GitHub, LinkedIn, WhatsApp, email y CV

Rutas secundarias que siguen disponibles:

- `/sobre-mi`
- `/skills`
- `/automatizaciones`
- `/formacion`
- `/legal`

## Proyectos mostrados

### Materiales FZAC
E-commerce y sistema de gestión para catálogo, stock, pedidos y operación comercial.

- Demo: https://materiales-fzac-391o.vercel.app
- Repo: https://github.com/DylanDev08/Materiales-FZAC

### Portfolio FZAC
Portfolio institucional administrable con panel privado, CRUD, Supabase Storage y autenticación.

- Demo: https://fortalezaconstrucciones-port.vercel.app
- Repo: https://github.com/DylanDev08/FZAC-Portfolio

### BarberHouse
Proyecto web comercial actualmente en desarrollo.

- Demo: https://barber-house-pi.vercel.app
- Repo: https://github.com/DylanDev08/BarberHouse

### Budgetly
Aplicación de finanzas personales actualmente en desarrollo.

- Repo: https://github.com/DylanDev08/Budgetly
- Nota: el último deploy registrado en Vercel falló, por eso no se publica una URL de demo como si estuviera operativa.

### Mangas MaxDy
Proyecto full stack con frontend React y API Express para catálogo, lectura, usuarios, comentarios, rankings y administración.

- Repo: https://github.com/DylanDev08/Comics-Manga-MaxDy

### Innova Click
Sitio comercial desarrollado sobre WordPress.

- Web: https://innovaclick.com.ar

### FuckTheSys
E-commerce desarrollado y personalizado sobre TiendaNube.

- Web: https://fuckthesys2.mitiendanube.com

## Ejecutar localmente

```bash
cd frontend
npm install
npm run dev
```

Abrir normalmente en:

```text
http://localhost:5173
```

## Verificación de producción

```bash
cd frontend
npm ci
npm run lint:imports
npm run build
```

## Datos editables

El contenido principal se mantiene en:

```text
frontend/src/data/fallbackData.js
```

Ahí se administran:

- perfil
- skills
- servicios
- proyectos
- workflows públicos/sanitizados
- documentación
- experiencia
- formación

## Assets de marca

- Logo principal: `frontend/public/brand/ds-logo.svg`
- Imagen Open Graph: `frontend/public/og-dylan-salcedo.svg`
- Foto de perfil: `frontend/public/profile-dylan-portfolio.svg`
- Portadas de proyectos: `frontend/public/projects/`

## Seguridad y evidencia

- No se publican `.env`, tokens, claves API ni credenciales.
- Los workflows públicos están sanitizados.
- No se muestran URLs ficticias para demos.
- Las cards de documentación enlazan a recursos reales versionados.
- Las capacidades ofrecidas como servicio se diferencian de los proyectos publicados.

## Deploy

Sitio principal:

https://portfolio-dylan-ten.vercel.app
