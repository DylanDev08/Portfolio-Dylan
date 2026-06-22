import { Component } from "react";

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // No se imprimen detalles internos en la consola del navegador.
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="state-page">
          <h1>No se pudo mostrar esta sección.</h1>
          <p>Actualizá la página o volvé a intentarlo más tarde.</p>
          <button className="button button--primary" onClick={() => window.location.reload()}>
            Recargar
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}
