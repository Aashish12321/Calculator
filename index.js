let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
audio = document.querySelector('audio');
let screenValue = '';
for(item of buttons)
{
    item.addEventListener('click' , (e) => {
        audio.play();
        buttonText = e.target.innerText;
        console.log("Button text is ", buttonText);
  
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
            screenValue = eval(screenValue);
            screen.value = screenValue;
        }
        else if(buttonText == 'backspace')
        {
            screenValue = screen.value.slice(0, -1);
            screen.value = screenValue;
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
