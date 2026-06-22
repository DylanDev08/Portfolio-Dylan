export class PublicApiError extends Error {
  constructor(message, status = 0) {
    super(message);
    this.name = "PublicApiError";
    this.status = status;
  }
}
