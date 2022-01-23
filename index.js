let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
audio = document.querySelector('audio');
let screenValue = '';
for(item of buttons)
{
    item.addEventListener('click' , (e) => {
        buttonText = e.target.innerText;
        console.log("Button text is ", buttonText);
        audio.play();
        
        if(buttonText == 'x')
        {
            buttonText = '*';
            screenValue += buttonText; 
            screen.value = screenValue;
        }
        else if(buttonText == '^')
        {
            buttonText = '**';
            screenValue += buttonText; 
            screen.value = screenValue;
        }
        else if(buttonText == 'AC')
        {
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '=')
        {
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'backspace')
        {
            screen.value = screen.value.slice(0, - 1);
        }
        else if(buttonText == '😎')
        {
            window.location.href="https://www.youtube.com/watch?v=3BRNzU5bhNM", target="_main_";
        }	
        else
        {
            screenValue += buttonText; 
            screen.value = screenValue;
        }
    })
}
