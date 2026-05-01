var DATA = {
  physical_none: {
    label: '물리 · 무속성',
    grid: [
      '💧 습기(택1)<br>or 고품질',
      '💧 습기(택1)<br>or 고품질',
      '❄️ 한기(택1)<br>or 고품질',
      '❄️ 한기(택1)<br>or 고품질',
      '품질용<br><span class="warn">❌ 작열 금지</span>',
      '품질용(자유)<br><span class="warn">❌ 작열 금지</span>'
    ],
    desc: '<b>[무속성 물리 딜러]</b><br>✔️ 필수: 습기 + 한기<br>✔️ 빈칸: 무조건 품질 높은 장비 장착<br>💡 습기+한기 구비 후 공허·그늘 편린이 많이 뜬다면, 나머지 슬롯을 공허·그늘로 채우는 것도 좋습니다.'
  },
  physical_elemental: {
    label: '물리 · 속성',
    grid: [
      '💧 습기(택1)<br>or 고품질',
      '💧 습기 / ✨ 광휘(택1)<br>or 고품질',
      '❄️ 한기(택1)<br>or 고품질',
      '❄️ 한기(택1)<br>or 고품질',
      '✨ 광휘(택1)<br>or 고품질',
      '품질용<br><span class="warn">❌ 작열·그늘 금지</span>'
    ],
    desc: '<b>[속성 물리 딜러]</b><br>✔️ 필수: 습기 + 한기 + ✨ 광휘<br>✔️ 광휘는 호각이나 종 중 품질 좋은 곳에 챙기세요.<br>🚨 주의: <b>🌑 그늘(어둠)</b>과 <b>🔥 작열(불)</b>은 절대 사용 금지!'
  },
  physical_dark: {
    label: '물리 · 암속성',
    grid: [
      '💧 습기 / 🌑 그늘(택1)',
      '💧 습기 / 🌑 그늘(택1)',
      '❄️ 한기 / 🌌 공허(택1)',
      '❄️ 한기 / 🌑 그늘<br>/ 🌌 공허(택1)',
      '고품질 / 🌌 공허(택1)<br><span class="warn">❌ 작열·광휘 금지</span>',
      '🌑 그늘 / 🌌 공허(택1)'
    ],
    desc: '<b>[암속성 물리 딜러]</b><br>✔️ 필수: 습기 + 한기 + 🌑 그늘<br>✔️ 습기·한기 먼저 채운 후 그늘·공허는 뜨는 것 사용<br>✔️ 가면/술잔/종/거울 중 한 곳에서 <b>🌌 공허</b> 채용 가능<br>🚨 주의: <b>✨ 광휘(빛)</b>와 <b>🔥 작열(불)</b>은 절대 사용 금지!'
  },
  magical_none: {
    label: '마법 · 무속성',
    grid: [
      '💧 습기 / ⚡ 감전(택1)',
      '💧 습기(택1)',
      '⚡ 감전(택1)',
      '품질용(자유)',
      '🔥 작열(택1)',
      '🔥 작열(택1)'
    ],
    desc: '<b>[무속성 마법 딜러]</b><br>✔️ 필수: 습기 + 감전 + 작열<br>💡 향로 감전보다 가면 감전이 더 유리합니다.'
  },
  magical_elemental: {
    label: '마법 · 속성',
    grid: [
      '💧 습기 / ⚡ 감전(택1)',
      '💧 습기 / ✨ 광휘(택1)',
      '⚡ 감전(택1)',
      '품질용<br><span class="warn">❌ 그늘 금지</span>',
      '🔥 작열 / ✨ 광휘(택1)',
      '고품질 / 🔥 작열(택1)<br><span class="warn">❌ 그늘 금지</span>'
    ],
    desc: '<b>[속성 마법 딜러]</b><br>✔️ 필수: 습기(단일) + 감전 + 작열 + ✨ 광휘<br>✔️ 화속성 딜러도 습기 걱정 말고 맞추세요.<br>🚨 주의: 반대 속성인 <b>🌑 그늘(어둠)</b>은 절대 사용 금지!'
  },
  magical_dark: {
    label: '마법 · 암속성',
    grid: [
      '💧 습기 / 🌑 그늘<br>/ ⚡ 감전(택1)',
      '💧 습기 / 🌑 그늘(택1)',
      '⚡ 감전 / 🌌 공허(택1)',
      '🌑 그늘 / 🌌 공허(택1)',
      '🔥 작열(고정)<br>/ 🌌 공허(택1)',
      '🔥 작열 / 🌑 그늘<br>/ 🌌 공허(택1)'
    ],
    desc: '<b>[암속성 마법 딜러]</b><br>✔️ 필수: 습기(단일) + 감전 + 작열 + 🌑 그늘<br>✔️ 종에 작열을 고정하면 나머지 자리에 그늘 넣기 편합니다.<br>✔️ 가면/술잔/종/거울 중 한 곳에서 <b>🌌 공허</b> 채용 가능<br>🚨 주의: 빛 속성인 <b>✨ 광휘</b>는 절대 사용 금지!'
  },
  hybrid_none: {
    label: '하이브리드 · 무속성',
    grid: [
      '💧 습기(택1)<br>or 고품질',
      '💧 습기(택1)<br>or 고품질',
      '⚡ 감전(고정)',
      '❄️ 한기(고정)',
      '품질용<br><span class="warn">❌ 작열 절대금지</span>',
      '품질용(자유)'
    ],
    desc: '<b>[무속성 하이브리드]</b><br>✔️ 필수: 가면 = ⚡ 감전 고정 / 술잔 = ❄️ 한기 고정<br>🚨 주의: 하이브리드는 <b>🔥 작열(불) 절대 금지!</b> (한기가 녹아버림)<br>💡 작열을 안 쓰므로 습기는 아무거나 껴도 됩니다.'
  },
  hybrid_elemental: {
    label: '하이브리드 · 속성',
    grid: [
      '💧 습기(택1)<br>or 고품질',
      '💧 습기 / ✨ 광휘(택1)',
      '⚡ 감전(고정)',
      '❄️ 한기(고정)',
      '✨ 광휘(택1)<br>or 품질용<br><span class="warn">❌ 그늘·작열 금지</span>',
      '품질용<br><span class="warn">❌ 그늘·작열 금지</span>'
    ],
    desc: '<b>[속성 하이브리드]</b><br>✔️ 필수: 가면 = ⚡ 감전 고정 / 술잔 = ❄️ 한기 고정 / + ✨ 광휘 추가<br>🚨 주의: <b>🔥 작열(불)</b>과 <b>🌑 그늘(어둠)</b> 절대 금지! 광휘는 호각이나 종에서 챙기세요.'
  },
  hybrid_dark: {
    label: '하이브리드 · 암속성',
    grid: [
      '💧 습기 / 🌑 그늘(택1)',
      '💧 습기 / 🌑 그늘(택1)',
      '⚡ 감전(고정)',
      '❄️ 한기(고정)',
      '고품질 / 🌌 공허(택1)<br><span class="warn">❌ 작열·광휘 금지</span>',
      '🌑 그늘 / 🌌 공허(택1)'
    ],
    desc: '<b>[암속성 하이브리드]</b><br>✔️ 필수: 가면 = ⚡ 감전 고정 / 술잔 = ❄️ 한기 고정 / + 🌑 그늘 추가<br>✔️ 가면/술잔/종/거울 중 한 곳에서 <b>🌌 공허</b> 채용 가능<br>🚨 주의: <b>🔥 작열(불)</b>과 <b>✨ 광휘(빛)</b>는 절대 금지!'
  }
};

var SLOTS = ['향로', '호각', '가면', '술잔', '종', '거울'];

var EMOJI_LEGEND = [
  { emoji: '💧', name: '습기',  desc: '물리·마법 공통' },
  { emoji: '❄️', name: '한기',  desc: '냉기 (물리 계열)' },
  { emoji: '⚡', name: '감전',  desc: '전기 (마법 계열)' },
  { emoji: '🔥', name: '작열',  desc: '화염 (마법 계열)' },
  { emoji: '🌑', name: '그늘',  desc: '암속성 전용' },
  { emoji: '✨', name: '광휘',  desc: '빛속성 전용' },
  { emoji: '🌌', name: '공허',  desc: '암속성 보조' },
];

/* ── 렌더링 ─────────────────────────────────────────────── */
function calculate() {
  var type = document.getElementById('dmgType').value;
  var elem = document.getElementById('elementType').value;
  var key  = type + '_' + elem;
  var data = DATA[key];

  if (!data) { console.error('데이터 없음: ' + key); return; }

  document.getElementById('resultLabel').textContent = data.label;

  var html = '';
  for (var i = 0; i < data.grid.length; i++) {
    html +=
      '<div class="equip-card">' +
        '<div class="slot-label">' + SLOTS[i] + '</div>' +
        '<div class="equip-content">' + data.grid[i] + '</div>' +
      '</div>';
  }
  document.getElementById('equipGrid').innerHTML = html;

  document.getElementById('resultDesc').innerHTML = data.desc;

  /* 이모지 범례 */
  var legend = '';
  for (var k = 0; k < EMOJI_LEGEND.length; k++) {
    var l = EMOJI_LEGEND[k];
    legend +=
      '<div class="legend-item">' +
        '<span class="legend-emoji">' + l.emoji + '</span>' +
        '<span class="legend-name">' + l.name + '</span>' +
        '<span class="legend-desc">' + l.desc + '</span>' +
      '</div>';
  }
  document.getElementById('setLegend').innerHTML = legend;

  var panel = document.getElementById('resultPanel');
  panel.classList.remove('show');
  void panel.offsetWidth;
  panel.classList.add('show');
}

/* ── 이벤트 ─────────────────────────────────────────────── */
document.getElementById('dmgType').addEventListener('change', calculate);
document.getElementById('elementType').addEventListener('change', calculate);

calculate();
