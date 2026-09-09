# Portfolio Dylan Salcedo

Portfolio profesional enfocado en **venta de soluciones, proyectos verificables y evidencia visual**. La interfaz prioriza qué problema existe, qué solución se construyó y qué valor aporta antes de enumerar tecnologías.

## Enfoque

- Home orientada a servicios, ADTech, proyectos, habilidades, workflows y contacto.
- Proyectos separados por código propio, WordPress/TiendaNube y desarrollos en curso.
- Los proyectos publicados usan **capturas actuales del sitio**; no portadas gráficas ficticias.
- Cuando una captura externa falla, se usa un asset real del propio repositorio cuando existe.
- Los proyectos de código propio enlazan GitHub y README.
- Los trabajos WordPress/TiendaNube no inventan repositorios inexistentes.
- Automatizaciones presentadas como prototipos visuales no importables, sin JSON, credenciales, tokens ni webhooks.
- Skills agrupadas por función y respaldadas por proyectos, sin porcentajes autodeclarados.
- CV ATS de una columna disponible desde Hero y Contacto.
- Diseño responsive, accesible y con navegación simple.

## Stack del portfolio

- React 19
- Vite
- React Router
- CSS por responsabilidades
- Datos versionados en `frontend/src/data/fallbackData.js`
- Vercel para frontend y previews de PR

## Rutas principales

- `/` — servicios, ADTech, proyectos, habilidades, workflows y contacto
- `/proyectos` — proyectos separados por tipo de entrega
- `/proyectos/:slug` — caso individual: problema, solución, valor y evidencia
- `/servicios` — soluciones disponibles
- `/skills` — stack y herramientas
- `/automatizaciones` — prototipos visuales de workflows
- `/experiencia` — experiencia profesional
- `/documentacion` — READMEs reales
- `/contacto` — WhatsApp, ADTech, GitHub, LinkedIn, Instagram y CV

## Proyectos

### Código propio

#### Materiales FZAC
E-commerce y sistema de gestión para catálogo, stock, pedidos, usuarios y operación comercial.

- Demo: https://materiales-fzac-8xmp.onrender.com
- Repo: https://github.com/DylanDev08/Materiales-FZAC
- Docs: README del repositorio

#### Portfolio FZAC
Portfolio institucional administrable con panel privado, CRUD, autenticación, Supabase Storage y backend Express.

- Frontend Render: https://fzac-portfolio-1.onrender.com
- Backend Render: https://fzac-portfolio.onrender.com
- Repo: https://github.com/DylanDev08/FZAC-Portfolio
- Docs: README del repositorio

#### Mangas MaxDy
Plataforma full stack con usuarios, autenticación, mangas, capítulos, favoritos, progreso, rankings, comentarios, roles y administración.

- Repo: https://github.com/DylanDev08/Comics-Manga-MaxDy
- Vista del portfolio: asset real `maxdy-hero.png` del frontend

### WordPress / TiendaNube

#### FuckTheSys
E-commerce realizado sobre TiendaNube.

- Web: https://fuckthesys.mitiendanube.com
- Plataforma: TiendaNube

#### Innova Click
Sitio comercial para una agencia de marketing digital, realizado sobre WordPress y orientado a servicios y contacto.

- Web: https://innovaclick.com.ar
- Plataforma: WordPress

### En desarrollo

#### BarberHouse
Web comercial React/Vite con experiencia responsive y base para seguir desarrollando reservas y gestión.

- Demo: https://barber-house-pi.vercel.app
- Repo: https://github.com/DylanDev08/BarberHouse

#### Budgetly
Producto de finanzas personales sobre Next.js/TypeScript con arquitectura modular.

- Repo: https://github.com/DylanDev08/Budgetly
- Estado: en desarrollo, sin demo pública estable

## Capturas de proyectos

`ProjectVisual` utiliza imágenes en lugar de iframes para evitar bloqueos por `X-Frame-Options` o CSP.

Para webs públicas, las miniaturas se generan mediante Thum.io a partir de la URL real y se actualizan periódicamente. Cuando existe un asset real del proyecto se configura también como fallback.

La tarjeta siempre conserva acceso directo al sitio o GitHub.

## ADTech

ADTech es el emprendimiento de Dylan orientado a software y automatización para negocios.

Servicios mostrados en el portfolio:

- desarrollo web;
- e-commerce;
- software a medida;
- automatización;
- sistemas de gestión.

Canales:

- Instagram: https://www.instagram.com/adtech.ros/
- TikTok: https://www.tiktok.com/@adtech.ros
- WhatsApp: +54 9 341 741 5857

## Automatizaciones y workflows

No se exponen archivos JSON ni flujos reutilizables. Cada caso incluye un prototipo visual de nodos que comunica la arquitectura funcional:

1. entrada;
2. transformación o validación;
3. acción;
4. salida o derivación.

Los prototipos no contienen credenciales, tokens, IDs, URLs privadas, webhooks ni botones de exportación/copia.

Casos actuales:

- atención y clasificación de consultas;
- carga y validación de datos;
- seguimiento, alertas y reportes;
- presupuestos y seguimiento comercial.

## CV

Archivo público:

```text
frontend/public/cv/CV_Dylan_Salcedo.pdf
```

Criterios ATS:

- una columna;
- sin foto ni edad;
- encabezados estándar;
- experiencia antes que stack;
- proyectos verificables;
- Portfolio, GitHub y LinkedIn clickeables;
- Fortaleza Construcciones: 7 meses.

## Ejecutar localmente

```bash
cd frontend
npm ci
npm run dev
```

## Verificación

```bash
cd frontend
npm ci
npm run lint:imports
npm run build
```

GitHub Actions repite estas comprobaciones en pull requests.

## Seguridad y evidencia

- No se publican `.env`, tokens, claves API ni credenciales.
- No se muestran demos o repositorios inventados.
- Los trabajos WordPress/TiendaNube se identifican como desarrollos sobre plataforma.
- Los proyectos en desarrollo se etiquetan explícitamente.
- Los workflows son prototipos visuales sin configuración importable.

## Deploy

Portfolio principal:

https://portfolio-dylan-ten.vercel.app
