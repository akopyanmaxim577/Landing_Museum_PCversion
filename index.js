window.addEventListener('load', () =>{
    //buttons
    const left = document.querySelector('.btn_left');
    const rigth = document.querySelector('.btn_right');

    //progress 
    const bar = document.querySelector('.progress_bar');

    //carousel
    const slider = document.querySelector('.slider__items');
    const images = document.querySelectorAll('.slider__items .slider__item img');

    //counter
    let counter = 0;
    const stepSize = images [0].clientWidth;
    console.log(stepSize);

    slider.style.transform = 'translate('+`${-stepSize * counter}px)`;
    
    rigth.addEventListener('click', () => {
        if (counter >= images.length - 1) counter = -1;
        slider.classList.add('transformJs');
        counter++;
        slider.style.transform = 'translate('+`${-stepSize * counter}px)`;
    })


    left.addEventListener('click',() =>{
        if (counter <= 0) counter = images.length;
        slider.classList.add('transformJs');
        counter--;
        slider.style.transform = 'translate('+`${-stepSize * counter}px)`;

    })



})



    
