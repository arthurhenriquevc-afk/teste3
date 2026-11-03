"""Browser checks against an already running dev/preview server.
Uses the environment's Python Playwright and Chromium; sends no WhatsApp messages.
"""
import json
import os
import subprocess
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = os.environ.get('TEST_BASE_URL', 'http://127.0.0.1:4173')
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'artifacts'
OUT.mkdir(exist_ok=True)
results = []

def check(name, run):
    run()
    results.append({'name': name, 'passed': True})
    print('PASS', name, flush=True)

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH', '/usr/bin/chromium'), headless=True, args=['--no-sandbox'])
    desktop = browser.new_context(viewport={'width': 1440, 'height': 1000})
    page = desktop.new_page()
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))

    def routes_check():
        routes = json.loads(subprocess.check_output(['node', '--input-type=module', '-e', "import {routes} from './src/pages.mjs';console.log(JSON.stringify(routes.map(r=>r.path)))"], cwd=ROOT, text=True))
        for route in routes:
            response = page.goto(BASE + route, wait_until='networkidle')
            assert response and response.status == 200, route
            assert page.locator('h1').count() == 1, route
            assert page.locator('main').inner_text().strip(), route
        assert not errors, errors
    check('16 routes load with one heading and no JavaScript errors', routes_check)

    def hero_check():
        page.goto(BASE, wait_until='networkidle')
        page.evaluate('scrollTo(0,400)')
        page.wait_for_timeout(150)
        assert float(page.locator('[data-comparison-input]').input_value()) > 0
        slider = page.locator('[data-comparison-input]')
        slider.focus(); slider.press('End')
        assert slider.input_value() == '100'
        assert page.locator('[data-comparison]').evaluate("e=>e.style.getPropertyValue('--compare')") == '100%'
        page.evaluate('scrollTo(0,0)'); page.wait_for_timeout(100)
        assert slider.input_value() == '100', 'manual control must take priority over scroll'
    check('hero responds to scroll and preserves keyboard/manual control', hero_check)

    def construction_check():
        slider = page.locator('[data-construction-input]')
        slider.focus(); slider.press('End')
        assert 'encobertas' in page.locator('[data-construction-status]').inner_text()
        slider.press('Home')
        assert 'visíveis' in page.locator('[data-construction-status]').inner_text()
    check('construction sequence communicates both stages', construction_check)

    def filter_check():
        page.goto(BASE + '/servicos/?situacao=existente', wait_until='networkidle')
        assert page.locator('[data-service]:visible').count() == 6
        page.locator('#service-situation').select_option('obra')
        page.get_by_role('button', name='Filtrar serviços').click()
        assert page.locator('[data-service]:visible').count() == 9
        assert '9 serviços' in page.locator('[data-filter-count]').inner_text()
    check('service filters and shared query links select the correct sets', filter_check)

    def contact_check():
        page.add_init_script('window.open=(url)=>{window.__openedUrl=url;return null}')
        page.goto(BASE + '/contato/?servico=as-built-infraestrutura-mep', wait_until='networkidle')
        assert page.locator('#project-service').input_value() == 'as-built-infraestrutura-mep'
        page.get_by_role('button', name='Preparar mensagem no WhatsApp').click()
        assert page.locator('#name').get_attribute('aria-invalid') == 'true'
        assert page.locator('#name').evaluate('e=>e===document.activeElement')
        page.locator('#name').fill('Teste <script>')
        page.locator('#message').fill('Instalações antes do fechamento. & detalhes')
        page.get_by_role('button', name='Preparar mensagem no WhatsApp').click()
        url = page.evaluate('window.__openedUrl')
        assert url.startswith('https://wa.me/5547996490312?text=')
        assert '%3Cscript%3E' in url and '%26' in url
        assert 'Finalize o envio' in page.locator('[data-form-status]').inner_text()
        assert page.locator('[data-form-status] a').get_attribute('href') == url
        assert page.locator('[data-form-status] script').count() == 0
    check('contact validates fields and prepares an encoded message without claiming delivery', contact_check)

    mobile = browser.new_context(viewport={'width': 390, 'height': 844})
    m = mobile.new_page()
    def menu_check():
        m.goto(BASE, wait_until='networkidle')
        menu = m.get_by_role('button', name='Menu')
        menu.click()
        assert menu.get_attribute('aria-expanded') == 'true'
        assert m.locator('#navigation').is_visible()
        m.keyboard.press('Escape')
        assert menu.get_attribute('aria-expanded') == 'false'
        assert menu.evaluate('e=>e===document.activeElement')
    check('mobile menu opens, closes on Escape and restores focus', menu_check)

    def responsive_check():
        for width in [320, 390, 768, 1024, 1440]:
            m.set_viewport_size({'width': width, 'height': 900})
            for route in ['/', '/empresa/', '/servicos/', '/contato/', '/servicos/as-built-laje-protendida/']:
                m.goto(BASE + route, wait_until='networkidle')
                assert not m.evaluate('document.documentElement.scrollWidth>innerWidth'), (width, route)
    check('five representative routes fit five viewport widths', responsive_check)

    reduced = browser.new_context(viewport={'width': 390, 'height': 844}, reduced_motion='reduce')
    r = reduced.new_page()
    def reduced_check():
        r.goto(BASE, wait_until='networkidle'); r.evaluate('scrollTo(0,500)'); r.wait_for_timeout(150)
        assert r.locator('[data-comparison-input]').input_value() == '0'
        r.locator('[data-comparison-input]').focus(); r.keyboard.press('End')
        assert r.locator('[data-comparison-input]').input_value() == '100'
    check('reduced motion disables automatic scrubbing but preserves manual access', reduced_check)

    nojs = browser.new_context(viewport={'width': 390, 'height': 844}, java_script_enabled=False)
    n = nojs.new_page()
    def nojs_check():
        n.goto(BASE, wait_until='networkidle')
        assert n.locator('#navigation').is_visible()
        assert n.locator('h1').is_visible()
        assert n.locator('[data-comparison-input]').is_hidden()
        n.goto(BASE + '/servicos/', wait_until='networkidle')
        assert n.locator('[data-service]:visible').count() == 10
    check('without JavaScript navigation and all service content remain accessible', nojs_check)

    def zoom_check():
        m.set_viewport_size({'width': 390, 'height': 844})
        for route in ['/', '/contato/']:
            m.goto(BASE + route, wait_until='networkidle')
            m.evaluate("document.documentElement.style.fontSize='32px'")
            assert not m.evaluate('document.documentElement.scrollWidth>innerWidth'), route
    check('200 percent text sizing retains horizontal fit on mobile', zoom_check)

    (OUT / 'browser-results.json').write_text(json.dumps({'browser': browser.version, 'checks': results}, indent=2))
    browser.close()
print(f'{len(results)} browser checks passed. External destinations were not submitted.')
