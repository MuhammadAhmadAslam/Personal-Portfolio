document.querySelector('.btn-1').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default action of the link
    document.querySelector('#chat').scrollIntoView({
        behavior: 'smooth'
    });
});
