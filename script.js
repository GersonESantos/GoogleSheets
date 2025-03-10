const script_do_google = 'https://script.google.com/macros/s/AKfycbxf_R0kCQhePsiGZcgmPLfY52a8BBFSTqwsxJ8TCM5M0PLd9xaqE2r1vb7Ej9EvK3Pq/exec';
const dados_do_formulario = document.forms['formulario-contato'];

dados_do_formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch(script_do_google, { method: 'POST', body: new FormData(dados_do_formulario) })
        .then(response => {
            // Se os dados forem gravados corretamente, será enviada uma mensagem de sucesso
            alert('Dados enviados com sucesso!', response);
            dados_do_formulario.reset(); 
        })
        .catch(error => {
            // Se houver erro no envio, a menssagem abaixo será exibida
            console.error('Erro no envio dos dados!', error);
        });
});