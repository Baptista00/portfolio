
function atualizarAno() {
    document.getElementById('ano').textContent = new Date().getFullYear();
}

function copiarEmail() {
    var linkEmail = document.getElementById('copiar-email');
    var msgCopiado = document.getElementById('msg-copiado');

    linkEmail.addEventListener('click', function(evento) {
        evento.preventDefault(); // impede abrir o cliente de email

        navigator.clipboard.writeText('lucasbaptista2106@gmail.com');

        msgCopiado.classList.add('visivel');

        // Some a mensagem após 2 segundos
        setTimeout(function() {
            msgCopiado.classList.remove('visivel');
        }, 2000);
    });
}

function botaoVoltarTopo() {
    var btn = document.getElementById('btn-topo');

    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btn.classList.add('visivel');
        } else {
            btn.classList.remove('visivel');
        }
    });

    
    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


atualizarAno();
copiarEmail();
botaoVoltarTopo();
