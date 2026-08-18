// فتح الجواب عند الضغط عليه
var envelope = document.getElementById('envelope');
var letter = document.getElementById('letter');

envelope.addEventListener('click', function () {
    envelope.classList.add('hidden');
    letter.classList.remove('hidden');
});

// التعامل مع الأزرار
var btnYes = document.getElementById('btnYes');
var btnNo = document.getElementById('btnNo');
var resultYes = document.getElementById('resultYes');
var resultNo = document.getElementById('resultNo');
var questionBox = document.getElementById('questionBox');

// مقياس لتكبير زر "سامحتك"
var yesScale = 1;

btnYes.addEventListener('click', function () {
    questionBox.classList.add('hidden');
    resultNo.classList.add('hidden');
    resultYes.classList.remove('hidden');
});

btnNo.addEventListener('click', function () {
    // إظهار رسالة الرفض اللطيفة
    resultNo.classList.remove('hidden');

    // تكبير زر "سامحتك" وتشجيع المستخدم على الضغط عليه
    yesScale += 0.25;
    btnYes.style.transform = 'scale(' + yesScale + ')';
    btnYes.style.margin = (10 * yesScale) + 'px';
});