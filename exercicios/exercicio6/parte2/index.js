/*
Crie um feed para uma rede social similar ao Twitter. Seu feed deve conter:

- Um formulário com uma textarea para suas postagens e um botão Postar. O formulário deve ficar fixo no topo da página.

- Uma lista com as postagens já feitas, organizadas da mais recente para a mais antiga. Cada postagem deve conter:

 * seu nome de usuário 

* seu avatar 

* o texto da postagem

* uma imagem aleatória de gatinhos fofos, que você deve pegar fazendo uma requisição para a API (https://api.thecatapi.com/v1/images/search) 

* o botão de curtir

Seu feed terá a estrutura de um array de objetos. Cada objeto deverá conter: data, nome de usuário, avatar, o texto que você postou, a imagem trazida da API e o número de likes. 

A contagem de likes de um determinado post deve ser incrementada (alterada em tela) cada vez que o respectivo botão curtir for pressionado.
*/

(()=>{
    const inputName = document.getElementById('input-name');
    const inputImage = document.getElementById('input-image');
    const inputBody = document.getElementById('input-body');
    const postButton = document.getElementById('post-button')
    const postUlList = document.getElementById('posts-list');

    let posts = [];

    function createPost(){
        const name = inputName.value;
        const image = inputImage.value;
        const body = inputBody.value;

        if (!name || !image || !body){
            console.log('Missing fiels');
            return
        }

        const post = {
            'name': name,
            'image': image,
            'body': body,
            'likes': 0,
            'date': Date.now()
        }

        posts.push(post);
    }

    function showPosts(){
        postUlList.innerHTML = '';

        //sort posts by date
        posts.sort((a,b)=>{
            return new Date(b.date) - new Date(a.date);
        });

        //build each post
        posts.forEach(post => {
                const listItem = document.createElement('li');
                const divPost = document.createElement('div');

                const imagePost = document.createElement('img');
                imagePost.setAttribute('src', post.image);
                divPost.appendChild(imagePost);
                

                const namePost = document.createElement('h3');
                namePost.textContent = `Usuário: ${post.name}`;
                divPost.appendChild(namePost);

                const bodyPost = document.createElement('p');
                bodyPost.textContent = post.body;
                divPost.appendChild(bodyPost);

                listItem.appendChild(divPost);
                postUlList.appendChild(listItem);
        });
    }

    postButton.addEventListener('click', ()=>{
        createPost();
        showPosts();
    })
})()
