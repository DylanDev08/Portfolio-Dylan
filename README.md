# Portfolio Dylan Salcedo

Portfolio profesional orientado a mostrar soluciones digitales, proyectos verificables, experiencia, documentación y formas de contacto.

La interfaz prioriza **qué problema resuelve cada proyecto**, qué valor aporta y recién después qué tecnologías se utilizaron. El objetivo es que empresas, reclutadores o clientes puedan entender rápidamente el trabajo sin recorrer una lista saturada de herramientas.

## Enfoque actual

- Arquitectura de información simplificada.
- Navegación principal reducida.
- Home orientada a problemas, soluciones y evidencia.
- Proyectos con estado explícito: publicado, en desarrollo o repo disponible.
- Filtros por estado y tipo de desarrollo para revisar el portfolio más rápido.
- Cada proyecto tiene una vista interna de caso: problema, solución, valor, estado, stack y evidencia disponible.
- Diferenciación entre código propio, WordPress y TiendaNube.
- Documentación vinculada únicamente a recursos reales publicados en GitHub.
- Ejemplos de workflows sanitizados, sin credenciales ni webhooks reales.
- Diseño responsive con foco mobile-first y prevención de overflow.
- Accesibilidad: skip link, foco visible, navegación por teclado, `aria-pressed` en filtros y reduced motion.
- SEO global y por ruta con canonical, Open Graph, Twitter Card, JSON-LD y metadata específica para cada caso de proyecto.
- Skills sin porcentajes autodeclarados: se prioriza evidencia verificable en repositorios y proyectos.
- CV ATS de una columna incluido dentro del portfolio.

## Stack del portfolio

- React 19
- Vite
- React Router
- CSS modular por responsabilidades
- Datos locales versionados en `frontend/src/data/fallbackData.js`
- Vercel para el frontend público

## Rutas principales

- `/` — propuesta de valor, soluciones y proyectos destacados
- `/proyectos` — proyectos verificables y filtros
- `/proyectos/:slug` — vista de caso de cada proyecto
- `/servicios` — tipos de soluciones que desarrollo
- `/experiencia` — experiencia profesional
- `/documentacion` — READMEs y documentación real
- `/contacto` — GitHub, LinkedIn, WhatsApp, email y CV

Rutas secundarias:

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
- Docs: README del repositorio

### Portfolio FZAC
Portfolio institucional administrable con panel privado, CRUD, Supabase Storage y autenticación.

- Demo: https://fortalezaconstrucciones-port.vercel.app
- Repo: https://github.com/DylanDev08/FZAC-Portfolio
- Docs: README del repositorio

### BarberHouse
Proyecto web comercial actualmente en desarrollo.

- Demo: https://barber-house-pi.vercel.app
- Repo: https://github.com/DylanDev08/BarberHouse
- Estado: en desarrollo; el repositorio actual utiliza datos y autenticación mock para validar el flujo antes de persistencia real.

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
- Sin repositorio de código porque el trabajo se realizó sobre WordPress.

### FuckTheSys
E-commerce desarrollado y personalizado sobre TiendaNube.

- Web: https://fuckthesys2.mitiendanube.com
- Sin repositorio de código porque el trabajo se realizó sobre TiendaNube.

## Casos de proyecto

Las cards del portfolio no terminan en un listado de tecnologías. Cada proyecto posee una vista propia que presenta:

1. Contexto / problema.
2. Solución construida.
3. Valor que aporta.
4. Estado real del proyecto.
5. Tecnologías utilizadas.
6. Demo, GitHub y/o documentación cuando existen públicamente.

Esto permite mostrar el razonamiento de producto sin inventar métricas ni resultados que no estén medidos.

## CV

El archivo descargable desde el sitio está en:

```text
frontend/public/cv/CV_Dylan_Salcedo.pdf
```

La versión actual prioriza compatibilidad ATS:

- una sola columna;
- sin foto ni gráficos decorativos;
- encabezados estándar;
- experiencia antes de stack;
- proyectos verificables;
- enlaces a Portfolio, GitHub y LinkedIn;
- Fortaleza Construcciones actualizado a 7 meses;
- sin edad visible.

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

El repo incluye GitHub Actions para ejecutar estas comprobaciones en pull requests.

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

## SEO

- canonical actualizado por ruta;
- metadata Open Graph y Twitter por página;
- metadata específica para `/proyectos/:slug`;
- JSON-LD de persona y sitio;
- `robots.txt`;
- `sitemap.xml` con rutas principales y casos de proyecto;
- rewrite de Vercel para deep links del SPA.

## Seguridad y evidencia

- No se publican `.env`, tokens, claves API ni credenciales.
- Los workflows públicos están sanitizados.
- No se muestran URLs ficticias para demos.
- Las cards de documentación enlazan a recursos reales versionados.
- Las capacidades ofrecidas como servicio se diferencian de los proyectos publicados.
- Los trabajos sobre WordPress/TiendaNube no se presentan falsamente como repositorios de código.
- Los proyectos en desarrollo se etiquetan como tales.

## Deploy

Sitio principal:

https://portfolio-dylan-ten.vercel.app
