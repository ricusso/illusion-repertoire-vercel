(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`lounge-1`,name:`Lounge 1`,type:`Premium hall`,rows:8,seatsPerRow:12,vipRows:[`G`,`H`],accessibleSeats:[`A1`,`A2`],description:`Soft seating, more breathing room and service delivered to your seat.`},{id:`premiere-2`,name:`Premiere 2`,type:`Grand hall`,rows:8,seatsPerRow:12,vipRows:[`F`,`G`,`H`],accessibleSeats:[`A11`,`A12`],description:`A large screen, immersive sound and central premium rows.`},{id:`studio-3`,name:`Studio 3`,type:`Studio hall`,rows:7,seatsPerRow:10,vipRows:[`G`],accessibleSeats:[`A1`],description:`An intimate room for art talks and festival screenings.`}],t=t=>e.find(e=>e.id===t),n=[[`midnight-archive`,`lounge-1`,`19:00`,`2D`,520],[`midnight-archive`,`premiere-2`,`21:40`,`Premium`,760],[`velvet-orbit`,`premiere-2`,`18:20`,`Large Screen`,680],[`velvet-orbit`,`premiere-2`,`22:10`,`Large Screen`,720],[`five-centuries-of-light`,`studio-3`,`15:30`,`Talk`,420],[`five-centuries-of-light`,`studio-3`,`19:30`,`2D`,460],[`red-hall`,`lounge-1`,`22:30`,`2D`,560],[`silent-premiere`,`studio-3`,`17:10`,`Subtitled`,410],[`last-row`,`lounge-1`,`16:15`,`2D`,390],[`screen-number-seven`,`premiere-2`,`13:00`,`Family`,360],[`screen-number-seven`,`premiere-2`,`15:45`,`2D`,390],[`sound-after-dark`,`lounge-1`,`20:20`,`Immersive sound`,540]],r={0:[`B4`,`B5`,`C6`,`E8`,`G7`],1:[`A3`,`A4`,`D6`,`D7`,`H8`],2:[`B2`,`C2`,`C3`,`F6`,`F7`,`G8`],3:[`A8`,`B8`,`E4`,`E5`,`H3`],4:[`B6`,`C6`,`D6`,`G4`],5:[`A1`,`A2`,`C7`,`C8`,`F5`],6:[`B3`,`B4`,`E7`,`G8`,`H8`]},i=e=>String(e).padStart(2,`0`),a=e=>`${e.getFullYear()}-${i(e.getMonth()+1)}-${i(e.getDate())}`,o=Array.from({length:7},(e,t)=>{let n=new Date;return n.setHours(0,0,0,0),n.setDate(n.getDate()+t),a(n)}),s=o.flatMap((e,t)=>n.map(([n,i,a,o,s],c)=>({id:`s-${n}-${e}-${a.replace(`:`,``)}`,movieId:n,hallId:i,startsAt:`${e}T${a}:00+05:00`,dateKey:e,time:a,format:o,basePrice:s,occupiedSeats:r[(t+c)%7]}))),c=e=>s.find(t=>t.id===e),l=e=>s.filter(t=>t.movieId===e),u=e=>`${e} min`,d=e=>new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`RUB`,maximumFractionDigits:0}).format(e),f=e=>{let t=new Date(`${e}T12:00:00+05:00`);return new Intl.DateTimeFormat(`en-US`,{day:`numeric`,month:`long`,weekday:`short`}).format(t)},p=(e,t)=>t===0?`Today`:t===1?`Tomorrow`:f(e),m=()=>`IL-${Date.now().toString(36).toUpperCase()}`,h=()=>new URLSearchParams(window.location.search),g=(e,t)=>`/booking/?movie=${encodeURIComponent(e)}&session=${encodeURIComponent(t)}`,_=(e=``)=>e?`/afisha/?date=${e}`:`/afisha/`,v=(e,t=document)=>t.querySelector(e),y=(e,t=document)=>[...t.querySelectorAll(e)],b=e=>`
    <header class="site-header">
      <nav class="nav-shell" aria-label="Primary navigation">
        <a class="brand" href="/">
          <span class="brand-mark">IL</span>
          <span>
            ILLUSION
            <span class="brand-sub">CINEMA HOUSE</span>
          </span>
        </a>
        <button class="icon-button" id="menu-toggle" aria-label="Open menu" aria-controls="nav-links" aria-expanded="false"><i class="ph ph-list" aria-hidden="true"></i></button>
        <div class="nav-links" id="nav-links">
          ${[[`home`,`/`,`Home`],[`afisha`,`/afisha/`,`Programme`],[`soon`,`/soon/`,`Coming soon`],[`news`,`/news/`,`Journal`],[`reviews`,`/reviews/`,`Reviews`],[`about`,`/about/`,`Our house`]].map(([t,n,r])=>`<a class="nav-link ${e===t?`is-active`:``}" href="${n}">${r}</a>`).join(``)}
          <a class="button button-primary nav-cta" href="/afisha/">Book tickets</a>
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
            <span class="brand-sub">CINEMA HOUSE</span>
          </span>
        </a>
        <p class="lead">
          A considered programme, seat selection and e-ticketing in one calm flow.
        </p>
      </div>
      <div>
        <p class="eyebrow">Tickets</p>
        <ul class="footer-list">
          <li><a href="/afisha/">Programme</a></li>
          <li><a href="/booking/">Choose seats</a></li>
          <li><a href="/soon/">Coming soon</a></li>
        </ul>
      </div>
      <div>
        <p class="eyebrow">ILLUSION</p>
        <ul class="footer-list">
          <li><a href="/about/">Our house</a></li>
          <li><a href="/news/">Journal</a></li>
          <li><a href="/reviews/">Reviews</a></li>
        </ul>
      </div>
      <div>
        <p class="eyebrow">Account</p>
        <ul class="footer-list">
          <li><a href="/auth/login/">Sign in</a></li>
          <li><a href="/auth/register/">Create account</a></li>
          <li><span class="muted">No payment is collected in this demo.</span></li>
        </ul>
      </div>
    </div>
  </footer>
`,C=(e,t=``)=>`
  <div class="poster-art ${t}" style="--poster-bg: ${e.posterBg}">
    <div class="poster-frame">
      <span class="poster-kicker">${e.status===`soon`?`Coming soon`:`Now showing`}</span>
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
`,T=(e,n,r=4)=>{let i=n.filter(t=>t.movieId===e.id).slice(0,r);return i.length?i.map(n=>{let r=t(n.hallId);return`<a class="showtime-chip" href="${g(e.id,n.id)}" aria-label="Choose the ${n.time} screening of ${e.title}">
        <span>${n.time}</span>
        <small>${n.format} · ${r.name}</small>
      </a>`}).join(``):`<span class="quiet-note">Showtimes will be announced soon</span>`},E=(e,t)=>`
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
        <button class="button button-secondary" type="button" data-open-movie="${e.id}">Film notes</button>
      </div>
    </div>
  </article>
`,D=(e,t)=>`
  <div class="date-rail" role="tablist" aria-label="Screening dates">
    ${e.map((e,n)=>`
          <button class="date-chip ${e===t?`is-active`:``}" type="button" data-date="${e}" role="tab" aria-selected="${e===t}">
            ${p(e,n)}
          </button>
        `).join(``)}
  </div>
`,O=(e,t)=>`
  <div class="filter-bar" aria-label="Programme filters">
    ${e.map(e=>`
          <button class="filter-chip ${t.includes(e)?`is-active`:``}" type="button" data-filter="${e}" aria-pressed="${t.includes(e)}">
            ${e}
          </button>
        `).join(``)}
  </div>
`,k=()=>`
  <dialog class="modal" id="movie-dialog" aria-labelledby="dialog-title">
    <button class="modal-close" type="button" data-close-dialog aria-label="Close"><i class="ph ph-x" aria-hidden="true"></i></button>
    <div class="modal-content" id="movie-dialog-content"></div>
  </dialog>
`,A=(e,t)=>{let n=v(`#movie-dialog`),r=v(`#movie-dialog-content`);if(!n||!r)return;let i=null,a=()=>{n.close(),document.body.classList.remove(`no-scroll`),i?.focus()};y(`[data-open-movie]`).forEach(t=>{t.addEventListener(`click`,()=>{let a=e.find(e=>e.id===t.dataset.openMovie);if(!a)return;i=t;let o=l(a.id).slice(0,8);r.innerHTML=`
        ${C(a)}
        <div>
          <p class="eyebrow">Film notes</p>
          <h2 class="title-md" id="dialog-title">${a.title}</h2>
          <p class="lead">${a.description}</p>
          ${w(a)}
          <div class="divider"></div>
          <p class="eyebrow">Upcoming screenings</p>
          <div class="showtime-list showtime-list-modal">
            ${T(a,o,8)}
          </div>
        </div>
      `,document.body.classList.add(`no-scroll`),n.showModal(),v(`[data-close-dialog]`,n)?.focus()})}),y(`[data-close-dialog]`,n).forEach(e=>e.addEventListener(`click`,a)),n.addEventListener(`click`,e=>{e.target===n&&a()}),n.addEventListener(`cancel`,e=>{e.preventDefault(),a()})},j=(e,t,n=``)=>`
  <div class="empty-state">
    <p class="eyebrow">Nothing here</p>
    <h2 class="title-md">${e}</h2>
    <p class="lead">${t}</p>
    ${n}
  </div>
`,ee=()=>`
  <div class="seat-legend" aria-label="Seat legend">
    <span class="legend-item"><span class="legend-swatch"></span>Available</span>
    <span class="legend-item"><span class="legend-swatch selected"></span>Selected</span>
    <span class="legend-item"><span class="legend-swatch occupied"></span>Unavailable</span>
    <span class="legend-item"><span class="legend-swatch premium"></span>Premium</span>
    <span class="legend-item"><span class="legend-swatch accessible"></span>Accessible</span>
  </div>
`,M=({hall:e,session:t,selectedSeats:n,occupiedSeats:r})=>{let i=`ABCDEFGH`.slice(0,e.rows).split(``),a=new Set(r),o=new Set(n),s=new Set(e.vipRows),c=new Set(e.accessibleSeats),l=i.map(n=>`<div class="seat-row" role="row"><span class="row-label" aria-hidden="true">${n}</span>${Array.from({length:e.seatsPerRow},(e,r)=>{let i=`${n}${r+1}`,l=a.has(i),u=o.has(i),f=s.has(n),p=c.has(i),m=t.basePrice+(f?180:0);return`<button
          class="${[`seat`,l?`is-occupied`:``,u?`is-selected`:``,f?`is-premium`:``,p?`is-accessible`:``].filter(Boolean).join(` `)}"
          type="button"
          role="gridcell"
          data-seat="${i}"
          data-price="${m}"
          ${l?`disabled`:``}
          aria-pressed="${u}"
          aria-label="Row ${n}, seat ${r+1}, ${f?`premium`:`standard`}, ${d(m)}, ${l?`unavailable`:u?`selected`:`available`}"
        >${r+1}</button>`}).join(``)}</div>`).join(``);return`
    <div class="seat-stage">
      <div class="screen-curve">Screen</div>
      <div class="seat-grid" role="grid" aria-label="Seat map for ${e.name}" style="--seats-per-row: ${e.seatsPerRow}">
        ${l}
      </div>
      ${ee()}
    </div>
  `},N=({movie:e,session:t,hall:n,selectedSeats:r,total:i,timerText:a,ctaDisabled:o,isCheckout:s=!1})=>{let c=r.filter(e=>n.vipRows.includes(e.slice(0,1))),l=r.length-c.length;return`
    <aside class="booking-panel booking-summary" aria-live="polite">
      <p class="eyebrow">Your evening</p>
      <h2 class="title-md">${e.title}</h2>
      <p class="muted">${f(t.dateKey)} · ${t.time} · ${t.format} · ${n.name}</p>
      <div class="divider"></div>
      <div class="summary-list">
        <p><strong>Seats:</strong> ${r.length?r.join(`, `):`Choose seats from the map`}</p>
        <p><strong>Standard:</strong> ${l}</p>
        <p><strong>Premium:</strong> ${c.length}</p>
        <p><strong>Hold:</strong> ${a}</p>
      </div>
      <div class="summary-total">
        <span>Total</span>
        <strong>${d(i)}</strong>
      </div>
      <p class="quiet-note">Seats are held while you complete the booking. No payment is collected in this demo.</p>
      ${s?`<p class="summary-status"><i class="ph ph-check-circle" aria-hidden="true"></i> Ticket details</p>`:`<button class="button button-primary" type="button" data-go-checkout ${o?`disabled`:``}>${o?`Choose a seat first`:`Continue to details`} <i class="ph ph-arrow-right" aria-hidden="true"></i></button>`}
    </aside>
  `},te=e=>`
  <article class="ticket-card">
    <div class="grid grid-2">
      <div>
        <p class="eyebrow">E-ticket</p>
        <h2 class="title-md">${e.movieTitle}</h2>
        <p class="lead">${e.dateLabel} · ${e.time} · ${e.hallName}</p>
        <p><strong>Seats:</strong> ${e.seats.join(`, `)}</p>
        <p><strong>Order:</strong> ${e.orderId}</p>
        <p class="muted">This ticket is created to demonstrate the booking flow. No payment was collected.</p>
      </div>
      <div class="qr" aria-label="Ticket QR code"><i class="ph ph-qr-code" aria-hidden="true"></i></div>
    </div>
    <div class="cluster ticket-actions">
      <button class="button button-secondary" type="button" data-toast="Ticket added to your calendar">Add to calendar</button>
      <button class="button button-secondary" type="button" data-toast="Your PDF ticket is ready">Download ticket</button>
      <a class="button button-primary" href="/afisha/">Book another</a>
    </div>
  </article>
`,P=e=>{let t=v(`#toast-root`);if(!t)return;t.classList.add(`toast-root`);let n=document.createElement(`div`);n.className=`toast`,n.textContent=e,t.append(n),window.setTimeout(()=>n.remove(),3200)},ne=()=>{document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-toast]`);t&&P(t.dataset.toast)})},F=[{id:`midnight-archive`,title:`The Midnight Archive`,status:`now`,genres:[`Drama`,`Mystery`],duration:118,age:`16+`,rating:8.7,formatTags:[`2D`,`Premium`],posterBg:`#27312f`,description:`A patient restorer finds a reel from an unfinished film and begins to slip into somebody else’s memory.`},{id:`velvet-orbit`,title:`Velvet Orbit`,status:`now`,genres:[`Sci-fi`,`Adventure`],duration:132,age:`12+`,rating:8.5,formatTags:[`Large Screen`,`2D`],posterBg:`#263747`,description:`The crew of a private station receives a signal from the dark side of the moon and must decide whether to bring it home.`},{id:`five-centuries-of-light`,title:`Five Centuries of Light`,status:`now`,genres:[`Art lecture`,`Documentary`],duration:96,age:`6+`,rating:8.9,formatTags:[`2D`,`Talk`],posterBg:`#675d43`,description:`A visual journey through light in painting, architecture and the moving image.`},{id:`red-hall`,title:`The Red Room`,status:`now`,genres:[`Thriller`,`Neo-noir`],duration:110,age:`18+`,rating:8.2,formatTags:[`2D`],posterBg:`#4b2628`,description:`After a closed screening, a critic remains alone in the hall and notices that the film is continuing only for him.`},{id:`silent-premiere`,title:`A Silent Premiere`,status:`now`,genres:[`Romance`,`Independent`],duration:104,age:`12+`,rating:8,formatTags:[`2D`,`Subtitled`],posterBg:`#6a665d`,description:`Two strangers meet at a late silent-film screening and begin speaking only through notes on their tickets.`},{id:`last-row`,title:`The Last Row`,status:`now`,genres:[`Comedy`,`City cinema`],duration:101,age:`12+`,rating:7.8,formatTags:[`2D`],posterBg:`#3b4650`,description:`Friends buy the last seats in the room and accidentally become part of the season’s strangest premiere.`},{id:`screen-number-seven`,title:`Screen Seven`,status:`now`,genres:[`Family`,`Fantasy`],duration:112,age:`6+`,rating:8.3,formatTags:[`2D`,`Family`],posterBg:`#36534f`,description:`A young projectionist opens a room where heroes of old films step out of the screen in search of a new ending.`},{id:`sound-after-dark`,title:`Sound After Dark`,status:`now`,genres:[`Music`,`Documentary`],duration:88,age:`12+`,rating:8.6,formatTags:[`Immersive sound`,`2D`],posterBg:`#453a51`,description:`A film about the city’s midnight soundtracks and the people who hear cinema before they see the image.`},{id:`northern-cut`,title:`Northern Cut`,status:`soon`,genres:[`Drama`,`Travel`],duration:126,age:`16+`,rating:8.1,formatTags:[`2D`],posterBg:`#36556b`,description:`A director returns to the city of his childhood to cut a film from memories that never happened.`},{id:`golden-balcony`,title:`The Golden Balcony`,status:`soon`,genres:[`Period drama`,`Romance`],duration:119,age:`12+`,rating:8.4,formatTags:[`Premium`,`2D`],posterBg:`#6b5131`,description:`In an old cinema, a private box reveals versions of a film that were never released.`},{id:`morning-subtitles`,title:`Morning Subtitles`,status:`soon`,genres:[`Comedy`,`Talk`],duration:94,age:`6+`,rating:7.9,formatTags:[`Subtitled`,`2D`],posterBg:`#83624d`,description:`A festival translator accidentally changes the fate of an entire screening.`},{id:`afterimage`,title:`Afterimage`,status:`soon`,genres:[`Experimental`,`Arthouse`],duration:82,age:`16+`,rating:8.8,formatTags:[`Art`,`2D`],posterBg:`#31342f`,description:`A meditative film-essay about what remains in front of the eyes after the final credit.`}],I=e=>F.find(t=>t.id===e),re=[`All`,`Drama`,`Sci-fi`,`Art lecture`,`Premium`,`Family`,`Immersive sound`],L=e=>{let t=h().get(`date`)||o[0],n=[`All`],r=()=>{let i=s.filter(e=>e.dateKey===t),a=new Set(i.map(e=>e.movieId)),c=n.filter(e=>e!==`All`),l=F.filter(e=>e.status===`now`).filter(e=>a.has(e.id)).filter(e=>{if(!c.length)return!0;let t=[...e.genres,...e.formatTags];return c.some(e=>t.includes(e))});e.innerHTML=`
      <div class="page">
        <section class="container page-hero">
          <p class="eyebrow">Programme</p>
          <h1 class="title-lg">Films to choose from tonight</h1>
          <p class="lead">
            Choose a day and a mood, then move straight to the room: film, hall and time remain with you until the ticket.
          </p>
        </section>
        <section class="filter-shell" aria-label="Programme filters">
          <div class="container filter-stack">
            ${D(o,t)}
            <div class="filter-row">
              ${O(re,n)}
              <button class="button button-ghost filter-reset" type="button" data-reset-filters>Reset</button>
            </div>
            <p class="result-count">${l.length} films · ${i.length} screenings</p>
          </div>
        </section>
        <section class="container section">
          ${l.length?`<div class="movie-grid">${l.map(e=>E(e,i)).join(``)}</div>`:j(`No screenings found`,`Try another date or reset the filters.`,`<button class="button button-secondary" type="button" data-reset-filters>Reset filters</button>`)}
        </section>
        ${k()}
      </div>
    `,y(`[data-date]`).forEach(e=>{e.addEventListener(`click`,()=>{t=e.dataset.date,r()})}),y(`[data-filter]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.filter;t===`All`?n=[`All`]:(n=n.includes(t)?n.filter(e=>e!==t):[...n.filter(e=>e!==`All`),t],n.length||(n=[`All`])),r()})}),y(`[data-reset-filters]`).forEach(e=>{e.addEventListener(`click`,()=>{n=[`All`],r()})}),A(F,i)};r()},R=`illusion.booking.draft`,z=`illusion.booking.orders`,B=`illusion.booking.occupied`,V=(e,t)=>{try{return JSON.parse(window.localStorage.getItem(e)||window.sessionStorage.getItem(e))||t}catch{return t}},H=e=>{window.sessionStorage.setItem(R,JSON.stringify(e))},U=()=>{window.sessionStorage.removeItem(R)},W=()=>V(z,[]),G=e=>{let t=W();window.localStorage.setItem(z,JSON.stringify([e,...t].slice(0,8)))},K=e=>V(B,{})[e]||[],q=(e,t)=>{let n=V(B,{}),r=new Set(n[e]||[]);t.forEach(e=>r.add(e)),n[e]=[...r],window.localStorage.setItem(B,JSON.stringify(n))},J=(e,t,n)=>{let r=n.slice(0,1);return e.basePrice+(t.vipRows.includes(r)?180:0)},Y=()=>{let e=h(),t=e.get(`session`),n=t?c(t):null;if(n)return n;let r=e.get(`movie`);return s.find(e=>e.movieId===r)||s[0]},X=e=>{let t=Math.max(0,Math.floor((e-Date.now())/1e3));return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`},ie=e=>{let n=Y(),r=I(n.movieId),i=t(n.hallId),a=[],o=`seats`,l=null,u=Date.now()+360*1e3,p=null,h=()=>[...n.occupiedSeats,...K(n.id)],g=()=>a.reduce((e,t)=>e+J(n,i,t),0),_=()=>{H({movieId:r.id,sessionId:n.id,seats:a,total:g()})},b=e=>{n=c(e)||n,r=I(n.movieId),i=t(n.hallId),a=[],u=Date.now()+360*1e3,o=`seats`,_(),A()},x=()=>`
      <div class="surface-card session-picker">
        <p class="eyebrow">Other showtimes</p>
        <div class="showtime-list showtime-list-wide">
          ${s.filter(e=>e.movieId===r.id).slice(0,10).map(e=>{let r=t(e.hallId);return`<button class="showtime-chip ${e.id===n.id?`is-active`:``}" type="button" data-session="${e.id}">
                <span>${f(e.dateKey)} · ${e.time}</span>
                <small>${e.format} · ${r.name}</small>
              </button>`}).join(``)}
        </div>
      </div>
    `,S=()=>`
    <div class="checkout-steps" aria-label="Booking steps">
      <span class="${o===`seats`?`is-active`:``}">1. Seats</span>
      <span class="${o===`checkout`?`is-active`:``}">2. Details</span>
      <span class="${o===`ticket`?`is-active`:``}">3. Ticket</span>
    </div>
  `,C=()=>`
    <div class="page">
      <section class="container page-hero">
        <p class="eyebrow">Choose seats</p>
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
                <p class="eyebrow">Room map</p>
                <h2 class="title-md">Choose seats together</h2>
              </div>
              <span class="tag tag-gold">No account needed</span>
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
        <p class="eyebrow">Your details</p>
        <h1 class="title-lg">Where should we send the ticket?</h1>
        <p class="lead">Add an email and phone number to receive your order number. This demo does not process a bank payment.</p>
        ${S()}
      </section>
      <section class="container section booking-layout">
        <form class="booking-panel form-grid" id="checkout-form" novalidate>
          <div class="field">
            <label for="email">Email for your ticket</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required aria-describedby="email-error" />
            <span class="error-text" id="email-error" data-error-for="email"></span>
          </div>
          <div class="field">
            <label for="phone">Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="+1 212 555 0120" autocomplete="tel" required aria-describedby="phone-error" />
            <span class="error-text" id="phone-error" data-error-for="phone"></span>
          </div>
          <div class="field">
            <label for="promo">Promo code</label>
            <input id="promo" name="promo" type="text" placeholder="VELVET" />
          </div>
          <div class="field">
            <label for="method">Payment option</label>
            <select id="method" name="method">
              <option>Demo — no payment collected</option>
              <option>Pay at the box office</option>
              <option>Gift certificate</option>
            </select>
          </div>
          <label class="checkbox-row">
            <input id="terms" name="terms" type="checkbox" required aria-describedby="terms-error" />
            <span>I understand that this ticket is created to demonstrate the booking flow</span>
          </label>
          <span class="error-text" id="terms-error" data-error-for="terms"></span>
          <div class="cluster">
            <button class="button button-secondary" type="button" data-back-seats>Back to seats</button>
            <button class="button button-primary" type="submit">Get my ticket</button>
          </div>
        </form>
        ${N({movie:r,session:n,hall:i,selectedSeats:a,total:g(),timerText:X(u),ctaDisabled:!1,isCheckout:!0})}
      </section>
    </div>
  `,T=()=>`
    <div class="page">
      <section class="container page-hero">
        <p class="eyebrow">Your ticket is ready</p>
        <h1 class="title-lg">Your seats are saved</h1>
        <p class="lead">Film, screening, row and total stay visible right through the final step.</p>
        ${S()}
      </section>
      <section class="container section">
        ${te(l)}
      </section>
    </div>
  `,E=()=>{let e=v(`#summary-root`);e&&(e.innerHTML=N({movie:r,session:n,hall:i,selectedSeats:a,total:g(),timerText:X(u),ctaDisabled:a.length===0}),v(`[data-go-checkout]`,e)?.addEventListener(`click`,()=>{a.length&&(o=`checkout`,A())}))},D=()=>{y(`[data-session]`).forEach(e=>{e.addEventListener(`click`,()=>b(e.dataset.session))}),y(`[data-seat]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.seat;a=a.includes(t)?a.filter(e=>e!==t):[...a,t],_(),A()}),e.addEventListener(`keydown`,t=>{let n=y(`[data-seat]:not(:disabled)`),r=n.indexOf(e),a=i.seatsPerRow,o={ArrowRight:1,ArrowLeft:-1,ArrowDown:a,ArrowUp:-a};o[t.key]&&(t.preventDefault(),n[Math.max(0,Math.min(n.length-1,r+o[t.key]))]?.focus())})}),v(`[data-go-checkout]`)?.addEventListener(`click`,()=>{a.length&&(o=`checkout`,A())})},O=()=>{v(`[data-back-seats]`)?.addEventListener(`click`,()=>{o=`seats`,A()}),v(`#checkout-form`)?.addEventListener(`submit`,e=>{e.preventDefault();let t=e.currentTarget,s=t.email.value.trim(),c=t.phone.value.trim(),u={email:s.includes(`@`)?``:`Enter an email for your ticket.`,phone:c.length>=7?``:`Enter a phone number.`,terms:t.terms.checked?``:`Confirm the booking terms.`};if(Object.entries(u).forEach(([e,n])=>{let r=v(`[data-error-for="${e}"]`),i=t.elements[e];r&&(r.textContent=n),i&&i.setAttribute(`aria-invalid`,String(!!n))}),Object.values(u).some(Boolean))return;let p=t.querySelector(`button[type="submit"]`);p.disabled=!0,p.textContent=`Creating your ticket…`,window.setTimeout(()=>{l={orderId:m(),movieTitle:r.title,dateLabel:f(n.dateKey),time:n.time,hallName:i.name,seats:a,total:d(g()),email:s,phone:c},G(l),q(n.id,a),U(),o=`ticket`,A()},650)})},k=()=>{window.clearInterval(p),o!==`ticket`&&(p=window.setInterval(()=>{if(Date.now()>u){a=[],u=Date.now()+360*1e3,P(`Your hold has expired. Please choose seats again.`),A();return}E()},1e3))},A=()=>{if(!n||!r||!i){e.innerHTML=`<div class="page container">${j(`Screening not found`,`Return to the programme and choose another screening.`,`<a class="button button-primary" href="/afisha/">Open programme</a>`)}</div>`;return}o===`checkout`?(e.innerHTML=w(),O()):o===`ticket`?e.innerHTML=T():(e.innerHTML=C(),D()),k()};_(),A()},Z=e=>{let t=F[0],n=F.filter(e=>e.status===`now`).slice(0,3),r=s.filter(e=>e.dateKey===o[0]).slice(0,4),i=s.find(e=>e.movieId===t.id)||s[0];e.innerHTML=`
    <div class="moon-home">
      <section class="moon-hero" aria-label="ILLUSION Cinema House">
        <img class="moon-hero-image" src="/images/cinema-hero.png" alt="An open-air film screen beneath a moonlit stone arch" />
        <div class="moon-hero-shade" aria-hidden="true"></div>
        <div class="moon-hero-content">
          <p class="moon-kicker">ILLUSION / CINEMA HOUSE</p>
          <h1>A little closer<br />to the <em>light.</em></h1>
          <p class="moon-lead">A considered repertory of films, late conversations, and a seat kept just for you.</p>
          <div class="moon-actions">
            <a class="moon-button moon-button-light" href="/afisha/">Choose a screening <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>
            <a class="moon-text-link" href="/about/">Inside ILLUSION <i class="ph ph-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <aside class="moon-session-card" aria-label="Featured screening">
          <div class="moon-session-top"><span>Tonight</span><span>${i.time}</span></div>
          <p class="moon-session-type">PREMIERE 02 · ${i.format}</p>
          <h2>${t.title}</h2>
          <p>${t.genres.join(` · `)} · ${t.duration} min</p>
          <div class="moon-session-bottom">
            <strong>From ${d(i.basePrice)}</strong>
            <a href="/booking/?movie=${t.id}&session=${i.id}" aria-label="Reserve seats for ${t.title}">Reserve seats <i class="ph ph-arrow-right" aria-hidden="true"></i></a>
          </div>
        </aside>
        <div class="moon-scroll-note"><span></span>Scroll to the programme</div>
      </section>

      <section class="moon-intro container">
        <div><p class="moon-kicker dark">THE EVENING, EDITED</p><span class="moon-index">01</span></div>
        <h2>One clear route from a film you feel drawn to, to a seat you’ll remember.</h2>
        <p>ILLUSION pairs a living programme with a calm, transparent booking experience. Nothing competes with the anticipation of the room going dark.</p>
      </section>

      <section class="moon-programme container">
        <div class="moon-section-heading">
          <div><p class="moon-kicker dark">TONIGHT AT ILLUSION</p><h2>Take your <em>time.</em></h2></div>
          <a class="moon-text-link dark-link" href="${_(o[0])}">Full programme <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>
        </div>
        <div class="moon-programme-list">
          ${r.map((e,t)=>{let n=F.find(t=>t.id===e.movieId);return`<a class="moon-programme-row" href="/booking/?movie=${n.id}&session=${e.id}">
              <span class="moon-row-no">0${t+1}</span>
              <strong>${n.title}</strong>
              <span>${n.genres[0]}</span>
              <span>${e.time}</span>
              <i class="ph ph-arrow-up-right" aria-hidden="true"></i>
            </a>`}).join(``)}
        </div>
      </section>

      <section class="moon-atelier container">
        <div class="moon-atelier-image"><img src="/images/repertoire-reel.png" alt="A grand piano in the darkened ILLUSION auditorium" /></div>
        <div class="moon-atelier-copy">
          <p class="moon-kicker">AFTER THE CREDITS</p>
          <h2>The cinema is a place for the feeling that remains.</h2>
          <p>Festival discoveries, archive screenings and small events stay with you longer when the room is designed to let them breathe.</p>
          <a class="moon-button moon-button-dark" href="/news/">Discover the journal <i class="ph ph-arrow-right" aria-hidden="true"></i></a>
        </div>
      </section>

      <section class="moon-selection container">
        <div class="moon-section-heading">
          <div><p class="moon-kicker dark">NOW SHOWING</p><h2>Make it a<br /><em>night out.</em></h2></div>
        </div>
        <div class="movie-grid moon-film-grid">${n.map(e=>E(e,s)).join(``)}</div>
      </section>
      ${k()}
    </div>
  `,A(F,s)},ae=[{id:`night-screenings`,title:`An after-hours independent screening`,day:`12`,month:`July`,time:`23:30`,category:`Night cinema`,hall:`Studio 3`,status:`Tickets available`,text:`A selection of intimate films with a brief curator introduction and a quiet conversation after the screening.`},{id:`lounge-menu`,title:`A new menu for evening screenings`,day:`9`,month:`July`,time:`18:00`,category:`Menu`,hall:`Lounge 1`,status:`Available today`,text:`Warm plates and desserts can be ordered to your seat before the film begins.`},{id:`family-mornings`,title:`Family morning screenings`,day:`13`,month:`July`,time:`11:00`,category:`Family`,hall:`Premiere 2`,status:`Seats available`,text:`Gentler sound, earlier showtimes and a separate waiting area for guests with children.`},{id:`art-lecture`,title:`A talk on light in cinema`,day:`16`,month:`July`,time:`19:20`,category:`Talk`,hall:`Studio 3`,status:`Coming soon`,text:`A film scholar explains how light directs the viewer’s attention in classic and contemporary cinema.`}],oe=[{name:`Anna`,title:`Booking never interrupts the evening`,text:`I loved that the film, room, seats and total stay visible until the final step.`,rating:5,detail:`The Midnight Archive · Lounge 1`},{name:`Mark`,title:`The room map reads instantly`,text:`Premium rows and unavailable seats are clear without help, and the order total stays close.`,rating:5,detail:`Velvet Orbit · Premiere 2`},{name:`Lina`,title:`A calm visual experience on mobile`,text:`The dark interface feels like a cinema but still makes choosing a screening quick on a phone.`,rating:4.8,detail:`The Last Row · Lounge 1`},{name:`Daniel`,title:`You can always see what happens next`,text:`The right screening opens from the programme, so there is no need to find the film and time again.`,rating:4.9,detail:`Five Centuries of Light · Studio 3`},{name:`Sofia`,title:`Fewer decisions before the final step`,text:`First you choose seats, then leave your details. The order is simple and never overwhelming.`,rating:4.7,detail:`A Silent Premiere · Studio 3`}],se=e=>{let[t,...n]=F.filter(e=>e.status===`soon`);e.innerHTML=`
    <div class="page">
      <section class="container page-hero">
        <p class="eyebrow">Coming soon</p>
        <h1 class="title-lg">New films, arriving in the programme</h1>
        <p class="lead">
          Keep an eye on what is next: opening date, genre and an easy way to be first in the room.
        </p>
      </section>
      <section class="container section soon-layout">
        <article class="soon-feature surface-card">
          <div>
            <p class="eyebrow">Next premiere</p>
            <h2>${t.title}</h2>
            <p>${t.description}</p>
            <div class="meta-line">
              <span>${t.age}</span>
              <span>${t.duration} min</span>
              <span>${t.genres.join(` · `)}</span>
            </div>
          </div>
          <div class="soon-date">
            <span>18</span>
            <small>August</small>
          </div>
          <button class="button button-primary" type="button" data-toast="We will keep this premiere on your list">Remind me</button>
        </article>
        <div class="soon-list">
          ${n.map((e,t)=>`
                <article class="surface-card soon-card">
                  <div>
                    <p class="eyebrow">${t===0?`Tickets from July 24`:t===1?`Tickets from August 2`:`Tickets soon`}</p>
                    <h2>${e.title}</h2>
                    <p>${e.description}</p>
                  </div>
                  <button class="button button-secondary" type="button" data-open-movie="${e.id}">Film notes</button>
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
          <p class="eyebrow">Our house</p>
          <h1 class="title-lg">ILLUSION makes going to the cinema a small evening ritual</h1>
          <p class="lead">
            We removed the unnecessary rush from booking: the film, room, seats and total remain visible, while the house stays intimate and warm.
          </p>
          <div class="cluster">
            <a class="button button-primary" href="/afisha/">Choose a screening</a>
            <a class="button button-secondary" href="/news/">This week at ILLUSION</a>
          </div>
        </div>
        <div class="venue-photo" role="img" aria-label="The ILLUSION auditorium after hours"></div>
      </section>
      <section class="container section">
        <div class="grid grid-3">
          <article class="surface-card info-card">
            <p class="eyebrow">Lounge 1</p>
            <h2>Soft landing</h2>
            <p class="muted">Wide seats, low light and the quiet anticipation before an evening screening.</p>
          </article>
          <article class="surface-card info-card">
            <p class="eyebrow">Premiere 2</p>
            <h2>Grand hall</h2>
            <p class="muted">Premieres, central rows and a seat map that never asks you to guess.</p>
          </article>
          <article class="surface-card info-card">
            <p class="eyebrow">Studio 3</p>
            <h2>Small gatherings</h2>
            <p class="muted">Independent cinema, conversations and intimate talks for guests who love context.</p>
          </article>
        </div>
      </section>
      <section class="container section">
        <div class="grid grid-3 steps">
          <article class="surface-card step-card">
            <h3>Choose an evening</h3>
            <p class="muted">Date, genre and format are clear before you begin to book.</p>
          </article>
          <article class="surface-card step-card">
            <h3>Find the right seat</h3>
            <p class="muted">The room map makes unavailable, accessible and premium seats unmistakable.</p>
          </article>
          <article class="surface-card step-card">
            <h3>Keep the ticket</h3>
            <p class="muted">When the booking is done, you receive an e-ticket and order number.</p>
          </article>
        </div>
      </section>
    </div>
  `},le=e=>{let[t,...n]=ae;e.innerHTML=`
    <div class="page">
      <section class="container page-hero">
        <p class="eyebrow">Journal</p>
        <h1 class="title-lg">Premieres, talks and after-hours evenings</h1>
        <p class="lead">
          Choose not only a film but an occasion: a late screening, family morning, curator talk or a new menu.
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
          <a class="button button-primary" href="/afisha/">Choose a screening</a>
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
        <p class="eyebrow">Reviews</p>
        <h1 class="title-lg">What guests notice when they book</h1>
        <p class="lead">
          Guests point to the details that matter: an easy room map, a visible total and no extra steps before the ticket.
        </p>
      </section>
      <section class="container section review-layout">
        <article class="surface-card review-feature">
          <p class="review-score">${t.rating}/5</p>
          <h2>${t.title}</h2>
          <p>${t.text}</p>
          <p class="muted">${t.detail}</p>
          <strong>${t.name}</strong>
          <a class="button button-primary" href="/afisha/">Choose a screening</a>
        </article>
        <div class="review-side">
          <div class="surface-card review-summary">
            <p class="eyebrow">Average rating</p>
            <h2>4.9/5</h2>
            <p class="muted">Guests most often mention the clear room map, visible price and short route to a ticket.</p>
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
          <p class="eyebrow">${n?`Create account`:`Sign in`}</p>
          <h1 class="title-lg">${n?`Keep tickets and favourite seats close`:`Sign in for a faster booking`}</h1>
          <p class="lead">
            An account is never required to book. Use a profile only to keep an order history and return to your favourite seats.
          </p>
          <a class="button button-secondary" href="/afisha/">Continue as guest</a>
        </div>
        <form class="booking-panel form-grid auth-form" id="auth-form" novalidate>
          ${n?`<div class="field"><label for="name">Name</label><input id="name" name="name" placeholder="Your name" autocomplete="name" required aria-describedby="name-error" /><span class="error-text" id="name-error" data-error-for="name"></span></div>`:``}
          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required aria-describedby="auth-email-error" />
            <span class="error-text" id="auth-email-error" data-error-for="email"></span>
          </div>
          <div class="field">
            <label for="password">Password</label>
            <input id="password" name="password" type="password" placeholder="At least 6 characters" autocomplete="${n?`new-password`:`current-password`}" required aria-describedby="password-error" />
            <span class="error-text" id="password-error" data-error-for="password"></span>
          </div>
          <button class="button button-primary" type="submit">
            ${n?`Create account`:`Sign in`}
          </button>
          <a class="button button-secondary" href="${n?`/auth/login/`:`/auth/register/`}">
            ${n?`Already have an account`:`Create account`}
          </a>
          <p class="quiet-note" id="auth-status" aria-live="polite"></p>
        </form>
      </section>
    </div>
  `;let r=e.querySelector(`#auth-form`),i=e.querySelector(`#auth-status`);r?.addEventListener(`submit`,t=>{t.preventDefault();let a={...n?{name:r.name.value.trim().length>1?``:`Enter your name.`}:{},email:r.email.value.includes(`@`)?``:`Enter a valid email.`,password:r.password.value.length>=6?``:`Password must have at least 6 characters.`};if(Object.entries(a).forEach(([t,n])=>{let i=e.querySelector(`[data-error-for="${t}"]`),a=r.elements[t];i&&(i.textContent=n),a&&a.setAttribute(`aria-invalid`,String(!!n))}),Object.values(a).some(Boolean)){i&&(i.textContent=`Check the highlighted fields.`);return}let o=r.querySelector(`button[type="submit"]`);o.disabled=!0,o.textContent=n?`Creating account…`:`Signing in…`,window.setTimeout(()=>{o.disabled=!1,o.textContent=n?`Create account`:`Sign in`,i&&(i.textContent=n?`Account ready. You can continue to the programme.`:`You are signed in. You can continue to the programme.`)},650)})},$=document.body.dataset.page||`home`,de=document.querySelector(`#app`);document.querySelector(`#site-header`).innerHTML=b($),document.querySelector(`#site-footer`).innerHTML=S(),({home:Z,afisha:L,booking:ie,soon:se,about:ce,news:le,reviews:ue,login:e=>Q(e,`login`),register:e=>Q(e,`register`)}[$]||Z)(de),x(),ne();