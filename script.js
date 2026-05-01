const data = window.data; // 기존 데이터 그대로 사용

const slots = ['향로', '호각', '가면', '술잔', '종', '거울'];

function calculate() {
    const type = document.getElementById('dmgType').value;
    const elem = document.getElementById('elementType').value;
    const key = type + '_' + elem;

    const result = data[key];
    const gridBox = document.getElementById('equipGrid');

    gridBox.innerHTML = '';

    result.grid.forEach((text, index) => {
        gridBox.innerHTML += `
            <div class="grid-item">
                <div class="slot-name">[${slots[index]}]</div>
                ${text}
            </div>
        `;
    });

    document.getElementById('resultDesc').innerHTML = result.desc;
    document.getElementById('resultBox').style.display = 'block';
}

/* 자동 갱신 (UX 향상) */
document.getElementById('dmgType').addEventListener('change', calculate);
document.getElementById('elementType').addEventListener('change', calculate);
