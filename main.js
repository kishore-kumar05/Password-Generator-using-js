const b1 = document.getElementById("btn")

const r1 = document.getElementById("r1")

r1.addEventListener("input",() => {
    document.getElementById("num").innerHTML = r1.value
})

b1.addEventListener("click" , () => {
    let r = r1.value;

    let c1 = document.getElementById("c1").checked
    let c2 = document.getElementById("c2").checked
    let c3 = document.getElementById("c3").checked
    let c4 = document.getElementById("c4").checked

    let s=""

    if(c1)
    {
        s+="QWERTYUIOPLKJHGFDSAZXCVBNM"
    }

    if(c2)
    {
        s+="qwertyuioplkjhgfdsazxcvbnm"
    }

    if(c3)
    {
        s+="0123456789"
    }

    if(c4)
    {
        s+="!@#$%^&*(){}[]:'?/>,<.|~`"
    }

    let s1=""

    for(let i =0 ; i<r;i++)
    {
        let r2 = Math.floor(Math.random() * s.length)
        s1+=s[r2]
    }

    document.getElementById("show").value = s1
    


})

document.getElementById("mycopy").addEventListener("click", () =>{
    
    let s = document.getElementById("show")

    navigator.clipboard.writeText(s.value)

    alert("Copy!")
})