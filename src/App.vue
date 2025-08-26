<template>
  <div class="wrap">
    <header>
      <div class="brand">
        <div class="logo">공문</div>
        <div>
          <strong>공문템</strong>
          <div class="small">공무원 실무 HWP·엑셀 템플릿</div>
        </div>
      </div>
      <nav>
        <a href="#templates">템플릿</a>
        <a href="#how">사용방법</a>
        <a href="#pricing">가격</a>
        <a href="#contact">문의</a>
      </nav>
    </header>

    <section class="hero">
      <div>
        <span class="kicker">현장 검증</span>
        <h1>공무원 실무템플릿, 지금 바로 내려받아 업무시간을 30% 줄이세요</h1>
        <p class="muted">어린이집 점검표·회계집계·예산보고서 등 현장에서 곧바로 쓸 수 있는 HWP·엑셀 템플릿. 용산구 실무자가 직접 설계하고 검증한 실무형 포맷을 제공합니다.</p>

        <div class="cta">
          <button class="btn btn-primary" @click="scrollTo('#pricing')">템플릿 보기·다운로드</button>
          <button class="btn btn-ghost" @click="scrollTo('#sample')">무료 샘플 받기</button>
        </div>

        <div class="card quick-pack">
          <div class="icon">📄</div>
          <div>
            <strong>빠른 시작 팩</strong>
            <div class="small">무료 샘플 3종: 어린이집 점검표 / 회계집계표 / 사업제안서 HWP</div>
          </div>
        </div>

        <div class="small note">주의: HWP 원본 + XLSX 대체본을 함께 제공합니다. 결제·다운로드 후 파일 접근 방법은 이메일로 안내됩니다.</div>
      </div>

      <aside>
        <div class="card">
          <h3>왜 공문템인가?</h3>
          <ul class="muted bullets">
            <li>공무원 현장 담당자의 실제 업무 흐름을 반영</li>
            <li>HWP 원본 제공으로 공공기관 호환성 보장</li>
            <li>엑셀 매크로 포함 템플릿은 자동 집계·보고서 생성 지원</li>
          </ul>
          <div style="margin-top:12px">
            <button class="btn btn-primary" style="width:100%" @click="scrollTo('#templates')">템플릿 확인</button>
          </div>
        </div>

        <div class="card" style="margin-top:12px">
          <h4 style="margin:0 0 6px">사전예약 혜택</h4>
          <div class="small">사전예약 고객에게는 1개 템플릿 무료 제공 + 기관 도입 할인 쿠폰</div>
          <form @submit.prevent="applySample" style="margin-top:10px">
            <input v-model="lead.name" name="name" placeholder="이름" required />
            <input v-model="lead.email" name="email" placeholder="이메일" required />
            <button class="btn btn-ghost" type="submit">무료 샘플 신청</button>
            <div class="small" style="margin-top:8px;color:var(--muted)">* 개인정보는 샘플 발송 및 안내 목적에만 사용됩니다.</div>
          </form>
        </div>
      </aside>
    </section>

    <section id="templates" class="section">
      <h3>주요 템플릿 - 초기 10종</h3>
      <div class="templates">
        <div v-for="t in templates" :key="t.id" class="tmpl card">
          <strong>{{ t.title }}</strong>
          <div class="small muted">{{ t.desc }}</div>
          <div style="margin-top:8px"><span class="small">가격: {{ t.price }}</span></div>
          <div style="margin-top:10px;display:flex;gap:8px">
            <button class="btn btn-primary" @click="buy(t)">다운로드</button>
            <button class="btn btn-ghost" @click="preview(t)">미리보기</button>
          </div>
        </div>
      </div>
    </section>

    <section id="how" class="section">
      <h3>사용 방법 (짧고 명확하게)</h3>
      <div class="grid-2">
        <div class="card">
          <h4>1. 무료 샘플 받기</h4>
          <div class="small muted">이메일만 입력하면 3종 샘플을 바로 보냅니다.</div>
        </div>
        <div class="card">
          <h4>2. 구매 또는 사전예약</h4>
          <div class="small muted">결제 이후 즉시 자동 다운로드 또는 검수 후 수동 발송 중 운영 방식을 선택하여 운영할 수 있습니다.</div>
        </div>
        <div class="card">
          <h4>3. 현장 적용</h4>
          <div class="small muted">한글(HWP) 원본으로 기관 표준에 맞게 바로 배포하세요. 엑셀은 매크로 셋팅 가이드를 동봉합니다.</div>
        </div>
        <div class="card">
          <h4>4. 커스터마이징(옵션)</h4>
          <div class="small muted">필요 시 기관용 커스터마이징(유료)을 제공합니다.</div>
        </div>
      </div>
    </section>

    <section id="pricing" class="section">
      <h3>가격 정책(예시)</h3>
      <div class="flex-cards">
        <div class="card">
          <h4>개별 템플릿</h4>
          <div class="small muted">₩4,900 ~ ₩29,900</div>
          <ul class="small muted">
            <li>HWP 원본 + XLSX 대체본 포함</li>
            <li>VAT 포함 가격 표기 (출시 전 세무확인)</li>
          </ul>
          <button class="btn btn-primary" @click="scrollTo('#templates')">구매하러 가기</button>
        </div>
        <div class="card">
          <h4>기관 패키지</h4>
          <div class="small muted">연간 라이선스: ₩200,000 ~</div>
          <ul class="small muted">
            <li>부서별 사용자 관리</li>
            <li>우선 커스터마이징 할인</li>
          </ul>
          <button class="btn btn-ghost" @click="scrollTo('#contact')">기관 문의</button>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <h3>문의 / 커스터마이징 요청</h3>
      <div class="card">
        <form @submit.prevent="sendContact">
          <div class="grid-2">
            <input v-model="contact.name" name="name" placeholder="이름" required />
            <input v-model="contact.org" name="org" placeholder="소속 (예: 용산구청 보육운영팀)" />
          </div>
          <textarea v-model="contact.message" name="message" rows="4" placeholder="요청사항을 간단히 적어주세요"></textarea>
          <div class="row" style="gap:8px">
            <button class="btn btn-primary" type="submit">문의 보내기</button>
            <a class="btn btn-ghost" :href="'mailto:hello@yourdomain.kr'">직접 메일 보내기</a>
          </div>
        </form>
      </div>
    </section>

    <footer>
      <div class="small muted">© 공문템 · 용산구 실무자가 만든 템플릿 | 개인정보처리방침 · 이용약관</div>
      <div class="small muted" style="margin-top:6px">초기 운영: 수동 발송 방식 권장 · 결제·자동배포는 백엔드 연동 필요</div>
    </footer>

    <!-- 미리보기 모달(간단) -->
    <div v-if="modal.visible" class="modal" @click.self="modal.visible=false">
      <div class="modal-card">
        <h4>{{ modal.title }}</h4>
        <p class="muted">{{ modal.desc }}</p>
        <div style="margin-top:12px">
          <button class="btn btn-primary" @click="modal.visible=false">닫기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const templates = reactive([
  { id: 1, title: '어린이집 점검 체크리스트 (HWP)', desc: '문항별 자동합산, 점검결과 PDF 출력용', price: '무료' },
  { id: 2, title: '어린이집 회계집계표 (XLSX)', desc: '월별 수입·지출 자동 집계, 계정코드 매핑', price: '무료' },
  { id: 3, title: '예산보고서 표준서식 (HWP)', desc: '지자체 제출용 포맷/자동 목차 포함', price: '무료' },
  { id: 4, title: '사업 제안서 템플릿 (HWP)', desc: '프레임워크 + 작성 가이드 포함', price: '무료' },
  { id: 5, title: '통합점검 대시보드 (XLSX)', desc: '기관별 요약표 + 리스크 표시', price: '무료' },
  { id: 6, title: '근거자료 첨부 양식 (HWP)', desc: '증빙 첨부 가이드 포함', price: '무료' },
  { id: 7, title: '연간 사업계획표 (XLSX)', desc: '기간별 예산 배분 자동화', price: '무료' },
  { id: 8, title: '대체 인력 관리표 (XLSX)', desc: '근무표 자동생성 + 승인흐름 주석', price: '무료' },
  { id: 9, title: '보고서 표준 목차(한글 포맷)', desc: '지자체 공문 표준 스타일 포함', price: '무료' },
  { id: 10, title: '커스터마이징 의뢰 양식 (HWP + XLSX)', desc: '요청서 템플릿 + 체크리스트', price: '무료' }
])

const lead = reactive({ name: '', email: '' })
const contact = reactive({ name: '', org: '', message: '' })

const modal = reactive({ visible: false, title: '', desc: '' })

function applySample() {
  // 데모: 실제로는 서버에 POST하여 샘플을 보내도록 변경
  alert(`${lead.name}님, 샘플 신청 접수됨 — ${lead.email}로 샘플이 발송됩니다(데모).`)
  lead.name = ''
  lead.email = ''
}

// buy() 함수 대체 (템플릿 다운로드 + 간단한 다운로드 로깅)
function buy(t) {
  // 직접 다운로드 트리거
  const a = document.createElement('a')
  a.href = t.downloadUrl
  a.download = '' // 브라우저에 따라 파일명 유지
  document.body.appendChild(a)
  a.click()
  a.remove()

  // (선택) 다운로드 카운트 전송 — 백엔드가 있다면 로그 남기기
  // fetch('/api/download', { method: 'POST', body: JSON.stringify({ templateId: t.id }) })
}


function preview(t) {
  modal.title = t.title
  modal.desc = t.desc
  modal.visible = true
}

function sendContact() {
  alert(`문의가 접수되었습니다. ${contact.name || '익명'}님에게 답변 드리겠습니다(데모).`)
  contact.name = ''
  contact.org = ''
  contact.message = ''
}

function scrollTo(sel) {
  const el = document.querySelector(sel)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
:root{
  --bg:#f7f9fc; --accent:#0b69ff; --muted:#6b7280; --card:#fff; --radius:12px; --maxw:1100px;
  font-family: 'Noto Sans KR', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:#111;line-height:1.6}
.wrap{max-width:var(--maxw);margin:36px auto;padding:24px}
header{display:flex;align-items:center;justify-content:space-between;gap:12px}
.brand{display:flex;gap:12px;align-items:center}
.logo{width:56px;height:56px;border-radius:10px;background:linear-gradient(135deg,#0b69ff,#4cc6ff);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:18px}
nav a{margin-left:18px;color:var(--muted);text-decoration:none}
.hero{display:grid;grid-template-columns:1fr 420px;gap:28px;margin-top:28px;align-items:start}
.kicker{display:inline-block;background:#eef6ff;color:var(--accent);padding:6px 10px;border-radius:20px;font-weight:700;font-size:12px}
.muted{color:var(--muted)}
.cta{display:flex;gap:12px}
.btn{padding:10px 14px;border-radius:10px;border:0;cursor:pointer;font-weight:600}
.btn-primary{background:var(--accent);color:#fff}
.btn-ghost{background:transparent;border:1px solid rgba(11,105,255,0.12);color:var(--accent)}
.card{background:var(--card);border-radius:var(--radius);padding:18px;box-shadow:0 6px 18px rgba(13,16,22,0.06)}
.features{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:20px}
.templates{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px}
.tmpl{background:#fff;padding:12px;border-radius:10px;border:1px solid #eef2ff}
.small{font-size:13px}
.note{margin-top:12px;font-size:13px}
.quick-pack{display:flex;gap:12px;align-items:center;margin-top:16px}
.icon{width:54px;height:54px;border-radius:8px;background:#f0f7ff;display:flex;align-items:center;justify-content:center;font-size:20px}
.section{margin-top:28px}
.templates{margin-top:10px}
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:10px}
.flex-cards{display:flex;gap:12px;margin-top:12px;flex-wrap:wrap}
.flex-cards .card{flex:1;min-width:260px}
.input, input, textarea{width:100%;padding:10px;border-radius:8px;border:1px solid #e6eefc}
input{margin-bottom:8px}
.row{display:flex;align-items:center;margin-top:8px}
.bullets{padding-left:18px}
.modal{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.4)}
.modal-card{background:#fff;padding:18px;border-radius:12px;max-width:420px;width:90%}
@media(max-width:980px){
  .hero{grid-template-columns:1fr}
  .features{grid-template-columns:repeat(2,1fr)}
  .templates{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:560px){
  .features{grid-template-columns:1fr}
  .templates{grid-template-columns:1fr}
  header{flex-direction:column;align-items:flex-start}
  .grid-2{grid-template-columns:1fr}
}
</style>
