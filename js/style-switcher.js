// style switcher

const styleSwticherToggle = () =>{
    const styleSwitcher = document.querySelector('.js-style-switcher');
    const styleSwticherToggler = document.querySelector('.js-style-switcher-toggler');

    styleSwticherToggler.addEventListener('click',function(){
        styleSwitcher.classList.toggle('open');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-cog');
    });
}

styleSwticherToggle();
// theme color
const themColor = () =>{
    const hueSlider = document.querySelector('.js-hue-slider');
    const html = document.querySelector('html');
    
    const setHue = (value) =>{
        html.style.setProperty('--hue',value);
        document.querySelector('.js-hue').innerHTML = value;
    }

    hueSlider.addEventListener('input', function(){
        // console.log(this.value);
        setHue(this.value);
        // set the user preference in local storage
        localStorage.setItem('--hue', this.value);
    });

    const slider = (value) =>{
        hueSlider.value = value;
    }

    // check for user preference, if any, on load of the webiste
    if(localStorage.getItem('--hue') != null){
        setHue(localStorage.getItem('--hue'));
        slider(localStorage.getItem('--hue'));
    }
    else{
        // default color
        const hue = getComputedStyle(html).getPropertyValue('--hue');
        // console.log(hue);
        setHue(hue);
        slider(hue.split(' ').join(''));
    }
}
themColor();
//  theme dark and light mode

const themeLightDark = () => {
    const darkModeCheckBox = document.querySelector('.js-dark-mode');

    const themeMode = ()=>{
        if(localStorage.getItem('theme-dark') === 'false'){
            document.body.classList.remove('t-dark');
        }
        else{
            document.body.classList.add('t-dark');
        }
    }

    darkModeCheckBox.addEventListener('click', function(){
        // console.log(this.checked);
        // set the user's prefrence in local storage
        localStorage.setItem('theme-dark', this.checked);
        themeMode();
    })

    // check for saved user prefrence , if any , on  load of the website
    if(localStorage.getItem('theme-dark') !== null){
        themeMode();
    }
    if(document.body.classList.contains('t-dark')){
        darkModeCheckBox.checked =  true;
    }
}
themeLightDark();



