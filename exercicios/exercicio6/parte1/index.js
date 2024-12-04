/*
Crie uma aplicação web que possua um campo de busca e pesquise usuários da API no GitHub (https://api.github.com/) e exiba os dados em uma lista. Caso não encontre, exiba "Não foram encontrados usuários para esta pesquisa". A busca na API deve iniciar com o clique no botão.
*/

(()=>{

    //get Elements
    const inputName = document.getElementById('input-name');
    const searchButton = document.getElementById('search-button');
    const namesList = document.getElementById('names-list');
    const failureBox = document.getElementById('failure');

    //fetch user and return data as json
    async function loadDev(){
        const devData = await fetch(`https://api.github.com/users/${inputName.value}`);
        const dev = await devData.json();
        return dev;
    }

    //show data in html
    function showDev(data){
        console.log(data)

        //if not found, tell user
        if(data['status'] == '404'){
            namesList.innerHTML = '';
            failureBox.innerHTML = 'Não foram encontrados usuários para esta pesquisa';
            return 
        }

        failureBox.innerHTML = '';

        //iterate for each key, value
        for(const [key,value] of Object.entries(data)){

            //create new <li> on each iteration
            const listItem = document.createElement('li');
            listItem.innerText = `${key}: ${value}`;
            namesList.appendChild(listItem);
        }
    
    }

    //button click
    searchButton.addEventListener('click', ()=>{
        loadDev().then((res)=>{
            showDev(res);
        }).catch((err)=>{
            console.log(err);
            failureBox.innerHTML = err;
        });
    })
})()