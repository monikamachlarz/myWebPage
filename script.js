function toggleSearchBar() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('open');
    if (searchBar.classList.contains('open')) {
        searchBar.focus();
    }
}

function validateForm() {
    const email = document.getElementById('email').value;
    const temat = document.getElementById('temat').value;
    const wiadomosc = document.getElementById('wiadomosc').value;
    const messageElement = document.getElementById("formMessage");


    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
        alert('Proszę wprowadzić prawidłowy adres e-mail.');
        return false;
    }

    if (!temat) {
        alert('Proszę wybrać temat wiadomości.');
        return false;
    }

    if (!wiadomosc) {
        alert('Proszę wprowadzić treść wiadomości.');
        return false;
    }

    messageElement.textContent = "Dziękuję za wysłanie wiadomości!";
    messageElement.style.display = "block";

    document.getElementById("kontaktFormularz").reset();

    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.style.display = "none";
    }, 30000);

    return false;
}

const links = document.querySelectorAll('nav ul li a');
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};