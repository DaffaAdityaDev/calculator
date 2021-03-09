let a = "";

function update(e)
{
    a+=e;
    document.getElementById("display").innerHTML = a; 
}

function hasil()
{
  document.getElementById("display").innerHTML = eval(a);
}

function hapus() {
  a = "0"
  document.getElementById('display').innerHTML = a;
}


