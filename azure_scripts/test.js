const fs = require('fs')
var check = require('./spellCheck')
var translate = require('./translate')
const main = async () => {
  var s = "\\documentclass[12pt]{article}\\usepackage{amsmath}\\begin{document}\\begin{align*}&\\frac { 1 } { 3 }\\&1\\&x\\&1\\&x + 4\\&x ^ { 2 } = 4 x\\&\\left. \\begin{array} { l } { x } \\ { x } \\ { x } \\end{array} \\right.\\&1\\&x + 2 = x\\&\\pi\\&x + x = 1\\&1\\&3\\&x + x\\&- 2 =\\&\\text { Hello world }\\&\\text { n. }\\&x\\&x = x + x\\&1\\&x\\&= 1\\& \\text { My name is Danie }\\&3\\&x + x = 4\\&x\\&1\\&1\\& \\text { the }\\&x\\&x + y =\\&80\\&1\\&1\\&1\\&1\\&2\\\\end{align*}\\end{document}";
  //console.log(s);
  // var rx = new RegExp("^\\text { ([\S]*)+? }","g");
  var rx = /\\text { ([^0-9-&]*) }/g; 
  var matches = new Array();
  var old = new Array();
  while((match = rx.exec(s)) !== null){
       matches.push(match);
  }

  matches.forEach(item => {
    old.push(item[1])
  })
  const correctedPromises = [];
  const translatedPromises = [];
  old.forEach(item => {
     correctedPromises.push(check.checkSpell(item))
   })
  const corrected = await Promise.all(correctedPromises)
  corrected.forEach(item => {
     translatedPromises.push(translate.translate(item,"&to=en"))
   })
  const translated = await Promise.all(translatedPromises)
  for(var i = 0; i < old.length; i++) {
    s = s.replace(new RegExp(" "+old[i]+" ", 'g'), " "+corrected[i]+" ");
  }
  console.log(corrected)
  console.log(translated)
  console.log(s)
}

main().catch(err => {
  console.log(err)
})
