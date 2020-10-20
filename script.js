function vypisPosloupnosti() {
  //while
  let s = "while: ";
  let i = 0;
  while (i < 10) {
    s = s + i + " ";
    i = i + 1;
  }
  //for
  s = s + "<br>for: "
  for (let i = 0; i < 10; i ++) {
    s = s + i + " ";
  }
  document.getElementById("vystup").innerHTML = s;
}

function soucetPosloupnosti() {
  let num = document.getElementById("num").valueAsNumber;
  if(isNaN(num)){
    alert("Není zadáno číslo Pepege Clap")
  }
  else{

    let s = 0;
    let suma1 = 0;
    for (i=0; i < num; i++) {
      s = s + 1;
      suma1 = suma1 + s;
    }
    document.getElementById("suma1").innerHTML = suma1;
  
  
    let suma2 = num*(num+1)/2;
    document.getElementById("suma2").innerHTML = suma2;
  
  
    if (suma1!=suma2){
      document.getElementById("verdikt").innerHTML="Dle vzorce to není vpořádku Sadge";
    }
    else {
      document.getElementById("verdikt").innerHTML="Dle vzorce je to vpořádku :) Clap";
    }
  }
}




function kvadraticka_rce() {
  let a = document.getElementById("a").valueAsNumber;
  let b = document.getElementById("b").valueAsNumber;
  let c = document.getElementById("c").valueAsNumber;
  let dis = (b*b)-(4*a*c);
  if (dis < 0){
    document.getElementById("diskriminant").innerHTML="Rovnice nemá řešení PepeHands";
    document.getElementById("x1").innerHTML="Neexistuje";
    document.getElementById("x2").innerHTML="Neexistuje";
  } else if (dis == 0){
    document.getElementById("diskriminant").innerHTML=dis;
    x1 = -b/(2*a);
    document.getElementById("x1").innerHTML=x1;
    document.getElementById("x2").innerHTML="Neexistuje"
  } else{
    document.getElementById("diskriminant").innerHTML=dis;
    x1 = (-b + Math.sqrt(dis))/(2*a);
    x2 = (-b - Math.sqrt(dis))/(2*a);
    document.getElementById("x1").innerHTML=x1;
    document.getElementById("x2").innerHTML=x2;
  }

}