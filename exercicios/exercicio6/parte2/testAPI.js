const catImage = async () => {
    const img = await fetch('https://api.thecatapi.com/v1/images/search');
    const imgJson = await img.json();  
    return imgJson
};

catImage().then((img)=>{
    console.log(img);
});