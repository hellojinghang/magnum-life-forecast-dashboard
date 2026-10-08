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
$('#v4Status').textContent = D.status.v4.code.replaceAll('_',' ');
$('#v5Status').textContent = D.status.v5.code.replaceAll('_',' ');

const v1_2019=D.accuracy.find(x=>x.model==='V1'&&x.period.startsWith('2019'));
const v1_2026=D.accuracy.find(x=>x.model==='V1'&&x.period.startsWith('2026'));
const v2_2019=D.accuracy.find(x=>x.model==='V2'&&x.period.startsWith('2019'));
const v2_2026=D.accuracy.find(x=>x.model==='V2'&&x.period.startsWith('2026'));
const v3_2019=D.accuracy.find(x=>x.model==='V3'&&x.period.startsWith('2019'));
const v3_2026=D.accuracy.find(x=>x.model==='V3'&&x.period.startsWith('2026'));
const v4_2026=D.accuracy.find(x=>x.model==='V4'&&x.period.startsWith('2026'));
const v5_2026=D.accuracy.find(x=>x.model==='V5'&&x.period.startsWith('2026'));
const metrics=[
  ['Fair Top-8 baseline',fmt(D.meta.baselineHits),'expected hits / draw',''],
  ['V3 · 2026 holdout',fmt(v3_2026.meanHits),`${pct(v3_2026.rate)} · adaptive pre-draw`,v3_2026.meanHits>D.meta.baselineHits?'good':'bad'],
  ['V4 · 2026 blocked bridge',fmt(v4_2026.meanHits),`${pct(v4_2026.rate)} · research only`,'warn'],
  ['V5 · 2026 watch bridge',fmt(v5_2026.meanHits),`${pct(v5_2026.rate)} · blocked, p=${v5_2026.p.toFixed(3)}`,'warn']
];
$('#metricGrid').innerHTML=metrics.map(m=>`<div class="metric-card"><div class="label">${m[0]}</div><div class="value ${m[3]}">${m[1]}</div><div class="sub">${m[2]}</div></div>`).join('');

function renderBars(){
  $('#accuracyBars').innerHTML=D.accuracy.map(a=>{
    const width=Math.min(100,a.meanHits/4*100); return `<div class="bar-row"><div class="bar-label">${a.model} · ${a.period.replace(' holdout','')}</div><div class="bar-track"><span class="baseline-mark"></span><div class="bar-fill ${a.model==='V2'?'v2':a.model==='V3'?'v3':a.model==='V5'?'v5':''}" style="width:${width}%"></div></div><div class="bar-value">${a.meanHits.toFixed(3)}</div></div>`
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
  $('#forecastEyebrow').textContent=model==='v1'?'V1 PRE-DRAW':model==='v2'?'V2 EXPERIMENTAL':model==='v3'?'V3 ADAPTIVE PRE-DRAW':model==='v4'?'V4 GATED PROCESS MODEL':'V5 EXOGENOUS PROCESS MODEL';
  $('#forecastTitle').textContent=f.label;
  $('#forecastDescription').textContent=f.description;
  $('#forecastGate').textContent=model==='v2'?'EXPERIMENTAL · GATE FAILED':model==='v3'?'BASELINE GUARDED · NO VERIFIED EDGE':model==='v4'?'UNIFORM BASELINE ONLY':model==='v5'?'PROSPECTIVE WATCH · UNIFORM DEPLOYMENT':'NO VERIFIED EDGE';
  if(f.sets && f.sets.length){
    $('#forecastSets').innerHTML=f.sets.map(s=>`<div class="set-card"><div class="set-index">Set ${s.id}</div><div><div class="balls">${s.numbers.map(n=>ball(n)).join('')}</div><div class="set-score">Mean model score · ${pct(s.score)}</div></div><button class="copy-btn" data-copy="${s.numbers.map(n=>String(n).padStart(2,'0')).join(' ')}">Copy</button></div>`).join('');
  }else{
    $('#forecastSets').innerHTML=`<div class="no-forecast"><strong>No ranked deployment set issued.</strong><p>${model==='v5'?'V5 failed the public exogenous-process validation gate and has entered prospective watch mode.':'V4 failed the upstream 4D-process validation gate.'} The deployed probability for every number remains <b>22.22%</b>.</p></div>`;
  }
  if(f.top12 && f.top12.length){
    const vals=f.top12.map(x=>x.score); const min=Math.min(...vals), max=Math.max(...vals);
    $('#topScores').innerHTML=f.top12.map(x=>{const w=18+82*((x.score-min)/(max-min||1)); return `<div class="score-item"><span class="score-num">${String(x.number).padStart(2,'0')}</span><div class="mini-track"><div class="mini-fill" style="width:${w}%"></div></div><span class="score-pct">${pct(x.score)}</span></div>`}).join('');
  }else{
    $('#topScores').innerHTML=`<div class="uniform-card"><div class="uniform-value">22.22%</div><strong>All 36 numbers</strong><p>${model==='v5'?'V5 deployment remains uniform while its blocked candidate is tracked prospectively.':'V4 deployment intentionally collapses to the fair 8/36 baseline.'}</p></div>`;
  }
  $('#scoreNote').textContent=model==='v1'?'Scores are calibrated marginal probabilities from the V1 rolling-frequency model.':model==='v2'?'V2 scores are experimental expected structural probabilities produced by forecasting 4D leading-prefix presence from the most recent 50 4D draws; this bridge has not shown a stable holdout edge.':model==='v3'?`V3 scores blend seven rolling horizons plus a uniform expert. Current confidence guard: ${Math.round(f.guard*100)}%. Recent raw 30-draw Brier ${f.recentRawBrier30.toFixed(6)} vs uniform ${f.uniformBrier.toFixed(6)}.`:model==='v5'?'V5 does not expose the blocked ranking as a deployment forecast. Its research ranking is shown only in the V5 Exogenous tab and is frozen prospectively for evaluation.':'The validation policy forbids a ranked V4 deployment forecast because the upstream 4D-process model did not beat uniform on locked proper scores.';
  $$('.copy-btn').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);const old=b.textContent;b.textContent='Copied';setTimeout(()=>b.textContent=old,900)}catch{}});
}
renderForecast('v5');
$$('.model-btn').forEach(btn=>btn.addEventListener('click',()=>{$$('.model-btn').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderForecast(btn.dataset.model)}));

$('#accuracyTable').innerHTML=D.accuracy.map(a=>{const delta=a.meanHits-D.meta.baselineHits;return `<tr><td><strong>${a.model}</strong></td><td>${a.period}</td><td>${a.type}</td><td>${a.draws}</td><td><strong>${a.meanHits.toFixed(3)}</strong></td><td>${pct(a.rate)}</td><td class="delta ${delta>=0?'up':'down'}">${delta>=0?'+':''}${delta.toFixed(3)}</td><td>${a.brier.toFixed(5)}</td><td>${a.logloss.toFixed(5)}</td></tr>`}).join('');

function renderHistory(model){
  $('#historyEyebrow').textContent=model==='v2'?'SAME-DRAW STRUCTURAL':model==='v4'?'BLOCKED RESEARCH BRIDGE':model==='v5'?'BLOCKED EXOGENOUS WATCH':'PRE-DRAW';
  $('#historyTitle').textContent=model==='v1'?'Last five historical V1 predictions':model==='v2'?'Last five V2 structural diagnostic selections':model==='v3'?'Last five V3 adaptive predictions':model==='v4'?'Last five V4 blocked bridge rankings':'Last five V5 blocked watch rankings';
  $('#historyPill').textContent=model==='v2'?'Uses same-draw 4D':model==='v3'?'Adaptive · guardrail':model==='v4'?'Not deployed':model==='v5'?'Prospective watch only':'Chronological';
  $('#historyRows').innerHTML=D.history[model].map(r=>{const set=new Set(r.actual);return `<div class="history-row"><div class="history-date">${r.date}</div><div class="history-group"><label>Selected</label><div class="history-balls">${r.selected.map(n=>ball(n,set.has(n))).join('')}</div></div><div class="history-group actual"><label>Actual</label><div class="history-balls">${r.actual.map(n=>ball(n)).join('')}</div></div><div class="hit-badge">${r.hits}<span>hits</span></div></div>`}).join('');
}
renderHistory('v5');
$$('.history-btn').forEach(btn=>btn.addEventListener('click',()=>{$$('.history-btn').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderHistory(btn.dataset.model)}));

$('#v1Method').innerHTML=D.methods.v1.map(x=>`<li>${x}</li>`).join('');
$('#v2Method').innerHTML=D.methods.v2.map(x=>`<li>${x}</li>`).join('');
$('#v3Method').innerHTML=D.methods.v3.map(x=>`<li>${x}</li>`).join('');
$('#v4Method').innerHTML=D.methods.v4.map(x=>`<li>${x}</li>`).join('');
$('#v5Method').innerHTML=D.methods.v5.map(x=>`<li>${x}</li>`).join('');

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
const pv=D.v4.prefixValidation, rowsV4=[2024,2025,2026].map(y=>{
  const u=pv.uniform[y], b=pv.bestNonUniform[y];
  return `<tr><td>${y}</td><td>${u.logloss.toFixed(6)}</td><td>${b.logloss.toFixed(6)}</td><td class="delta down">+${b.deltaLogloss.toFixed(6)}</td><td>${u.brier.toFixed(6)}</td><td>${b.brier.toFixed(6)}</td><td class="delta down">+${b.deltaBrier.toFixed(6)}</td></tr>`;
}).join('');
$('#v4ProcessTable').innerHTML=rowsV4;
$('#v4BridgeSummary').innerHTML=`<strong>${D.v4.researchBridge.meanHits.toFixed(3)}</strong><span>mean Top-8 hits across ${D.v4.researchBridge.draws} Life draws in 2026</span><small>Fair expectation ${D.meta.baselineHits.toFixed(3)} · one-sided p=${D.v4.researchBridge.pOneSided.toFixed(3)} · blocked from deployment</small>`;
$('#v4ResearchTop').innerHTML=D.v4.researchBridge.currentTop12.map(x=>`<div class="score-item"><span class="score-num">${String(x.number).padStart(2,'0')}</span><div class="mini-track"><div class="mini-fill v4-research" style="width:${Math.max(18,(x.score-.22)*16000)}%"></div></div><span class="score-pct">${pct(x.score)}</span></div>`).join('');
const pv5=D.v5.prefixValidation, rowsV5=[2024,2025,2026].map(y=>{
  const u=pv5.uniform[y], b=pv5.selected[y];
  return `<tr><td>${y}</td><td>${u.logloss.toFixed(6)}</td><td>${b.logloss.toFixed(6)}</td><td class="delta down">+${b.deltaLogloss.toFixed(6)}</td><td>${u.brier.toFixed(6)}</td><td>${b.brier.toFixed(6)}</td><td class="delta down">+${b.deltaBrier.toFixed(6)}</td></tr>`;
}).join('');
$('#v5ProcessTable').innerHTML=rowsV5;
$('#v5BridgeSummary').innerHTML=`<strong>${D.v5.researchBridge.meanHits.toFixed(3)}</strong><span>mean Top-8 hits across ${D.v5.researchBridge.draws} Life draws in 2026</span><small>Fair expectation ${D.meta.baselineHits.toFixed(3)} · one-sided p=${D.v5.researchBridge.pOneSided.toFixed(3)} · prospective watch only</small>`;
$('#v5ResearchTop').innerHTML=D.v5.researchBridge.currentTop12.map(x=>`<div class="score-item"><span class="score-num">${String(x.number).padStart(2,'0')}</span><div class="mini-track"><div class="mini-fill v5-research" style="width:${Math.max(18,(x.score-.22)*14000)}%"></div></div><span class="score-pct">${pct(x.score)}</span></div>`).join('');
$('#v5Meta').innerHTML=`
  <div class="data-card"><strong>${D.v5.data.fourDDraws}</strong><span>4D draws</span><small>${D.v5.data.fourDFrom} → ${D.v5.data.fourDTo}</small></div>
  <div class="data-card"><strong>${D.v5.candidateSearch.configurations}</strong><span>exogenous configurations</span><small>10 process-state families × hyperparameter grid</small></div>
  <div class="data-card"><strong>${D.v5.data.specialDraws}</strong><span>Special draws</span><small>Tuesday-type observations</small></div>
  <div class="data-card"><strong>0</strong><span>physical equipment fields</span><small>No public machine/ball-set/maintenance series found</small></div>`;
$('#v5Registry').innerHTML=`<strong>Frozen next draw: ${D.v5.prospective.firstFrozenDraw}</strong><span>Deployment: 22.22% for all 36 numbers</span><small>Registry: ${D.v5.prospective.registry} · review after 50 / 100 / 200 future draws</small>`;



$$('.tab').forEach(t=>t.addEventListener('click',()=>{$$('.tab').forEach(x=>x.classList.remove('active'));$$('.tab-panel').forEach(x=>x.classList.remove('active'));t.classList.add('active');$('#'+t.dataset.tab).classList.add('active')}));
$('#themeBtn').addEventListener('click',()=>{document.body.classList.toggle('compact');$('#themeBtn').textContent=document.body.classList.contains('compact')?'Comfort':'Compact'});
