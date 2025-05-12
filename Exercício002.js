let listaProdutos = []
var emAlteração = false
var indiceElementoAlteracao = -1

function gravarProduto(event){
    event.preventDefault()
    let nomeProduto = document.getElementById('nomeProdutos').value
    let qtdEstoque = document.getElementById('qtdEstoque').value
    let valorUnitario = document.getElementById('valorUnitario').value
    let fornecedor = document.getElementById('fornecedor').value

    let produto = {

        nomeProduto : nomeProduto,
        qtdEstoque : qtdEstoque,
        valorUnitario : valorUnitario,
        fornecedor : fornecedor

    }

    if (emAlteração) {
        listaProdutos[indiceElementoAlteracao] = produto 
        emAlteração = false
        indiceElementoAlteracao = -1
    }else{
        listaProdutos.push(produto)
    }

    limpar()
    listarProdutos()

}

function listarProdutos() {

    let conteudo = ''

    if (listaProdutos.length === 0){
        conteudo = '<td colspan="7">Nenhum Produto Cadastrado até o momento</td>'
    }else{
        listaProdutos.forEach((produto, indice) => {

            conteudo += `
                <tr>
                    <td>${indice}</td>
                    <td>${produto.nomeProduto}</td>
                    <td>${produto.qtdEstoque}</td>
                    <td>R$${parseFloat(produto.valorUnitario).toFixed(2)}</td>
                    <td>${produto.fornecedor}</td>
                    <td><button type="button" onclick="alterar(${indice})">Alterar</button></td>
                    <td><button type="button" onclick="excluir(${indice})">Excluir</button></td>
                </tr>
            `

        })

    }

    document.getElementById('conteudo').innerHTML = conteudo


}

function excluir(indice){

    if (confirm(`Deseja Realmente Excluir este Produto ${listaProdutos[indice].nomeProduto}?`)){
        listaProdutos.splice(indice, 1)
        listarProdutos()
    }
}

function alterar(indice){
    emAlteração = true
    indiceElementoAlteracao = indice
    document.getElementById('nomeProdutos').value = listaProdutos[indice].nomeProduto
    document.getElementById('qtdEstoque').value = listaProdutos[indice].qtdEstoque
    document.getElementById('valorUnitario'). value = listaProdutos[indice].valorUnitario
    document.getElementById('fornecedor').value = listaProdutos[indice].fornecedor
    gravarProduto()
}

function limpar(){
    document.getElementById('meuForm').reset()
    emAlteração = false
}