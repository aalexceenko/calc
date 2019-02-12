var calc = document.getElementById('calc');
var btns = calc.getElementsByClassName('button');
var display = document.getElementById('display');
var str = '';

for (var i = 0; i < btns.length; i++) {
  go(btns[i]);
}

function go(button) {
  button.addEventListener('click', calculate);
  
  function calculate() {
    var type = button.getAttribute('data-type');

    if (type === '=') {
      str = eval(str);
      display.value = str;
      return;
    } else if (type === 'C') {
      str = '';
    } else {
      str += type;
    }
    display.value = str; 
  }

}