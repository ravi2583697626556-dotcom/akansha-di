/* ─── Starfield ──────────────────────────────── */
(function(){
  const sf = document.getElementById('starfield');
  const palettes = ['rgba(255,200,255,','rgba(200,170,255,','rgba(255,170,230,','rgba(230,200,255,','rgba(255,255,255,'];
  for(let i = 0; i < 130; i++){
    const s   = document.createElement('div');
    s.className = 'star';
    const sz  = 0.4 + Math.random() * 2.8;
    const col = palettes[Math.floor(Math.random() * palettes.length)];
    const op  = 0.35 + Math.random() * 0.65;
    s.style.cssText =
      `top:${Math.random()*100}%;left:${Math.random()*100}%;` +
      `width:${sz}px;height:${sz}px;` +
      `background:${col}${op});` +
      `box-shadow:0 0 ${sz*2.5}px ${col}0.5);` +
      `animation-duration:${1.2 + Math.random()*4.5}s;` +
      `animation-delay:${Math.random()*7}s;`;
    sf.appendChild(s);
  }
})();

/* ─── Overlay sparkles ───────────────────────── */
(function(){
  const c     = document.getElementById('sparkles');
  const chars = ['✦','✧','·','✫','✬','◦','✴','✵','⁎','✷','⋆','✸','⁑'];
  const cols  = ['rgba(200,130,255,','rgba(233,30,140,','rgba(175,95,255,','rgba(255,140,215,'];
  for(let i = 0; i < 100; i++){
    const s   = document.createElement('span');
    s.className = 'spk';
    const col = cols[Math.floor(Math.random()*cols.length)];
    const op  = 0.5 + Math.random()*0.5;
    s.textContent = chars[Math.floor(Math.random()*chars.length)];
    s.style.cssText =
      `top:${Math.random()*100}%;left:${Math.random()*100}%;` +
      `font-size:${4 + Math.random()*18}px;` +
      `color:${col}${op});` +
      `text-shadow:0 0 9px ${col}0.65);` +
      `animation-duration:${1.2 + Math.random()*4}s;` +
      `animation-delay:${Math.random()*6}s;`;
    c.appendChild(s);
  }
})();

/* ─── Floating particles across whole page ───── */
(function(){
  const cols = ['rgba(195,85,255,','rgba(230,25,140,','rgba(140,45,220,','rgba(255,110,200,'];
  for(let i = 0; i < 22; i++){
    const p   = document.createElement('div');
    p.className = 'floatdot';
    const sz  = 1.5 + Math.random()*3.5;
    const col = cols[Math.floor(Math.random()*cols.length)];
    const drift = (Math.random()-0.5)*90;
    p.style.cssText =
      `bottom:-6%;left:${Math.random()*100}%;` +
      `width:${sz}px;height:${sz}px;` +
      `background:${col}0.65);` +
      `box-shadow:0 0 ${sz*4}px ${col}0.45);` +
      `--drift:${drift}px;` +
      `animation-duration:${5 + Math.random()*9}s;` +
      `animation-delay:${Math.random()*12}s;`;
    document.body.appendChild(p);
  }
})();

/* ─── Envelope sequence ─────────────────────── */
const flap    = document.getElementById('envFlap');
const card    = document.getElementById('envCard');
const msg     = document.getElementById('envMsg');
const hint    = document.getElementById('envHint');
const overlay = document.getElementById('envOverlay');
const main    = document.getElementById('mainPage');
let opened    = false;

function openPage(){
  if(opened) return; opened = true;
  overlay.classList.add('out');
  main.classList.add('visible');
  setTimeout(() => overlay.style.display='none', 1500);
}

setTimeout(() => flap.classList.add('open'),  950);
setTimeout(() => card.classList.add('rise'),  1980);
setTimeout(() => msg.classList.add('show'),   2900);
setTimeout(() => hint.classList.add('show'),  3700);
setTimeout(openPage,                          8000);
overlay.addEventListener('click', openPage);

/* ─── Scroll reveal ─────────────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ─── Mouse glow ────────────────────────────── */
const glow = document.getElementById('mglow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});
