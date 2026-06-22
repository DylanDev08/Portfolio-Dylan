const projectTypes = new Set(["PORTFOLIO", "LANDING_PAGE", "ECOMMERCE", "WEB_SYSTEM", "MAINTENANCE", "OTHER"]);

export function validateContact(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const company = values.company.trim();
  const message = values.message.trim();
  const budget = values.budget.trim();

  if (name.length < 2 || name.length > 100) errors.name = "Ingresa un nombre valido.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 160) errors.email = "Ingresa un correo valido.";
  if (phone.length > 30) errors.phone = "El telefono es demasiado largo.";
  if (company.length > 120) errors.company = "La empresa es demasiado larga.";
  if (!projectTypes.has(values.projectType)) errors.projectType = "Selecciona un tipo de proyecto valido.";
  if (message.length < 20 || message.length > 3000) errors.message = "Escribi entre 20 y 3000 caracteres.";
  if (budget.length > 100) errors.budget = "El presupuesto es demasiado largo.";

  return errors;
}
