(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`lounge-1`,name:`Lounge 1`,type:`Премиум-зал`,rows:8,seatsPerRow:12,vipRows:[`G`,`H`],accessibleSeats:[`A1`,`A2`],description:`Мягкие кресла, больше пространства и обслуживание у места.`},{id:`premiere-2`,name:`Premiere 2`,type:`Большой зал`,rows:8,seatsPerRow:12,vipRows:[`F`,`G`,`H`],accessibleSeats:[`A11`,`A12`],description:`Большой экран, объемный звук и центральные премиум-ряды.`},{id:`studio-3`,name:`Studio 3`,type:`Арт-зал`,rows:7,seatsPerRow:10,vipRows:[`G`],accessibleSeats:[`A1`],description:`Камерный зал для арт-лекториев и фестивальных показов.`}],t=t=>e.find(e=>e.id===t),n=[[`midnight-archive`,`lounge-1`,`19:00`,`2D`,520],[`midnight-archive`,`premiere-2`,`21:40`,`Премиум`,760],[`velvet-orbit`,`premiere-2`,`18:20`,`Большой экран`,680],[`velvet-orbit`,`premiere-2`,`22:10`,`Большой экран`,720],[`five-centuries-of-light`,`studio-3`,`15:30`,`Лекторий`,420],[`five-centuries-of-light`,`studio-3`,`19:30`,`2D`,460],[`red-hall`,`lounge-1`,`22:30`,`2D`,560],[`silent-premiere`,`studio-3`,`17:10`,`Субтитры`,410],[`last-row`,`lounge-1`,`16:15`,`2D`,390],[`screen-number-seven`,`premiere-2`,`13:00`,`Семейный`,360],[`screen-number-seven`,`premiere-2`,`15:45`,`2D`,390],[`sound-after-dark`,`lounge-1`,`20:20`,`Объемный звук`,540]],r={0:[`B4`,`B5`,`C6`,`E8`,`G7`],1:[`A3`,`A4`,`D6`,`D7`,`H8`],2:[`B2`,`C2`,`C3`,`F6`,`F7`,`G8`],3:[`A8`,`B8`,`E4`,`E5`,`H3`],4:[`B6`,`C6`,`D6`,`G4`],5:[`A1`,`A2`,`C7`,`C8`,`F5`],6:[`B3`,`B4`,`E7`,`G8`,`H8`]},i=e=>String(e).padStart(2,`0`),a=e=>`${e.getFullYear()}-${i(e.getMonth()+1)}-${i(e.getDate())}`,o=Array.from({length:7},(e,t)=>{let n=new Date;return n.setHours(0,0,0,0),n.setDate(n.getDate()+t),a(n)}),s=o.flatMap((e,t)=>n.map(([n,i,a,o,s],c)=>({id:`s-${n}-${e}-${a.replace(`:`,``)}`,movieId:n,hallId:i,startsAt:`${e}T${a}:00+05:00`,dateKey:e,time:a,format:o,basePrice:s,occupiedSeats:r[(t+c)%7]}))),c=e=>s.find(t=>t.id===e),l=e=>s.filter(t=>t.movieId===e),u=e=>`${e} мин`,d=e=>new Intl.NumberFormat(`ru-RU`,{style:`currency`,currency:`RUB`,maximumFractionDigits:0}).format(e),f=e=>{let t=new Date(`${e}T12:00:00+05:00`);return new Intl.DateTimeFormat(`ru-RU`,{day:`numeric`,month:`long`,weekday:`short`}).format(t)},p=(e,t)=>t===0?`Сегодня`:t===1?`Завтра`:f(e),m=()=>`IL-${Date.now().toString(36).toUpperCase()}`,h=()=>new URLSearchParams(window.location.search),g=(e,t)=>`/booking/?movie=${encodeURIComponent(e)}&session=${encodeURIComponent(t)}`,_=(e=``)=>e?`/afisha/?date=${e}`:`/afisha/`,v=(e,t=document)=>t.querySelector(e),y=(e,t=document)=>[...t.querySelectorAll(e)],b=e=>`
    <header class="site-header">
      <nav class="nav-shell" aria-label="Главная навигация">
        <a class="brand" href="/">
          <span class="brand-mark">IL</span>
          <span>
            ILLUSION
            <span class="brand-sub">Кинотеатр</span>
          </span>
        </a>
        <button class="icon-button" id="menu-toggle" aria-label="Открыть меню" aria-controls="nav-links" aria-expanded="false"><i class="ph ph-list" aria-hidden="true"></i></button>
        <div class="nav-links" id="nav-links">
          ${[[`home`,`/`,`Главная`],[`afisha`,`/afisha/`,`Афиша`],[`soon`,`/soon/`,`Скоро`],[`news`,`/news/`,`События`],[`reviews`,`/reviews/`,`Отзывы`],[`about`,`/about/`,`О кинотеатре`]].map(([t,n,r])=>`<a class="nav-link ${e===t?`is-active`:``}" href="${n}">${r}</a>`).join(``)}
          <a class="button button-primary nav-cta" href="/afisha/">Купить билеты</a>
        </div>
      </nav>
    </header>
  `,x=()=>{let e=v(`#menu-toggle`),t=v(`#nav-links`);if(!e||!t)return;let n=()=>{t.classList.remove(`is-open`),e.setAttribute(`aria-expanded`,`false`)};e.addEventListener(`click`,()=>{let n=!t.classList.contains(`is-open`);t.classList.toggle(`is-open`,n),e.setAttribute(`aria-expanded`,String(n))}),t.addEventListener(`click`,e=>{e.target.closest(`a`)&&n()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&n()})},S=()=>`
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand" href="/">
          <span class="brand-mark">IL</span>
          <span>
            ILLUSION
            <span class="brand-sub">Вечернее кино</span>
          </span>
        </a>
        <p class="lead">
          Афиша, выбор мест и электронный билет собраны в один спокойный сценарий.
        </p>
      </div>
      <div>
        <p class="eyebrow">Билеты</p>
        <ul class="footer-list">
          <li><a href="/afisha/">Афиша</a></li>
          <li><a href="/booking/">Выбор мест</a></li>
          <li><a href="/soon/">Скоро</a></li>
        </ul>
      </div>
      <div>
        <p class="eyebrow">Кинотеатр</p>
        <ul class="footer-list">
          <li><a href="/about/">О кинотеатре</a></li>
          <li><a href="/news/">События</a></li>
          <li><a href="/reviews/">Отзывы</a></li>
        </ul>
      </div>
      <div>
        <p class="eyebrow">Аккаунт</p>
        <ul class="footer-list">
          <li><a href="/auth/login/">Войти</a></li>
          <li><a href="/auth/register/">Регистрация</a></li>
          <li><span class="muted">Оплата в этой версии не списывается</span></li>
        </ul>
      </div>
    </div>
  </footer>
`,C=(e,t=``)=>`
  <div class="poster-art ${t}" style="--poster-bg: ${e.posterBg}">
    <div class="poster-frame">
      <span class="poster-kicker">${e.status===`soon`?`Скоро`:`В прокате`}</span>
      <h3 class="poster-title">${e.title}</h3>
      <p>${e.genres.slice(0,2).join(` / `)}</p>
    </div>
  </div>
`,w=e=>`
  <div class="movie-meta">
    <span>${e.age}</span>
    <span>${u(e.duration)}</span>
    <span>${e.rating.toFixed(1)}</span>
    <span>${e.formatTags.slice(0,2).join(` · `)}</span>
  </div>
`,T=(e,n,r=4)=>{let i=n.filter(t=>t.movieId===e.id).slice(0,r);return i.length?i.map(n=>{let r=t(n.hallId);return`<a class="showtime-chip" href="${g(e.id,n.id)}" aria-label="Выбрать сеанс ${e.title} в ${n.time}">
        <span>${n.time}</span>
        <small>${n.format} · ${r.name}</small>
      </a>`}).join(``):`<span class="quiet-note">Расписание откроется скоро</span>`},E=(e,t)=>`
  <article class="movie-card" data-movie-card="${e.id}">
    ${C(e,`movie-card-poster`)}
    <div class="movie-card-body">
      ${w(e)}
      <div class="movie-card-main">
        <h3 class="movie-card-title">${e.title}</h3>
        <p class="movie-description">${e.description}</p>
      </div>
      <div class="showtime-list">${T(e,t)}</div>
      <div class="movie-card-actions">
        <button class="button button-secondary" type="button" data-open-movie="${e.id}">Подробнее</button>
      </div>
    </div>
  </article>
`,D=(e,t)=>`
  <div class="date-rail" role="tablist" aria-label="Даты сеансов">
    ${e.map((e,n)=>`
          <button class="date-chip ${e===t?`is-active`:``}" type="button" data-date="${e}" role="tab" aria-selected="${e===t}">
            ${p(e,n)}
          </button>
        `).join(``)}
  </div>
`,O=(e,t)=>`
  <div class="filter-bar" aria-label="Фильтры афиши">
    ${e.map(e=>`
          <button class="filter-chip ${t.includes(e)?`is-active`:``}" type="button" data-filter="${e}" aria-pressed="${t.includes(e)}">
            ${e}
          </button>
        `).join(``)}
  </div>
`,k=()=>`
  <dialog class="modal" id="movie-dialog" aria-labelledby="dialog-title">
    <button class="modal-close" type="button" data-close-dialog aria-label="Закрыть"><i class="ph ph-x" aria-hidden="true"></i></button>
    <div class="modal-content" id="movie-dialog-content"></div>
  </dialog>
`,A=(e,t)=>{let n=v(`#movie-dialog`),r=v(`#movie-dialog-content`);if(!n||!r)return;let i=null,a=()=>{n.close(),document.body.classList.remove(`no-scroll`),i?.focus()};y(`[data-open-movie]`).forEach(t=>{t.addEventListener(`click`,()=>{let a=e.find(e=>e.id===t.dataset.openMovie);if(!a)return;i=t;let o=l(a.id).slice(0,8);r.innerHTML=`
        ${C(a)}
        <div>
          <p class="eyebrow">О фильме</p>
          <h2 class="title-md" id="dialog-title">${a.title}</h2>
          <p class="lead">${a.description}</p>
          ${w(a)}
          <div class="divider"></div>
          <p class="eyebrow">Ближайшие сеансы</p>
          <div class="showtime-list showtime-list-modal">
            ${T(a,o,8)}
          </div>
        </div>
      `,document.body.classList.add(`no-scroll`),n.showModal(),v(`[data-close-dialog]`,n)?.focus()})}),y(`[data-close-dialog]`,n).forEach(e=>e.addEventListener(`click`,a)),n.addEventListener(`click`,e=>{e.target===n&&a()}),n.addEventListener(`cancel`,e=>{e.preventDefault(),a()})},j=(e,t,n=``)=>`
  <div class="empty-state">
    <p class="eyebrow">Ничего не найдено</p>
    <h2 class="title-md">${e}</h2>
    <p class="lead">${t}</p>
    ${n}
  </div>
`,ee=()=>`
  <div class="seat-legend" aria-label="Легенда мест">
    <span class="legend-item"><span class="legend-swatch"></span>Свободно</span>
    <span class="legend-item"><span class="legend-swatch selected"></span>Выбрано</span>
    <span class="legend-item"><span class="legend-swatch occupied"></span>Занято</span>
    <span class="legend-item"><span class="legend-swatch premium"></span>Премиум</span>
    <span class="legend-item"><span class="legend-swatch accessible"></span>Доступное место</span>
  </div>
`,M=({hall:e,session:t,selectedSeats:n,occupiedSeats:r})=>{let i=`ABCDEFGH`.slice(0,e.rows).split(``),a=new Set(r),o=new Set(n),s=new Set(e.vipRows),c=new Set(e.accessibleSeats),l=i.map(n=>`<div class="seat-row" role="row"><span class="row-label" aria-hidden="true">${n}</span>${Array.from({length:e.seatsPerRow},(e,r)=>{let i=`${n}${r+1}`,l=a.has(i),u=o.has(i),f=s.has(n),p=c.has(i),m=t.basePrice+(f?180:0);return`<button
          class="${[`seat`,l?`is-occupied`:``,u?`is-selected`:``,f?`is-premium`:``,p?`is-accessible`:``].filter(Boolean).join(` `)}"
          type="button"
          role="gridcell"
          data-seat="${i}"
          data-price="${m}"
          ${l?`disabled`:``}
          aria-pressed="${u}"
          aria-label="Ряд ${n}, место ${r+1}, ${f?`премиум`:`стандарт`}, ${d(m)}, ${l?`занято`:u?`выбрано`:`свободно`}"
        >${r+1}</button>`}).join(``)}</div>`).join(``);return`
    <div class="seat-stage">
      <div class="screen-curve">Экран</div>
      <div class="seat-grid" role="grid" aria-label="Карта мест ${e.name}" style="--seats-per-row: ${e.seatsPerRow}">
        ${l}
      </div>
      ${ee()}
    </div>
  `},N=({movie:e,session:t,hall:n,selectedSeats:r,total:i,timerText:a,ctaDisabled:o,isCheckout:s=!1})=>{let c=r.filter(e=>n.vipRows.includes(e.slice(0,1))),l=r.length-c.length;return`
    <aside class="booking-panel booking-summary" aria-live="polite">
      <p class="eyebrow">Ваш заказ</p>
      <h2 class="title-md">${e.title}</h2>
      <p class="muted">${f(t.dateKey)} · ${t.time} · ${t.format} · ${n.name}</p>
      <div class="divider"></div>
      <div class="summary-list">
        <p><strong>Места:</strong> ${r.length?r.join(`, `):`Выберите места на схеме`}</p>
        <p><strong>Стандарт:</strong> ${l}</p>
        <p><strong>Премиум:</strong> ${c.length}</p>
        <p><strong>Резерв:</strong> ${a}</p>
      </div>
      <div class="summary-total">
        <span>Итого</span>
        <strong>${d(i)}</strong>
      </div>
      <p class="quiet-note">Места удерживаются на время оформления. Оплата в этой версии не списывается.</p>
      ${s?`<p class="summary-status"><i class="ph ph-check-circle" aria-hidden="true"></i> Оформление билета</p>`:`<button class="button button-primary" type="button" data-go-checkout ${o?`disabled`:``}>${o?`Сначала выберите место`:`Перейти к оформлению`} <i class="ph ph-arrow-right" aria-hidden="true"></i></button>`}
    </aside>
  `},te=e=>`
  <article class="ticket-card">
    <div class="grid grid-2">
      <div>
        <p class="eyebrow">Электронный билет</p>
        <h2 class="title-md">${e.movieTitle}</h2>
        <p class="lead">${e.dateLabel} · ${e.time} · ${e.hallName}</p>
        <p><strong>Места:</strong> ${e.seats.join(`, `)}</p>
        <p><strong>Заказ:</strong> ${e.orderId}</p>
        <p class="muted">Билет создан для просмотра сценария покупки. Деньги не списывались.</p>
      </div>
      <div class="qr" aria-label="QR-код билета"><i class="ph ph-qr-code" aria-hidden="true"></i></div>
    </div>
    <div class="cluster ticket-actions">
      <button class="button button-secondary" type="button" data-toast="Билет добавлен в календарь">Добавить в календарь</button>
      <button class="button button-secondary" type="button" data-toast="PDF-билет подготовлен">Скачать билет</button>
      <a class="button button-primary" href="/afisha/">Купить еще</a>
    </div>
  </article>
`,P=e=>{let t=v(`#toast-root`);if(!t)return;t.classList.add(`toast-root`);let n=document.createElement(`div`);n.className=`toast`,n.textContent=e,t.append(n),window.setTimeout(()=>n.remove(),3200)},ne=()=>{document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-toast]`);t&&P(t.dataset.toast)})},F=[{id:`midnight-archive`,title:`Полночный архив`,status:`now`,genres:[`Драма`,`Мистика`],duration:118,age:`16+`,rating:8.7,formatTags:[`2D`,`Премиум`],posterBg:`linear-gradient(145deg, #171010 0%, #2d171a 52%, #7f5f33 145%)`,description:`Камерная история о реставраторе, который находит пленку с незавершенным фильмом и постепенно попадает в чужую память.`},{id:`velvet-orbit`,title:`Бархатная орбита`,status:`now`,genres:[`Фантастика`,`Приключения`],duration:132,age:`12+`,rating:8.5,formatTags:[`Большой экран`,`2D`],posterBg:`linear-gradient(145deg, #081016 0%, #172631 48%, #6b2932 130%)`,description:`Экипаж частной станции получает сигнал с темной стороны Луны и должен решить, стоит ли возвращать его на Землю.`},{id:`five-centuries-of-light`,title:`Пять веков света`,status:`now`,genres:[`Арт-лекторий`,`Документальный`],duration:96,age:`6+`,rating:8.9,formatTags:[`2D`,`Лекторий`],posterBg:`linear-gradient(145deg, #18130d 0%, #3f2f18 52%, #8a7146 130%)`,description:`Визуальное путешествие по истории света в живописи, архитектуре и кинотеатральной проекции.`},{id:`red-hall`,title:`Красный зал`,status:`now`,genres:[`Триллер`,`Неонуар`],duration:110,age:`18+`,rating:8.2,formatTags:[`2D`],posterBg:`linear-gradient(145deg, #090909 0%, #221015 48%, #741925 120%)`,description:`После закрытого показа критик остается один в зале и замечает, что фильм продолжает идти только для него.`},{id:`silent-premiere`,title:`Тихая премьера`,status:`now`,genres:[`Романс`,`Авторское кино`],duration:104,age:`12+`,rating:8,formatTags:[`2D`,`Субтитры`],posterBg:`linear-gradient(145deg, #17151c 0%, #4f4744 54%, #9c8d78 150%)`,description:`Два незнакомца встречаются на ночном показе немого кино и начинают разговаривать только записками на билетах.`},{id:`last-row`,title:`Последний ряд`,status:`now`,genres:[`Комедия`,`Городское кино`],duration:101,age:`12+`,rating:7.8,formatTags:[`2D`],posterBg:`linear-gradient(145deg, #0f1115 0%, #283039 54%, #806c43 130%)`,description:`Друзья покупают последние места в зале и случайно оказываются участниками самой странной премьеры сезона.`},{id:`screen-number-seven`,title:`Экран номер семь`,status:`now`,genres:[`Семейный`,`Фэнтези`],duration:112,age:`6+`,rating:8.3,formatTags:[`2D`,`Семейный`],posterBg:`linear-gradient(145deg, #071617 0%, #17383d 50%, #826c42 130%)`,description:`Юная киномеханик открывает зал, где герои старых фильмов выходят за экран, чтобы найти новый финал.`},{id:`sound-after-dark`,title:`Звук после темноты`,status:`now`,genres:[`Музыкальный`,`Документальный`],duration:88,age:`12+`,rating:8.6,formatTags:[`Объемный звук`,`2D`],posterBg:`linear-gradient(145deg, #100d12 0%, #251f35 50%, #74303a 130%)`,description:`Документальный фильм о ночных саундтреках города и людях, которые слышат кино раньше, чем видят кадр.`},{id:`northern-cut`,title:`Северный монтаж`,status:`soon`,genres:[`Драма`,`Путешествие`],duration:126,age:`16+`,rating:8.1,formatTags:[`2D`],posterBg:`linear-gradient(145deg, #071016 0%, #2c4856 52%, #8d8779 140%)`,description:`Режиссер возвращается в город детства, чтобы смонтировать фильм из воспоминаний, которых не было.`},{id:`golden-balcony`,title:`Золотой балкон`,status:`soon`,genres:[`Исторический`,`Мелодрама`],duration:119,age:`12+`,rating:8.4,formatTags:[`Премиум`,`2D`],posterBg:`linear-gradient(145deg, #16100a 0%, #3d2a16 48%, #806538 120%)`,description:`В старом кинотеатре находят ложу, с которой можно увидеть версии фильма, никогда не выходившие в прокат.`},{id:`morning-subtitles`,title:`Утренние субтитры`,status:`soon`,genres:[`Комедия`,`Лекторий`],duration:94,age:`6+`,rating:7.9,formatTags:[`Субтитры`,`2D`],posterBg:`linear-gradient(145deg, #1f1712 0%, #5f4432 50%, #9a806a 132%)`,description:`Легкая история о переводчице фестивальных фильмов, которая случайно меняет судьбу целого показа.`},{id:`afterimage`,title:`Послеобраз`,status:`soon`,genres:[`Экспериментальное`,`Артхаус`],duration:82,age:`16+`,rating:8.8,formatTags:[`Арт`,`2D`],posterBg:`linear-gradient(145deg, #070708 0%, #202024 42%, #8a7146 150%)`,description:`Медитативный фильм-эссе о том, что остается перед глазами после финального титра.`}],I=e=>F.find(t=>t.id===e),re=[`Все`,`Драма`,`Фантастика`,`Арт-лекторий`,`Премиум`,`Семейный`,`Объемный звук`],L=e=>{let t=h().get(`date`)||o[0],n=[`Все`],r=()=>{let i=s.filter(e=>e.dateKey===t),a=new Set(i.map(e=>e.movieId)),c=n.filter(e=>e!==`Все`),l=F.filter(e=>e.status===`now`).filter(e=>a.has(e.id)).filter(e=>{if(!c.length)return!0;let t=[...e.genres,...e.formatTags];return c.some(e=>t.includes(e))});e.innerHTML=`
      <div class="page">
        <section class="container page-hero">
          <p class="eyebrow">Афиша</p>
          <h1 class="title-lg">Фильмы, которые можно выбрать сегодня</h1>
          <p class="lead">
            Выберите день и жанр, затем переходите сразу к местам: фильм, зал и время
            сохраняются до оформления билета.
          </p>
        </section>
        <section class="filter-shell" aria-label="Фильтры афиши">
          <div class="container filter-stack">
            ${D(o,t)}
            <div class="filter-row">
              ${O(re,n)}
              <button class="button button-ghost filter-reset" type="button" data-reset-filters>Сбросить</button>
            </div>
            <p class="result-count">${l.length} фильмов · ${i.length} сеансов</p>
          </div>
        </section>
        <section class="container section">
          ${l.length?`<div class="movie-grid">${l.map(e=>E(e,i)).join(``)}</div>`:j(`Сеансы не найдены`,`Попробуйте другую дату или сбросьте фильтры.`,`<button class="button button-secondary" type="button" data-reset-filters>Сбросить фильтры</button>`)}
        </section>
        ${k()}
      </div>
    `,y(`[data-date]`).forEach(e=>{e.addEventListener(`click`,()=>{t=e.dataset.date,r()})}),y(`[data-filter]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.filter;t===`Все`?n=[`Все`]:(n=n.includes(t)?n.filter(e=>e!==t):[...n.filter(e=>e!==`Все`),t],n.length||(n=[`Все`])),r()})}),y(`[data-reset-filters]`).forEach(e=>{e.addEventListener(`click`,()=>{n=[`Все`],r()})}),A(F,i)};r()},R=`illusion.booking.draft`,z=`illusion.booking.orders`,B=`illusion.booking.occupied`,V=(e,t)=>{try{return JSON.parse(window.localStorage.getItem(e)||window.sessionStorage.getItem(e))||t}catch{return t}},H=e=>{window.sessionStorage.setItem(R,JSON.stringify(e))},U=()=>{window.sessionStorage.removeItem(R)},W=()=>V(z,[]),G=e=>{let t=W();window.localStorage.setItem(z,JSON.stringify([e,...t].slice(0,8)))},K=e=>V(B,{})[e]||[],q=(e,t)=>{let n=V(B,{}),r=new Set(n[e]||[]);t.forEach(e=>r.add(e)),n[e]=[...r],window.localStorage.setItem(B,JSON.stringify(n))},J=(e,t,n)=>{let r=n.slice(0,1);return e.basePrice+(t.vipRows.includes(r)?180:0)},Y=()=>{let e=h(),t=e.get(`session`),n=t?c(t):null;if(n)return n;let r=e.get(`movie`);return s.find(e=>e.movieId===r)||s[0]},X=e=>{let t=Math.max(0,Math.floor((e-Date.now())/1e3));return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`},ie=e=>{let n=Y(),r=I(n.movieId),i=t(n.hallId),a=[],o=`seats`,l=null,u=Date.now()+360*1e3,p=null,h=()=>[...n.occupiedSeats,...K(n.id)],g=()=>a.reduce((e,t)=>e+J(n,i,t),0),_=()=>{H({movieId:r.id,sessionId:n.id,seats:a,total:g()})},b=e=>{n=c(e)||n,r=I(n.movieId),i=t(n.hallId),a=[],u=Date.now()+360*1e3,o=`seats`,_(),A()},x=()=>`
      <div class="surface-card session-picker">
        <p class="eyebrow">Другие сеансы</p>
        <div class="showtime-list showtime-list-wide">
          ${s.filter(e=>e.movieId===r.id).slice(0,10).map(e=>{let r=t(e.hallId);return`<button class="showtime-chip ${e.id===n.id?`is-active`:``}" type="button" data-session="${e.id}">
                <span>${f(e.dateKey)} · ${e.time}</span>
                <small>${e.format} · ${r.name}</small>
              </button>`}).join(``)}
        </div>
      </div>
    `,S=()=>`
    <div class="checkout-steps" aria-label="Шаги оформления">
      <span class="${o===`seats`?`is-active`:``}">1. Места</span>
      <span class="${o===`checkout`?`is-active`:``}">2. Контакты</span>
      <span class="${o===`ticket`?`is-active`:``}">3. Билет</span>
    </div>
  `,C=()=>`
    <div class="page">
      <section class="container page-hero">
        <p class="eyebrow">Выбор мест</p>
        <h1 class="title-lg">${r.title}</h1>
        <p class="lead">${f(n.dateKey)} · ${n.time} · ${n.format} · ${i.name}. ${i.description}</p>
        ${S()}
      </section>
      <section class="container section booking-layout">
        <div>
          ${x()}
          <div class="booking-panel">
            <div class="section-header">
              <div>
                <p class="eyebrow">Карта зала</p>
                <h2 class="title-md">Выберите места рядом</h2>
              </div>
              <span class="tag tag-gold">Можно без аккаунта</span>
            </div>
            ${M({hall:i,session:n,selectedSeats:a,occupiedSeats:h()})}
          </div>
        </div>
        <div id="summary-root">
          ${N({movie:r,session:n,hall:i,selectedSeats:a,total:g(),timerText:X(u),ctaDisabled:a.length===0})}
        </div>
      </section>
    </div>
  `,w=()=>`
    <div class="page">
      <section class="container page-hero">
        <p class="eyebrow">Оформление</p>
        <h1 class="title-lg">Контакты для билета</h1>
        <p class="lead">Укажите email и телефон, чтобы получить номер заказа. Банковская оплата в этой версии не выполняется.</p>
        ${S()}
      </section>
      <section class="container section booking-layout">
        <form class="booking-panel form-grid" id="checkout-form" novalidate>
          <div class="field">
            <label for="email">Email для билета</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required aria-describedby="email-error" />
            <span class="error-text" id="email-error" data-error-for="email"></span>
          </div>
          <div class="field">
            <label for="phone">Телефон</label>
            <input id="phone" name="phone" type="tel" placeholder="+7 900 000-00-00" autocomplete="tel" required aria-describedby="phone-error" />
            <span class="error-text" id="phone-error" data-error-for="phone"></span>
          </div>
          <div class="field">
            <label for="promo">Промокод</label>
            <input id="promo" name="promo" type="text" placeholder="VELVET" />
          </div>
          <div class="field">
            <label for="method">Способ оплаты</label>
            <select id="method" name="method">
              <option>Без списания денег</option>
              <option>Карта на кассе</option>
              <option>Подарочный сертификат</option>
            </select>
          </div>
          <label class="checkbox-row">
            <input id="terms" name="terms" type="checkbox" required aria-describedby="terms-error" />
            <span>Подтверждаю, что билет создается для просмотра сценария покупки</span>
          </label>
          <span class="error-text" id="terms-error" data-error-for="terms"></span>
          <div class="cluster">
            <button class="button button-secondary" type="button" data-back-seats>Назад к местам</button>
            <button class="button button-primary" type="submit">Получить билет</button>
          </div>
        </form>
        ${N({movie:r,session:n,hall:i,selectedSeats:a,total:g(),timerText:X(u),ctaDisabled:!1,isCheckout:!0})}
      </section>
    </div>
  `,T=()=>`
    <div class="page">
      <section class="container page-hero">
        <p class="eyebrow">Билет готов</p>
        <h1 class="title-lg">Места сохранены</h1>
        <p class="lead">Фильм, сеанс, ряд и итоговая стоимость остались видимыми до финального шага.</p>
        ${S()}
      </section>
      <section class="container section">
        ${te(l)}
      </section>
    </div>
  `,E=()=>{let e=v(`#summary-root`);e&&(e.innerHTML=N({movie:r,session:n,hall:i,selectedSeats:a,total:g(),timerText:X(u),ctaDisabled:a.length===0}),v(`[data-go-checkout]`,e)?.addEventListener(`click`,()=>{a.length&&(o=`checkout`,A())}))},D=()=>{y(`[data-session]`).forEach(e=>{e.addEventListener(`click`,()=>b(e.dataset.session))}),y(`[data-seat]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.seat;a=a.includes(t)?a.filter(e=>e!==t):[...a,t],_(),A()}),e.addEventListener(`keydown`,t=>{let n=y(`[data-seat]:not(:disabled)`),r=n.indexOf(e),a=i.seatsPerRow,o={ArrowRight:1,ArrowLeft:-1,ArrowDown:a,ArrowUp:-a};o[t.key]&&(t.preventDefault(),n[Math.max(0,Math.min(n.length-1,r+o[t.key]))]?.focus())})}),v(`[data-go-checkout]`)?.addEventListener(`click`,()=>{a.length&&(o=`checkout`,A())})},O=()=>{v(`[data-back-seats]`)?.addEventListener(`click`,()=>{o=`seats`,A()}),v(`#checkout-form`)?.addEventListener(`submit`,e=>{e.preventDefault();let t=e.currentTarget,s=t.email.value.trim(),c=t.phone.value.trim(),u={email:s.includes(`@`)?``:`Введите email для билета.`,phone:c.length>=7?``:`Введите телефон.`,terms:t.terms.checked?``:`Подтвердите условия оформления.`};if(Object.entries(u).forEach(([e,n])=>{let r=v(`[data-error-for="${e}"]`),i=t.elements[e];r&&(r.textContent=n),i&&i.setAttribute(`aria-invalid`,String(!!n))}),Object.values(u).some(Boolean))return;let p=t.querySelector(`button[type="submit"]`);p.disabled=!0,p.textContent=`Создаем билет...`,window.setTimeout(()=>{l={orderId:m(),movieTitle:r.title,dateLabel:f(n.dateKey),time:n.time,hallName:i.name,seats:a,total:d(g()),email:s,phone:c},G(l),q(n.id,a),U(),o=`ticket`,A()},650)})},k=()=>{window.clearInterval(p),o!==`ticket`&&(p=window.setInterval(()=>{if(Date.now()>u){a=[],u=Date.now()+360*1e3,P(`Резерв истек. Выберите места заново.`),A();return}E()},1e3))},A=()=>{if(!n||!r||!i){e.innerHTML=`<div class="page container">${j(`Сеанс не найден`,`Вернитесь в афишу и выберите другой сеанс.`,`<a class="button button-primary" href="/afisha/">Открыть афишу</a>`)}</div>`;return}o===`checkout`?(e.innerHTML=w(),O()):o===`ticket`?e.innerHTML=T():(e.innerHTML=C(),D()),k()};_(),A()},Z=e=>{let t=F[0],n=F.filter(e=>e.status===`now`).slice(0,3);e.innerHTML=`
    <div class="repertoire-home">
      <section class="repertoire-hero" aria-label="Главный экран ILLUSION">
        <aside class="program-rail">
          <p class="rail-wordmark">ILLUSION <span>КИНО КАК ФОРМА ПАМЯТИ</span></p>
          <div class="rail-date"><span>10</span><p>ИЮЛЯ<br><small>ПТ · 2026</small></p></div>
          <p class="rail-label">СЕАНСЫ / СЕГОДНЯ</p>
          <div class="rail-program">
            ${s.filter(e=>e.dateKey===o[0]).slice(0,5).map(e=>{let t=F.find(t=>t.id===e.movieId);return`<a href="/booking/?movie=${t.id}&session=${e.id}"><strong>${e.time}</strong><span>${t.title}<small>${e.format} · ${e.hallId.replace(`-`,` `)}</small></span><i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>`}).join(``)}
          </div>
          <div class="rail-links"><a href="/afisha/">АФИША</a><a href="/news/">ЖУРНАЛ</a><a href="/about/">КИНОТЕАТР</a></div>
        </aside>

        <div class="repertoire-feature">
          <p class="eyebrow">В ПРОКАТЕ · ${t.age} · ${t.duration} МИН</p>
          <h1><span>Кино как</span> <em>форма</em><br>памяти</h1>
          <p class="feature-copy">${t.description}</p>
          <div class="feature-meta"><span>ФРАНЦИЯ / 1961</span><span>СУБТИТРЫ: РУССКИЕ</span><span>АРХИВНЫЙ ПОКАЗ</span></div>
          <img class="repertoire-reel" src="/images/repertoire-reel.png" alt="Пленка и катушка в вермилионовой печатной графике" />
        </div>

        <aside class="booking-rail">
          <div class="booking-rail-top"><span>${t.title}</span><strong>${s[0].time}</strong><span>ЗАЛ 02 · ПРЕМЬЕРА</span></div>
          <div class="seat-preview" aria-label="Предпросмотр схемы зала">
            <p>ЭКРАН</p>
            <div class="seat-preview-grid" aria-hidden="true">${Array.from({length:48},(e,t)=>`<span class="${t===28?`is-picked`:``}"></span>`).join(``)}</div>
            <p class="seat-preview-caption">ВЫБРАНО 02 МЕСТА <strong>D4, D5</strong></p>
          </div>
          <div class="booking-rail-total"><span>ИТОГО</span><strong>1 200 ₽</strong></div>
          <a class="booking-rail-cta" href="/booking/?movie=${t.id}&session=${s[0].id}">ВЫБРАТЬ МЕСТА <i class="ph ph-arrow-right" aria-hidden="true"></i></a>
          <a class="booking-rail-note" href="${_(o[0])}">ВСЯ ПРОГРАММА <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>
        </aside>
      </section>

      <section class="container repertoire-statement">
        <p class="eyebrow">ILLUSION / 01</p>
        <h2>Мы собираем вечер так же тщательно, как фильм: кадр, время, ряд, место.</h2>
        <a class="text-link" href="/about/">О КИНОТЕАТРЕ <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>
      </section>

      <section class="container repertoire-programme">
        <div class="section-header"><p class="eyebrow">ПРОГРАММА / СЕЙЧАС</p><a class="text-link" href="/afisha/">ВСЯ АФИША <i class="ph ph-arrow-right" aria-hidden="true"></i></a></div>
        <div class="movie-grid">${n.map(e=>E(e,s)).join(``)}</div>
      </section>
      ${k()}
    </div>
  `,A(F,s)},ae=[{id:`night-screenings`,title:`Ночной показ авторского кино`,day:`12`,month:`июля`,time:`23:30`,category:`Ночь кино`,hall:`Studio 3`,status:`Билеты доступны`,text:`Подборка камерных фильмов с коротким вступлением куратора и тихим обсуждением после сеанса.`},{id:`lounge-menu`,title:`Новое меню к вечерним показам`,day:`9`,month:`июля`,time:`18:00`,category:`Меню`,hall:`Lounge 1`,status:`Доступно сегодня`,text:`Теплые закуски и десерты можно заказать к месту перед началом фильма.`},{id:`family-mornings`,title:`Семейные утренние сеансы`,day:`13`,month:`июля`,time:`11:00`,category:`Семейное`,hall:`Premiere 2`,status:`Места есть`,text:`Более мягкий звук, раннее расписание и отдельная зона ожидания для гостей с детьми.`},{id:`art-lecture`,title:`Лекция о свете в кино`,day:`16`,month:`июля`,time:`19:20`,category:`Лекторий`,hall:`Studio 3`,status:`Скоро`,text:`Киновед объяснит, как свет управляет вниманием зрителя в классическом и современном кино.`}],oe=[{name:`Анна`,title:`Покупка не отвлекает от вечера`,text:`Понравилось, что фильм, зал, выбранные места и итоговая сумма видны до финального шага.`,rating:5,detail:`Полночный архив · Lounge 1`},{name:`Марк`,title:`Схема зала читается сразу`,text:`Премиум-ряды и занятые места понятны без подсказок, а итог заказа остается рядом.`,rating:5,detail:`Бархатная орбита · Premiere 2`},{name:`Лина`,title:`Спокойный визуал для телефона`,text:`Темный интерфейс ощущается как кинотеатр, но не мешает быстро выбрать сеанс с мобильного.`,rating:4.8,detail:`Последний ряд · Lounge 1`},{name:`Даниил`,title:`Хорошо видно, что будет дальше`,text:`После афиши сразу открывается нужный сеанс, поэтому не приходится заново искать фильм и время.`,rating:4.9,detail:`Пять веков света · Studio 3`},{name:`Софья`,title:`Меньше решений перед оплатой`,text:`Сначала выбираешь места, потом оставляешь контакты. Порядок простой и не перегружает.`,rating:4.7,detail:`Тихая премьера · Studio 3`}],se=e=>{let[t,...n]=F.filter(e=>e.status===`soon`);e.innerHTML=`
    <div class="page">
      <section class="container page-hero">
        <p class="eyebrow">Скоро</p>
        <h1 class="title-lg">Премьеры, которые появятся в расписании</h1>
        <p class="lead">
          Здесь собраны будущие показы: дата старта, жанр и действие, чтобы не потерять фильм
          до открытия продаж.
        </p>
      </section>
      <section class="container section soon-layout">
        <article class="soon-feature surface-card">
          <div>
            <p class="eyebrow">Ближайшая премьера</p>
            <h2>${t.title}</h2>
            <p>${t.description}</p>
            <div class="meta-line">
              <span>${t.age}</span>
              <span>${t.duration} мин</span>
              <span>${t.genres.join(` · `)}</span>
            </div>
          </div>
          <div class="soon-date">
            <span>18</span>
            <small>августа</small>
          </div>
          <button class="button button-primary" type="button" data-toast="Напоминание появится в личном кабинете">Напомнить</button>
        </article>
        <div class="soon-list">
          ${n.map((e,t)=>`
                <article class="surface-card soon-card">
                  <div>
                    <p class="eyebrow">Продажи ${t===0?`с 24 июля`:t===1?`с 2 августа`:`скоро`}</p>
                    <h2>${e.title}</h2>
                    <p>${e.description}</p>
                  </div>
                  <button class="button button-secondary" type="button" data-open-movie="${e.id}">Подробнее</button>
                </article>
              `).join(``)}
        </div>
      </section>
      ${k()}
    </div>
  `,A(F,s)},ce=e=>{e.innerHTML=`
    <div class="page">
      <section class="container venue-story">
        <div>
          <p class="eyebrow">О кинотеатре</p>
          <h1 class="title-lg">ILLUSION делает поход в кино спокойным вечерним ритуалом</h1>
          <p class="lead">
            Мы убрали лишнюю суету из покупки билета: гость видит фильм, зал, места и итоговую цену
            до оформления, а сам кинотеатр остается камерным и теплым.
          </p>
          <div class="cluster">
            <a class="button button-primary" href="/afisha/">Выбрать сеанс</a>
            <a class="button button-secondary" href="/news/">События недели</a>
          </div>
        </div>
        <div class="venue-photo" role="img" aria-label="Гости в зале кинотеатра"></div>
      </section>
      <section class="container section">
        <div class="grid grid-3">
          <article class="surface-card info-card">
            <p class="eyebrow">Lounge 1</p>
            <h2>Мягкая посадка</h2>
            <p class="muted">Широкие кресла, приглушенный свет и спокойное ожидание перед вечерним показом.</p>
          </article>
          <article class="surface-card info-card">
            <p class="eyebrow">Premiere 2</p>
            <h2>Большой зал</h2>
            <p class="muted">Премьерные показы, центральные ряды и понятная схема мест без угадывания.</p>
          </article>
          <article class="surface-card info-card">
            <p class="eyebrow">Studio 3</p>
            <h2>Камерные события</h2>
            <p class="muted">Авторское кино, обсуждения и небольшие лекции для гостей, которым важен контекст.</p>
          </article>
        </div>
      </section>
      <section class="container section">
        <div class="grid grid-3 steps">
          <article class="surface-card step-card">
            <h3>Выбрать вечер</h3>
            <p class="muted">Дата, жанр и формат видны в афише до перехода к покупке.</p>
          </article>
          <article class="surface-card step-card">
            <h3>Сесть правильно</h3>
            <p class="muted">Схема зала показывает занятые, доступные и премиум-места.</p>
          </article>
          <article class="surface-card step-card">
            <h3>Сохранить билет</h3>
            <p class="muted">После оформления гость получает электронный билет и номер заказа.</p>
          </article>
        </div>
      </section>
    </div>
  `},le=e=>{let[t,...n]=ae;e.innerHTML=`
    <div class="page">
      <section class="container page-hero">
        <p class="eyebrow">События</p>
        <h1 class="title-lg">Премьеры, лекции и камерные вечера</h1>
        <p class="lead">
          Раздел помогает выбрать не только фильм, но и повод: ночной показ, семейное утро,
          авторскую лекцию или обновление меню.
        </p>
      </section>
      <section class="container section events-layout">
        <article class="surface-card event-feature">
          <div class="event-date">
            <span>${t.day}</span>
            <small>${t.month}</small>
          </div>
          <div>
            <p class="eyebrow">${t.category} · ${t.time}</p>
            <h2>${t.title}</h2>
            <p>${t.text}</p>
            <p class="muted">${t.hall} · ${t.status}</p>
          </div>
          <a class="button button-primary" href="/afisha/">Выбрать сеанс</a>
        </article>
        <div class="event-list">
          ${n.map(e=>`
                <article class="surface-card event-card">
                  <div class="event-date small">
                    <span>${e.day}</span>
                    <small>${e.month}</small>
                  </div>
                  <div>
                    <p class="eyebrow">${e.category} · ${e.time}</p>
                    <h2>${e.title}</h2>
                    <p>${e.text}</p>
                    <p class="muted">${e.hall} · ${e.status}</p>
                  </div>
                </article>
              `).join(``)}
        </div>
      </section>
    </div>
  `},ue=e=>{let[t,...n]=oe;e.innerHTML=`
    <div class="page">
      <section class="container page-hero">
        <p class="eyebrow">Отзывы</p>
        <h1 class="title-lg">Что гости замечают в покупке билета</h1>
        <p class="lead">
          Отзывы показывают важные UX-точки: понятную схему зала, итоговую цену и отсутствие
          лишних шагов перед билетом.
        </p>
      </section>
      <section class="container section review-layout">
        <article class="surface-card review-feature">
          <p class="review-score">${t.rating}/5</p>
          <h2>${t.title}</h2>
          <p>${t.text}</p>
          <p class="muted">${t.detail}</p>
          <strong>${t.name}</strong>
          <a class="button button-primary" href="/afisha/">Выбрать сеанс</a>
        </article>
        <div class="review-side">
          <div class="surface-card review-summary">
            <p class="eyebrow">Средняя оценка</p>
            <h2>4.9/5</h2>
            <p class="muted">Гости чаще всего отмечают понятную схему зала, видимую цену и короткий путь к билету.</p>
          </div>
          <div class="grid grid-2">
          ${n.map(e=>`
                <article class="surface-card review-card">
                  <p class="eyebrow">${e.rating}/5</p>
                  <h2>${e.title}</h2>
                  <p>${e.text}</p>
                  <p class="muted">${e.detail}</p>
                  <strong>${e.name}</strong>
                </article>
              `).join(``)}
          </div>
        </div>
      </section>
    </div>
  `},Q=(e,t)=>{let n=t===`register`;e.innerHTML=`
    <div class="page">
      <section class="container auth-shell">
        <div class="auth-copy">
          <p class="eyebrow">${n?`Регистрация`:`Вход`}</p>
          <h1 class="title-lg">${n?`Сохраните билеты и любимые места`:`Войдите, чтобы быстрее покупать билеты`}</h1>
          <p class="lead">
            Аккаунт не обязателен для покупки: можно продолжить как гость. Профиль нужен только
            для истории заказов и быстрых повторных покупок.
          </p>
          <a class="button button-secondary" href="/afisha/">Продолжить как гость</a>
        </div>
        <form class="booking-panel form-grid auth-form" id="auth-form" novalidate>
          ${n?`<div class="field"><label for="name">Имя</label><input id="name" name="name" placeholder="Ваше имя" autocomplete="name" required aria-describedby="name-error" /><span class="error-text" id="name-error" data-error-for="name"></span></div>`:``}
          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required aria-describedby="auth-email-error" />
            <span class="error-text" id="auth-email-error" data-error-for="email"></span>
          </div>
          <div class="field">
            <label for="password">Пароль</label>
            <input id="password" name="password" type="password" placeholder="Минимум 6 символов" autocomplete="${n?`new-password`:`current-password`}" required aria-describedby="password-error" />
            <span class="error-text" id="password-error" data-error-for="password"></span>
          </div>
          <button class="button button-primary" type="submit">
            ${n?`Создать аккаунт`:`Войти`}
          </button>
          <a class="button button-secondary" href="${n?`/auth/login/`:`/auth/register/`}">
            ${n?`Уже есть аккаунт`:`Создать аккаунт`}
          </a>
          <p class="quiet-note" id="auth-status" aria-live="polite"></p>
        </form>
      </section>
    </div>
  `;let r=e.querySelector(`#auth-form`),i=e.querySelector(`#auth-status`);r?.addEventListener(`submit`,t=>{t.preventDefault();let a={...n?{name:r.name.value.trim().length>1?``:`Введите имя.`}:{},email:r.email.value.includes(`@`)?``:`Введите корректный email.`,password:r.password.value.length>=6?``:`Пароль должен быть не короче 6 символов.`};if(Object.entries(a).forEach(([t,n])=>{let i=e.querySelector(`[data-error-for="${t}"]`),a=r.elements[t];i&&(i.textContent=n),a&&a.setAttribute(`aria-invalid`,String(!!n))}),Object.values(a).some(Boolean)){i&&(i.textContent=`Проверьте поля формы.`);return}let o=r.querySelector(`button[type="submit"]`);o.disabled=!0,o.textContent=n?`Создаем аккаунт...`:`Входим...`,window.setTimeout(()=>{o.disabled=!1,o.textContent=n?`Создать аккаунт`:`Войти`,i&&(i.textContent=n?`Аккаунт готов. Можно перейти к афише.`:`Вход выполнен. Можно перейти к афише.`)},650)})},$=document.body.dataset.page||`home`,de=document.querySelector(`#app`);document.querySelector(`#site-header`).innerHTML=b($),document.querySelector(`#site-footer`).innerHTML=S(),({home:Z,afisha:L,booking:ie,soon:se,about:ce,news:le,reviews:ue,login:e=>Q(e,`login`),register:e=>Q(e,`register`)}[$]||Z)(de),x(),ne();