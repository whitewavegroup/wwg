
let CONFIG = {};
let LANG = 'en';

async function loadContent() {
  const res = await fetch('content.json');
  CONFIG = await res.json();
  LANG = localStorage.getItem('wwg_lang') || CONFIG.default_lang || 'en';
  applyContent();
}

function t(path) {
  const parts = path.split('.');
  let cur = CONFIG[LANG];
  for (const p of parts) { cur = cur?.[p]; }
  return cur;
}

function setLang(lang){
  LANG = lang;
  localStorage.setItem('wwg_lang', LANG);
  applyContent();
}

function applyContent() {
  // Site base
  document.title = t('site.title') + ' – ' + t('site.tagline');
  // Nav
  document.querySelector('#navServices').innerText = t('nav.services');
  document.querySelector('#navWhy').innerText = t('nav.why');
  document.querySelector('#navPlatforms').innerText = t('nav.platforms');
  document.querySelector('#navLeadership').innerText = t('nav.leadership');
  document.querySelector('#navStart').innerText = t('nav.start');
  document.querySelector('#langToggle').innerText = t('nav.toggle');

  // Hero
  document.querySelector('#kicker').innerText = t('hero.kicker');
  document.querySelector('#heroHeadline').innerText = t('hero.headline');
  document.querySelector('#heroSub').innerText = t('hero.subhead');
  document.querySelector('#heroPrimary').innerText = t('hero.primary_cta');
  document.querySelector('#heroSecondary').innerText = t('hero.secondary_cta');
  document.querySelector('#heroMeta').innerText = t('hero.meta');
  document.querySelector('#quickBadge').innerText = t('hero.badge');
  document.querySelector('#certs').innerText = t('hero.certs');
  const factsWrap = document.querySelector('#facts'); factsWrap.innerHTML='';
  t('hero.facts').forEach(f => { const li=document.createElement('li'); li.innerText=f; factsWrap.appendChild(li); });

  // About
  document.querySelector('#aboutTitle').innerText = t('about.title');
  document.querySelector('#aboutBody').innerText = t('about.body');
  document.querySelector('#engageTitle').innerText = t('about.engage_title');
  const engageWrap=document.querySelector('#engageList'); engageWrap.innerHTML='';
  t('about.engage').forEach(it=>{ const li=document.createElement('li'); li.innerText=it; engageWrap.appendChild(li); });

  // Services
  document.querySelector('#servicesTitle').innerText = t('services.title');
  const svcWrap=document.querySelector('#servicesCards'); svcWrap.innerHTML='';
  t('services.items').forEach(s=>{ const el=document.createElement('div'); el.className='card'; el.innerHTML=`<h3>${s.name}</h3><p class="small">${s.desc}</p>`; svcWrap.appendChild(el); });

  // Why
  document.querySelector('#whyTitle').innerText = t('why.title');
  const whyList=document.querySelector('#whyList'); whyList.innerHTML='';
  t('why.points').forEach(p=>{ const li=document.createElement('li'); li.innerText=p; whyList.appendChild(li); });
  document.querySelector('#resultsTitle').innerText = t('why.results_title');
  const resList=document.querySelector('#resultsList'); resList.innerHTML='';
  t('why.results').forEach(p=>{ const li=document.createElement('li'); li.innerText=p; resList.appendChild(li); });

  // Divisions
  document.querySelector('#divisionsTitle').innerText = t('divisions.title');
  const divWrap=document.querySelector('#divisionsCards'); divWrap.innerHTML='';
  t('divisions.cards').forEach(c=>{ const el=document.createElement('div'); el.className='card'; el.innerHTML=`<span class="badge">Division</span><h3 style="margin-top:8px">${c.name}</h3><p class="small">${c.desc}</p>`; divWrap.appendChild(el); });

  // Leader
  document.querySelector('#leaderTitle').innerText = t('leader.title');
  document.querySelector('#leaderName').innerText = t('leader.name');
  document.querySelector('#leaderRole').innerText = t('leader.role');
  const lb=document.querySelector('#leaderBullets'); lb.innerHTML='';
  t('leader.bullets').forEach(b=>{ const li=document.createElement('li'); li.innerText=b; lb.appendChild(li); });
  document.querySelector('#leaderCtaTitle').innerText = t('leader.cta_title');
  document.querySelector('#leaderCtaSub').innerText = t('leader.cta_sub');

  // Process / CTA
  document.querySelector('#processTitle').innerText = t('process.title');
  const steps=document.querySelector('#processSteps'); steps.innerHTML='';
  t('process.steps').forEach((s,i)=>{ const li=document.createElement('li'); li.innerText=(i+1)+'. '+s; steps.appendChild(li); });
  document.querySelector('#ctaHeadline').innerText = t('cta.headline');
  document.querySelector('#ctaSub').innerText = t('cta.sub');
  document.querySelectorAll('.ctaStart').forEach(b=> b.innerText = t('cta.button'));

  // Footer
  document.querySelector('#footerCopy').innerText = t('footer.copyright');

  // Form labels/steps
  document.querySelector('#s1Title').innerText = t('form.step1');
  document.querySelector('#labelCompany').childNodes[0].textContent = t('form.company') + ' ';
  document.querySelector('#labelWebsite').childNodes[0].textContent = t('form.website') + ' ';
  document.querySelector('#labelIndustry').childNodes[0].textContent = t('form.industry') + ' ';
  document.querySelector('#s2Title').innerText = t('form.step2');
  const goals = t('form.goals');
  document.querySelectorAll('input[name="goals"]').forEach((inp, i)=> {
    const label = inp.parentElement;
    inp.value = goals[i];
    label.childNodes[1].textContent = ' ' + goals[i];
  });
  document.querySelector('#btnBack').innerText = t('form.back');
  document.querySelector('#btnNext1').innerText = t('form.next');
  document.querySelector('#btnCancel').innerText = t('form.cancel');
  document.querySelector('#btnBack2').innerText = t('form.back');
  document.querySelector('#btnNext2').innerText = t('form.next');
  document.querySelector('#s3Title').innerText = t('form.step3');
  document.querySelector('#labelName').childNodes[0].textContent = t('form.name') + ' ';
  document.querySelector('#labelEmail').childNodes[0].textContent = t('form.email') + ' ';
  document.querySelector('#labelPhone').childNodes[0].textContent = t('form.phone') + ' ';
  document.querySelector('#labelNotes').childNodes[0].textContent = t('form.notes') + ' ';
  document.querySelector('#s4Title').innerText = t('form.review');
  document.querySelector('#reviewHint').innerText = t('form.review_hint');
  document.querySelector('#btnBack3').innerText = t('form.back');
  document.querySelector('#btnSend').innerText = t('form.send');
  document.querySelector('#ppHint').innerText = t('form.pp_hint');
}

document.addEventListener('DOMContentLoaded', () => {
  loadContent();
  document.querySelectorAll('.ctaStart').forEach(btn => btn.addEventListener('click', openModal));
  document.getElementById('heroPrimary').addEventListener('click', openModal);
  document.getElementById('heroSecondary').addEventListener('click', () => document.getElementById('services').scrollIntoView({behavior:'smooth'}));
  document.getElementById('langToggle').addEventListener('click', () => setLang(LANG === 'en' ? 'es' : 'en'));
  setupFunnel();
});

// Funnel logic
let step = 0;
function openModal(){ document.getElementById('funnel').classList.add('active'); updateProgress(); showStep(0); }
function closeModal(){ document.getElementById('funnel').classList.remove('active'); }
function showStep(n){
  step = n;
  document.querySelectorAll('.step').forEach((s,i)=>{ s.classList.toggle('active', i===n); });
  updateProgress();
}
function nextStep(){ if(step<3){ showStep(step+1);} }
function prevStep(){ if(step>0){ showStep(step-1);} }
function updateProgress(){ const pct = ((step)/3)*100; document.getElementById('progressFill').style.width = pct+'%'; }

// Gather and compose email
function sendSummary(){
  const data = {
    company: document.getElementById('f_company').value.trim(),
    website: document.getElementById('f_website').value.trim(),
    industry: document.getElementById('f_industry').value.trim(),
    goals: Array.from(document.querySelectorAll('input[name="goals"]:checked')).map(x=>x.value),
    name: document.getElementById('f_name').value.trim(),
    email: document.getElementById('f_email').value.trim(),
    phone: document.getElementById('f_phone').value.trim(),
    notes: document.getElementById('f_notes').value.trim()
  };
  const body = encodeURIComponent(
`New Strategy Session Request

Business
- Company: ${data.company}
- Website: ${data.website}
- Industry: ${data.industry}

Goals
- ${data.goals.join(', ') || 'N/A'}

Contact
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}

Notes
${data.notes || '—'}`
  );
  const to = CONFIG.site.contact_email || 'info@example.com';
  const subject = encodeURIComponent('White Wave Group – Strategy Session Request');
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}

// Utility to close modal when clicking backdrop
document.addEventListener('click', (e)=>{
  const m = document.getElementById('funnel');
  if(e.target === m){ closeModal(); }
});

function setupFunnel(){ /* reserved for future hooks */ }
