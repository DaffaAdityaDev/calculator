let a = "";

function update(e)
{
    a+=e;
    document.getElementById("display").innerHTML = a; 
}

function hasil()
{
    let n = eval(a);
    let p = n.toFixed(2);
    document.getElementById("display").innerHTML = p;
}

function hapus() {
  a = "0"
  document.getElementById('display').innerHTML = a;
}


