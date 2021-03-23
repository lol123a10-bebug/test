const task3Element = document.getElementById('task-3');


function call(something) {
  alert('asdf');
  alert(something)
}

task3Element.addEventListener('click', call);


function merging(_1, _2, _3) {
  const result = _1 + _2 + _3;
  return result;
}



alert(merging('asdfa', '123123', 'asdfasdf'))