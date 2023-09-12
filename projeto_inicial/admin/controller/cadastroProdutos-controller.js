import { clienteService } from "../service/clientes-service.js"


const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', (evento) => {
    
        
        evento.preventDefault()

       
       const nomeProduto = evento.target.querySelector('[data-nomeProduto]').value

       const preco = evento.target.querySelector('[data-preco]').value

       const descricao = evento.target.querySelector('[data-descricao]').value

       
       clienteService.criarProduto(nomeProduto, preco, descricao)
        .then(() => {
            
            window.location.href ='../telas/cadastro_concluido.html'
        })
})