let timeout;

initialize();

function initialize()
{
    timeout = window.setTimeout(showPic, 5000);
}

function showPic()
{
    const loadercontainer = document.getElementById('loadercontainer');
    loadercontainer.classList.toggle('hidden');
    const generalcontainer = document.getElementById('generalcontainer');
    generalcontainer.classList.toggle('hidden');
}

