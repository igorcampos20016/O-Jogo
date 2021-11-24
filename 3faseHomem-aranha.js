function escolha(){
    var responder = prompt(" Digire a opcao correta")
    
    if(responder == "a") {
        return location = "acertou.html"
    }
    else if(responder == "b" || responder == "c"){
        return location = "gamerover.html"
    }
    else {
        escolha()
    }
    
    
}