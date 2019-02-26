let keyboard = document.getElementById('keyboard');
let pre = document.getElementById('x');
let white_notes = ["g", "a", "b", "c", "d", "e", "f"];

let black_notes = ["gs", "as", "", "cs", "ds", "", "fs"];

for (let i = 0; i <= 18; i += 1) {
  let j = i % 7;
  let n = black_notes[j];
  let x = 35 + i * 45;
  if (n.length) {
    let key = document.createElement('rect');
    console.log([i, j, n, x].join(','))
    key.setAttribute("y", 0);
    key.setAttribute("x", x);
    key.setAttribute("width", 20);
    key.setAttribute("height", 140);
    key.classList.add("black_key");
    key.classList.add(black_notes[j]);
    keyboard.innerHTML += key.outerHTML;
}
  //   let key = document.createElement('rect');
  //   key.setAttribute("y", 0);
  //   key.setAttribute("x", x);
  //   key.setAttribute("width", 45);
  //   key.setAttribute("height", 240);
  //   key.classList.add("white_key");
  //   key.classList.add(white_notes[j]);

  //   // console.log([i,j,white_notes[j]].join(' '))
  //   // console.log([key.outerHTML].join(","));
  //   // pre.innerHTML += key.outerHTML;
  //   keyboard.innerHTML+= key.outerHTML;
  //   // keyboard.append(key);
}


// <rect class="white_key g" x="000" y="0" width="60" height="300"" ></rect>