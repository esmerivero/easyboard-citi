const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Listeners para fill
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
// Loops
for(const empty of empties) {
  empty.addEventListener('dragover',dragOver);
  empty.addEventListener('dragenter',dragEnter);
  empty.addEventListener('dragleave',dragLeave);
  empty.addEventListener('drop',dragDrop);
}
// funciones
function dragStart() {
  console.log('start');
  this.className += 'hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  console.log('end');
  this.className = 'fill';
}

function dragOver(e) {
console.log('over');
e.preventDefault();
}
function dragEnter() {
console.log('enter');
}
function dragLeave() {
console.log('leave');
}
function dragDrop() {
console.log('drop');
}
