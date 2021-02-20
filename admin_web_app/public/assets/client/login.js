console.log('hlo')

function login()
{
    var mail=document.getElementById("exampleInputEmail").value
    var pass=document.getElementById("exampleInputPassword").value
    if(mail=='gv@gmail.com' && pass=='admin')
    {
        alert('login sucessful !!!')
        document.location.href = "table.html";
    }
    else{
        console.log('incorrect values :(')
    }
}
