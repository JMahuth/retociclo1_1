let URL_BASE = "https://135.25.26.23:80/api/Car";

function addCar(){
// Datos a Enviar

    let myData = {
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
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
        $("#brand").val("");
        $("#model").val("")
        $("#category_id").val("");
        $("#Resultado").empty();
}

function listCar(){
    $.ajax(
        {
            url:URL_BASE + "/all",
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
        myTable = myTable + "<th> Brand </th>";
        myTable = myTable + "<th> Model</th>";
        myTable = myTable + "<th> Category</th>";
        myTable = myTable + "<th> Opciones</th>";

        myTable = myTable + "</tr>";
        myTable = myTable + "</thead>";

        for(cnt = 0 ; cnt < items.length ; cnt++){
            myTable = myTable + "<tr>";
            myTable = myTable + "<td> " + items[cnt].id + "</td>";
            myTable = myTable + "<td> " + items[cnt].brand + "</td>";
            myTable = myTable + "<td> " + items[cnt].model + "</td>";
            myTable = myTable + "<td> " + items[cnt].category_id + "</td>";
            myTable+="<td> <button onclick='delCarWayOne("+items[cnt].id+")'>Borrar</button>";
            myTable+="<td> <button onclick='getOneData("+items[cnt].id+")'>Editar</button>";


            myTable = myTable + "</tr>";
        }
        myTable = myTable + "</table>";
        $("#Resultado").append(myTable);
}

function modCar(){
// Datos a Enviar

    let myData = {
        id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val()
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
        $("#brand").val(items[0].brand);
        $("#model").val(items[0].model)
        $("#category_id").val(items[0].category_id);

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