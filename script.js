document.addEventListener("DOMContentLoaded", function () {

    const pokeButton = document.getElementById("poke-button");

    pokeButton.addEventListener("click", async function () {
        try {
            let pokeInputText = document.getElementById("pokemon").value;
            if (!pokeInputText){
                return alert("Campo de nome/id vazio!");
            }
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInputText}/`);

            const dados = await resposta.json();
            const pokeID = document.getElementById("ID");
            pokeID.textContent = dados.id;

            const pokeNome = document.getElementById("nome");
            pokeNome.textContent = dados.name;

            const pokeTipo = document.getElementById("tipo");
            pokeTipo.textContent = dados.types[0].type.name;

            const pokeImg = document.getElementById("poke-img");
            pokeImg.src = dados.sprites.other["official-artwork"].front_default;

            const pokeHabili = document.getElementById("habilidade");
            pokeHabili.textContent = dados.abilities[0].ability.name; //percorrer o arrey com o "for"

            const pokeAlt = document.getElementById("altura");
            pokeAlt.textContent = dados.height;

            const pokePeso = document.getElementById("peso");
            pokePeso.textContent = dados.weight;

            const pokeHP = document.getElementById("hp");
            const hpValor = dados.stats[0].base_stat;
            pokeHP.textContent = hpValor;
            const hpBarra = document.getElementById("hp-barra");
            hpBarra.style.width = `${(hpValor / 255) * 100}%`;

            const pokeAtaque = document.getElementById("ataque");
            const ataqueValor = dados.stats[1].base_stat;
            pokeAtaque.textContent = ataqueValor;
            const ataqueBarra = document.getElementById("ataque-barra");
            ataqueBarra.style.width = `${(ataqueValor / 255) * 100}%`;

            const pokeDefesa = document.getElementById("defesa");
            const defesaValor = dados.stats[2].base_stat;
            pokeDefesa.textContent = defesaValor;
            const defesaBarra = document.getElementById("defesa-barra");
            defesaBarra.style.width = `${(defesaValor / 255) * 100}%`;

            const pokeAtaqueE = document.getElementById("ataque-especial");
            const ataqueEValor = dados.stats[3].base_stat;
            pokeAtaqueE.textContent = ataqueEValor;
            const ataqueEBarra = document.getElementById("ataque-especial-barra");
            ataqueEBarra.style.width = `${(ataqueEValor / 255) * 100}%`;

            const pokeDefesaE = document.getElementById("defesa-especial");
            const defesaEValor = dados.stats[4].base_stat;
            pokeDefesaE.textContent = defesaEValor;
            const defesaEBarra = document.getElementById("defesa-especial-barra");
            defesaEBarra.style.width = `${(defesaEValor / 255) * 100}%`;

            const pokeSpeed = document.getElementById("velocidade");
            const speedValor = dados.stats[5].base_stat;
            pokeSpeed.textContent = speedValor;
            const speedBarra = document.getElementById("velocidade-barra");
            speedBarra.style.width = `${(speedValor / 255) * 100}%`;

        } catch (error) {
            console.log("Erro: " + error);
        }
    });
});