let keyboard = document.getElementById("keyboard");
let white_notes = ["g", "a", "b", "c", "d", "e", "f"];
let black_notes = ["gs", "as", "", "cs", "ds", "", "fs"];
let notes = ["g", "gs", "a", "as", "b", "c", "cs", "d", "ds", "e", "f", "fs"];
let notes2 = ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#"];
let i_list = [
  "Root",
  "Minor 2nd",
  "Major 2nd",
  "Minor 3rd",
  "Major 3rd",
  "Perfect 4th",
  "Flat 5th",
  "Perfect 5th",
  "Minor 6th",
  "Major 6th",
  "Minor 7th",
  "Major 7th"
];

let key = document.getElementById("key");
key.onchange = redraw;

let intervals = document.getElementsByClassName("intervals");
for (let i = 0; i < intervals.length; i++) {
  let interval = intervals[i];
  interval.onclick = redraw;
}

redraw();
function redraw() {
  let notes_div = document.getElementById("notes");
  notes_div.innerHTML = "";

  let key = document.getElementById("key");
  let k = parseInt(key.value);
  let intervals = document.getElementsByClassName("intervals");

  let list = [];
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i].checked) {
      list.push(i);
    }
  }
  console.log("redraw");
  console.log(["KEY", key.value, notes2[key.value]].join(" "));
  console.log(list);

  let all_keys = document.getElementsByTagName("rect");
  for (let i = 0; i < all_keys.length; i++) {
    for (let j = 0; j < 12; j++) {
      let note = ["note", j].join("_");
      all_keys[i].classList.remove(note);
    }
  }

  for (let i in list) {
    let j = list[i];
    let l = (j + k) % 12;
    let m = notes2[l];
    let n = notes[l];
    let o = i_list[j]; 
    let keys = document.getElementsByClassName(n);
    let name = "note_" + j;
    for (let r = 0; r < keys.length; r++) {
      keys[r].classList.add(name);
    }

    let note = document.createElement("span");
    note.innerHTML = m;
    note.classList.add(name);
    note.title = o;
    notes_div.innerHTML += note.outerHTML;
  }
}

//  // let root = Math.floor(12 * Math.random());
//  // let third = (root + 4) % 12;
//  // let fifth = (root + 7) % 12;

//  let chord = [];
//  let root = Math.floor(12 * Math.random());
//  chord.push(root);

//  // Major Scale
//  let num_notes = 1 + Math.floor(5 * Math.random());
//  chord.push((root + 2) % 12); // major 2
//  chord.push((root + 4) % 12); // major 3
//  chord.push((root + 5) % 12); // perfect 4
//  chord.push((root + 7) % 12); // perfect 5
//  chord.push((root + 9) % 12); // major 6
//  chord.push((root + 11) % 12); // major 7

//  // for ( let i = 1; i < 12; i++){
//  //   let j = (root+i) % 12;
//  //   chord.push(j);
//  // }

//  // for (let i = 0; i < num_notes; i++) {
//  //   let j = Math.floor(12 * Math.random());
//  //   let k = (root+j) % 12;
//  //   chord.push(k);
//  //   chord = chord.filter(onlyUnique);
//  // }

//  let chord2 = chord.map(x => notes2[x])
//  console.log(['ROOT', root, notes2[root]]);
//  console.log(chord.join(", "));
//  console.log(chord2.join(", "));

//  for (let i = 0; i < chord.length; i++) {
//    let j = chord[i];
//    let n = notes[j];
//    let keys = document.getElementsByClassName(n);
//    let name = "note_" + i;
//    for (let r = 0; r < keys.length; r++) {
//      keys[r].classList.add(name);
//    }
//  }

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
// if (0) {
//   let inter = document.getElementById("intervals");
//   for ( let i = 0; i < intervals.length;i++) {
//     let j = intervals[i];
//     let input = document.createElement("input");
//     input.setAttribute("type","checkbox");
//     input.classList.add("intervals");
//     input.id=["interval",i].join("_");
//     input.value=i;
//     let label = document.createElement("label");
//     label.setAttribute("for",input.id);
//     label.innerHTML = intervals[i];
//     console.log(i,j,input.outerHTML,label.outerHTML);

//     inter.innerHTML += label.outerHTML;
//     inter.innerHTML += input.outerHTML;
//   }
// }
//   // key.innerHTML += note.outerHTML;
// //   <input type="checkbox" class="intervals"
// //   id="interval_0" value="1">
// // <label for="interval_0">1</label>

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
