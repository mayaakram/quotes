function randomtext (){

    var quotes = ["“Be yourself; everyone else is already taken.”  ― Oscar Wilde " , "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe" , "“So many books, so little time.” ― Frank Zappa" ,"“A room without books is like a body without a soul.”― Marcus Tullius Cicero"]

    var num = Math.floor( Math.random() * quotes.length)

 
    
document.getElementById("quote").innerHTML=quotes[num]
}


