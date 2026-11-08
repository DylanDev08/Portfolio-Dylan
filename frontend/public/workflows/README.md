# Diagramas de automatizacion: versiones publicas

Los tres archivos `*.demo.json` representan los diagramas de n8n de manera sanitizada y **no ejecutable**. Conservan los tipos de nodos, las posiciones y las conexiones para estudiar la arquitectura, pero se eliminaron:

- Credenciales, tokens, identificadores de servicios y configuraciones de acceso.
- Endpoints, IDs y referencias a documentos o planillas.
- Codigo de los nodos, textos operativos y datos reales del negocio.
- Parametros requeridos para ejecutar cada integracion.

Todos los nodos de ejecucion estan deshabilitados. No deben cargarse en una instancia productiva ni confundirse con exports de respaldo.

Los exports privados originales permanecen fuera del repositorio publico. `FZAC-AI` tambien es privado.
