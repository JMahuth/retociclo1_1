let URL_BASE = "https://127.0.0.1:8080/api/Gama";

function addGama(){
// Datos a Enviar

    let myData = {
        id:$("#id").val(),
        name:$("#name").val(),
        description:$("#description").val(),
    };

    let datatoSend = JSON.stringify(myData);
    $.ajax(
        {
            url: URL_BASE + "/save",
            type: "POST",
            data:datatoSend,
            contentType:"application/JSON",
            success: function(resultado){
                clearScreen();
                alert("Registro Guardado");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                alert("Status: " + textStatus); alert("Error: " + errorThrown); 
            }

        }
        );
}

function clearScreen(){
        $("#id").val("");
        $("#name").val("");
        $("#description").val("")
        $("#Resultado").empty();
}

function listGama(){
    $.ajax(
        {
            url:URL_BASE + "/all",
            type:"GET",
            dataType:"JSON",
            success:function(resultado){
                clearScreen();
                drawTableGamas(resultado.items);
            }
        }
        );    
}

function drawTableGamas(items){
    let myTable = "<table border=1>";
    
        myTable = myTable + "<thead>";
        myTable = myTable + "<tr>";

        myTable = myTable + "<th> ID </th>";
        myTable = myTable + "<th> Name </th>";
        myTable = myTable + "<th> Description </th>";
        myTable = myTable + "<th> Opciones</th>";

        myTable = myTable + "</tr>";
        myTable = myTable + "</thead>";

        for(cnt = 0 ; cnt < items.length ; cnt++){
            myTable = myTable + "<tr>";
            myTable = myTable + "<td> " + items[cnt].id + "</td>";
            myTable = myTable + "<td> " + items[cnt].name + "</td>";
            myTable = myTable + "<td> " + items[cnt].description + "</td>";
            myTable+="<td> <button onclick='delGamaWayOne("+items[cnt].id+")'>Borrar</button>";
            myTable+="<td> <button onclick='getOneData("+items[cnt].id+")'>Editar</button>";


            myTable = myTable + "</tr>";
        }
        myTable = myTable + "</table>";
        $("#Resultado").append(myTable);
}

function modGama(){
// Datos a Enviar

    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        description: $("#description").val(),
    };

    let datatoSend = JSON.stringify(myData);    

    $.ajax(
        {
            url:URL_BASE+"/update",
            type:"PUT",
            data:datatoSend,
            contentType:"application/JSON",            
            success:function(resultado){
                clearScreen();
                alert("Registro Modificado");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                alert("Status: " + textStatus); alert("Error: " + errorThrown); 
            }

        }
        );
}

function getOneData(idaEditar){
        $.ajax(
        {
            url:URL_BASE+"/"+idaEditar,
            type:"GET",
            dataType:"JSON",
            success:function(resultado){
                clearScreen();
                screentoModify(resultado.items);
            }
         }
        ); 
}

function screentoModify(items){

        $("#id").val(items[0].id);
        $("#name").val(items[0].name);
        $("#description").val(items[0].description)

}

function delGamaWayOne(idAborrar){
// Datos a Enviar



    $.ajax(
        {
            url:URL_BASE+"/"+idAborrar,
            type: "DELETE",
            contentType:"application/JSON",
            success:function(resultado){
                clearScreen();
                alert("Registro Eliminado");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                alert("Status: " + textStatus); alert("Error: " + errorThrown); 
            }
        }
        );
}