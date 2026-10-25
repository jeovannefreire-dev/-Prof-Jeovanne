// Portfolio docente — personalize os dados abaixo antes de publicar.
// Troque o endereço de exemplo pelo e-mail profissional que deseja receber mensagens.
const CONTACT_EMAIL = "seu-email@exemplo.com";

const menuToggle = document.querySelector('#menu-toggle');
const mainNav = document.querySelector('#main-nav');
const themeToggle = document.querySelector('#theme-toggle');
const searchInput = document.querySelector('#subject-search');
const subjectCards = [...document.querySelectorAll('.subject-card')];
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');
const contactForm = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');

// Menu acessível para telas pequenas.
menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Abrir menu');
  });
});

// Alternância de tema, sem dependências externas.
themeToggle?.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-theme');
  themeToggle.textContent = isLight ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', isLight ? 'Ativar tema escuro' : 'Ativar tema claro');
  themeToggle.setAttribute('title', isLight ? 'Ativar tema escuro' : 'Ativar tema claro');
});

// Busca instantânea pelos componentes curriculares.
function filterSubjects() {
  const query = (searchInput?.value || '').trim().toLocaleLowerCase('pt-BR');
  let visible = 0;
  subjectCards.forEach((card) => {
    const haystack = `${card.textContent} ${card.dataset.search || ''}`.toLocaleLowerCase('pt-BR');
    const matches = haystack.includes(query);
    card.hidden = !matches;
    if (matches) visible += 1;
  });
  if (resultCount) resultCount.textContent = `${visible} ${visible === 1 ? 'componente' : 'componentes'}${query ? ' encontrado(s)' : ''}`;
  if (emptyState) emptyState.hidden = visible !== 0;
}
searchInput?.addEventListener('input', filterSubjects);
// Atalho de teclado: Ctrl+K ou Cmd+K foca a busca.
document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    searchInput?.focus();
    document.querySelector('#componentes')?.scrollIntoView({ behavior: 'smooth' });
  }
  if (event.key === 'Escape' && document.activeElement === searchInput) {
    searchInput.value = '';
    filterSubjects();
    searchInput.blur();
  }
});

// Animação discreta ao entrar na área visível (com alternativa sem suporte).
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

// Atualiza automaticamente o ano do rodapé.
const yearElement = document.querySelector('#current-year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

// O formulário prepara uma mensagem no aplicativo de e-mail do visitante.
// Ele não envia nem armazena dados no servidor.
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  if (CONTACT_EMAIL === 'seu-email@exemplo.com' || !CONTACT_EMAIL.includes('@')) {
    formNote.textContent = 'Quase pronto! Abra script.js e substitua CONTACT_EMAIL pelo seu endereço profissional para ativar o envio.';
    formNote.setAttribute('role', 'alert');
    return;
  }
  const formData = new FormData(contactForm);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();
  const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
  const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  formNote.textContent = 'Seu aplicativo de e-mail deve abrir com a mensagem preenchida. Revise e envie por lá.';
});
