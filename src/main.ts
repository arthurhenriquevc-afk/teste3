
document.documentElement.classList.remove('no-js');

const header = document.querySelector<HTMLElement>('[data-header]');
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const setMenu = (open: boolean) => {
  header?.toggleAttribute('data-menu-open', open);
  toggle?.setAttribute('aria-expanded', String(open));
};
toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && header?.hasAttribute('data-menu-open')) { setMenu(false); toggle?.focus(); }
});
document.addEventListener('click', (event) => {
  if (event.target instanceof Node && header && !header.contains(event.target)) setMenu(false);
});
window.matchMedia('(min-width: 768px)').addEventListener('change', () => setMenu(false));

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const clamp = (n: number) => Math.min(100, Math.max(0, n));

function comparison() {
  const hero = document.querySelector<HTMLElement>('[data-comparison]');
  const input = hero?.querySelector<HTMLInputElement>('[data-comparison-input]');
  const status = hero?.querySelector<HTMLElement>('[data-comparison-status]');
  const construction = document.querySelector<HTMLElement>('[data-construction]');
  const constructionInput = document.querySelector<HTMLInputElement>('[data-construction-input]');
  const constructionLabel = construction?.querySelector<HTMLElement>('[data-construction-label]');
  const constructionStatus = document.querySelector<HTMLElement>('[data-construction-status]');
  let heroManual = false;
  let constructionManual = false;

  const updateHero = (n: number) => {
    const value = clamp(n);
    hero?.style.setProperty('--compare', `${value}%`);
    if (input) { input.value = String(Math.round(value)); input.setAttribute('aria-valuetext', `${Math.round(value)}% de registro digital`); }
    if (status) status.textContent = value > 50 ? 'Mostrando registro digital.' : 'Mostrando espaço construído.';
  };
  const updateConstruction = (n: number) => {
    const value = clamp(n);
    construction?.style.setProperty('--construction', `${value}%`);
    if (constructionInput) { constructionInput.value = String(Math.round(value)); constructionInput.setAttribute('aria-valuetext', value >= 50 ? 'Depois do fechamento' : 'Antes do fechamento'); }
    const after = value >= 50;
    if (constructionLabel) constructionLabel.textContent = after ? 'Depois do fechamento' : 'O que ainda está visível';
    const description = after
      ? 'A construção avança e as instalações ficam encobertas. O registro da etapa anterior mantém essa informação disponível.'
      : 'Antes do fechamento, as instalações estão visíveis. O registro preserva essa informação.';
    if (constructionStatus && constructionStatus.textContent !== description) constructionStatus.textContent = description;
  };
  input?.addEventListener('input', () => { heroManual = true; updateHero(Number(input.value)); });
  constructionInput?.addEventListener('input', () => { constructionManual = true; updateConstruction(Number(constructionInput.value)); });

  let pending = false;
  const paint = () => {
    pending = false;
    if (reduced.matches) return;
    if (hero && !heroManual) {
      const box = hero.getBoundingClientRect();
      if (box.bottom > 0 && box.top < innerHeight) updateHero((-box.top / (box.height * .72)) * 100);
    }
    if (construction && !constructionManual) {
      const box = construction.getBoundingClientRect();
      if (box.bottom > 0 && box.top < innerHeight) updateConstruction(((innerHeight * .8 - box.top) / (innerHeight * .62)) * 100);
    }
  };
  const schedule = () => { if (!pending) { pending = true; requestAnimationFrame(paint); } };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  reduced.addEventListener('change', () => { heroManual = false; constructionManual = false; updateHero(0); updateConstruction(0); if (!reduced.matches) schedule(); });
  updateHero(0); updateConstruction(0); schedule();
}
comparison();

const filter = document.querySelector<HTMLFormElement>('[data-filter]');
const filterSelect = filter?.querySelector<HTMLSelectElement>('select');
const filterServices = () => {
  const value = filterSelect?.value ?? 'todos';
  let count = 0;
  document.querySelectorAll<HTMLElement>('[data-service]').forEach(row => {
    const visible = value === 'todos' || (value === 'existente' ? row.dataset.existing === 'true' : row.dataset.obra === 'true');
    row.hidden = !visible;
    if (visible) count++;
  });
  const status = document.querySelector('[data-filter-count]');
  if (status) status.textContent = `${count} ${count === 1 ? 'serviço' : 'serviços'}`;
};
if (filterSelect) {
  const value = new URLSearchParams(location.search).get('situacao');
  if (value && ['obra', 'existente'].includes(value)) filterSelect.value = value;
  filterServices();
}
filter?.addEventListener('submit', event => {
  event.preventDefault(); filterServices();
  const url = new URL(location.href); url.searchParams.set('situacao', filterSelect?.value ?? 'todos'); history.replaceState(null, '', url);
});

const form = document.querySelector<HTMLFormElement>('[data-contact]');
if (form) {
  const name = form.querySelector<HTMLInputElement>('[name="name"]')!;
  const message = form.querySelector<HTMLTextAreaElement>('[name="message"]')!;
  const service = form.querySelector<HTMLSelectElement>('[name="service"]')!;
  const requested = new URLSearchParams(location.search).get('servico');
  if (requested && [...service.options].some(option => option.value === requested)) service.value = requested;
  const clear = (input: HTMLInputElement | HTMLTextAreaElement) => {
    input.removeAttribute('aria-invalid');
    const error = document.getElementById(input.id + '-error'); if (error) error.textContent = '';
  };
  [name, message].forEach(input => input.addEventListener('input', () => clear(input)));
  form.addEventListener('submit', event => {
    event.preventDefault();
    let first: HTMLInputElement | HTMLTextAreaElement | null = null;
    for (const [input, errorText] of [[name, 'Informe seu nome para começar a conversa.'], [message, 'Conte em que etapa a obra está ou o que você precisa registrar.']] as const) {
      clear(input);
      if (!input.value.trim()) {
        input.setAttribute('aria-invalid', 'true');
        const error = document.getElementById(input.id + '-error'); if (error) error.textContent = errorText;
        first ??= input;
      }
    }
    if (first) { first.focus(); return; }
    const lines = [`Olá, Union3D. Meu nome é ${name.value.trim()}.`, service.value ? `Serviço: ${service.selectedOptions[0].textContent}.` : '', message.value.trim()].filter(Boolean);
    const url = 'https://wa.me/5547996490312?text=' + encodeURIComponent(lines.join('\n\n'));
    const status = form.querySelector<HTMLElement>('[data-form-status]');
    if (status) {
      status.replaceChildren(document.createTextNode('Mensagem preparada. Finalize o envio no WhatsApp. '));
      const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = 'Continuar com a mensagem'; status.append(a);
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}
