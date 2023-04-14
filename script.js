const secondMenu = document.querySelector('.menu__second');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const box = document.querySelector('.box');
const nav = document.querySelector('.nav');

menuOpen.addEventListener('click', () => {
    gsap.set('.box', { scale: 1 });
    menuOpen.classList.remove('visible-block');
    menuOpen.classList.add('hide');
    menuClose.classList.add('visible-block');
    menuClose.classList.remove('hide');
    box.classList.remove('hide');
    box.classList.add('visible');

    if (secondMenu.classList.contains('visible')) {
        secondMenu.classList.add('hide');
        secondMenu.classList.remove('visible');
    } else {
        secondMenu.classList.add('visible');
        secondMenu.classList.remove('hide');
    }

    gsap.fromTo(
        nav,
        { scale: 0.5 },
        {
            scale: 1.05,
            transformOrigin: 'bottom',
            duration: 0.5,
            ease: 'Power1.easeOut',
        }
    );

    gsap.fromTo(
        box,
        { scaleY: 0.8 },
        {
            scaleY: 1,
            transformOrigin: 'bottom',
            duration: 0.5,
            ease: 'Power1.easeOut',
        }
    );

    gsap.fromTo(
        '.col',
        { opacity: 0 },
        {
            opacity: 1,
            duration: 0.5,
        }
    );
});
menuClose.addEventListener('click', () => {
    menuClose.classList.remove('visible-block');
    menuClose.classList.add('hide');
    menuOpen.classList.add('visible-block');
    menuOpen.classList.remove('hide');
    box.classList.remove('visible');
    box.classList.add('hide');
    if (secondMenu.classList.contains('visible')) {
        secondMenu.classList.add('hide');
        secondMenu.classList.remove('visible');
    } else {
        secondMenu.classList.add('visible');
        secondMenu.classList.remove('hide');
    }
    gsap.fromTo(
        nav,
        { scale: 1.1 },
        {
            scale: 1,
            transformOrigin: 'bottom',
            duration: 0.3,
            ease: 'Power1.easeOut',
        }
    );
});
