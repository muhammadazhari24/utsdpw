function check() {
  var c = 0;
  var q1 = document.style.question1.value;
  var q2 = document.style.question2.value;
  var q3 = document.style.question3.value;
  var q4 = document.style.question4.value;
  var q5 = document.style.question5.value;
  var result=document.getElementById('result');
  var style=document.getElementById('style');
  
  if (q1 == "China") {
    c+=20
  }
  if (q2 == "Mengantisipasi penyebaran COVID-19") {
    c+=20
  }
  if (q3 == "Tetap diam di rumah sesuai dengan imbauan pemerintah") {
    c+=20
  }
  if (q4 == "Benda-benda Padat") {
    c+=20
  }
  if (q5 == "Telinga") {
    c+=20
  }
  style.style.display= "none";
  result.textContent="Nilai Anda: "+`${c}`;
}