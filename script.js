var regex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
 $("#left").click(function(){
        var message = $("#message").val();
        if(message!==""){
        //$(".container").append(message);
        var messageContent;
        //<iframe width="560" height="315" src="https://www.youtube.com/embed/yAE6a6xsbFE?si=src39nX-52HKRM4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        if(message.match(regex)){
            messageContent = document.createElement("iframe");
            messageContent.attr("src",message);
            messageContent.attr("frameborder","0");
            messageContent.attr("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
            messageContent.css("width","100%");
            messageContent.css("height","315px");
            messageContent.css("box-shadow","0 3px 10px rgb(0 0 0 / 0.3)")
            messageContent.css("padding","15px")
            messageContent.css("left","33%");
            messageContent.css("border-radius","5px");
            messageContent.css("margin-bottom","15px");
           // messageContent.css("background-color","lavender");
        }
        else{
            messageContent = $('<div class = "col-4"></div>');
            messageContent.css("width","100%");
            messageContent.css("left","33%");
            messageContent.css("border-radius","5px");
            messageContent.css("margin-bottom","15px");
            messageContent.css("background-color","lavender");
        //box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
        //padding: 10px;
            messageContent.css("box-shadow","0 3px 10px rgb(0 0 0 / 0.3)")
            messageContent.css("padding","10px")
            messageContent.text(message);
        }
        
        $("div.messages").before(messageContent);
        }
    });
    $("#right").click(function(){
        var message = $("#message").val();
        if(message!==""){
            if(message.match(regex)){
                messageContent = document.createElement("iframe");
                messageContent.attr("src",message);
                messageContent.attr("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
                messageContent.css("width","100%");
                messageContent.css("height","33%");
                messageContent.css("height","315px");;
                messageContent.css("box-shadow","0 3px 10px rgb(0 0 0 / 0.3)")
                messageContent.css("padding","15px")
                messageContent.css("left","33%");
                messageContent.css("border-radius","5px");
                messageContent.css("margin-bottom","15px");
                messageContent.css("background-color","#D1FBCD");
            }
            else{
            messageContent = $('<div class = "col-4"></div>');
            messageContent.css("width","33%");
            messageContent.css("left","33%");
            messageContent.css("border-radius","5px");
            messageContent.css("margin-bottom","15px");
            messageContent.css("background-color","#D1FBCD");
        //box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
        //padding: 10px;
            messageContent.css("box-shadow","0 3px 10px rgb(0 0 0 / 0.3)")
            messageContent.css("padding","10px")
            messageContent.text(message);
            }

            $("div.messages").before(messageContent);
        }
    });