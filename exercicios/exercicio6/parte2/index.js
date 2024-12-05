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
    //getting elements
    const inputName = document.getElementById('input-name');
    const inputImage = document.getElementById('input-image');
    const inputBody = document.getElementById('input-body');
    const postButton = document.getElementById('post-button')
    const postUlList = document.getElementById('posts-list');

    let posts = [];
    let actualId = 0;

    //make sure every post have unique id
    async function manageId(){
        const id = actualId;
        actualId += 1;
        return id;
    }

    //fetch cat img
    async function getCatImage(){
        const img = await fetch('https://api.thecatapi.com/v1/images/search');
        const imgJson = await img.json();  
        return imgJson[0].url;
    }

    // get values of input and creates a new post
    async function createPost(){
        const name = inputName.value;
        const image = inputImage.value;
        const body = inputBody.value;

        if (!name || !image || !body){
            alert('Missing fiels');
            return null;
        }

        const postId = await manageId();
        const catImage =  await getCatImage();

        return{
            'id': postId,
            'name': name,
            'image': image,
            'body': body,
            'catImage': catImage,
            'likes': 0,
            'date': Date.now()
        };
    }

    //likes in post
    function updateLikes(postId) {
        const post = posts.find((p) => p.id === postId);
        if (post) {
            post.likes += 1;
            showPosts();
        }
    }

    //build the html of posts in list
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

                //post header. contains: img, name
                const postHeader = document.createElement('div');
                postHeader.setAttribute('class', 'post-header');

                const imagePost = document.createElement('img');
                imagePost.setAttribute('src', post.image);
                postHeader.appendChild(imagePost);

                const namePost = document.createElement('h3');
                namePost.textContent = `Usuário: ${post.name}`;
                postHeader.appendChild(namePost);

                divPost.appendChild(postHeader);

                //post body. contains: catImage, p
                const postBody = document.createElement('div');
                postBody.setAttribute('class', 'post-body');

                const catImage = document.createElement('img');
                catImage.setAttribute('src', post.catImage);
                postBody.appendChild(catImage);

                const divBodyP = document.createElement('div');
                divBodyP.setAttribute('class','post-body-p');
                postBody.appendChild(divBodyP);

                const bodyPost = document.createElement('p');
                bodyPost.textContent = post.body;
                divBodyP.appendChild(bodyPost);
                
                divPost.setAttribute('class', 'div-post')
                divPost.appendChild(postBody);

                //post footer. contains:
                const postFooter = document.createElement('div');
                postFooter.setAttribute('class', 'post-footer');

                const likeButton = document.createElement('button');
                likeButton.textContent = `Curtir (${post.likes})`;
                likeButton.addEventListener('click', () => updateLikes(post.id));
                postFooter.appendChild(likeButton);

                divPost.appendChild(postFooter);

                //add elements to list
                listItem.appendChild(divPost);
                postUlList.appendChild(listItem);
        });
    }

    postButton.addEventListener('click', ()=>{
        createPost().then(post=>{
            if(post){
                posts.push(post);
                showPosts();
                inputName.value = '';
                inputImage.value = '';
                inputBody.value = '';
            }    
        }).catch(err=>{
            console.error(err);
        });
    })
})()
