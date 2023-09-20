const mainContent = document.querySelector('main');

function loadContent(path)
{
    fetch(`pages/${path}.html`)
        .then(response => response.text())
        .then(data => 
        {
            mainContent.innerHTML = data;
        })
        .catch(error =>
        {
            console.error("Error when loading page : ", error);
        });
}

loadContent('home');