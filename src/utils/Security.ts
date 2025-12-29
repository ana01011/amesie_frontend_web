export function sanitizeString(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateNumber(value: unknown): boolean {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

export function sanitizeUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:') {
      return parsedUrl.toString();
    }
    return '';
  } catch {
    return '';
  }
}

export function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export function validateProductData(product: unknown): boolean {
  if (!product || typeof product !== 'object') return false;

  const p = product as Record<string, unknown>;

  return (
    typeof p.id === 'string' &&
    typeof p.name === 'string' &&
    typeof p.description === 'string' &&
    validateNumber(p.price) &&
    (p.price as number) >= 0 &&
    typeof p.image === 'string' &&
    typeof p.category === 'string' &&
    Array.isArray(p.tags) &&
    validateNumber(p.rating) &&
    (p.rating as number) >= 0 &&
    (p.rating as number) <= 5
  );
}
