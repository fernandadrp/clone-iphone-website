const buttons = document.querySelectorAll("#img-picker li");
const image = document.querySelector("#product-img");

buttons.forEach((btn) => {
  //Para cada botão (elemento <li>), será adicionada uma função para escutar o clique.
  btn.addEventListener("click", (e) => {
    console.log(e);

    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
      //Remove a classe selected de todos os elementos com a classe color dentro de cada botão. Isso garante que apenas um botão fique selecionado por vez.
    });

    const button = e.target; //Pega o elemento exato que foi clicado. e.target é o alvo do clique

    const id = button.getAttribute("id"); //Pega o valor do atributo id do elemento clicado. Esse valor será usado para montar o caminho da nova imagem.
    console.log(id);

    button.querySelector(".color").classList.add("selected");
    //Adiciona a classe selected ao elemento com a classe color dentro do botão clicado, para destacar visualmente a seleção.

    image.classList.add("changing"); // Adiciona a classe changing à imagem, provavelmente para aplicar uma animação de transição.
    image.setAttribute("src", `img/iphone_${id}.jpg`); //Muda o atributo src da imagem, trocando a imagem exibida. O nome do arquivo é montado com o ID capturado.

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
    // Depois de 200 milissegundos, a classe changing é removida (ou alternada), finalizando a animação de troca de imagem.
  });
});
