document.getElementById('login').addEventListener('click', (e)=>{
    e.preventDefault();
    fetch("https://api.chucknorris.io/jokes/random")
    .then(data=>data.json())
    .then(data=>alert(data.value))
    

});