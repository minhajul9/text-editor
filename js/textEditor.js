document.getElementById('text-lefting').style.border = '1px solid';
document.getElementById('text-size').value =17;

function getText(){
    const text = document.getElementById('text-area');
    return text;
}

function setText(text){
    document.getElementById('text-area').value = text;
}

function borderSetting(){
    const borders = document.getElementsByClassName('border-setting');

    for(const element of borders){
        element.style.border = 'none';
    }
}


// function of buttons
function bold(){
    let text = getText();
    if(text.style.fontWeight != '800'){
        text.style.fontWeight = '800';
        document.getElementById('btn-bold').style.border = '1px solid'
    }
    else{
        text.style.fontWeight = '400';
        document.getElementById('btn-bold').style.border = 'none';
    }
    
}

function italic(){
    let text = getText();
    if(text.style.fontStyle != 'italic'){
        text.style.fontStyle = 'italic';
        document.getElementById('btn-italic').style.border = '1px solid';
    }
    else{
        text.style.fontStyle = 'normal';
        document.getElementById('btn-italic').style.border = 'none';
    }
}

function underLine(){
    let text = getText();
    if(text.style.textDecorationLine != 'underline'){
        text.style.textDecorationLine = 'underline';
        document.getElementById('btn-underline').style.border = '1px solid';
    }
    else{
        text.style.textDecorationLine = 'none';
        document.getElementById('btn-underline').style.border = 'none';
    }
}

// button press actions 
document.getElementById('btn-bold').addEventListener('click', bold);
document.getElementById('btn-italic').addEventListener('click', italic);
document.getElementById('btn-underline').addEventListener('click', underLine);

// text align btns 
document.getElementById('text-lefting').addEventListener('click', function(event){
    const text = getText();
    text.style.textAlign = 'left';
    borderSetting();
    event.target.style.border = '1px solid';
});

document.getElementById('text-centering').addEventListener('click', function(event){
    const text = getText();
    text.style.textAlign = 'center';
    borderSetting();
    event.target.style.border = '1px solid';
});

document.getElementById('text-righting').addEventListener('click', function(event){
    const text = getText();
    text.style.textAlign = 'right';
    borderSetting();
    event.target.style.border = '1px solid';
});

document.getElementById('text-justifying').addEventListener('click', function(event){
    const text = getText();
    text.style.textAlign = 'justify';
    borderSetting();
    event.target.style.border = '1px solid';
});


// text size and uppercase lowercase
document.getElementById('text-size').addEventListener('click', function(){
    const text = getText();
    const size = document.getElementById('text-size').value;
    text.style.fontSize = size + 'px';
});

const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');

uppercase.addEventListener('click', function(){
    const text = getText();
    text.style.textTransform = 'uppercase';
    uppercase.style.display = 'none';
    lowercase.style.display = 'inline';
})

lowercase.addEventListener('click', function(){
    const text = getText();
    text.style.textTransform = 'lowercase';
    uppercase.style.display = 'inline';
    lowercase.style.display = 'none';
})

document.getElementById('input-color').addEventListener('click', function(){
    const text = getText();
    const textColor = document.getElementById('input-color');
    text.style.color = textColor.value;
})


