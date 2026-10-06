const D = window.MODEL_DATA;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const pct = x => `${(x*100).toFixed(1)}%`;
const fmt = x => Number(x).toFixed(3);
const ball = (n, hit=false) => `<span class="ball${hit?' hit':''}">${String(n).padStart(2,'0')}</span>`;

$('#cutoffText').textContent = `Data cutoff · ${D.meta.dataCutoff}`;
$('#v1Status').textContent = D.status.v1.code.replaceAll('_',' ');
$('#v2Status').textContent = D.status.v2.code.replaceAll('_',' ');
$('#v3Status').textContent = D.status.v3.code.replaceAll('_',' ');

const v1_2019=D.accuracy.find(x=>x.model==='V1'&&x.period.startsWith('2019'));
const v1_2026=D.accuracy.find(x=>x.model==='V1'&&x.period.startsWith('2026'));
const v2_2019=D.accuracy.find(x=>x.model==='V2'&&x.period.startsWith('2019'));
const v2_2026=D.accuracy.find(x=>x.model==='V2'&&x.period.startsWith('2026'));
const v3_2019=D.accuracy.find(x=>x.model==='V3'&&x.period.startsWith('2019'));
const v3_2026=D.accuracy.find(x=>x.model==='V3'&&x.period.startsWith('2026'));
const metrics=[
  ['Fair Top-8 baseline',fmt(D.meta.baselineHits),'expected hits / draw',''],
  ['V1 · 2026 holdout',fmt(v1_2026.meanHits),`${pct(v1_2026.rate)} · pre-draw`,'bad'],
  ['V2 · 2026 structural',fmt(v2_2026.meanHits),`${pct(v2_2026.rate)} · same-draw`,'warn'],
  ['V3 · 2026 holdout',fmt(v3_2026.meanHits),`${pct(v3_2026.rate)} · adaptive pre-draw`,v3_2026.meanHits>D.meta.baselineHits?'good':'bad']
];
$('#metricGrid').innerHTML=metrics.map(m=>`<div class="metric-card"><div class="label">${m[0]}</div><div class="value ${m[3]}">${m[1]}</div><div class="sub">${m[2]}</div></div>`).join('');

function renderBars(){
  $('#accuracyBars').innerHTML=D.accuracy.map(a=>{
    const width=Math.min(100,a.meanHits/4*100); return `<div class="bar-row"><div class="bar-label">${a.model} · ${a.period.replace(' holdout','')}</div><div class="bar-track"><span class="baseline-mark"></span><div class="bar-fill ${a.model==='V2'?'v2':a.model==='V3'?'v3':''}" style="width:${width}%"></div></div><div class="bar-value">${a.meanHits.toFixed(3)}</div></div>`
  }).join('');
}
renderBars();

function consensus(model){
  const counts=Object.fromEntries(Array.from({length:36},(_,i)=>[i+1,0]));
  D.forecasts[model].sets.forEach(s=>s.numbers.forEach(n=>counts[n]++));
  $('#numberGrid').innerHTML=Object.entries(counts).map(([n,c])=>`<div class="number-cell" data-count="${c}">${String(n).padStart(2,'0')}<small>${c||''}</small></div>`).join('');
}
consensus('v3'); $('#consensusSelect').addEventListener('change',e=>consensus(e.target.value));

function renderForecast(model){
  const f=D.forecasts[model];
  $('#forecastEyebrow').textContent=model==='v1'?'V1 PRE-DRAW':model==='v2'?'V2 EXPERIMENTAL':'V3 ADAPTIVE PRE-DRAW';
  $('#forecastTitle').textContent=f.label;
  $('#forecastDescription').textContent=f.description;
  $('#forecastGate').textContent=model==='v2'?'EXPERIMENTAL · GATE FAILED':model==='v3'?'BASELINE GUARDED · NO VERIFIED EDGE':'NO VERIFIED EDGE';
  $('#forecastSets').innerHTML=f.sets.map(s=>`<div class="set-card"><div class="set-index">Set ${s.id}</div><div><div class="balls">${s.numbers.map(n=>ball(n)).join('')}</div><div class="set-score">Mean model score · ${pct(s.score)}</div></div><button class="copy-btn" data-copy="${s.numbers.map(n=>String(n).padStart(2,'0')).join(' ')}">Copy</button></div>`).join('');
  const vals=f.top12.map(x=>x.score); const min=Math.min(...vals), max=Math.max(...vals);
  $('#topScores').innerHTML=f.top12.map(x=>{const w=18+82*((x.score-min)/(max-min||1)); return `<div class="score-item"><span class="score-num">${String(x.number).padStart(2,'0')}</span><div class="mini-track"><div class="mini-fill" style="width:${w}%"></div></div><span class="score-pct">${pct(x.score)}</span></div>`}).join('');
  $('#scoreNote').textContent=model==='v1'?'Scores are calibrated marginal probabilities from the V1 rolling-frequency model.':model==='v2'?'V2 scores are experimental expected structural probabilities produced by forecasting 4D leading-prefix presence from the most recent 50 4D draws; this bridge has not shown a stable holdout edge.':`V3 scores blend seven rolling horizons plus a uniform expert. Current confidence guard: ${Math.round(f.guard*100)}%. Recent raw 30-draw Brier ${f.recentRawBrier30.toFixed(6)} vs uniform ${f.uniformBrier.toFixed(6)}.`;
  $$('.copy-btn').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);const old=b.textContent;b.textContent='Copied';setTimeout(()=>b.textContent=old,900)}catch{}});
}
renderForecast('v3');
$$('.model-btn').forEach(btn=>btn.addEventListener('click',()=>{$$('.model-btn').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderForecast(btn.dataset.model)}));

$('#accuracyTable').innerHTML=D.accuracy.map(a=>{const delta=a.meanHits-D.meta.baselineHits;return `<tr><td><strong>${a.model}</strong></td><td>${a.period}</td><td>${a.type}</td><td>${a.draws}</td><td><strong>${a.meanHits.toFixed(3)}</strong></td><td>${pct(a.rate)}</td><td class="delta ${delta>=0?'up':'down'}">${delta>=0?'+':''}${delta.toFixed(3)}</td><td>${a.brier.toFixed(5)}</td><td>${a.logloss.toFixed(5)}</td></tr>`}).join('');

function renderHistory(model){
  $('#historyEyebrow').textContent=model==='v2'?'SAME-DRAW STRUCTURAL':'PRE-DRAW';
  $('#historyTitle').textContent=model==='v1'?'Last five historical V1 predictions':model==='v2'?'Last five V2 structural diagnostic selections':'Last five V3 adaptive predictions';
  $('#historyPill').textContent=model==='v2'?'Uses same-draw 4D':model==='v3'?'Adaptive · guardrail':'Chronological';
  $('#historyRows').innerHTML=D.history[model].map(r=>{const set=new Set(r.actual);return `<div class="history-row"><div class="history-date">${r.date}</div><div class="history-group"><label>Selected</label><div class="history-balls">${r.selected.map(n=>ball(n,set.has(n))).join('')}</div></div><div class="history-group actual"><label>Actual</label><div class="history-balls">${r.actual.map(n=>ball(n)).join('')}</div></div><div class="hit-badge">${r.hits}<span>hits</span></div></div>`}).join('');
}
renderHistory('v3');
$$('.history-btn').forEach(btn=>btn.addEventListener('click',()=>{$$('.history-btn').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderHistory(btn.dataset.model)}));

$('#v1Method').innerHTML=D.methods.v1.map(x=>`<li>${x}</li>`).join('');
$('#v2Method').innerHTML=D.methods.v2.map(x=>`<li>${x}</li>`).join('');
$('#v3Method').innerHTML=D.methods.v3.map(x=>`<li>${x}</li>`).join('');

$('#dataCutoffPill').textContent=`Cutoff ${D.dataUsed.cutoff}`;
const dataItems=[
  ['V3 row-level Life',D.dataUsed.rowLevelDraws,'draws used in current V3 research package'],
  ['2018–2019 sequence',D.dataUsed.development1819.draws,`${D.dataUsed.development1819.from} → ${D.dataUsed.development1819.to}`],
  ['2026 sequence',D.dataUsed.recent2026.draws,`${D.dataUsed.recent2026.from} → ${D.dataUsed.recent2026.to}`],
  ['V2 4D process sample',D.dataUsed.v2FourDProcess.draws,'underlying 4D draws']
];
$('#dataCards').innerHTML=dataItems.map(x=>`<div class="data-card"><strong>${x[1]}</strong><span>${x[0]}</span><small>${x[2]}</small></div>`).join('');
$('#dataCaveat').textContent=D.dataUsed.caveat;
const w=D.v3.currentWeights; const order=['10','20','30','50','60','100','all','uniform'];
$('#weightBars').innerHTML=order.map(k=>`<div class="weight-row"><span>${k==='all'?'All-to-date':k==='uniform'?'Uniform baseline':k+' draws'}</span><div class="weight-track"><div class="weight-fill ${k==='uniform'?'uniform':''}" style="width:${(w[k]*100/Math.max(...Object.values(w))).toFixed(1)}%"></div></div><strong>${pct(w[k])}</strong></div>`).join('');
$('#guardPill').textContent=`Guard ${Math.round(D.v3.currentGuard*100)}%`;
$('#weightNote').textContent=`Recent raw 30-draw Brier: ${D.v3.recentRawBrier30.toFixed(6)} vs fair baseline ${D.v3.uniformBrier.toFixed(6)}. Because recent calibration is worse, V3 is currently damping the non-uniform signal.`;

$$('.tab').forEach(t=>t.addEventListener('click',()=>{$$('.tab').forEach(x=>x.classList.remove('active'));$$('.tab-panel').forEach(x=>x.classList.remove('active'));t.classList.add('active');$('#'+t.dataset.tab).classList.add('active')}));
$('#themeBtn').addEventListener('click',()=>{document.body.classList.toggle('compact');$('#themeBtn').textContent=document.body.classList.contains('compact')?'Comfort':'Compact'});
