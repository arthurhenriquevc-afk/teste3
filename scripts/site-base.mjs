export function siteBase(value = process.env.SITE_BASE || '/') {
  if (!/^\/(?:[A-Za-z0-9_.-]+\/)*$/.test(value) || value.split('/').includes('..')) {
    throw new Error('SITE_BASE deve ser um caminho absoluto terminado em /, como /teste3/.');
  }
  return value;
}
