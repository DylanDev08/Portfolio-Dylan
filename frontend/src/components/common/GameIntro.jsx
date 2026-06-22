import { useEffect, useState } from "react";

export function GameIntro({ onPlay }) {
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 520);
    return () => window.clearTimeout(timer);
  }, []);

  function play() {
    setLeaving(true);
    window.setTimeout(onPlay, 520);
  }

  return (
    <div className={leaving ? "game-intro game-intro--leaving" : "game-intro"} role="dialog" aria-label="Pantalla de inicio">
      <div className="game-intro__panel">
        <span className="game-intro__label">SAVE FILE 01 - DYLAN SALCEDO</span>
        <h1>PRESS START</h1>
        <p>{ready ? "Archivo cargado. Play para entrar al mapa." : "Cargando perfil..."}</p>
        <div className="game-intro__stats" aria-hidden="true">
          <span>LV 18</span>
          <span>FULL STACK</span>
          <span>ROSARIO</span>
        </div>
        <div className="game-intro__bar">
          <i />
        </div>
        <button className="game-intro__play" type="button" onClick={play} disabled={!ready}>
          {ready ? "Play" : "..."}
        </button>
      </div>
    </div>
  );
}
