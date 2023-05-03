const Niko = document.querySelector('.Niko');
const New = document.querySelector('.New');

const jump = () => {
    Niko.classList.add('jump');

    setTimeout(() => {
        Niko.classList.remove('jump');
    }, 500);
    
}

const loop = setInterval(() => {

    console.log('loop')

    const NewPosition = New.offsetLeft;
    const NikoPosition = +window.getComputedStyle(Niko).bottom.replace('px' , '');

    console.log(NikoPosition);

    if (NewPosition <= 100 && NewPosition > 0 && NikoPosition < 150) {
        New.style.animation = 'none';
        New.style.left = `${NewPosition}px`;

        Niko.style.animation = 'none';
        Niko.style.bottom = `${NikoPosition}px`;

        Niko.src = './images/gamer-over.png'
        Niko.style.width ='100px'
        Niko.style.marginLeft = '50px'

        clearInterval(loop);
    }


}, 10);


document.addEventListener('keydown', jump);
