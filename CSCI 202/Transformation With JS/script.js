document.getElementById('div').addEventListener('mouseover', event =>{
    document.body.style.transition = ('all 1s ease');
    document.body.style.backgroundColor = ('black');
    document.getElementById('div').style.transition = ('all 0.5s ease')
    document.getElementById('div').style.opacity = (0)
    
});

document.getElementById('div').addEventListener('mouseout', event =>{
    document.body.style.transition = ('all 1.5s ease');
    document.body.style.backgroundColor = ('white');
    document.getElementById('div').style.transition = ('all 1.25s ease')
    document.getElementById('div').style.opacity = (1)
  
});