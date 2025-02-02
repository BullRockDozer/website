    q1 = prompt("1. multiplcation 2. addition 3. subrtaction 4. division")
    if(q1 == "2") {
        a1 = prompt("first number")
        a2 = prompt("second number")
        a3 = prompt("third number")
    
        alert("Your answer is " + (Number(a1) + Number(a2)))
    }
    if(q1 == "1") {
        m1 = prompt("first number")
        m2 = prompt("second number")
        alert("Your answer is " + (Number(m1) * Number(m2)))
    }
    if(q1 == "3") {
        s1 = prompt("first number")
        s2 = prompt("second number")
        alert("Your answer is " + (Number(s1) - Number(s2)))
    }
    if(q1 == "4") {
        d1 = prompt("first number")
        d2 = prompt("second number")
        alert("Your answer is " + (Number(d1) / Number(d2)))
    } 
    window.location.assign("index.html");
    