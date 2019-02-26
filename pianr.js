let keyboard = document.getElementById("keyboard");
let white_notes = ["g", "a", "b", "c", "d", "e", "f"];
let black_notes = ["gs", "as", "", "cs", "ds", "", "fs"];

let notes = ["g", "gs", "a", "as", "b", "c", "cs", "d", "ds", "e", "f", "fs"];

// let root = Math.floor(12 * Math.random());
// let third = (root + 4) % 12;
// let fifth = (root + 7) % 12;

let chord = [];
let root = Math.floor(12 * Math.random());
chord.push(root);

let num_notes = 1 + Math.floor(5 * Math.random());
for ( let i = 1; i < 12; i++){
  let j = (root+i) % 12;
  chord.push(j);
}

// for (let i = 0; i < num_notes; i++) {
//   let j = Math.floor(12 * Math.random());
//   let k = (root+j) % 12;
//   chord.push(k);
//   chord = chord.filter(onlyUnique);
// }
console.log(chord.join(", "));

for (let i = 0; i < chord.length; i++) {
  let j = chord[i];
  let n = notes[j];
  let keys = document.getElementsByClassName(n);
  let name = "note_"+i;
  for (let r = 0; r < keys.length; r++) {
    keys[r].classList.add(name);
  }
}

// let roots = document.getElementsByClassName(notes[root]);
// for ( let r = 0 ; r < roots.length; r++ ) {
//   roots[r].classList.add('note_0');
//   console.log(roots[r].outerHTML);
// }

// let thirds = document.getElementsByClassName(notes[third]);
// for ( let r = 0 ; r < thirds.length; r++ ) {
//   thirds[r].classList.add('note_4');
// }

// let fifths = document.getElementsByClassName(notes[fifth]);
// for ( let r = 0 ; r < fifths.length; r++ ) {
//   fifths[r].classList.add('note_7');
// }

// for (let i = 0; i <= 18; i += 1) {
//   let j = i % 7;
//   let n = black_notes[j];
//   let x = 35 + i * 45;
//   if (n.length) {
//     let key = document.createElement('rect');
//     console.log([i
//     j
//     n
//     x].join('
//     '))
//     key.setAttribute("y", 0);
//     key.setAttribute("x", x);
//     key.setAttribute("width", 20);
//     key.setAttribute("height", 140);
//     key.classList.add("black_key");
//     key.classList.add(black_notes[j]);
//     keyboard.innerHTML += key.outerHTML;
// }
//   //   let key = document.createElement('rect');
//   //   key.setAttribute("y", 0);
//   //   key.setAttribute("x", x);
//   //   key.setAttribute("width", 45);
//   //   key.setAttribute("height", 240);
//   //   key.classList.add("white_key");
//   //   key.classList.add(white_notes[j]);

//   //   // console.log([i,j,white_notes[j]].join(' '))
//   //   // console.log([key.outerHTML].join(","));
//   //   // pre.innerHTML += key.outerHTML;
//   //   keyboard.innerHTML+= key.outerHTML;
//   //   // keyboard.append(key);
// }

// // <rect class="white_key g" x="000" y="0" width="60" height="300"" ></rect>

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
