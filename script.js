const formulario = document.querySelector('#meu-formulario');

function validarFormulario(event) {
    event.preventDefault();

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;

    if (nome === "" || email === "" || msg === "") {
        alert("É necessário preencher todos os campos antes de enviar");
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset();
    }
}

formulario.addEventListener('submit', validarFormulario);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


const btnTema = document.querySelector('#btn-tema');
const body = document.body;

function alternarTema() {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        btnTema.innerText = "Claro";
    } else {
        btnTema.innerText = "Escuro";
    }
}

btnTema.addEventListener('click', alternarTema);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


const meusProjetos = [
    {
        titulo: "Projeto 01 - Sistema Anti-Bullying",
        descricao: "Esse sistema tem como objetivo receber denúncias de bullying ocorridos no ambiente escolar.",
        status: "Ajustes",
        link: "https://github.com/erynaldo/projeto-bullying"
    },
    {
        titulo: "Projeto 02 - Sistema Espaço do Aluno",
        descricao: "Sistema de login para que o aluno possa acessar seus materiais, apostilas, atividades, ver as notas.",
        status: "Finalizado",
        link: "https://github.com/erynaldo/ceti.sjb"
    },
    {
        titulo: "Projeto 03 - Sistema para Prefeituras",
        descricao: "Sistema para que as Prefeituras possam oferecer serviços aos usuários, como disponibilizar contra-cheques aos servidores municipais, boletos de IPTU ou outros documentos aos cidadãos.",
        status: "Iniciado",
        link: "https://github.com/erynaldo/meu-app-react"
    },
    {
        titulo: "Projeto 04 - Plataforma de Aluguel de Filmes",
        descricao: "Sistema foi desenvovido para ser uma plataforma de aluguel de filmes, não precisa de assinatura, o cliente aluga um filme e ele fica disponível por alguns dias para assistir.",
        status: "Finalizado",
        link: "https://github.com/erynaldo/projet-plataforma-filmes"
    },
    {
        titulo: "Projeto 05 - Calculadora de IMC",
        descricao: "Sistema para Nutricionistas e / ou Profissionais da Saúde para calcular o IMC de um paciente.",
        status: "Iniciado",
        link: "https://github.com/erynaldo/first-project-portifolio"
    },
    {
        titulo: "Projeto 06 - Jogo da Velha",
        descricao: "Joguinho da Velha para passar o tempo.Desenvolvido em HTML, CSS e Javascript.",
        status: "Ajustes",
        link: "https://github.com/erynaldo/projeto-jogo-da-velha"
    }
];

function renderizarProjetos() {
    const container = document.querySelector('.projetos-container');

    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        const cardHTML = `
        <a href="${projeto.link}" target="_blank" class="card-projeto">
            <article>
                <img src="img-projeto.png" alt="Foto do Projeto Git" class="img-projeto"/>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <span class="status-projeto">${projeto.status}</span>
                <p class="projeto-git">Ver o projeto no Github</p>
            </article>
            </a>
        `;
        container.innerHTML += cardHTML;
    });
}

renderizarProjetos();