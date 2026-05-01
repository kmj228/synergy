/* ── 장비 데이터 ────────────────────────────────────────────
   window.data 의존성 제거 — 데이터를 여기에 직접 정의합니다.
   이전에 window.data가 undefined여서 모든 기기에서 오류가 발생하던
   문제를 이 방식으로 완전히 해결합니다.
───────────────────────────────────────────────────────────── */
var DATA = {
  physical_none: {
    label: '물리 · 무속성',
    grid: [
      { name: '정화의 향로', set: '파괴' },
      { name: '파괴의 호각', set: '파괴' },
      { name: '용맹의 가면', set: '파괴' },
      { name: '파괴의 술잔', set: '파괴' },
      { name: '균형의 종',   set: '수호' },
      { name: '용맹의 거울', set: '수호' },
    ],
    desc: '<strong>파괴 세트 4개 + 수호 세트 2개</strong> 조합입니다.<br>물리 공격력과 치명타 확률을 극대화하며, 수호 세트의 방어 관통 효과로 안정적인 딜을 기대할 수 있습니다.',
  },
  physical_elemental: {
    label: '물리 · 속성',
    grid: [
      { name: '불꽃의 향로', set: '속성' },
      { name: '파괴의 호각', set: '파괴' },
      { name: '용맹의 가면', set: '파괴' },
      { name: '파괴의 술잔', set: '파괴' },
      { name: '폭풍의 종',   set: '속성' },
      { name: '용맹의 거울', set: '파괴' },
    ],
    desc: '<strong>파괴 세트 4개 + 속성 세트 2개</strong> 조합입니다.<br>물리 공격력을 기반으로 속성 피해 증폭이 더해져, 속성 취약 보스에게 높은 딜을 기대할 수 있습니다.',
  },
  physical_dark: {
    label: '물리 · 암속성',
    grid: [
      { name: '암흑의 향로', set: '암흑' },
      { name: '파괴의 호각', set: '파괴' },
      { name: '황혼의 가면', set: '암흑' },
      { name: '파괴의 술잔', set: '파괴' },
      { name: '전쟁의 종',   set: '파괴' },
      { name: '황혼의 거울', set: '파괴' },
    ],
    desc: '<strong>파괴 세트 4개 + 암흑 세트 2개</strong> 조합입니다.<br>물리 공격력과 암속성 피해가 시너지를 이루며, 암속성 적에게 특화된 높은 폭딜이 가능합니다.',
  },
  magical_none: {
    label: '마법 · 무속성',
    grid: [
      { name: '정화의 향로', set: '지배' },
      { name: '지배의 호각', set: '지배' },
      { name: '지혜의 가면', set: '지배' },
      { name: '마력의 술잔', set: '지배' },
      { name: '마법의 종',   set: '수호' },
      { name: '지식의 거울', set: '수호' },
    ],
    desc: '<strong>지배 세트 4개 + 수호 세트 2개</strong> 조합입니다.<br>마법 공격력과 시전 속도를 극대화하며, 수호 세트의 마법 관통 보너스로 일관된 딜을 유지합니다.',
  },
  magical_elemental: {
    label: '마법 · 속성',
    grid: [
      { name: '불꽃의 향로', set: '속성' },
      { name: '지배의 호각', set: '지배' },
      { name: '지혜의 가면', set: '지배' },
      { name: '마력의 술잔', set: '지배' },
      { name: '폭풍의 종',   set: '속성' },
      { name: '지식의 거울', set: '지배' },
    ],
    desc: '<strong>지배 세트 4개 + 속성 세트 2개</strong> 조합입니다.<br>마법 공격력과 속성 피해 증폭이 시너지를 이루어, 속성 공격 스킬의 위력이 크게 강화됩니다.',
  },
  magical_dark: {
    label: '마법 · 암속성',
    grid: [
      { name: '암흑의 향로', set: '암흑' },
      { name: '지배의 호각', set: '지배' },
      { name: '황혼의 가면', set: '암흑' },
      { name: '마력의 술잔', set: '지배' },
      { name: '마법의 종',   set: '지배' },
      { name: '지식의 거울', set: '지배' },
    ],
    desc: '<strong>지배 세트 4개 + 암흑 세트 2개</strong> 조합입니다.<br>마법 공격력에 암흑 피해 증폭이 더해져, 암속성 보스전에서 강력한 위력을 발휘합니다.',
  },
  hybrid_none: {
    label: '하이브리드 · 무속성',
    grid: [
      { name: '정화의 향로', set: '균형' },
      { name: '균형의 호각', set: '균형' },
      { name: '균형의 가면', set: '균형' },
      { name: '결의의 술잔', set: '균형' },
      { name: '균형의 종',   set: '수호' },
      { name: '용맹의 거울', set: '수호' },
    ],
    desc: '<strong>균형 세트 4개 + 수호 세트 2개</strong> 조합입니다.<br>물리/마법 공격력을 동시에 강화하며, 다양한 스킬 구성에서 안정적인 딜을 유지할 수 있습니다.',
  },
  hybrid_elemental: {
    label: '하이브리드 · 속성',
    grid: [
      { name: '불꽃의 향로', set: '속성' },
      { name: '균형의 호각', set: '균형' },
      { name: '균형의 가면', set: '균형' },
      { name: '결의의 술잔', set: '균형' },
      { name: '폭풍의 종',   set: '속성' },
      { name: '용맹의 거울', set: '균형' },
    ],
    desc: '<strong>균형 세트 4개 + 속성 세트 2개</strong> 조합입니다.<br>물리·마법 복합 딜에 속성 피해 증폭이 더해져, 속성 스킬 위주 하이브리드 빌드에 최적화됩니다.',
  },
  hybrid_dark: {
    label: '하이브리드 · 암속성',
    grid: [
      { name: '암흑의 향로', set: '암흑' },
      { name: '균형의 호각', set: '균형' },
      { name: '황혼의 가면', set: '암흑' },
      { name: '결의의 술잔', set: '균형' },
      { name: '균형의 종',   set: '균형' },
      { name: '황혼의 거울', set: '균형' },
    ],
    desc: '<strong>균형 세트 4개 + 암흑 세트 2개</strong> 조합입니다.<br>물리·마법 양면 딜에 암흑 피해 증폭이 결합되어, 암속성 보스에서 극딜이 가능합니다.',
  },
};

var SLOTS = ['향로', '호각', '가면', '술잔', '종', '거울'];

var SET_META = {
  파괴: { color: '#e87060', desc: '파괴 세트 — 물리 공격력 · 치명타' },
  지배: { color: '#c08ee8', desc: '지배 세트 — 마법 공격력 · 시전속도' },
  균형: { color: '#4dcb7a', desc: '균형 세트 — 물리/마법 동시 강화' },
  수호: { color: '#6ab8e8', desc: '수호 세트 — 방어/마법 관통 보너스' },
  속성: { color: '#f5d44a', desc: '속성 세트 — 속성 피해 증폭' },
  암흑: { color: '#de80f5', desc: '암흑 세트 — 암속성 피해 증폭' },
};

/* ── 렌더링 함수 ──────────────────────────────────────────── */
function calculate() {
  var type = document.getElementById('dmgType').value;
  var elem = document.getElementById('elementType').value;
  var key  = type + '_' + elem;
  var data = DATA[key];

  if (!data) {
    console.warn('[시너지] 데이터 없음: ' + key);
    return;
  }

  // 라벨 업데이트
  document.getElementById('resultLabel').textContent = data.label;

  // 장비 카드 렌더링
  var grid = document.getElementById('equipGrid');
  var html = '';
  for (var i = 0; i < data.grid.length; i++) {
    var item = data.grid[i];
    html +=
      '<div class="equip-card">' +
        '<div class="slot-label">' + SLOTS[i] + '</div>' +
        '<div class="equip-name">' + item.name + '</div>' +
        '<span class="set-tag tag-' + item.set + '">' + item.set + ' 세트</span>' +
      '</div>';
  }
  grid.innerHTML = html;

  // 설명 업데이트
  document.getElementById('resultDesc').innerHTML = data.desc;

  // 범례: 사용된 세트만 표시 (순서 유지)
  var usedSets = [];
  for (var j = 0; j < data.grid.length; j++) {
    var s = data.grid[j].set;
    if (usedSets.indexOf(s) === -1) usedSets.push(s);
  }
  var legend = '';
  for (var k = 0; k < usedSets.length; k++) {
    var setKey = usedSets[k];
    var meta   = SET_META[setKey];
    legend +=
      '<div class="legend-item">' +
        '<span class="legend-dot" style="background:' + meta.color + '"></span>' +
        '<span>' + meta.desc + '</span>' +
      '</div>';
  }
  document.getElementById('setLegend').innerHTML = legend;

  // 결과 패널 표시 (애니메이션 재실행)
  var panel = document.getElementById('resultPanel');
  panel.classList.remove('hidden');
  // 애니메이션 재트리거
  panel.style.animation = 'none';
  panel.offsetHeight; // reflow
  panel.style.animation = '';
}

/* ── 이벤트 등록 ──────────────────────────────────────────── */
document.getElementById('calcBtn').addEventListener('click', calculate);
document.getElementById('dmgType').addEventListener('change', calculate);
document.getElementById('elementType').addEventListener('change', calculate);

/* ── 초기 실행 ────────────────────────────────────────────── */
calculate();
