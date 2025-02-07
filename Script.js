document.querySelector('.rose').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

document.querySelector('.rose').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
