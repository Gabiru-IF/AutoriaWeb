let listaProdutos = []

function gravarProduto(){

    let nomeProduto = document.getElementById('nomeProduto').value
    let qtdEstoque = document.getElementById('qtdEstoque').value
    let valorUnitario = document.getElementById('valorUnitario').value
    let fornecedor = document.getElementById('forcenedor').value

    let produto = {

        nomeProduto : nomeProduto,
        qtdEstoque : qtdEstoque,
        valorUnitario : valorUnitario,
        fornecedor : fornecedor

    }

    listaProdutos.push(produto)
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
                    <td>${produto.nomeProduto}</td>
                    <td>${produto.qtdEstoque}</td>
                    <td>${produto.valorUnitario}</td>
                    <td>${produto.fornecedor}</td>
                </tr>
            `

        })

    }

    document.getElementById('conteudo').innerHTML = conteudo


}