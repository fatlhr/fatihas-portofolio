const normalizedBaseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function withBasePath(path = '') {
  return `${normalizedBaseUrl}${path.replace(/^\//, '')}`;
}
