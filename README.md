# Portfolio Dylan Salcedo

Portfolio profesional orientado a **desarrollo de software, venta de servicios digitales, productos verificables y automatización de procesos**. La experiencia prioriza el problema de negocio, la solución implementada y el valor generado antes de presentar el stack técnico.

## Posicionamiento

- Desarrollo web y software a medida.
- E-commerce y canales digitales de venta.
- Sistemas internos y herramientas de gestión.
- Automatización de procesos e integraciones.
- Soluciones de datos, seguimiento y operación.
- ADTech como unidad de servicios digitales para negocios.
- Proyectos presentados con portadas reales, accesos y documentación cuando corresponde.
- Skills respaldadas por proyectos y experiencia, sin porcentajes públicos de autoevaluación.
- CV ATS disponible desde el portfolio.
- Diseño responsive, accesible y organizado por rutas.

## Stack del portfolio

- React 19
- Vite
- React Router
- CSS por responsabilidades
- Datos versionados en `frontend/src/data/fallbackData.js`
- Vercel para publicación del frontend

## Rutas principales

- `/` — presentación, soluciones destacadas, proyectos y ADTech
- `/proyectos` — catálogo de proyectos y productos por tipo de entrega
- `/proyectos/:slug` — caso individual: necesidad, solución, valor, accesos y documentación
- `/servicios` — servicios disponibles para clientes y negocios
- `/skills` — stack y herramientas aplicadas
- `/automatizaciones` — soluciones de automatización y arquitectura de procesos
- `/adtech` — servicios y canales de ADTech
- `/sobre-mi` — perfil profesional
- `/experiencia` — experiencia laboral
- `/formacion` — formación académica y complementaria
- `/documentacion` — documentación técnica y READMEs
- `/contacto` — WhatsApp, ADTech, GitHub, LinkedIn, Instagram y CV

## Proyectos

### Código propio

#### Materiales FZAC
E-commerce y sistema de gestión para catálogo, stock, pedidos, usuarios y operación comercial.

- Web: https://materiales-fzac-8xmp.onrender.com
- Repositorio: https://github.com/DylanDev08/Materiales-FZAC
- Documentación: README del repositorio

#### Portfolio FZAC
Portfolio institucional administrable con galerías de obras, panel privado, CRUD, autenticación, almacenamiento y backend Express.

- Web: https://fzac-portfolio-1.onrender.com
- Backend: https://fzac-portfolio.onrender.com
- Repositorio: https://github.com/DylanDev08/FZAC-Portfolio
- Documentación: README del repositorio

#### Mangas MaxDy
Plataforma Full Stack con usuarios, autenticación, mangas, capítulos, favoritos, progreso, rankings, comentarios, roles y administración.

- Repositorio: https://github.com/DylanDev08/Comics-Manga-MaxDy
- Documentación: README del repositorio

### WordPress / TiendaNube

#### FuckTheSys
E-commerce desarrollado y configurado sobre TiendaNube, con foco en catálogo, navegación, identidad visual y recorrido de compra mobile.

- Web: https://fuckthesys.mitiendanube.com
- Plataforma: TiendaNube

#### Innova Click
Sitio comercial para una agencia de marketing digital, desarrollado sobre WordPress y orientado a comunicar servicios y generar consultas.

- Web: https://innovaclick.com.ar
- Plataforma: WordPress

### Productos en evolución

#### BarberHouse
Producto web React/Vite para una barbería, con experiencia responsive y arquitectura preparada para reservas y gestión de turnos.

- Web: https://barber-house-pi.vercel.app
- Repositorio: https://github.com/DylanDev08/BarberHouse

#### Budgetly
Producto de finanzas personales sobre Next.js y TypeScript con arquitectura modular orientada a seguimiento, objetivos y visualización de datos.

- Repositorio: https://github.com/DylanDev08/Budgetly
- Estado: producto en evolución con desarrollo activo

## Presentación visual de proyectos

`ProjectVisual` utiliza imágenes reales, capturas de sitios publicados y assets propios de los proyectos para presentar cada caso sin depender de iframes.

Las tarjetas mantienen accesos claros a:

- producto o sitio publicado;
- repositorio público cuando corresponde;
- documentación técnica o documentación del caso.

Para proyectos realizados sobre WordPress o TiendaNube no se muestra un repositorio inexistente: se documenta correctamente el tipo de implementación.

## ADTech

ADTech es el emprendimiento de Dylan orientado a soluciones digitales para negocios.

Servicios:

- desarrollo web;
- e-commerce;
- software a medida;
- automatización de procesos;
- sistemas de gestión;
- integraciones y datos.

Canales:

- Instagram: https://www.instagram.com/adtech.ros/
- TikTok: https://www.tiktok.com/@adtech.ros
- WhatsApp: +54 9 341 741 5857

## Automatización de procesos

El portfolio presenta arquitecturas funcionales para resolver necesidades como:

- atención y clasificación de consultas;
- carga, validación y sincronización de datos;
- seguimiento, alertas y reportes;
- presupuestos y seguimiento comercial.

Cada solución se plantea a partir del proceso del negocio y puede integrar herramientas como n8n, APIs, WhatsApp, Google Sheets, Excel, scripts y webhooks según el alcance requerido.

La documentación pública muestra la lógica y el valor de la solución sin exponer credenciales, tokens, IDs ni configuraciones sensibles.

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

GitHub Actions ejecuta las comprobaciones de frontend antes de integrar cambios.

## Seguridad

- No se publican `.env`, tokens, claves API ni credenciales.
- Los repositorios se enlazan únicamente cuando existen de forma pública.
- Los trabajos sobre plataformas se identifican correctamente.
- Las configuraciones sensibles de automatización no se exponen.
- Los enlaces externos usan navegación segura desde el frontend.

## Portfolio publicado

https://portfolio-dylan-ten.vercel.app
