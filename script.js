//============================================================================
//  MENÚ MÓVIL (HAMBURGUESA)
//============================================================================
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-btn i');
    const links = document.querySelectorAll('.nav-links li a');

    // Alternar menú al hacer clic en el botón de hamburguesa
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Cambiar el icono visualmente (de hamburguesa a una "X")
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('ri-menu-3-line');
            menuIcon.classList.add('ri-close-line');
        } else {
            menuIcon.classList.remove('ri-close-line');
            menuIcon.classList.add('ri-menu-3-line');
        }
    });

    // Cerrar el menú automáticamente al hacer clic en cualquier enlace
    // (Muy útil porque es una página de una sola vista que hace scroll)
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('ri-close-line');
            menuIcon.classList.add('ri-menu-3-line');
        });
    });
});