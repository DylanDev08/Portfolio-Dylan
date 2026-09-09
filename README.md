# Portfolio Dylan Salcedo

Portfolio profesional orientado a mostrar **problemas reales, soluciones construidas y evidencia visible**. La interfaz prioriza qué necesita resolver cada proyecto, qué desarrollé y qué valor aporta antes de enumerar tecnologías.

## Enfoque actual

- Home organizada por problemas, soluciones, proyectos con vista, skills aplicados, automatizaciones y contacto.
- Proyectos separados por tipo de entrega: código propio, WordPress/TiendaNube y productos en desarrollo.
- Los proyectos publicados muestran una **vista del sitio real** dentro del portfolio en lugar de una portada genérica creada solo para la card.
- Cuando no existe una demo pública estable, la interfaz lo indica y prioriza GitHub/README en lugar de inventar una captura.
- Cada proyecto tiene una vista de caso con problema, desarrollo, resultado, stack, estado y evidencia disponible.
- Automatizaciones presentadas como **Problema → Solución → Resultado**, no como archivos JSON descargables.
- Skills sin porcentajes autodeclarados: se muestra el stack utilizado y se respalda con proyectos/repositorios.
- Diseño responsive, accesible y orientado a lectura rápida para recruiters y potenciales clientes.
- SEO global y por ruta con canonical, Open Graph, Twitter Card, JSON-LD, `robots.txt` y sitemap.
- CV ATS de una columna incluido en el portfolio.

## Stack del portfolio

- React 19
- Vite
- React Router
- CSS por responsabilidades
- Datos versionados en `frontend/src/data/fallbackData.js`
- Vercel para frontend y previews de PR

## Rutas principales

- `/` — propuesta de valor, proyectos con vista, skills, automatizaciones y contacto
- `/proyectos` — proyectos separados por tipo de entrega
- `/proyectos/:slug` — caso individual: problema, desarrollo, resultado y evidencia
- `/servicios` — soluciones que desarrollo
- `/skills` — stack y herramientas
- `/automatizaciones` — problemas operativos y soluciones de automatización
- `/experiencia` — experiencia profesional
- `/documentacion` — READMEs y documentación real
- `/contacto` — GitHub, LinkedIn, WhatsApp, email y CV

Rutas secundarias:

- `/sobre-mi`
- `/formacion`
- `/legal`

## Proyectos mostrados

### Código propio

#### Materiales FZAC
E-commerce y sistema de gestión para catálogo, stock, pedidos, usuarios y operación comercial.

- Demo: https://materiales-fzac-391o.vercel.app
- Repo: https://github.com/DylanDev08/Materiales-FZAC
- Docs: README del repositorio
- Vista: sitio publicado + asset real del propio repositorio

#### Portfolio FZAC
Portfolio institucional administrable con panel privado, CRUD, autenticación, Supabase Storage y backend.

- Demo: https://fortalezaconstrucciones-port.vercel.app
- Repo: https://github.com/DylanDev08/FZAC-Portfolio
- Docs: README del repositorio
- Vista: sitio publicado + material real del repositorio

#### Mangas MaxDy
Plataforma full stack con usuarios, autenticación, mangas, capítulos, favoritos, progreso, rankings, comentarios, roles y administración.

- Repo: https://github.com/DylanDev08/Comics-Manga-MaxDy
- No se presenta una demo ficticia mientras no exista una URL pública estable.

### WordPress / TiendaNube

#### Factdesi
E-commerce realizado sobre TiendaNube para convertir catálogo y navegación en un canal de compra online usable desde mobile.

- Web: https://factdesi.com.ar
- Plataforma: TiendaNube
- No se inventa un repositorio de código para un desarrollo realizado sobre plataforma.

#### NovaClick
Sitio comercial realizado sobre WordPress con foco en jerarquía de información, servicios, navegación responsive y contacto.

- Web: https://novaclick.com.ar
- Plataforma: WordPress
- No se inventa un repositorio de código para un desarrollo realizado sobre plataforma.

### En desarrollo

#### BarberHouse
Proyecto web comercial con React/Vite, diseño responsive y base para continuar evolucionando la experiencia y funcionalidades.

- Demo: https://barber-house-pi.vercel.app
- Repo: https://github.com/DylanDev08/BarberHouse
- Estado: en desarrollo

#### Budgetly
Aplicación de finanzas personales construida sobre Next.js/TypeScript y arquitectura modular.

- Repo: https://github.com/DylanDev08/Budgetly
- Estado: en desarrollo
- No se publica una URL de demo mientras no exista una versión estable.

## Vistas de proyectos

`ProjectVisual` muestra una vista del sitio real para proyectos con `liveUrl`. La card simula únicamente el marco de navegador; el contenido interior proviene del proyecto publicado mediante `iframe`.

Para proyectos sin demo pública:

- se indica el estado real;
- se muestra el stack y contexto;
- se enlaza GitHub cuando existe;
- no se reemplaza el proyecto por una portada ficticia.

> Algunos sitios externos pueden impedir ser embebidos mediante CSP o `X-Frame-Options`. El enlace **Abrir proyecto** siempre queda disponible para revisar el sitio directamente.

## Automatizaciones

La sección ya no ofrece JSON como producto visual. Cada caso comunica:

1. **Problema:** qué tarea, pérdida de información o cuello de botella existe.
2. **Solución:** qué flujo o integración podría resolverlo.
3. **Resultado:** qué mejora operativa se busca.
4. **Herramientas:** n8n, APIs, webhooks, Google Sheets, scripts u otras tecnologías aplicables.

Casos actuales:

- atención y clasificación de consultas;
- carga y validación de datos operativos;
- seguimiento, alertas y reportes;
- presupuestos y seguimiento comercial.

## Skills

El portfolio evita scores del tipo “React 90%”. En su lugar muestra tecnologías agrupadas en:

- Frontend
- Backend
- Datos
- Herramientas y automatización

La evidencia principal está en los proyectos, repositorios y documentación.

## CV

Archivo público:

```text
frontend/public/cv/CV_Dylan_Salcedo.pdf
```

Criterios actuales:

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

Normalmente disponible en:

```text
http://localhost:5173
```

## Verificación antes de mergear

```bash
cd frontend
npm ci
npm run lint:imports
npm run build
```

GitHub Actions repite estas comprobaciones en los pull requests.

## Datos editables

Contenido principal:

```text
frontend/src/data/fallbackData.js
```

Incluye:

- perfil
- skills
- servicios
- proyectos
- problemas de automatización
- documentación
- experiencia
- formación

## Componentes principales de esta iteración

```text
frontend/src/features/projects/components/ProjectVisual.jsx
frontend/src/features/projects/components/ProjectCard.jsx
frontend/src/features/projects/components/ProjectsSection.jsx
frontend/src/features/automation/components/AutomationSection.jsx
frontend/src/pages/ProjectDetailPage.jsx
```

## SEO

- canonical por ruta;
- Open Graph y Twitter Card;
- metadata específica para proyectos;
- JSON-LD;
- `robots.txt`;
- `sitemap.xml` actualizado con Factdesi y NovaClick;
- rewrite de Vercel para deep links.

## Seguridad y evidencia

- No se publican `.env`, tokens, claves API ni credenciales.
- No se muestran demos o repositorios inventados.
- Los trabajos WordPress/TiendaNube se identifican como desarrollos sobre plataforma.
- Los proyectos en desarrollo se etiquetan explícitamente.
- Las automatizaciones describen problemas y arquitectura funcional sin exponer flujos privados ni credenciales.

## Deploy

Sitio principal:

https://portfolio-dylan-ten.vercel.app
