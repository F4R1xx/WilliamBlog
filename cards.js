function create_card(ID, Titulo, Texto) {
    var container = document.getElementById("cards-container");

    // Crie o bloco HTML que deseja inserir
    var cards = `
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3" id="ID-${ID}">
            <div class="card">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="180"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Sem foto</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">${Titulo}</h5>
                    <p class="card-text">${Texto}</p>
                </div>
            </div>
        </div>
    `;

    // Insira o bloco HTML dentro do elemento selecionado
    container.innerHTML += cards;
}

function create_card_NoData() {
    var container = document.getElementById("cards-container");

    // Crie o bloco HTML que deseja inserir
    var cards = `
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-6">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">No data found</h5>
                        <p class="card-text">Sorry, there is no data available.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `;

    // Insira o bloco HTML dentro do elemento selecionado
    container.innerHTML += cards;
}