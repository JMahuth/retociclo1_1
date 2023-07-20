let URL_BASE = "https://gcf48a8db4572a5-bdinstanciaapexg1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message";

function addMessage(){
// Datos a Enviar

    let myData = {
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
    };

    let datatoSend = JSON.stringify(myData);
    $.ajax(
        {
            url: URL_BASE,
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
        $("#messagetext").val("");
        $("#Resultado").empty();
}

function listMessage(){
    $.ajax(
        {
            url:URL_BASE,
            type:"GET",
            dataType:"JSON",
            success:function(resultado){
                clearScreen();
                drawTableCars(resultado.items);
            }
        }
        );    
}

function drawTableCars(items){
    let myTable = "<table border=1>";
    
        myTable = myTable + "<thead>";
        myTable = myTable + "<tr>";

        myTable = myTable + "<th> ID </th>";
        myTable = myTable + "<th> messagetext </th>";
        myTable = myTable + "<th> Opciones</th>";

        myTable = myTable + "</tr>";
        myTable = myTable + "</thead>";

        for(cnt = 0 ; cnt < items.length ; cnt++){
            myTable = myTable + "<tr>";
            myTable = myTable + "<td> " + items[cnt].id + "</td>";
            myTable = myTable + "<td> " + items[cnt].messagetext + "</td>";
            myTable+="<td> <button onclick='delCarWayOne("+items[cnt].id+")'>Borrar</button>";
            myTable+="<td> <button onclick='getOneData("+items[cnt].id+")'>Editar</button>";


            myTable = myTable + "</tr>";
        }
        myTable = myTable + "</table>";
        $("#Resultado").append(myTable);
}

function modMessage(){
// Datos a Enviar

    let myData = {
        id: $("#id").val(),
        messagetext: $("#messagetext").val(),
    };

        let datatoSend = JSON.stringify(myData);    

    $.ajax(
        {
            url:URL_BASE,
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
        $("#messagetext").val(items[0].messagetext);

}

function delCarWayOne(idAborrar){
// Datos a Enviar

    let myData = {
        id: idAborrar
    };

    let datatoSend = JSON.stringify(myData);    

    $.ajax(
        {
            url:URL_BASE,
            type: "DELETE",
            data: datatoSend,
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