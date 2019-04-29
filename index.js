function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const listed = document.querySelectorAll('ul.ranked-list li');

   for (let i = 0; i < listed.length; i++) {
    listed[i].innerHTML = parseInt(listed[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div")
}
