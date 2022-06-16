function clickHandler(){
    const cont = document.getElementsByClassName('container1').item(0)
    cont.classList.toggle('modify')
    const nav = document.getElementsByClassName('nav').item(0)
    nav.classList.toggle('change')
    alert('CLICKED')
    console.log('Click attempt wsa succesful')
}

    
