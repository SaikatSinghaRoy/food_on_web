window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});



function toggleNav(){
    const navToggle = document.querySelector('.navToggle');
    const navigation = document.querySelector('.navigation');

    navToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}