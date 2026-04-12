// ============================
// QUESTIONNAIRE DATA
// ============================

const attentionItems = [
  'מתקשה להתרכז במשימות ארוכות',
  'קופץ מנושא לנושא',
  'מתקשה להקשיב להוראות עד הסוף',
  'שוכח/ת חפצים או משימות',
  'מסיח/ה את דעת האחרים',
  'מתקשה להתחיל משימה באופן עצמאי',
  'זקוק/ה לתזכורות חוזרות',
  'מתקשה לחזור למשימה אחרי הפרעה',
];

const peItems = [
  'משתתף/ת בפעילויות גופניות',
  'מתקשה בריצה או בקפיצה',
  'נמנע/ת ממשחקים בחצר',
  'מתקשה בשמירת שיווי משקל',
  'מתקשה בתפיסת כדור',
  'עייף/ה מהר בפעילות גופנית',
];

const sensoryItems = [
  'מגע (ליטוף, חיבוק)',
  'רעשים חזקים',
  'טקסטורות (בגדים, אוכל)',
  'תנועה (נדנדה, סיבוב)',
  'ריחות חזקים',
  'אורות חזקים',
  'פעילות מוטורית (קפיצה, דחיפה)',
  'חומרים רטובים/דביקים',
];

const orgItems = [
  'מארגן/ת את התיק והחפצים',
  'עוקב/ת אחרי מערכת השעות',
  'מכין/ה את החומרים הנדרשים לשיעור',
  'שומר/ת על סדר בשולחן',
  'עובר/ת בין פעילויות בצורה חלקה',
  'מנהל/ת את הזמן בצורה סבירה',
];

const fineMotorItems = [
  'מתקשה באחיזת עיפרון/עט',
  'מתקשה בגזירה במספריים',
  'מתקשה בהדבקה ויצירה',
  'מתקשה בסגירת כפתורים/רוכסנים',
  'מתקשה בציור צורות בסיסיות',
  'תנועות ידיים לא מדויקות',
  'מתקשה בבניית לגו/פאזלים',
  'לחץ חזק/חלש מדי בכתיבה',
];

const writingItems = [
  'גודל אותיות אחיד',
  'כתיבה על השורה',
  'רווחים בין מילים',
  'מהירות כתיבה',
  'קריאות הכתב',
  'העתקה מהלוח',
  'כתיבה מהכתבה',
  'כתיבה חופשית (חיבור)',
  'אחיזת העט בזמן כתיבה',
  'יציבה בזמן כתיבה',
  'שימוש ביד מסייעת (מחזיקה דף)',
  'סיבולת בכתיבה ארוכה',
  'מוטיבציה לכתוב',
];

const socialItems = [
  'יוזם/ת קשר עם ילדים',
  'משתף/ת פעולה בעבודה קבוצתית',
  'שומר/ת על תורות (בשיחה ובמשחק)',
  'מבין/ה רמזים חברתיים',
  'מגיב/ה בצורה מותאמת לסיטואציה',
  'מתמודד/ת עם קונפליקטים',
  'מביע/ה רגשות בצורה מותאמת',
  'יש לו/ה חברים קרובים',
];

const languageItems = [
  'אוצר מילים מתאים לגיל',
  'בניית משפטים תקינה',
  'הבנת הוראות מורכבות',
  'יכולת לספר סיפור בצורה מאורגנת',
  'שימוש נכון בזמנים (עבר, הווה, עתיד)',
  'הבנת שאלות מורכבות',
  'שימוש במילות קישור',
  'ביטוי עצמי מילולי',
  'הבנת הומור ודו-משמעות',
  'הבנת טקסט כתוב',
  'יכולת לתת הגדרות למילים',
  'שטף דיבור',
  'שימוש בשפה מופשטת',
];

const pronunItems = [
  'הדיבור ברור ומובן לסביבה',
  'מתקשה בהגיית צלילים מסוימים',
  'מדבר/ת מהר מדי או לאט מדי',
  'יש גמגום או עצירות בדיבור',
  'עוצמת הדיבור מתאימה (לא חזק/חלש מדי)',
];

// ============================
// BUILD FORM SECTIONS
// ============================

function buildRadioSection(containerId, items, options, sectionName) {
  const container = document.getElementById(containerId);
  items.forEach((item, i) => {
    const name = `${sectionName}_${i}`;
    let html = `<div class="question-row">
            <label class="question-label">${item}</label>
            <div class="radio-row">`;
    options.forEach((opt, j) => {
      html += `<div class="radio-option">
                <input type="radio" name="${name}" id="${name}_${j}" value="${opt}">
                <label for="${name}_${j}">${opt}</label>
            </div>`;
    });
    html += `</div></div>`;
    container.innerHTML += html;
  });
}

function buildYesNoSection(containerId, items, sectionName) {
  const container = document.getElementById(containerId);
  items.forEach((item, i) => {
    const name = `${sectionName}_${i}`;
    let html = `<div class="question-row">
            <label class="question-label">${item}</label>
            <div class="yesno-row">
                <div class="yesno-option">
                    <input type="radio" name="${name}" id="${name}_yes" value="כן">
                    <label for="${name}_yes">כן</label>
                </div>
                <div class="yesno-option">
                    <input type="radio" name="${name}" id="${name}_no" value="לא">
                    <label for="${name}_no">לא</label>
                </div>
            </div></div>`;
    container.innerHTML += html;
  });
}

// Build all sections
const freq4 = ['תמיד', 'לעיתים קרובות', 'לעיתים רחוקות', 'אף פעם'];
const sensory4 = ['אוהב/ת', 'נמנע/ת', 'נרתע/ת', 'מחפש/ת'];
const scale3org = ['עצמאי/ת', 'זקוק/ה לעזרה', 'לא מצליח/ה'];
const scale3 = ['תקין', 'קושי מסוים', 'קושי משמעותי'];

buildRadioSection('attention-items', attentionItems, freq4, 'attention');
buildRadioSection('pe-items', peItems, freq4, 'pe');
buildRadioSection('sensory-items', sensoryItems, sensory4, 'sensory');
buildRadioSection('org-items', orgItems, scale3org, 'org');
buildRadioSection('finemotor-items', fineMotorItems, freq4, 'finemotor');
buildRadioSection('writing-items', writingItems, scale3, 'writing');
buildRadioSection('social-items', socialItems, scale3, 'social');
buildRadioSection('language-items', languageItems, scale3, 'language');
buildYesNoSection('pronun-items', pronunItems, 'pronun');

// ============================
// PROGRESS TRACKING
// ============================

document.getElementById('questionnaireForm').addEventListener('change', updateProgress);

function updateProgress() {
  const allInputs = document.querySelectorAll('#questionnaireForm input[type="radio"]');
  const groups = new Set();
  const answered = new Set();
  allInputs.forEach((inp) => {
    groups.add(inp.name);
    if (inp.checked) answered.add(inp.name);
  });
  const selects = document.querySelectorAll('#questionnaireForm select');
  selects.forEach((s) => {
    groups.add(s.name);
    if (s.value) answered.add(s.name);
  });
  const pct = groups.size > 0 ? (answered.size / groups.size) * 100 : 0;
  document.getElementById('progressFill').style.width = pct + '%';
}

// ============================
// NAVIGATION
// ============================

function showPage(page) {
  [
    'combined',
    'parentsOver3',
    'sideA',
    'officialTeacher6',
    'parentsUnder3',
    'teacherUnder3',
    'parentGan36',
    'teacherGan36',
    'sideB',
  ].forEach((p) => {
    document.getElementById(p).classList.toggle('hidden', p !== page);
  });
  document.querySelectorAll('.nav-tab').forEach((tab, i) => {
    tab.classList.toggle(
      'active',
      (i === 0 && page === 'combined') ||
        (i === 1 && page === 'parentsOver3') ||
        (i === 2 && page === 'sideA') ||
        (i === 3 && page === 'officialTeacher6') ||
        (i === 4 && page === 'parentsUnder3') ||
        (i === 5 && page === 'teacherUnder3') ||
        (i === 6 && page === 'parentGan36') ||
        (i === 7 && page === 'teacherGan36') ||
        (i === 8 && page === 'sideB'),
    );
  });
  if (page === 'sideB') loadSideBData();
}

// ============================
// COLLECT FORM DATA
// ============================

function collectFormData() {
  const data = {};

  // Section 2 - Behavior
  data.behavior = {
    mood: document.querySelector('[name="mood"]').value,
    routine_change: document.querySelector('[name="routine_change"]').value,
    frustration: document.querySelector('[name="frustration"]').value,
    notes: document.querySelector('[name="behavior_notes"]').value,
  };

  // Radio sections
  function collectRadio(items, prefix) {
    const results = {};
    items.forEach((item, i) => {
      const checked = document.querySelector(`input[name="${prefix}_${i}"]:checked`);
      results[item] = checked ? checked.value : '';
    });
    return results;
  }

  data.attention = collectRadio(attentionItems, 'attention');
  data.pe = collectRadio(peItems, 'pe');
  data.sensory = collectRadio(sensoryItems, 'sensory');
  data.organization = collectRadio(orgItems, 'org');
  data.fineMotor = collectRadio(fineMotorItems, 'finemotor');
  data.writing = collectRadio(writingItems, 'writing');
  data.social = collectRadio(socialItems, 'social');
  data.language = collectRadio(languageItems, 'language');
  data.pronunciation = collectRadio(pronunItems, 'pronun');

  // Section 12 - Academics
  data.academics = {
    reading: document.querySelector('[name="reading_level"]').value,
    math: document.querySelector('[name="math_level"]').value,
    notes: document.querySelector('[name="academics_notes"]').value,
  };

  // Section 13 - Summary
  data.summary = {
    strengths: document.querySelector('[name="strengths"]').value,
    difficulties: document.querySelector('[name="difficulties"]').value,
    recommendations: document.querySelector('[name="recommendations"]').value,
  };

  data._meta = {
    type: 'teacher_6plus',
    timestamp: new Date().toISOString(),
    version: '1.0-prototype',
  };

  return data;
}

// ============================
// PRINT / SAVE AS PDF
// ============================

function printForm(formId) {
  // Save combined form data to localStorage for Side B
  if (formId === 'sideA') {
    const data = collectFormData();
    localStorage.setItem('questionnaire_data', JSON.stringify(data));
  }
  // Add class to body so print CSS knows which form to show
  document.body.classList.remove(
    'printing-combined',
    'printing-sideA',
    'printing-parentsOver3',
    'printing-parentsUnder3',
    'printing-officialTeacher6',
    'printing-teacherUnder3',
    'printing-parentGan36',
    'printing-teacherGan36',
  );
  document.body.classList.add('printing-' + formId);
  window.print();
  document.body.classList.remove(
    'printing-combined',
    'printing-sideA',
    'printing-parentsOver3',
    'printing-parentsUnder3',
    'printing-officialTeacher6',
    'printing-teacherUnder3',
    'printing-parentGan36',
    'printing-teacherGan36',
  );
}

// ============================
// PDF GENERATION (kept for reference, replaced by printForm)
// ============================

function submitAndDownload() {
  const data = collectFormData();

  // Save to localStorage for Side B
  localStorage.setItem('questionnaire_data', JSON.stringify(data));

  // Generate PDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ putOnlyUsedFonts: true });

  // Since jsPDF doesn't handle Hebrew well natively, we'll create
  // a simple structured PDF with the data encoded as JSON
  // For the prototype, we'll generate a readable English-labeled PDF
  // and embed the full JSON data

  let y = 20;
  doc.setFontSize(16);
  doc.text('Teacher Questionnaire - Child Over Age 6', 105, y, { align: 'center' });
  y += 8;
  doc.setFontSize(10);
  doc.text('Clalit - Digital Questionnaire System (Prototype)', 105, y, { align: 'center' });
  y += 5;
  doc.text('Date: ' + new Date().toLocaleDateString('he-IL'), 105, y, { align: 'center' });
  y += 12;

  doc.setFontSize(9);

  // Write each section
  const sections = [
    { title: 'Behavior & Mood', data: data.behavior, type: 'object' },
    { title: 'Attention', data: data.attention, type: 'radio' },
    { title: 'PE / Yard', data: data.pe, type: 'radio' },
    { title: 'Sensory', data: data.sensory, type: 'radio' },
    { title: 'Classroom Organization', data: data.organization, type: 'radio' },
    { title: 'Fine Motor', data: data.fineMotor, type: 'radio' },
    { title: 'Writing', data: data.writing, type: 'radio' },
    { title: 'Social & Communication', data: data.social, type: 'radio' },
    { title: 'Language', data: data.language, type: 'radio' },
    { title: 'Pronunciation', data: data.pronunciation, type: 'radio' },
    { title: 'Academics', data: data.academics, type: 'object' },
    { title: 'Summary & Recommendations', data: data.summary, type: 'object' },
  ];

  sections.forEach((sec) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text(sec.title, 15, y);
    y += 5;
    doc.setFontSize(8);
    doc.setFont(undefined, 'normal');

    if (sec.type === 'radio') {
      Object.entries(sec.data).forEach(([item, val]) => {
        if (y > 280) {
          doc.addPage();
          y = 20;
        }
        const display = val || '(not answered)';
        doc.text(`• ${display}`, 20, y);
        y += 4;
      });
    } else {
      Object.entries(sec.data).forEach(([key, val]) => {
        if (y > 280) {
          doc.addPage();
          y = 20;
        }
        const display = val || '(not answered)';
        doc.text(`${key}: ${display}`, 20, y);
        y += 4;
      });
    }
    y += 4;
  });

  // Embed JSON data on last page for machine reading
  doc.addPage();
  doc.setFontSize(7);
  doc.setTextColor(200, 200, 200);
  doc.text('DATA_START:' + JSON.stringify(data) + ':DATA_END', 10, 10, { maxWidth: 190 });

  doc.save('questionnaire-teacher-6plus.pdf');

  // Show success message
  alert('ה-PDF הורד בהצלחה!\nכעת שלחו אותו באימייל למרפאה עם שם הילד/ה ות.ז.');
}

// ============================
// SIDE B — ANALYSIS
// ============================

function loadSideBData() {
  const raw = localStorage.getItem('questionnaire_data');
  if (!raw) {
    document.getElementById('noDataMsg').classList.remove('hidden');
    document.getElementById('summaryCards').classList.add('hidden');
    document.getElementById('copyAllBtn').classList.add('hidden');
    return;
  }

  const data = JSON.parse(raw);
  document.getElementById('noDataMsg').classList.add('hidden');
  document.getElementById('summaryCards').classList.remove('hidden');
  document.getElementById('copyAllBtn').classList.remove('hidden');

  const summaries = generateSummaries(data);
  const container = document.getElementById('summaryCards');
  container.innerHTML = '';

  summaries.forEach((s, i) => {
    container.innerHTML += `
            <div class="summary-card">
                <h3>${s.title}</h3>
                <div class="summary-text" id="summary_${i}">${s.text}</div>
                <button class="copy-btn" onclick="copySummary(${i}, this)">העתק</button>
            </div>`;
  });
}

function generateSummaries(data) {
  const summaries = [];

  // Behavior
  let behaviorText = 'התנהגות ומצב רוח: ';
  if (data.behavior.mood) behaviorText += `מצב רוח כללי — ${data.behavior.mood}. `;
  if (data.behavior.routine_change)
    behaviorText += `תגובה לשינויים — ${data.behavior.routine_change}. `;
  if (data.behavior.frustration)
    behaviorText += `התמודדות עם תסכול — ${data.behavior.frustration}. `;
  if (data.behavior.notes) behaviorText += `\nהערות: ${data.behavior.notes}`;
  summaries.push({ title: 'התנהגות ומצב רוח', text: behaviorText });

  // Radio-based sections
  function summarizeRadio(title, sectionData, notableValues) {
    const notable = [];
    const ok = [];
    Object.entries(sectionData).forEach(([item, val]) => {
      if (!val) return;
      if (notableValues.includes(val)) {
        notable.push(`${item} (${val})`);
      } else {
        ok.push(item);
      }
    });
    let text = `${title}: `;
    if (notable.length > 0) {
      text += `\nקשיים שזוהו:\n`;
      notable.forEach((n) => (text += `• ${n}\n`));
    }
    if (ok.length > 0 && notable.length > 0) {
      text += `\nתקין: ${ok.join(', ')}`;
    } else if (notable.length === 0) {
      text += 'לא דווחו קשיים בתחום זה.';
    }
    return text;
  }

  summaries.push({
    title: 'תפקודי קשב',
    text: summarizeRadio('תפקודי קשב', data.attention, ['תמיד', 'לעיתים קרובות']),
  });

  summaries.push({
    title: 'פעילות בחצר / התעמלות',
    text: summarizeRadio('פעילות בחצר/התעמלות', data.pe, ['תמיד', 'לעיתים קרובות']),
  });

  // Sensory - different logic
  let sensoryText = 'תחושה (סנסורי): \n';
  const sensoryGroups = { 'אוהב/ת': [], 'נמנע/ת': [], 'נרתע/ת': [], 'מחפש/ת': [] };
  Object.entries(data.sensory).forEach(([item, val]) => {
    if (val && sensoryGroups[val]) sensoryGroups[val].push(item);
  });
  if (sensoryGroups['נמנע/ת'].length > 0)
    sensoryText += `נמנע/ת מ: ${sensoryGroups['נמנע/ת'].join(', ')}\n`;
  if (sensoryGroups['נרתע/ת'].length > 0)
    sensoryText += `נרתע/ת מ: ${sensoryGroups['נרתע/ת'].join(', ')}\n`;
  if (sensoryGroups['מחפש/ת'].length > 0)
    sensoryText += `מחפש/ת: ${sensoryGroups['מחפש/ת'].join(', ')}\n`;
  if (sensoryGroups['אוהב/ת'].length > 0)
    sensoryText += `אוהב/ת: ${sensoryGroups['אוהב/ת'].join(', ')}`;
  if (Object.values(sensoryGroups).every((g) => g.length === 0))
    sensoryText += 'לא דווחו ממצאים בתחום הסנסורי.';
  summaries.push({ title: 'תחושה (סנסורי)', text: sensoryText });

  summaries.push({
    title: 'התארגנות בכיתה',
    text: summarizeRadio('התארגנות בכיתה', data.organization, ['זקוק/ה לעזרה', 'לא מצליח/ה']),
  });

  summaries.push({
    title: 'מוטוריקה עדינה',
    text: summarizeRadio('מוטוריקה עדינה', data.fineMotor, ['תמיד', 'לעיתים קרובות']),
  });

  summaries.push({
    title: 'כתיבה',
    text: summarizeRadio('כתיבה', data.writing, ['קושי מסוים', 'קושי משמעותי']),
  });

  summaries.push({
    title: 'תפקוד חברתי ותקשורתי',
    text: summarizeRadio('תפקוד חברתי ותקשורתי', data.social, ['קושי מסוים', 'קושי משמעותי']),
  });

  summaries.push({
    title: 'שפה',
    text: summarizeRadio('שפה', data.language, ['קושי מסוים', 'קושי משמעותי']),
  });

  // Pronunciation
  let pronText = 'הגוי (הגייה): \n';
  const pronIssues = [];
  Object.entries(data.pronunciation).forEach(([item, val]) => {
    if (val === 'לא' && item === 'הדיבור ברור ומובן לסביבה')
      pronIssues.push('דיבור לא ברור לסביבה');
    else if (
      val === 'כן' &&
      item !== 'הדיבור ברור ומובן לסביבה' &&
      item !== 'עוצמת הדיבור מתאימה (לא חזק/חלש מדי)'
    )
      pronIssues.push(item);
    else if (val === 'לא' && item === 'עוצמת הדיבור מתאימה (לא חזק/חלש מדי)')
      pronIssues.push('עוצמת דיבור לא מתאימה');
  });
  pronText +=
    pronIssues.length > 0
      ? `ממצאים:\n${pronIssues.map((p) => '• ' + p).join('\n')}`
      : 'לא דווחו קשיים בהגייה.';
  summaries.push({ title: 'הגוי (הגייה)', text: pronText });

  // Academics
  let acadText = 'לימודים: \n';
  if (data.academics.reading) acadText += `קריאה: ${data.academics.reading}. `;
  if (data.academics.math) acadText += `חשבון: ${data.academics.math}. `;
  if (data.academics.notes) acadText += `\nהערות: ${data.academics.notes}`;
  summaries.push({ title: 'לימודים', text: acadText });

  // Summary
  let sumText = 'סיכום והמלצות המורה: \n';
  if (data.summary.strengths) sumText += `חוזקות: ${data.summary.strengths}\n`;
  if (data.summary.difficulties) sumText += `קשיים: ${data.summary.difficulties}\n`;
  if (data.summary.recommendations) sumText += `המלצות: ${data.summary.recommendations}`;
  summaries.push({ title: 'סיכום והמלצות', text: sumText });

  return summaries;
}

// ============================
// COPY FUNCTIONALITY
// ============================

function copySummary(index, btn) {
  const text = document.getElementById(`summary_${index}`).innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'הועתק!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'העתק';
      btn.classList.remove('copied');
    }, 2000);
  });
}

// ============================
// COMBINED FORM DATA
// ============================

const parentMedicalItems = [
  'האם ההיריון היה תקין?',
  'האם הלידה הייתה רגילה?',
  'האם יש סיבוכים לאחר הלידה?',
  'האם ילדכם סבל או סובל ממחלה מתמשכת?',
  'האם ילדכם סבל או סובל מפרכוסים?',
  'האם ילדכם מקבל תרופות באופן קבוע?',
  'האם בטיפולו של רופא מומחה כלשהו?',
  "האם ילדכם עבר ניתוחים, השתלת כפתורים, הוצאת פוליפים וכו'?",
  'האם ילדכם ישן היטב בלילה?',
];

const parentGeneralFuncItems = [
  'תפקוד כללי בבית הספר',
  'קריאה',
  'כתיבה',
  'חשבון',
  'יחסים עם ההורים',
  'יחסים עם האחים',
  'יחסים עם חברים',
  'השתתפות בפעילויות אחרות (חוגים, תנועת נוער)',
];

const parentAttentionItems = [
  'אינו שם לב לפרטים ועושה טעויות של חוסר תשומת לב, למשל בשיעורי בית',
  'מתקשה לשמור על תשומת לב לדברים שצריך לעשותם',
  'נראה שאינו מקשיב כאשר מדברים אליו ישירות',
  'אין עוקב אחר הוראות ולא מצליח לסיים מטלות ופעילויות, אך לא בגלל סירוב או חוסר הבנה',
  'מתקשה לארגן מטלות ופעילויות',
  'נמנע, אינו אוהב או לא רוצה להתחיל בפעילויות שדורשות מאמץ שכלי ממושך',
  'מאבד חפצים חיוניים לו למשימות ופעילויות כמו צעצועים, שיעורי בית, עפרונות ספרים',
  'מוסח בקלות על ידי רעש או גירויים אחרים',
  'שוכח מטלות יומיומיות',
  'חסר מנוחה בזמן ישיבה, נטייה להזיז ידיים או רגליים',
  'קם ממקומו כאשר מצופה ממנו שיישאר לשבת',
  'מתרוצץ, מטפס יותר מידי, כשמצופה ממנו שישב',
  'מתקשה לשחק או להתחיל בפעילויות בשקטות',
  'נראה פעיל או כאילו ״מונע על ידי מנוע״',
  'מדבר יותר מידי',
  'מתפרץ בתשובות לפני שסיים לשמוע את השאלות',
  'מתקשה להמתין לתורו',
  'מתפרץ לשיחות או משחקים של אחרים',
];

const parentEmotionalItems = [
  'רגוע ונינוח לרוב, מצב רוח טוב, מסתגל לשינויים',
  'שלוי ואינו חרדתי',
  'מרגיש אהוב ומקובל, מאמין בערך עצמו, בעל ביטחון עצמי',
  'יודע לוותר, להתפשר, אינו כוחני ורגזן',
  'שולט על התנהגותו ואינו מתפרץ או אלים',
];

const parentSensoryItemsCombined = [
  'מגע קרוב עם ילדים או מבוגרים',
  'מגע עם פרטי לבוש (תכויות, צוארונים, תפרים, חגורה, ג׳ינס וכו׳)',
  'רחיצת פנים, תספורת, גזיזת ציפורניים',
  'מרקמי מזון מגוונים, ריחות וטעמים מגוונים',
  'אחר',
];

const parentActivityItemsCombined = [
  'הליכה וריצה, קפיצה, משחקי כדור, שימוש במתקנים, רכיבה על אופניים / קפיצה על חבל',
  'ביצוע פעולות עדינות באצבעות (מספריים, סכו״מ וכו׳), היגיינה אישית, לבוש, שריכת שרוכים',
  'לימודים: התארגנות עם ציוד, שיעורי בית, קריאות הכתב, קצב כתיבה',
];

const parentSocialItemsCombined = [
  'חברותי, יוצר קשר עם בני גילו',
  'משתתף בפעילות חברתית, משחקים, מסיבות',
  'מבין את חוקי המשחק, תורות',
  'מבין אם צוחקים לו או משבחים אותו',
  'מבין מצבים חברתיים, חוקי ההתנהגות, נימוס, הומור',
  'ער לרגשות הזולת ומבין כוונות של אחרים',
];

const parentLanguageItemsCombined = [
  'מבין שאלות ועונה עליהן כראוי',
  'מסוגל להסיק מסקנות',
  'מתבטא באוצר מילים ומשפטים בדומה לבני גילו',
  'מסוגל לספר חוויות בצורה ברורה',
  'הדיבור שלו ברור',
];

const parentPronunItemsCombined = [
  'האם קיימים שיבושי הגיוי?',
  'האם הוא משכל אותיות בדיבור (גמגום)?',
  'האם קיים חוסר שטף בדיבור?',
  'האם קיימת צרידות?',
];

const teacherGeneralDescItems = [
  'במצב רוח טוב / מגיע בשמחה לבית הספר / משתתף פעולה בכל המטלות / ממושמע / יכול לקבל גבולות',
  'סובל משינויים קיצוניים במצב הרוח / עקשן / מתקשה לוותר / מרבה לריב / מכה',
  'מסתגר / בעל ביטחון עצמי נמוך / עצוב / פסיבי / מדוכדך רוב הזמן / בודד',
];

const teacherAttentionItemsCombined = [
  'לא שם לב לפרטים ועושה טעויות עקב חוסר תשומת לב בעבודות בית הספר',
  'מתקשה לשמור על תשומת לב ממושכת לפעולות/מטלות',
  'נראה שאינו מקשיב כאשר מדברים אליו ישירות',
  'אינו עוקב אחר הוראות ולא מצליח לסיים מטלות ופעילויות – לא בגלל סירוב או חוסר הבנה',
  'מתקשה לארגן מטלות ופעילויות שלו (להביא ציוד, לארגן אותן)',
  'נמנע, אינו אוהב להתחיל בפעילויות שדורשות מאמץ שכלי ממושך',
  'מאבד חפצים חיוניים לו למשימות ופעילויות כמו צעצועים, שיעורים, עפרונות ספרים',
  'מוסח בקלות על ידי רעש או גירויים אחרים',
  'שוכח פעולות יומיומיות (כגון להביא גדי ספורט, להגיע בזמן לכיתה)',
  'מזיז ידיים ורגליים, חסר מנוחה בעת ישיבה',
  'קם ממקומו כאשר מצופה ממנו שיישאר לשבת',
  'מתרוצץ, מטפס יותר מידי, כשמצופה ממנו שישב',
  'מתקשה לשחק או להתחיל בפעולות בשקטות',
  'נראה פעיל או כאילו ״מונע על ידי מנוע״',
  'מדבר יותר מידי',
  'מתפרץ בתשובות לפני שסיים לשמוע את השאלות',
  'מתקשה להמתין לתורו',
  'מתפרץ ומפריע לשיחה או פעילות של אחרים',
];

const teacherBehavioralItems = [
  'התפרצויות זעם',
  'מתנגד ומסרב לשתף פעולה עם דרישות או חוקים של מבוגרים',
  'כעוס וזעוף',
  'עושה דברים דווקא ורוצה להתנקם באחרים',
  'מתנהג כמו ״בריון״, מאיים על אחרים',
  'מתחיל תגרות גופניות עם אחרים',
  'משקר כדי להתחמק מאחריות או להשיג מטרה',
  'מתאכזר גופנית לאנשים',
  'גנב חפצים בעלי ערך',
  'הרס בכוונה רכוש של אחרים',
  'חושש, חרד, מודאג',
  'נבוך בקלות',
  'חושש לנסות דברים חדשים – פוחד שיטעה',
  'מרגיש נחות או חסר ערך',
  'מאשים את עצמו על הבעיות שלו, מרגיש אשם',
  'מרגיש בודד, לא רצוי, לא אהוב, מתלונן ש״איש לא אוהב אותו״',
  'עצוב, לא מאושר / מדוכא',
];

const teacherMotorItems = [
  'פעילות מוטורית בחצר / שיעורי התעמלות',
  'יציבה בעת השיעור',
  'התארגנות בסביבת הלמידה: ילקוט, שולחן, מחק',
  'שימוש בציוד: קלמר, סרגל, מחק',
  'אחיזת עיפרון והפעלת לחץ עליו',
];

const teacherSocialItemsCombined = [
  'יוצר קשר עין תקין ולא נמנע ממבט ישיר',
  'יוצר, יוזם קשר עם בני גילו',
  'נענה לקשר חברתי מצד בני גילו',
  'משתתף בפעילויות חברתיות',
  'משתתף בתחרויות ומבין הצלחה וכישלון',
  'מבין רמזים וחוקי התנהגות חברתית',
];

const teacherSocialYN = [
  'האם יש לו התנהגויות חזרתיות / טקסיות?',
  'האם קיימת התנגדות לשינויים?',
  'האם קיימות תנועות גוף חזרתיות?',
];

const teacherLanguageItemsCombined = [
  'מבין את התכנים הנלמדים בבית הספר',
  'מבין הוראות מורכבות או שאלות',
  'מסוגל להסיק מסקנות',
  'מתבטא באוצר מילים רחב',
  'משתמש במשפטים מחוברים ומורכבים',
  'יכול לספר סיפור או חוויות בצורה מאורגנת וברורה',
];

const teacherPronunItemsCombined = [
  'האם קיימים שיבושי הגיוי?',
  'האם הוא משכל אותיות בדיבור (למשל אומר מילים ממקום מחשב)?',
  'האם קיים חוסר שטף בדיבור (גמגום)?',
  'האם קיימת צרידות?',
];

const prevTestsList = ['ראייה', 'שמיעה', 'ייעוץ גנטי', 'בדיקות דם', 'EEG', 'הדמייה מוחית', 'אחר'];

// ============================
// BUILD COMBINED FORM SECTIONS
// ============================

// Medical yes/no with detail field
function buildMedicalSection(containerId, items, prefix) {
  const container = document.getElementById(containerId);
  items.forEach((item, i) => {
    const name = `${prefix}_${i}`;
    container.innerHTML += `<div class="question-row">
            <label class="question-label">${item}</label>
            <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
                <div class="yesno-option"><input type="radio" name="${name}" id="${name}_y" value="כן"><label for="${name}_y">כן</label></div>
                <div class="yesno-option"><input type="radio" name="${name}" id="${name}_n" value="לא"><label for="${name}_n">לא</label></div>
                <input type="text" name="${name}_detail" placeholder="פרטו..." style="flex:1; min-width:150px; padding:6px 10px; border:1px solid #ddd; border-radius:6px; font-size:13px;">
            </div>
        </div>`;
  });
}

// Sensory section with notes column
function buildSensoryNotes(containerId, items, prefix) {
  const container = document.getElementById(containerId);
  const opts = ['אוהב/רגיל', 'נרתע/נמנע', 'מחפש/מגזים'];
  items.forEach((item, i) => {
    const name = `${prefix}_${i}`;
    let html = `<div class="question-row">
            <label class="question-label">${item}</label>
            <div style="display:flex; gap:0; direction:rtl; align-items:center;">`;
    opts.forEach((opt, j) => {
      html += `<div class="radio-option" style="flex:2;">
                <input type="radio" name="${name}" id="${name}_${j}" value="${opt}">
                <label for="${name}_${j}">${opt}</label>
            </div>`;
    });
    html += `<div style="flex:3; padding-right:8px;">
            <input type="text" name="${name}_notes" placeholder="הערות..." style="width:100%; padding:5px 8px; border:1px solid #ddd; border-radius:6px; font-size:12px;">
        </div></div></div>`;
    container.innerHTML += html;
  });
}

// Checkbox general description for teacher
function buildDescCheckboxes(containerId, items, prefix) {
  const container = document.getElementById(containerId);
  items.forEach((item, i) => {
    const name = `${prefix}_${i}`;
    container.innerHTML += `<div class="question-row" style="display:flex; align-items:flex-start; gap:10px;">
            <input type="checkbox" id="${name}" name="${name}" style="width:auto; margin-top:4px; flex-shrink:0;">
            <label for="${name}" style="font-size:14px; line-height:1.5; cursor:pointer;">${item}</label>
        </div>`;
  });
}

// Tests table rows
(function buildTestsTable() {
  const tbody = document.getElementById('tests-table-body');
  prevTestsList.forEach((test, i) => {
    tbody.innerHTML += `<tr>
            <td style="padding:7px 10px; border:1px solid #ddd; font-size:13px;">${test}</td>
            <td style="text-align:center; padding:7px; border:1px solid #ddd;">
                <input type="checkbox" name="test_done_${i}">
            </td>
            <td style="border:1px solid #ddd; padding:4px;">
                <input type="text" name="test_date_${i}" placeholder="תאריך" style="width:100%; border:none; padding:4px; font-size:12px;">
            </td>
            <td style="border:1px solid #ddd; padding:4px;">
                <input type="text" name="test_result_${i}" placeholder="תוצאה" style="width:100%; border:none; padding:4px; font-size:12px;">
            </td>
        </tr>`;
  });
})();

// Build all combined sections
const freq4c = ['אף פעם', 'לפעמים', 'לעיתים קרובות', 'כל הזמן'];
const scale5c = ['מעולה', 'מעל הממוצע', 'ממוצע', 'מעט בעייתי', 'בעייתי'];
const scale3c = ['בהתאם לגיל', 'מתקשה', 'מתקשה מאד'];
const scale3soc = ['בדרך כלל', 'לעיתים', 'לעיתים רחוקות'];

buildMedicalSection('parent-medical-items', parentMedicalItems, 'pmed');
buildRadioSection('parent-general-func', parentGeneralFuncItems, scale5c, 'pgfunc');
buildRadioSection('parent-attention-items', parentAttentionItems, freq4c, 'patt');
buildRadioSection('parent-emotional-items', parentEmotionalItems, freq4c, 'pemot');
buildSensoryNotes('parent-sensory-items', parentSensoryItemsCombined, 'psens');
buildRadioSection('parent-activity-items', parentActivityItemsCombined, scale3c, 'pact');
buildRadioSection('parent-social-items', parentSocialItemsCombined, scale3soc, 'psoc');
buildRadioSection('parent-language-items', parentLanguageItemsCombined, scale3soc, 'plang');
buildYesNoSection('parent-pronun-items', parentPronunItemsCombined, 'ppron');

buildDescCheckboxes('teacher-general-desc', teacherGeneralDescItems, 'tgdesc');
buildRadioSection('teacher-attention-items', teacherAttentionItemsCombined, freq4c, 'tatt');
buildRadioSection('teacher-behavioral-items', teacherBehavioralItems, freq4c, 'tbehav');
buildRadioSection('teacher-motor-items', teacherMotorItems, scale3c, 'tmotor');
buildRadioSection('teacher-social-items', teacherSocialItemsCombined, scale3c, 'tsoc');
buildYesNoSection('teacher-social-yn', teacherSocialYN, 'tsocyn');
buildRadioSection('teacher-language-items', teacherLanguageItemsCombined, scale3soc, 'tlang');
buildYesNoSection('teacher-pronun-items', teacherPronunItemsCombined, 'tpron');

// ============================
// PARENTS OVER 3 — DATA
// ============================

const po3BehaviorItems = [
  'רגוע, נינוח',
  'מרוכז לאורך זמן',
  'מסתגל למצבים חדשים',
  'חברותי',
  'שמח בדרך כלל',
  'נפרד מהוריו בקלות',
  'מתמודד עם קושי',
  'עצמאי',
  'בטוח בעצמו',
];

const po3IndependenceItems = [
  'עצמאי בלבוש',
  'שירותים',
  'רחצה',
  'אכילה ושתייה',
  'משתמש בסכו״ם בזמן האוכל',
];

const po3Sensory1Items = [
  'משחק בבצק/פלסטלינה/צבעי ידיים/דבק/מים/חול',
  'משחק במתקנים — קרוסלה, נדנדה, סולם, מגלשה',
  'מגע עם ילדים או מבוגרים',
  'עמידה בתור עם ילדים נוספים',
  'פעילויות עם רעש (מסיבות, אירועים)',
  'מוסיקה / אירועים',
];

const po3Sensory2Items = [
  'רגיש לסוג מסוים של בגדים/גרביים/צווארון',
  'מביע אי נוחות ברחיצת פנים, תספורת, מקלחת',
  'מעדיף לאכול מרקמי וסוגי מזון מסוימים ונמנע מאחרים',
  'רגיש לריחות גם אם הם לא מאוד חזקים',
];

const po3GrossItems = [
  'הליכה וריצה',
  'קפיצה',
  'משחקי כדור',
  'שימוש במתקנים',
  'עליה וירידה במדרגות',
  'רכיבה על אופניים',
  'קפיצה בחבל',
];

const po3FineItems = [
  'משחקי מוטוריקה עדינה (חרוזים, פטריות, לגו)',
  'גזירה',
  'שליטה בכלי כתיבה',
  'ציור',
  'צביעה',
  'יצירה',
  'התארגנות בזמן עבודה',
  'כתיבה (אם רלוונטי)',
];

const po3SchoolItems = [
  'מארגן את הילקוט והקלמר',
  'המחברות של הילד מסודרות',
  'הכנת שיעורי בית',
  'הישגים לימודיים',
];

const po3PlayItems = ['משחקי בנייה והרכבה', 'משחקי קופסא', 'פאזלים', 'משחקי דמיון'];

const po3SocialItems = [
  'יוצר קשר עם ילדים ומסוגל ליזום משחק',
  'מבקר חברים ומארח',
  'משתתף בפעילויות חברתיות — משחקים, מסיבות',
  'משתתף בתחרויות ומקבל הצלחה וכישלון',
  'מגיב באלימות פיסית או מילולית',
  'מוותר ומתפשר',
  'מבקש עזרה כשזקוק לה',
  'מפרש רמזים וסיטואציות חברתיות',
];

const po3LanguageItems = [
  'מבין את הנעשה בבית',
  'מבין הוראות',
  'זוכר רצפים (הוראות, ימי שבוע)',
  'מבין ועונה נכון לשאלות שנשאל',
  'מסוגל להסיק מסקנות',
  'מתבטא בעזרת אוצר מילים רחב (שמות עצם, פעלים, תארים)',
  'מטה פעלים באופן תקין (עבר, הווה, עתיד)',
  'משתמש בשמות גוף מתאימים (אני, הוא, אתם)',
  'מדבר במשפטים בני שלוש מילים או יותר',
  'משתמש במשפטים מחוברים ומורכבים (ו.../בגלל ש.../כי...)',
  'מספר סיפור',
  'מספר חוויה בצורה מאורגנת',
];

const po3PronunItems = [
  'האם קיימים שיבושי היגוי?',
  'האם הילד מריייר?',
  'האם קיימים חילופי אותיות במילים (למשל מחשב ← משחב)?',
  'האם קיים חוסר שטף בדיבור (גמגום)?',
  'האם קיימת צרידות?',
];

const po3AttentionItems = [
  'אינו שם לב לפרטים או עושה טעויות של חוסר תשומת לב (למשל בשיעורי בית)',
  'מתקשה להיות מרוכז במה שצריך לעשות',
  'לא נראה שמקשיב כאשר מדברים אליו ישירות',
  'מתקשה לעקוב אחר ההוראות ואינו מסיים משימות עד הסוף',
  'מתקשה לארגן משימות או פעילויות',
  'נמנע, לא אוהב או לא רוצה להתחיל פעילויות הדורשות מאמץ שכלי',
  'מאבד חפצים הדרושים למשימות (לבוש, כלי כתיבה, שיעורי בית, צעצועים)',
  'מוסח בקלות על ידי רעש או גירויים אחרים',
  'שוכח מטלות יומיומיות',
  'חסר מנוחה בזמן ישיבה, תנועות ידיים ורגליים',
  'קם ממקומו כאשר מצופה ממנו לשבת',
  'רץ או מטפס כאשר מצופה ממנו לשבת במקומו',
  'מתקשה לשחק בשקט או להתחיל פעילויות שקטות',
  'תנועתי, נראה כאילו ״מופעל על ידי מנוע״',
  'מדבר יותר מדי, פטפטן',
  'מתפרץ לדברי אחרים לפני שסיימו לדבר',
  'מתקשה לחכות לתורו',
  'מתפרץ או מפריע לשיחות ולפעילויות של אחרים',
];

// Scale options for new tab
const po3Scale3freq = ['בדרך כלל', 'לפעמים', 'לעיתים רחוקות'];
const po3Scale3indep = ['עצמאי בדר״כ', 'לפעמים תלוי', 'תלוי במבוגר'];
const po3Scale3sens = ['אוהב/רגיל', 'נרתע/נמנע', 'מחפש/מגזים'];
const po3Scale4motor = ['בהתאם לגיל', 'מתקשה', 'מתקשה מאוד', 'נמנע'];
const po3Scale4school = ['בהתאם לגיל', 'מתקשה', 'מתקשה מאוד', 'זקוק לעזרה'];
const po3Scale4attention = ['אף פעם', 'מדי פעם', 'לעיתים קרובות', 'לעיתים קרובות מאד'];

buildRadioSection('po3-behavior-items', po3BehaviorItems, po3Scale3freq, 'po3beh');
buildRadioSection('po3-independence-items', po3IndependenceItems, po3Scale3indep, 'po3ind');
buildRadioSection('po3-sensory1-items', po3Sensory1Items, po3Scale3sens, 'po3sen1');
buildRadioSection('po3-sensory2-items', po3Sensory2Items, po3Scale3freq, 'po3sen2');
buildRadioSection('po3-gross-items', po3GrossItems, po3Scale4motor, 'po3gros');
buildRadioSection('po3-fine-items', po3FineItems, po3Scale4motor, 'po3fine');
buildRadioSection('po3-school-items', po3SchoolItems, po3Scale4school, 'po3sch');
buildRadioSection('po3-play-items', po3PlayItems, po3Scale4motor, 'po3play');
buildRadioSection('po3-social-items', po3SocialItems, po3Scale3freq, 'po3soc');
buildRadioSection('po3-language-items', po3LanguageItems, po3Scale3freq, 'po3lang');
buildYesNoSection('po3-pronun-items', po3PronunItems, 'po3pron');
buildRadioSection('po3-attention-items', po3AttentionItems, po3Scale4attention, 'po3att');

// ============================
// PARENTS UNDER 3 — DATA
// ============================

const pu3Scale4daily = ['לא רלוונטי', 'בדרך כלל', 'לפעמים', 'לעיתים רחוקות'];
const pu3Scale5eating = ['לא רלוונטי', 'בהתאם לגיל', 'בדרך כלל', 'לעיתים רחוקות', 'אף פעם'];
const pu3Scale4sensory = ['אוהב', 'נמנע', 'נרתע', 'מחפש'];
const pu3Scale5motor = ['לא רלוונטי', 'בהתאם לגיל', 'מתקשה', 'מתקשה מאוד', 'נמנע'];
const pu3Scale4social = ['לא רלוונטי', 'בדרך כלל', 'לפעמים', 'לעיתים רחוקות'];

const pu3DailyItems = [
  'רגוע, נינוח',
  'מסוגל לשחק לאורך זמן',
  'תנועתי באופן בולט',
  'מסתגל למצבים חדשים',
  'חברותי',
  'שמח בדרך כלל',
  'נפרד מהוריו בקלות',
  'מתמודד עם קושי',
];

const pu3EatingItems = [
  'אוכל לבד עם הידיים',
  'אוכל לבד עם כפית או מזלג',
  'שותה לבד מבקבוק',
  'שותה לבד מכוס',
];

const pu3SensoryItems = [
  'משחק בחול, בצק פלסטלינה, צבעי ידיים ודבק',
  'מגע עם מים',
  'מגע עם אוכל',
  'מגע עם ילדים או מבוגרים',
];

const pu3GrossItems = [
  'הליכה',
  'ריצה',
  'משחקי כדור',
  'עליה וירידה במדרגות',
  'טיפוס על רהיטים',
  'פעילות במתקנים',
];

const pu3FineItems = [
  'מניפולציות כף יד (מדבקות, פטריות, חרוזים)',
  'משחקי הרכבה (מגה בלוקס, קוביות)',
  'פאזל',
  'ציור או שרבוט',
  'משחקי דמיון',
  'משחקי קופסא',
];

const pu3SocialItems = [
  'מעדיף לשחק לבד',
  'מעדיף לשתף אחרים במשחק',
  'פונה לעזרה כשנתקל בבעיה',
  'משתף אחרים מיוזמתו',
  'מגיב באלימות פיסית או מילולית',
  'מתייחס לרגשות שאחרים מביעים',
  'מביע רגשות מגוונים (שמחה, עצב)',
];

const pu3LangNoSpeechItems = [
  'יוצר קשר עין',
  'מגיב לדיבור',
  'משמיע הברות וקולות',
  'מבטא רצון ובקשות',
  'משתמש בהצבעה',
  'מדבר בשפה משלו',
  'מבין שפה ודיבור',
];

const pu3LangSpeechItems = [
  'מביע את עצמו במילים',
  'מביע את עצמו במשפטים',
  'מבין הוראות ומבצע',
  'מדבר באופן ברור',
  'מבטא רצון ובקשות',
  'האם מנהל שיחה בהתאם לגיל',
  'שואל שאלות',
];

buildRadioSection('pu3-daily-items', pu3DailyItems, pu3Scale4daily, 'pu3daily');
buildRadioSection('pu3-eating-items', pu3EatingItems, pu3Scale5eating, 'pu3eat');
buildRadioSection('pu3-sensory-items', pu3SensoryItems, pu3Scale4sensory, 'pu3sens');
buildRadioSection('pu3-gross-items', pu3GrossItems, pu3Scale5motor, 'pu3gross');
buildRadioSection('pu3-fine-items', pu3FineItems, pu3Scale5motor, 'pu3fine');
buildRadioSection('pu3-social-items', pu3SocialItems, pu3Scale4social, 'pu3soc');
buildRadioSection('pu3-lang-nospeech-items', pu3LangNoSpeechItems, pu3Scale4social, 'pu3lns');
buildRadioSection('pu3-lang-speech-items', pu3LangSpeechItems, pu3Scale4social, 'pu3lsp');

// ============================
// TEACHER/CAREGIVER UNDER 3 — DATA
// ============================

const tu3Scale5eating = ['לא רלוונטי', 'בהתאם לגיל', 'בדרך כלל', 'לפעמים', 'לעיתים רחוקות'];
const tu3Scale4sensory = ['אוהב', 'נמנע', 'נרתע', 'מחפש'];
const tu3Scale5motor = ['לא רלוונטי', 'בהתאם לגיל', 'מתקשה', 'מתקשה מאוד', 'נמנע'];
const tu3Scale4social = ['לא רלוונטי', 'בדרך כלל', 'לפעמים', 'לעיתים רחוקות'];

const tu3EatingItems = [
  'אוכל לבד עם הידיים',
  'אוכל לבד עם כפית או מזלג',
  'שותה לבד מבקבוק',
  'שותה לבד מכוס',
];

const tu3SensoryItems = [
  'משחק בחול',
  'משחק בבצק/ פלסטלינה',
  'בצבעי ידיים ודבק',
  'מגע עם מים',
  'מגע עם אוכל',
  'מגע עם ילדים או מבוגרים',
];

const tu3GrossItems = [
  'התהפכות',
  'זחילה',
  'הליכה',
  'משחקי כדור',
  'ריצה',
  'עלייה וירידה במדרגות',
  'השתלבות בפעילות',
  'תנועה בגן',
  'שטיפה במתקנים',
];

const tu3FineItems = [
  'מניפולציות כף יד (אבנים, פטריות, חרוזים)',
  'משחקי הרכבה (לגו, כלבים, קוביות)',
  'פאזל',
  'ציור או שרבוט',
  'משחקי לוח/דמיון',
];

const tu3SocialItems = [
  'מעדיף לשחק לבד',
  'משתדל לשתף אחרים',
  'בוכייה',
  'בניה לוותר כשמפלל',
  'משתף אחרים מיוזמתו',
  'משתמש באלימות פיזית או מילולית',
  'מתרייס לגנויות ושחרים',
  'בבעיות',
  'מביע רגשות מגוונים (שמחה, כעס, ואמפתיה)',
];

const tu3LangNoSpeechItems = [
  'יוצר קשר עין',
  'מגיב לדיבור',
  'משמיע הברות וקולות',
  'מבצע רצון ובקשות',
  'משתמש בהצבעה/בעל',
  'מדבר בשפה מושלת',
  'סובין שפה ודיבור',
];

const tu3LangSpeechItems = [
  'מביע את עצמו במילים',
  'מביע את עצמו במשפטים',
  'מבין חוראות והוראות',
  'סודר באופן ברור',
  'מבצע רצון ובקשות',
  'האם מנהל שיחה בתחאם לגיל',
];

buildRadioSection('tu3-eating-items', tu3EatingItems, tu3Scale5eating, 'tu3eat');
buildRadioSection('tu3-sensory-items', tu3SensoryItems, tu3Scale4sensory, 'tu3sens');
buildRadioSection('tu3-gross-items', tu3GrossItems, tu3Scale5motor, 'tu3gross');
buildRadioSection('tu3-fine-items', tu3FineItems, tu3Scale5motor, 'tu3fine');
buildRadioSection('tu3-social-items', tu3SocialItems, tu3Scale4social, 'tu3soc');
buildRadioSection('tu3-lang-nospeech-items', tu3LangNoSpeechItems, tu3Scale4social, 'tu3lns');
buildRadioSection('tu3-lang-speech-items', tu3LangSpeechItems, tu3Scale4social, 'tu3lsp');

// ============================
// OFFICIAL TEACHER QUESTIONNAIRE (6+) — DATA
// ============================

const ot6ReferralAreas = [
  'רופא התפתחותי',
  'פיזיותרפיה',
  'קלינאות תקשורת',
  'ריפוי בעיסוק',
  'תחום רגשי',
  'אחר',
];

const ot6BehaviorCheckboxes = [
  'עליז ושמח',
  'במצב רוח נוח',
  'מגיע בשמחה לבית הספר',
  'משתף פעולה בכל המטלות',
  'סובל משינויים קיצוניים במצב הרוח',
  'עצוב או מדוכדך רוב הזמן',
  'עקשן',
  'מסתגר',
  'בעל ביטחון עצמי נמוך',
  'ביישן',
  'פסיבי',
  'לא משתתף בשיעור',
];

const ot6AttentionItems = ['אימפולסיבי', 'מוסח', 'קשוב להוראות', 'מתמיד במשימות', 'תנועתי'];

const ot6PeItems = ['תפקוד הילד בשיעור התעמלות', 'תפקוד הילד בחצר בית הספר'];

const ot6SensoryItems = ['מגע עם ילדים או עם מבוגרים', 'פעילויות עם רעש (מסיבות/חגים)'];

const ot6OrgItems = [
  'מביא את הציוד הנדרש לפי המערכת (ספרים, מחברות, כלי כתיבה)',
  'מכין את ציוד הלימודים הדרוש במעבר משיעור לשיעור',
  'הילקוט והקלמר מאורגנים',
  'השולחן שבו הוא יושב מסודר ומאורגן',
  'מגיע בזמן לשיעור',
  'מכין שיעורי בית באופן סדיר',
];

const ot6FineMotorItems = [
  'אחיזת עיפרון',
  'שליטה בכלי הכתיבה',
  'ציור',
  'גזירה',
  'הדבקה',
  'שימוש בסרגל',
  'שימוש במחדד',
  'שימוש בקלסר ובניילונית',
];

const ot6WritingItems = [
  'יושב באופן יציב ליד השולחן',
  'רמת הכתיבה שלו היא כמו של בני גילו',
  'ממלא ברצון מטלות של כתיבה',
  'האותיות ממוקמות היטב בשורה',
  'כותב בשורות הנכונות',
  'שומר על רווחים מתאימים בתוך המילה ובין המילים',
  'שומר על שוליים (ימניים ושמאליים)',
  'מצליח להעתיק מהלוח',
  'מפעיל לחץ על העיפרון בזמן הכתיבה',
  'מעצב באופן תקין אותיות וספרות',
  'מספיק לסיים את מטלות הכתיבה',
];

const ot6SocialItems = [
  'יוצר קשר עם ילדים ומסוגל ליזום קשר',
  'יוצר קשר עם מבוגרים',
  'משתתף בפעילות חברתית: משחקים, מסיבות וכו׳',
  'משתתף בתחרויות ומקבל הצלחה וכישלון',
  'מגיב באלימות פיזית או מילולית',
  'מוותר ומתפשר',
  'מבקש עזרה כשזקוק לה',
  'אינו מפרש רמזים וסיטואציות חברתיות',
];

const ot6LanguageItems = [
  'מבין את התכנים הנלמדים בבית ספר',
  'מבין הוראות מורכבות',
  'זוכר רצף הוראות, את ימי השבוע, שירים',
  'מבין שאלות שנשאל ועונה עליהן נכון',
  'מצליח במטלות של הבנת הנקרא',
  'מבין את התכנים הנלמדים בכיתה',
  'מסוגל להסיק מסקנות',
  'רמת הקריאה שלו תואמת את רמת הכיתה',
  'מתבטא בעזרת אוצר מילים רחב (שכולל שמות עצם, פעלים ותארים)',
  'מטה פעלים באופן תקין בכל הזמנים (עבר, הווה, עתיד)',
  'משתמש במשפטים מחוברים ומורכבים (באמצעות מילות קישור כגון: ו, כי, משום ש)',
  'יודע לספר סיפור',
  'מספר חוויות בצורה מאורגנת',
];

const ot6PronunItems = [
  'האם קיימים שיבושי היגוי? אם כן, באילו מהצלילים הבאים: ב, ג, ד, ו, ז, ח, ט, כ, ל, נ, ס, פ, צ, ר, ש',
  'האם הוא משכל אותיות במילים (למשל אומר משחב במקום מחשב)?',
  'האם קיים חוסר שטף בדיבור (גמגום)?',
  'האם קיימת צרידות?',
];

// Scales for official teacher questionnaire
const ot6Scale3freq = ['בדרך כלל', 'לפעמים', 'לעיתים רחוקות'];
const ot6Scale4motor = ['בהתאם לגיל', 'מתקשה', 'מתקשה מאוד', 'נמנע'];
const ot6Scale4sensory = ['אוהב', 'נמנע', 'נרתע', 'מחפש'];

// Build official teacher questionnaire sections
buildDescCheckboxes('ot6-referral-areas', ot6ReferralAreas, 'ot6ref');
buildDescCheckboxes('ot6-behavior-checkboxes', ot6BehaviorCheckboxes, 'ot6beh');
buildRadioSection('ot6-attention-items', ot6AttentionItems, ot6Scale3freq, 'ot6att');
buildRadioSection('ot6-pe-items', ot6PeItems, ot6Scale4motor, 'ot6pe');
buildRadioSection('ot6-sensory-items', ot6SensoryItems, ot6Scale4sensory, 'ot6sens');
buildRadioSection('ot6-org-items', ot6OrgItems, ot6Scale3freq, 'ot6org');
buildRadioSection('ot6-finemotor-items', ot6FineMotorItems, ot6Scale4motor, 'ot6fm');
buildRadioSection('ot6-writing-items', ot6WritingItems, ot6Scale3freq, 'ot6wrt');
buildRadioSection('ot6-social-items', ot6SocialItems, ot6Scale3freq, 'ot6soc');
buildRadioSection('ot6-language-items', ot6LanguageItems, ot6Scale3freq, 'ot6lang');
buildYesNoSection('ot6-pronun-items', ot6PronunItems, 'ot6pron');

// ============================
// PARENT 3-6 — DATA
// ============================

const pg36MedicalItems = [
  'האם ההיריון היה תקין?',
  'האם הלידה הייתה רגילה?',
  'האם היו סיבוכים לאחר הלידה?',
  'האם ילדך סבל או סובל ממחלה מתמשכת או לא שגרתית?',
  'האם סבל או סובל מפרכוסים?',
  'האם ילדך מקבל תרופות באופן קבוע?',
  'האם הוא בטיפולו של רופא מומחה כלשהו?',
  'האם ילדך עבר ניתוחים, השתלת כפתורים, הוצאת פוליפים או אחרים?',
];

const pg36TestsList = [
  'ראייה',
  'שמיעה',
  'EEG',
  'ייעוץ גנטי',
  'בדיקות דם',
  'הדמיה מוחית CT, MRI, סונר',
];

const pg36TreatmentAreas = [
  'קלינאות תקשורת',
  'ריפוי בעיסוק',
  'פיזיותרפיה',
  'טיפול רגשי',
  'גננת שיח',
  'אבחון דידקטי',
  'נוירולוג',
  'פסיכולוג',
  'אחר',
];

const pg36BehaviorItems = [
  'רגוע ושקט לרוב',
  'נוח, מסתגל למצבים חדשים ושינויים בסדר היום',
  'בטוח, אינו חרד',
  'מתמודד עם גבולות ודרישות בהתאם לגיל',
];

const pg36AttentionItems = [
  'מסוגל להתמיד בפעילויות, להשלים מטלות',
  'שוקל את תגובותיו, רגוע ולא פעלתן',
  'מסוגל להתרכז ולא מוסח מגירויים חיצוניים',
  'מסודר ומאורגן',
];

const pg36SensoryItems = [
  'רגישות למגע של חומרים כמו חול, בצק, דבק',
  'רגישות לסוגי בגדים, תפרים, גרביים',
  'אמבטיה מקלחות חפיפה, גזירת ציפורניים',
  'תגובה חריגה לרעש, אור, ריח, טעם',
];

const pg36DailyItems = [
  'מסוגל לאכול ולשתות כפי שמצופה מגילו',
  'מתמודד עם סוגי מזון ומרקמים',
  'עצמאי באכילה כמצופה בגילו',
  'היגיינה אישית (נטילת ידיים, שירותים, רחצה) בהתאם לגילו',
];

const pg36MovementItems = ['הליכה / ריצה / משחקי כדור, מתקני חצר, פעילות גופנית'];

const pg36HandItems = [
  'עבודות יצירה, ציור, הדבקה, גזירה או כתיבה',
  'משחקי הרכבה (לגו, קליפס, סברס) משחקי קופסה',
  'חשיבה והתאמה (פאזל, משחקי קלפים, לוטו)',
  'משחקי דמיון (כלי אוכל, בובות, חיות, מכוניות)',
];

const pg36SocialItems = [
  'חברותי ונהנה בחברת בני גילו',
  'מביע רגשות מגוונים (שמחה, הנאה, כעס, אכזבה...)',
  'משתף אחרים ברגשות שלו, רגיש לרגשות של אחרים',
  'פונה לעזרה כשנתקל בבעיה',
  'מבין מצבים וחוקים חברתיים',
];

const pg36LanguageItems = [
  'יוצר קשר עין ואינו נמנע מקשר עין',
  'משתמש בהבעות פנים ובשפת גוף כדי לתאר דברים',
  'מבין הנאמר ומסופר לו בהתאם לגילו',
  'מבטא את עצמו במילים או במשפטים כמצופה',
  'מנהל שיחה הדדית בהתאם לגילו',
  'מדבר ברור כצפוי לגילו',
];

const pg36PronunItems = [
  'האם קיימים שיבושי היגוי?',
  'האם קיים חוסר שטף בדיבור / גמגום?',
  'האם קיימת צרידות?',
];

const pg36BehaviorQItems = [
  'האם יש קולות או דיבור משונה או שחוזרים על עצמם שוב ושוב?',
  'האם יש התנהגויות / משחקים שהילד מתעקש לחזור עליהן שוב ושוב?',
  'האם יש תנועות מוזרות החוזרות על עצמן כמו הליכה על קצות האצבעות, נפנופי ידיים?',
];

// Scales for parent 3-6
const pg36Scale3behav = ['בדרך כלל', 'מתקשה', 'מתקשה מאוד'];
const pg36Scale3motor = ['מצליח כצפוי לגילו', 'מתקשה', 'מתקשה מאוד'];
const pg36Scale3hand = ['בהתאם לגיל', 'מתקשה', 'מתקשה מאוד'];
const pg36Scale3sensory = ['מתנסה ברצון', 'מגזים במגע', 'נמנע / נרתע'];

// Build parent 3-6 sections
buildMedicalSection('pg36-medical-items', pg36MedicalItems, 'pg36med');
buildRadioSection('pg36-behavior-items', pg36BehaviorItems, pg36Scale3behav, 'pg36beh');
buildRadioSection('pg36-attention-items', pg36AttentionItems, pg36Scale3behav, 'pg36att');
buildRadioSection('pg36-sensory-items', pg36SensoryItems, pg36Scale3sensory, 'pg36sens');
buildRadioSection('pg36-daily-items', pg36DailyItems, pg36Scale3behav, 'pg36daily');
buildRadioSection('pg36-movement-items', pg36MovementItems, pg36Scale3motor, 'pg36mov');
buildRadioSection('pg36-hand-items', pg36HandItems, pg36Scale3hand, 'pg36hand');
buildRadioSection('pg36-social-items', pg36SocialItems, pg36Scale3behav, 'pg36soc');
buildRadioSection('pg36-language-items', pg36LanguageItems, pg36Scale3behav, 'pg36lang');
buildYesNoSection('pg36-pronun-items', pg36PronunItems, 'pg36pron');
buildYesNoSection('pg36-behavior-q-items', pg36BehaviorQItems, 'pg36behq');

// Build parent 3-6 tests table
(function buildPg36TestsTable() {
  const tbody = document.getElementById('pg36-tests-body');
  if (!tbody) return;
  pg36TestsList.forEach((test, i) => {
    tbody.innerHTML += `<tr>
      <td style="padding:7px 10px; border:1px solid #ddd; font-size:13px;">${test}</td>
      <td style="text-align:center; padding:7px; border:1px solid #ddd;">
        <input type="checkbox" name="pg36_test_done_${i}">
      </td>
      <td style="border:1px solid #ddd; padding:4px;">
        <input type="text" name="pg36_test_date_${i}" placeholder="תאריך" style="width:100%; border:none; padding:4px; font-size:12px;">
      </td>
      <td style="border:1px solid #ddd; padding:4px;">
        <input type="text" name="pg36_test_result_${i}" placeholder="תוצאה" style="width:100%; border:none; padding:4px; font-size:12px;">
      </td>
    </tr>`;
  });
})();

// Build parent 3-6 treatment checkboxes
(function buildPg36Treatment() {
  const container = document.getElementById('pg36-treatment-areas');
  if (!container) return;
  pg36TreatmentAreas.forEach((area, i) => {
    container.innerHTML += `<label style="display:flex; align-items:center; gap:4px; font-size:13px;">
      <input type="checkbox" name="pg36_treat_${i}"> ${area}
    </label>`;
  });
})();

// ============================
// TEACHER/EDUCATIONAL 3-6 — DATA
// ============================

const tg36GeneralDescItems = [
  'מצב רוח נוח',
  'מגיע בשמחה לגן',
  'נפרד בקלות',
  'משתף פעולה ברוב המטלות',
  'בעל ויסות עצמי',
  'סובל משינויים קיצוניים במצב הרוח',
  'מתקשה להיפרד בבוקר',
  'מרבה לבכות',
  'מוצץ אצבע או מוצץ',
  'עקשן',
  'מפגין פחדים וחרדות מוגזמים',
  'מתנהג בפסיביות',
  'עצוב או מדוכדך רוב הזמן',
  'מתבודד',
  'מגיב ברוגז',
  'מתקשה לוותר',
  'מגיב באלימות פיזית',
  'אלימות מילולית',
  'רב עם חבריו',
];

const tg36AttentionItems = [
  'מרוכז בקבוצה ואינו מוסח',
  'טווח ריכוז לאורך זמן סביר',
  'מצליח לסיים מטלות בלי תיווך והתמדה',
  'קשוב להוראות וממלא אותן',
  'יושב לאורך זמן בלי תנועתיות מרובה',
];

const tg36LearningItems = ['יכולת לימוד של חומר חדש, זיכרון, תפיסה'];

const tg36EatingItems = [
  'אוכל בעצמו, אוכל בצורה מסודרת ונקיה',
  'משתמש בכלי המזון / כוס באופן רגיל',
  'אוכל מגוון רגיל של מזונות / מרקמים',
];

const tg36SensoryItems = [
  'משחקים בחול, בצק, פלסטלינה, דבק, צבעי ידיים',
  'מגע עם ילדים אחרים או מבוגרים',
  'נוחות בפעולות ניקיון רחצת הפנים',
  'טעמים, ריחות, אור, רעשים',
  'אם ישן בגן — האם מסוגל להירדם כמו כולם',
];

const tg36MovementItems = [
  'זחילה, הליכה, ריצה וקפיצה, משחקי כדור',
  'עלייה וירידה במדרגות, מתקנים בחצר',
  'השתתפות בשיעורי פעילות גופנית',
];

const tg36HandItems = [
  'מניפולציות בכף היד: מדבקות, פטריות, חרוזים',
  'משחקי הרכבה פאזלים ומשחקי קופסה',
  'ציור, צביעה, גזירה',
];

const tg36SocialItems = [
  'יוזם קשר עם בני גילו ומשתף אותם',
  'פונה לעזרה כשצריך, פונה לאחרים כדי לשתף, להראות, ליהנות ביחד',
  'נענה ליוזמה חברתית ומשחק של אחרים',
  'מתייחס לרגשות שאחרים מביעים ומביע רגשות מגוונים',
  'משחק משחקי דמיון עם בני גילו',
];

const tg36LanguageItems = [
  'יוצר קשר עין',
  'מגיב לדיבור ולפניות אליו',
  'מבטא את רצונותיו ובקשותיו',
  'משתמש בהצבעה, בשפת גוף, והבעות פנים',
  'מנהל שיחות הדדיות עם חבריו',
  'מבין את הנאמר לו, מבין הוראות',
  'אוצר מילים ומשפטים כמו רוב בני גילו',
  'מסוגל לענות לשאלות / לבצע הוראות',
  'יכול להביע את עצמו מילולית היטב',
  'מדבר באופן ברור ללא שיבושי היגוי',
];

const tg36PronunItems = [
  'האם קיימים שיבושי היגוי?',
  'האם קיים חוסר שטף בדיבור / גמגום?',
  'האם קיימת צרידות?',
];

const tg36BehaviorYN = [
  'האם הילד מסורבל? מרבה להיתקל וליפול?',
  'האם הילד נוטה להתעייף בקלות במרחב?',
];

// Scales for teacher 3-6
const tg36Scale3 = ['בדומה לבני גילו', 'מתקשה', 'מתקשה מאוד'];
const tg36Scale3motor = ['בדומה לבני גילו', 'מתקשה', 'מתקשה מאד / נמנע'];
const tg36Scale3sensory = ['מתנסה ברצון', 'מחפש / מגזים במגע', 'נמנע / נרתע'];

// Build teacher/educational 3-6 sections
buildDescCheckboxes('tg36-general-desc', tg36GeneralDescItems, 'tg36gdesc');
buildRadioSection('tg36-attention-items', tg36AttentionItems, tg36Scale3, 'tg36att');
buildRadioSection('tg36-learning-items', tg36LearningItems, tg36Scale3, 'tg36learn');
buildRadioSection('tg36-eating-items', tg36EatingItems, tg36Scale3, 'tg36eat');
buildRadioSection('tg36-sensory-items', tg36SensoryItems, tg36Scale3sensory, 'tg36sens');
buildRadioSection('tg36-movement-items', tg36MovementItems, tg36Scale3motor, 'tg36mov');
buildRadioSection('tg36-hand-items', tg36HandItems, tg36Scale3motor, 'tg36hand');
buildRadioSection('tg36-social-items', tg36SocialItems, tg36Scale3, 'tg36soc');
buildRadioSection('tg36-language-items', tg36LanguageItems, tg36Scale3, 'tg36lang');
buildYesNoSection('tg36-pronun-items', tg36PronunItems, 'tg36pron');
buildYesNoSection('tg36-behavior-yn', tg36BehaviorYN, 'tg36behyn');

// ============================
// DOWNLOAD FOR AI — JSON EXPORT
// ============================

function downloadForAI(formId) {
  const container = document.getElementById(formId);
  if (!container) return;
  const form = container.querySelector('form');
  if (!form) return;

  const result = { type: '', sections: {} };

  // Get questionnaire title
  const h1 = container.querySelector('h1');
  if (h1) result.type = h1.textContent.trim();

  // Walk through each section
  const sections = form.querySelectorAll('.section');
  sections.forEach((sec) => {
    const titleEl = sec.querySelector('.section-title');
    if (!titleEl) return;
    const sectionName = titleEl.textContent.trim();
    const sectionData = {};

    // Radio buttons (grouped by name)
    const radioGroups = {};
    sec.querySelectorAll('input[type="radio"]').forEach((r) => {
      if (!radioGroups[r.name]) radioGroups[r.name] = null;
      if (r.checked) radioGroups[r.name] = r.value;
    });

    // Match radio answers to their question labels
    sec.querySelectorAll('.question-row').forEach((row) => {
      const label = row.querySelector('.question-label');
      if (!label) return;
      const q = label.textContent.trim().replace(/:$/, '');

      // Check for radio in this row
      const radios = row.querySelectorAll('input[type="radio"]');
      if (radios.length > 0) {
        const name = radios[0].name;
        const val = radioGroups[name];
        if (val) sectionData[q] = val;
        return;
      }

      // Check for select
      const sel = row.querySelector('select');
      if (sel && sel.value) {
        sectionData[q] = sel.value;
        return;
      }

      // Check for textarea
      const ta = row.querySelector('textarea');
      if (ta && ta.value.trim()) {
        sectionData[q] = ta.value.trim();
        return;
      }

      // Check for text input
      const inp = row.querySelector('input[type="text"]');
      if (inp && inp.value.trim()) {
        sectionData[q] = inp.value.trim();
        return;
      }
    });

    // Checkboxes (for description/treatment sections)
    sec
      .querySelectorAll('input[type="checkbox"]:checked:not([name*="test_done"])')
      .forEach((cb) => {
        const lbl = cb.closest('label') || (cb.id && sec.querySelector(`label[for="${cb.id}"]`));
        if (lbl) {
          const text = lbl.textContent.trim();
          if (text) sectionData[text] = '✓';
        }
      });

    // Tests table (special handling)
    const testsBody = sec.querySelector('tbody');
    if (testsBody) {
      testsBody.querySelectorAll('tr').forEach((tr) => {
        const cells = tr.querySelectorAll('td');
        const checkbox = tr.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked && cells.length >= 1) {
          const testName = cells[0].textContent.trim();
          const dateInp = tr.querySelectorAll('input[type="text"]')[0];
          const resultInp = tr.querySelectorAll('input[type="text"]')[1];
          const parts = [];
          if (dateInp && dateInp.value) parts.push(dateInp.value);
          if (resultInp && resultInp.value) parts.push(resultInp.value);
          sectionData[testName] = parts.length > 0 ? parts.join(' — ') : '✓';
        }
      });
    }

    // Medical yes/no with detail fields
    sec.querySelectorAll('input[type="text"][name*="_detail"]').forEach((inp) => {
      if (inp.value.trim()) {
        const row = inp.closest('.question-row');
        const label = row && row.querySelector('.question-label');
        if (label) {
          const q = label.textContent.trim().replace(/:$/, '');
          const radioName = inp.name.replace('_detail', '');
          const checked = sec.querySelector(`input[name="${radioName}"]:checked`);
          const answer = checked ? checked.value : '';
          sectionData[q] = answer + (inp.value.trim() ? ' — ' + inp.value.trim() : '');
        }
      }
    });

    if (Object.keys(sectionData).length > 0) {
      result.sections[sectionName] = sectionData;
    }
  });

  // Download as JSON
  const json = JSON.stringify(result, null, 2);
  /* eslint-disable no-undef */
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = (result.type || formId) + '.json';
  a.click();
  URL.revokeObjectURL(url);
  /* eslint-enable no-undef */
}

// ============================

function copyAll() {
  const cards = document.querySelectorAll('.summary-text');
  let allText = '';
  cards.forEach((card) => {
    allText += card.innerText + '\n\n---\n\n';
  });
  navigator.clipboard.writeText(allText).then(() => {
    const btn = document.getElementById('copyAllBtn');
    btn.textContent = 'הועתק הכל!';
    setTimeout(() => {
      btn.textContent = 'העתקת כל הסיכומים';
    }, 2000);
  });
}
