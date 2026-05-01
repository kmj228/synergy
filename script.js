const data = {
        'physical_none': {
            grid: ['💧습기(택1)<br>or 고품질', '💧습기(택1)<br>or 고품질', '❄️한기(택1)<br>or 고품질', '❄️한기(택1)<br>or 고품질', '품질용<br><span class="warn">(❌작열 금지)</span>', '품질용(자유)<br><span class="warn">(❌작열 금지)</span>'],
            desc: "<b>[무속성 물리 딜러]</b><br>✔️ 필수: 습기 + 한기<br>✔️ 빈칸: 무조건 품질 높은 장비 장착<br>🚨 주의: 습기+한기 구비후 공허,그늘장비 편린이 많이떳다면 나머지 슬롯을 공허그늘로 도배하는것도 좋습니다 ."
        },
        'physical_elemental': {
            grid: ['💧습기(택1)<br>or 고품질', '💧습기/✨광휘(택1)<br>or 고품질', '❄️한기(택1)<br>or 고품질', '❄️한기(택1)<br>or 고품질', '✨광휘(택1)<br>(성검낙하)<br>or 고품질', '품질용<br><span class="warn">(❌작열/그늘 금지)</span>'],
            desc: "<b>[속성 물리 딜러]</b><br>✔️ 필수: 습기 + 한기 + ✨광휘<br>✔️ 광휘는 호각이나 종 중에서 품질 좋은 곳에 챙기세요.<br>🚨 주의: <b>🌑그늘(어둠)</b>과 <b>🔥작열(불)</b>은 절대 사용 금지!"
        },
        'physical_dark': {
            grid: ['💧습기/🌑그늘<br>(택1)', '💧습기/🌑그늘<br>(택1)', '❄️한기(택1)<br>or 🌌공허(택1)', '❄️한기/🌑그늘<br>or 🌌공허(택1)', '고품질/🌌공허(택1)<br><span class="warn">(❌작열/광휘 금지)</span>', '🌑그늘(택1)<br>or 🌌공허(택1)'],
            desc: "<b>[암속성 물리 딜러]</b><br>✔️ 필수: 습기 + 한기 + 🌑그늘<br>✔️ 습기, 한기장비를 먼저 채운후 그늘 공허는 뜨는거 쓰세요.<br>✔️ 가면/술잔/종/거울 중 한 곳에서 <b>🌌공허</b> 채용 가능.<br>🚨 주의: <b>✨광휘(빛)</b>와 <b>🔥작열(불)</b>은 절대 사용 금지!"
        },
        'magical_none': {
            grid: ['💧습기/⚡감전(택1)<br>', '💧습기(택1)<br>(신비의 샘물)', '⚡감전(택1)<br>(헥사고날 등)', '품질용(자유)', '🔥작열(택1)<br>(쌍성의 중심)', '🔥작열(택1)<br>(화염의 파도)'],
            desc: "<b>[무속성 마법 딜러]</b><br>✔️ 필수: 습기 + 감전 + 작열<br>🚨 주의: 향로감전보단 가면감전이 좋습니다."
        },
        'magical_elemental': {
            grid: ['💧습기//⚡감전(택1)', '💧습기/✨광휘(택1)<br>(신비의 샘물)(성역선포)', '⚡감전(택1)', '품질용<br><span class="warn">(❌그늘 금지)</span>', '🔥작열 or<br>✨광휘', '고품질/🔥작열(택1)<br>(화염의 파도)<br><span class="warn">(❌그늘 금지)</span>'],
            desc: "<b>[속성 마법 딜러]</b><br>✔️ 필수: 습기(단일) + 감전 + 작열 + ✨광휘<br>✔️ 화속성딜러여도 습기걱정말고 맞추세요.<br>🚨 주의: 반대 속성인 <b>🌑그늘(어둠)</b>은 절대 사용 금지!"
        },
        'magical_dark': {
            grid: ['💧습기/🌑그늘/⚡감전<br>(택1)', '💧습기/🌑그늘<br>(택1)', '⚡감전(택1)<br>or 🌌공허(택1)', '🌑그늘(택1)<br>or 🌌공허(택1)', '🔥작열(고정)<br>or 🌌공허(택1)', '🔥작열/🌑그늘<br>or 🌌공허(택1)'],
            desc: "<b>[암속성 마법 딜러]</b><br>✔️ 필수: 습기(단일) + 감전 + 작열 + 🌑그늘<br>✔️ 종에 작열을 고정해두면, 나머지 자리에 그늘을 넣기 편합니다.<br>✔️ 가면/술잔/종/거울 중 한 곳에서 <b>🌌공허</b> 채용 가능.<br>🚨 주의: 빛 속성인 <b>✨광휘</b>는 절대 사용 금지!"
        },
        'hybrid_none': {
            grid: ['💧습기(택1)<br>or 고품질', '💧습기(택1)<br>or 고품질', '⚡감전(고정)<br>(헥사고날 등)', '❄️한기(고정)<br>(술잔 필수)', '품질용<br><span class="warn">(❌작열 절대금지)</span>', '품질용(자유)'],
            desc: "<b>[무속성 하이브리드]</b><br>✔️ 필수: 가면=⚡감전 / 술잔=❄️한기<br>🚨 주의: 하이브리드는 <b>작열(불) 절대 금지!</b> (한기가 녹아버림)<br>✔️ 작열을 안 쓰므로 습기는 아무거나(다단히트 무관) 껴도 됩니다."
        },
        'hybrid_elemental': {
            grid: ['💧습기(택1)<br>or 고품질', '💧습기/✨광휘(택1)<br>', '⚡감전(고정)<br>(헥사고날 등)', '❄️한기(고정)<br>(술잔 필수)', '✨광휘(택1)<br>or 품질용<br><span class="warn">(❌그늘/작열 금지)</span>', '품질용<br><span class="warn">(❌그늘/작열 금지)</span>'],
            desc: "<b>[속성 하이브리드]</b><br>✔️ 필수: 가면=⚡감전 / 술잔=❄️한기 / + ✨광휘 추가<br>🚨 주의: <b>작열(불)</b>과 <b>🌑그늘(어둠)</b> 절대 금지! 광휘는 호각이나 종에서 챙기세요."
        },
        'hybrid_dark': {
            grid: ['💧습기/🌑그늘<br>(택1)', '💧습기/🌑그늘<br>(택1)', '⚡감전(고정)', '❄️한기(고정)', '고품질/🌌공허(택1)<br><span class="warn">(❌작열/광휘 금지)</span>', '🌑그늘(택1)<br>or 🌌공허(택1)'],
            desc: "<b>[암속성 하이브리드]</b><br>✔️ 필수: 가면=⚡감전 / 술잔=❄️한기 / + 🌑그늘 추가<br>✔️ 가면/술잔/종/거울 중 한 곳에서 <b>🌌공허</b> 채용 가능.<br>🚨 주의: <b>작열(불)</b>과 <b>✨광휘(빛)</b>는 절대 금지! 그늘은 자리가 많으니 빈 곳에 넣으세요."
        }
    };

    const slots = ['향로', '호각', '가면', '술잔', '종', '거울'];

    function calculate() {
        const type = document.getElementById('dmgType').value;
        const elem = document.getElementById('elementType').value;
        const key = type + '_' + elem;
        
        const result = data[key];
        const gridBox = document.getElementById('equipGrid');
        gridBox.innerHTML = '';

        result.grid.forEach((text, index) => {
            gridBox.innerHTML += `<div class="grid-item"><div class="slot-name">[${slots[index]}]</div>${text}</div>`;
        });

        document.getElementById('resultDesc').innerHTML = result.desc;
        document.getElementById('resultBox').style.display = 'block';
    }
