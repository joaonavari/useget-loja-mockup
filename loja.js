(function () {
  document.documentElement.classList.add('js');

  const SPRITE = `
  <svg class="icon-sprite" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="0" height="0">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
    <symbol id="icon-back" viewBox="0 0 24 24"><path d="M19 12H5m6 6-6-6 6-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
    <symbol id="icon-whatsapp" viewBox="0 0 24 24"><path d="M20.5 11.6a8.5 8.5 0 0 1-12.8 7.3L3 20.2l1.3-4.6A8.5 8.5 0 1 1 20.5 11.6Z" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round"/><path d="M8.3 7.5c-.4 0-.9.6-.9 1.2 0 2.8 3.1 6.2 6.4 6.8.7.1 1.5-.2 1.8-.7l.4-.8c.1-.2 0-.4-.2-.5l-1.8-.9c-.2-.1-.4 0-.5.1l-.6.7c-.1.1-.3.2-.5.1-1.3-.6-2.4-1.6-3-2.9-.1-.2 0-.4.1-.5l.6-.7c.1-.1.2-.3.1-.5l-.8-1.7c-.1-.3-.3-.7-.6-.7h-.5Z" fill="currentColor"/></symbol>
    <symbol id="icon-instagram" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/></symbol>
    <symbol id="icon-nfc" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M8 8.5a5 5 0 0 1 0 7"/><path d="M11.5 6a8.5 8.5 0 0 1 0 12"/><path d="M15 3.5a12 12 0 0 1 0 17"/></g></symbol>
    <symbol id="icon-check" viewBox="0 0 24 24"><path d="m5 12.5 4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
    <symbol id="icon-bag" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 12.2a1 1 0 0 1-1 .8H7a1 1 0 0 1-1-.8Z"/><path d="M9 10V6.5a3 3 0 0 1 6 0V10"/></g></symbol>
    <symbol id="icon-user" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></g></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5 5"/></g></symbol>
    <symbol id="icon-truck" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 6h11v10h-11zM13.5 9.5h4l3 3.5V16h-7"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></g></symbol>
    <symbol id="icon-pix" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="m12 2.8 4.2 4.2-4.2 4.2L7.8 7z" transform="translate(0 2) scale(1 .9)"/><path d="M5.2 8.6 2.8 11a1.4 1.4 0 0 0 0 2l2.4 2.4h2.3l3.1-3.1a2 2 0 0 1 2.8 0l3.1 3.1h2.3l2.4-2.4a1.4 1.4 0 0 0 0-2l-2.4-2.4h-2.3l-3.1 3.1a2 2 0 0 1-2.8 0L7.5 8.6Z"/></g></symbol>
    <symbol id="icon-card" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 9.5h19M6 15h4"/></g></symbol>
    <symbol id="icon-barcode" viewBox="0 0 24 24"><path d="M4 5v14M7 5v14M10.5 5v14M13 5v14M16.5 5v14M20 5v14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>
    <symbol id="icon-lock" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="4.5" y="10" width="15" height="10.5" rx="2.5"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10"/></g></symbol>
    <symbol id="icon-shield" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.1 7.5 9.5 4.4-1.4 7.5-4.9 7.5-9.5V6Z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/></g></symbol>
    <symbol id="icon-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
    <symbol id="icon-minus" viewBox="0 0 24 24"><path d="M5 12h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
    <symbol id="icon-trash" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 7h15M9.5 7V4.5h5V7M6.5 7l.8 12.2a1 1 0 0 0 1 .8h7.4a1 1 0 0 0 1-.8L17.5 7"/></g></symbol>
    <symbol id="icon-star" viewBox="0 0 24 24"><path d="m12 3.2 2.6 5.5 6 .7-4.4 4.1 1.2 5.9L12 16.5l-5.4 2.9 1.2-5.9-4.4-4.1 6-.7Z" fill="currentColor"/></symbol>
    <symbol id="icon-tag" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3.5 12.3V4.5a1 1 0 0 1 1-1h7.8l8.2 8.2a1.4 1.4 0 0 1 0 2l-6.8 6.8a1.4 1.4 0 0 1-2 0Z"/><circle cx="8" cy="8" r="1.4" fill="currentColor"/></g></symbol>
    <symbol id="icon-box" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 2.8 20.5 7v10L12 21.2 3.5 17V7Z"/><path d="M3.5 7 12 11.2 20.5 7M12 11.2v10"/></g></symbol>
  </svg>`;

  const page = document.body.dataset.page || '';
  const isCheckout = page === 'checkout';
  const link = (href, label, key) =>
    `<a href="${href}"${page === key ? ' aria-current="page"' : ''}>${label}</a>`;

  const HEADER = isCheckout ? `
  <header class="site-header checkout-header">
    <div class="header-inner">
      <a class="wordmark" href="index.html" aria-label="USEGET — loja">
        <img class="wordmark-icon" src="assets/images/useget-icon.png" width="256" height="256" alt="" />USEGET
      </a>
      <p class="secure-badge"><svg class="icon" aria-hidden="true"><use href="#icon-lock"></use></svg>Compra 100% segura</p>
    </div>
  </header>` : `
  <div class="announce">Frete grátis acima de R$ 199 · <strong>10% off no Pix</strong></div>
  <header class="site-header">
    <div class="header-inner">
      <a class="wordmark" href="index.html" aria-label="USEGET — loja">
        <img class="wordmark-icon" src="assets/images/useget-icon.png" width="256" height="256" alt="" />USEGET
      </a>
      <nav class="primary-nav" aria-label="Navegação principal">
        ${link('index.html#placas', 'Placas', 'loja')}
        ${link('index.html#kits', 'Kits', 'kits')}
        ${link('index.html#como-comprar', 'Como comprar', 'como')}
        ${link('index.html#duvidas', 'Dúvidas', 'duvidas')}
      </nav>
      <div class="header-tools">
        <button class="tool-btn" type="button" aria-label="Buscar"><svg aria-hidden="true"><use href="#icon-search"></use></svg></button>
        <a class="tool-btn" href="#" aria-label="Minha conta"><svg aria-hidden="true"><use href="#icon-user"></use></svg></a>
        <button class="tool-btn cart-btn" type="button" data-open-cart aria-label="Abrir carrinho, 2 itens">
          <svg aria-hidden="true"><use href="#icon-bag"></use></svg><span class="cart-count" data-cart-count>2</span>
        </button>
      </div>
    </div>
  </header>`;

  const FOOTER = `
  <footer class="site-footer shop-footer">
    <div class="container">
      <div class="footer-cols">
        <div class="footer-brand">
          <a class="wordmark" href="index.html"><img class="wordmark-icon" src="assets/images/useget-icon.png" width="256" height="256" alt="" />USEGET</a>
          <p>Placas NFC + QR Code para avaliações, Instagram, WhatsApp e cardápio.</p>
        </div>
        <div><h4>Loja</h4><a href="index.html#placas">Placas</a><a href="index.html#kits">Kits</a><a href="carrinho.html">Carrinho</a></div>
        <div><h4>Ajuda</h4><a href="index.html#como-comprar">Como comprar</a><a href="index.html#duvidas">Trocas e entregas</a><a href="#">Rastrear pedido</a></div>
        <div><h4>Contato</h4><a href="#">WhatsApp</a><a href="#">@usegetnfc</a></div>
      </div>
      <div class="footer-pay">
        <span class="pay-chip"><svg aria-hidden="true"><use href="#icon-pix"></use></svg>Pix</span>
        <span class="pay-chip"><svg aria-hidden="true"><use href="#icon-card"></use></svg>Cartão</span>
        <span class="pay-chip"><svg aria-hidden="true"><use href="#icon-barcode"></use></svg>Boleto</span>
        <span class="pay-chip"><svg aria-hidden="true"><use href="#icon-lock"></use></svg>Site seguro</span>
      </div>
      <p class="footer-legal">© 2026 USEGET. Mockup visual — preços e dados ilustrativos.</p>
    </div>
  </footer>`;

  const DRAWER = `
  <div class="drawer-backdrop" data-close-cart></div>
  <aside class="cart-drawer" aria-label="Carrinho" aria-hidden="true">
    <div class="drawer-head">
      <h3>Seu carrinho <span>(2)</span></h3>
      <button class="tool-btn" type="button" data-close-cart aria-label="Fechar carrinho"><svg aria-hidden="true"><use href="#icon-close"></use></svg></button>
    </div>
    <div class="drawer-added"><svg aria-hidden="true"><use href="#icon-check"></use></svg>Placa adicionada ao carrinho</div>
    <div class="drawer-ship">
      <p>Faltam <strong>R$ 79,20</strong> para o frete grátis</p>
      <div class="ship-bar"><span style="width:60%"></span></div>
    </div>
    <ul class="drawer-items">
      <li class="mini-item">
        <img src="assets/images/produtos/placa-google-azul-600.webp" width="1143" height="846" alt="" />
        <div><p class="mini-name">Avaliação no Google</p><p class="mini-meta">Azul · Chega pronta</p>
          <div class="qty qty-sm"><button type="button" aria-label="Menos"><svg><use href="#icon-minus"></use></svg></button><span>1</span><button type="button" aria-label="Mais"><svg><use href="#icon-plus"></use></svg></button></div></div>
        <p class="mini-price">R$ 59,90</p>
      </li>
      <li class="mini-item">
        <img src="assets/images/produtos/placa-instagram-600.webp" width="1143" height="846" alt="" />
        <div><p class="mini-name">Instagram</p><p class="mini-meta">Padrão · Eu mesmo ativo</p>
          <div class="qty qty-sm"><button type="button" aria-label="Menos"><svg><use href="#icon-minus"></use></svg></button><span>1</span><button type="button" aria-label="Mais"><svg><use href="#icon-plus"></use></svg></button></div></div>
        <p class="mini-price">R$ 59,90</p>
      </li>
    </ul>
    <div class="drawer-foot">
      <div class="sum-row"><span>Subtotal</span><strong>R$ 119,80</strong></div>
      <p class="sum-pix">ou <strong>R$ 107,82</strong> no Pix</p>
      <a class="button button-primary button-block" href="checkout.html">Finalizar compra</a>
      <a class="button button-outline button-block" href="carrinho.html">Ver carrinho</a>
    </div>
  </aside>`;

  document.body.insertAdjacentHTML('afterbegin', SPRITE + HEADER);
  document.body.insertAdjacentHTML('beforeend', FOOTER + (isCheckout ? '' : DRAWER));

  // Carrinho lateral
  const open = (added) => {
    document.body.classList.add('cart-open');
    document.body.classList.toggle('cart-just-added', !!added);
    document.querySelector('.cart-drawer')?.setAttribute('aria-hidden', 'false');
  };
  const close = () => {
    document.body.classList.remove('cart-open');
    document.querySelector('.cart-drawer')?.setAttribute('aria-hidden', 'true');
  };
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-open-cart]')) { e.preventDefault(); open(false); }
    if (e.target.closest('[data-add-cart]')) { e.preventDefault(); open(true); }
    if (e.target.closest('[data-close-cart]')) close();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

  // Quantidade
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.qty button');
    if (!btn) return;
    const out = btn.parentElement.querySelector('span');
    const n = Math.max(1, Number(out.textContent) + (btn === btn.parentElement.lastElementChild ? 1 : -1));
    out.textContent = n;
  });

  // Grupos de escolha: cores, filtros, pagamento, entrega, configuração
  document.querySelectorAll('[data-choice]').forEach((group) => {
    group.addEventListener('click', (e) => {
      const opt = e.target.closest('[data-option]');
      if (!opt || !group.contains(opt)) return;
      group.querySelectorAll('[data-option]').forEach((o) => o.classList.toggle('is-selected', o === opt));
      if (group.dataset.choice === 'pay') {
        document.querySelectorAll('[data-pay-panel]').forEach((p) => { p.hidden = p.dataset.payPanel !== opt.dataset.option; });
      }
      if (group.dataset.choice === 'color') {
        const img = document.querySelector('[data-main-image]');
        if (img && opt.dataset.image) {
          img.src = `assets/images/produtos/${opt.dataset.image}-1143.webp`;
          document.querySelectorAll('[data-color-label]').forEach((l) => { l.textContent = opt.dataset.label; });
        }
      }
    });
  });

  // Galeria do produto
  document.querySelectorAll('[data-thumb]').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const img = document.querySelector('[data-main-image]');
      img.src = thumb.dataset.thumb;
      document.querySelectorAll('[data-thumb]').forEach((t) => t.classList.toggle('is-selected', t === thumb));
    });
  });

  // Simulação de frete
  document.querySelector('[data-cep-form]')?.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('[data-cep-result]').hidden = false;
  });

  // Cabeçalho com borda ao rolar
  const header = document.querySelector('.site-header');
  const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
