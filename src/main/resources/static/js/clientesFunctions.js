let URL_BASE = "https://gcf48a8db4572a5-bdinstanciaapexg1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client";

function addClient(){
// Datos a Enviar

    let myData = {
        id:$("#id").val(),
        name:$("#name").val(),
        age:$("#age").val(),
        email:$("#email").val(),
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
        $("#name").val("");
        $("#age").val("")
        $("#email").val("");
        $("#Resultado").empty();
}

function listClient(){
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
        myTable = myTable + "<th> name </th>";
        myTable = myTable + "<th> age</th>";
        myTable = myTable + "<th> Email</th>";
        myTable = myTable + "<th> Opciones</th>";

        myTable = myTable + "</tr>";
        myTable = myTable + "</thead>";

        for(cnt = 0 ; cnt < items.length ; cnt++){
            myTable = myTable + "<tr>";
            myTable = myTable + "<td> " + items[cnt].id + "</td>";
            myTable = myTable + "<td> " + items[cnt].name + "</td>";
            myTable = myTable + "<td> " + items[cnt].age + "</td>";
            myTable = myTable + "<td> " + items[cnt].email + "</td>";
            myTable+="<td> <button onclick='delCarWayOne("+items[cnt].id+")'>Borrar</button>";
            myTable+="<td> <button onclick='getOneData("+items[cnt].id+")'>Editar</button>";


            myTable = myTable + "</tr>";
        }
        myTable = myTable + "</table>";
        $("#Resultado").append(myTable);
}

function modClient(){
// Datos a Enviar

    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        age: $("#age").val(),
        email: $("#email").val()
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
        $("#name").val(items[0].name);
        $("#age").val(items[0].age)
        $("#email").val(items[0].email);

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