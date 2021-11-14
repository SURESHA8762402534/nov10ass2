
//var volt = document.querySelector('#voltage')
//var current = document.querySelector('#current')

var v = Math.floor(prompt())
var i = Math.floor(prompt())

function power(){
    let p = v*i;
    //var po = document.getElementById('ans');
    //po.innerText = p+"W"

    console.log(p+"Watt")
}
power()