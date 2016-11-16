function change(){
     var x = document.getElementById('mySelect').value;
     var y = document.getElementById('mySelect2').value;
    document.getElementById('total').innerHTML = '$' + (Number(x) + Number(y));
}
