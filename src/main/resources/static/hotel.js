function listar(){
    const container = $("main").find("container_clientes");
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/cliente",
        success: function (data) {
            $.each(data,function(i, value){
                let linha = $("<div class='linha'></div>")
                $("<div class='item nome'>" + value.nome + "</div>").appendTo($(linha));
                $("<div class='item email'>" + value.email + "</div>").appendTo($(linha));
                //via getmaping
                // $(`<div class='item remover'><a href=cliente/delete/${value.id}><span class='material-symbols-outlined'>delete</span></a></div>`).appendTo($(linha));
                
                //via delete
                $(`<div class='item remover'><a href="#" onclick="deletar(${value.id})"><span class='material-symbols-outlined'>delete</span></a></div>`).appendTo($(linha));
                $(`<div class='item editar'><a href=cliente/editar/${value.id}><span class="material-symbols-outlined">edit</span></a></div>`).appendTo($(linha));
                $(linha).attr("_id",value.id);
                $(linha).appendTo("#container_clientes");
            })
            
        },
        error: function (data) {
            alert("Ops! algo deu errado ao carregar os dados dos clientes")
        },
        beforeSend: function () {
            limpar();
            let linhaTitulo = $("<div class='linha'></div>")
            $("<div class='titulo'>Nome</div>").appendTo($(linhaTitulo));
            $("<div class='titulo'>E-mail</div>").appendTo($(linhaTitulo));
            $("<div class='titulo'></div>").appendTo($(linhaTitulo));
            $("<div class='titulo'></div>").appendTo($(linhaTitulo));

            $(linhaTitulo).appendTo("#container_clientes");
        }
    })
}

function limpar(){
    $("#container_clientes").find(".linha").remove();
    // $("#container_clientes").find(".titulo").remove();
}

function deletar(id){
    $.ajax({
        type:"DELETE",
        dataType:"json",
        url:"cliente/delete/" + id,
        success: function (data) {
            alert("Cliente " + data.nome + " excluido com sucesso");
            $("#container_clientes").find(`.linha[_id=${data.id}]`).remove();
        },
        error: function (data) {
            alert("Ops! algo deu errado ao deletar os dados dos clientes");
        },
        beforeSend: function () {
        }
    })
}