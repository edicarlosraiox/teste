var items=[];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
   
    var nomeProduto=document.querySelector('input[name=nome_produto]').value;
    var precoProduto=document.querySelector('input[name=Price]').value;
    
    items.push({
        nome: nomeProduto,
        valor:precoProduto

    });

       /* <div class="lista-produto-single">
                <h3>Redbull</h3>
                <h3 class="price-produto"><span>R$20,00</span></h3>
        </div>
        */
       
    
    let listaProdutos = document.querySelector('.lista-produtos');
    items.map(function(val){
      listaProdutos.innerHTML+=`
      
      <div class="lista-produto-single">
                <h3>`+val.nomeproduto+`</h3>
                <h3 class="price-produto">span<R$`+val.valor+`</span></h3>
        </div>
    
     `;
    })   
});


