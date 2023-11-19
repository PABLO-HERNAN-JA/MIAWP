//script.js
document.addEventListener('DOMContentLoaded', function(){
    //Simula un retraso de 2 segundos para la pantalla de carga 
    setTimeout(function(){
        hideSplashScreen();
    }, 2000);
});

function hideSplashScreen(){
    const splashScreen=document.getElementById('splash-screen');
    splashScreen.style.display= 'none';

    //Muestra la pantalla de inicio
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.remove('hidden');

    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', function(){
        // Muestra la alerta y redirige a otra página después de hacer clic en OK
        const confirmation = confirm('¡La aplicación ha comenzado! ¿Quieres visitar mi portafolio web?');
        
        if (confirmation) {
            window.location.href = 'mipw.html';
        }
    });
}

if('Notification' in window){
    Notification.requestPermission().then(function(permission){
        if (permission == 'granted'){
            new Notification('¡Bienvenido!',{
                body: 'Gracias por visitar mi Portafolio web'
            })
        }
    })
}
