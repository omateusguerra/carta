const el = document.querySelector("#text");
const text = "Meu irmão, meu amigo, nosso orgulho e um dos presentes de Deus na nossa família, é muito bom assistir de perto esse seu engajamento na igreja e poder sentir esse sentimento de paz, felicidade e prazer que você sente quando está nos caminhos de Cristo. Por mais que tenha esse perfil tímido, todos sabemos que aí dentro existe um coração enorme. Saiba que assim como sempre podemos contar com você, você também poderá contar conosco para tudo, estarei aqui sempre que precisar, seja como amigo, como um ombro ou simplesmente como irmão. Quero que saiba que, por mais que seja mais novo que eu, você serve de exemplo e inspiração em muitos momentos da minha vida. Enfim, espero que aproveite o encontro e que você possa atenuar ainda mais seus sentidos de bondade... é isso, flw!";
const interval = 100;

function showText(el, text, interval){

    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next;

    }, interval)

}

const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {
    
    e.preventDefault();

    var name = document.querySelector("#name");
    var valueNome = name.value;
    var data = document.querySelector("#data");
    var valueData = data.value;

    if(valueNome == "Filho" && valueData == "21"){
        alert(`Seu nome é: ${valueNome} e o dia que você nasceu foi ${valueData}! Informações corretas, acesso PERMITIDO!`);
        showText(el, text, interval);
        document.getElementById("imagem").innerHTML = "<img src='fotos/foto1.jpeg' width='250'>"
    }else{
        alert(`Seu nome é: ${valueNome} e o dia que você nasceu foi ${valueData}! Informações erradas, acesso NEGADO!`);
    }

    

});