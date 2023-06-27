$(document).ready(function() {
    $("#enviar-texto").click(function() {

     
        var api_key = "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"
            //var api_key = "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";
        var texto = $("#texto").val();
       
        $.ajax({
            type: "POST",
            url: "https://api.openai.com/v1/images/generations",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + api_key
            },
            data: JSON.stringify({
                "prompt": texto,
                "n": 2,
                "size": "256x256"
            }),
            success: function(respuesta) {
                var imgUrl = respuesta.data[0].url;
                var imgUrl2 = respuesta.data[1].url;
                var img = $("<img>").attr("src", imgUrl);
                var img2 = $("<img>").attr("src", imgUrl2);
                $("#resultado").html(img);
                $("#resultado2").html(img2);
                console.log(respuesta);
                console.log("se logro");
            },

            dataType: "json"
        }).fail(function() {
            $("#resultado").html("Ha ocurrido un error al enviar la solicitud a la API de OpenAI.");
            console.log("no se logro");
        });

    });
});