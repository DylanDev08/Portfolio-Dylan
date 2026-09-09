import { Fragment } from "react";

export function WorkflowPrototype({ title, steps = [] }) {
  return (
    <div className="workflow-prototype" aria-label={`Prototipo visual de ${title}`}>
      <div className="workflow-prototype__rail">
        {steps.map((step, index) => (
          <Fragment key={`${step.label}-${index}`}>
            <div className="workflow-node">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step.label}</strong>
              <small>{step.detail}</small>
            </div>
            {index < steps.length - 1 && <span className="workflow-arrow" aria-hidden="true">→</span>}
          </Fragment>
        ))}
      </div>
      <p className="workflow-prototype__note">Prototipo visual · sin credenciales, tokens, webhooks ni archivo importable</p>
    </div>
  );
}
