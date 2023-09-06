var regex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
var videoID =/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=))([\w-]+)/;
 $("#left").click(function(){
    var message = $("#message").val();
    var messageContent;
    var newDiv;
    newDiv = $('<div class = "col-4"></div>');
        newDiv.css("width","33%");
        newDiv.css("left","33%");
        newDiv.css("border-radius","5px");
        newDiv.css("margin-bottom","15px");
        newDiv.css("background-color","#967BB6");
        newDiv.css("box-shadow","0 3px 10px rgb(0 0 0 / 0.3)")
        newDiv.css("padding","10px")
        $("div.messages").before(newDiv);
    if(message!==""){
        if(message.match(regex)){
            var matchID = message.match(videoID);
            messageContent = $("<iframe></iframe>");
            messageContent.attr("src","https://www.youtube.com/embed/"+matchID[1]);
            messageContent.attr("width","100%");
            messageContent.attr("height","315px");
            messageContent.attr("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
            messageContent.css("left","33%");
            newDiv.append(messageContent);

            
        }
        else{
        newDiv.text(message);
        }
    //box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
    //padding: 10px;
    }
    });
    $("#right").click(function(){
        var message = $("#message").val();
        var messageContent;
        var newDiv;
        newDiv = $('<div class = "col-4"></div>');
            newDiv.css("width","33%");
            newDiv.css("left","33%");
            newDiv.css("border-radius","5px");
            newDiv.css("margin-bottom","15px");
            newDiv.css("background-color","#9BB57B");
            newDiv.css("box-shadow","0 3px 10px rgb(0 0 0 / 0.3)")
            newDiv.css("padding","10px");
            $("div.messages").before(newDiv);
        if(message!==""){
            if(message.match(regex)){
                var matchID = message.match(videoID);
                messageContent = $("<iframe></iframe>");
                messageContent.attr("src","https://www.youtube.com/embed/"+matchID[1]);
                messageContent.attr("width","100%");
                messageContent.attr("height","315px");
                messageContent.attr("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
                messageContent.css("left","33%");
                newDiv.append(messageContent);

                
            }
            else{
            newDiv.text(message);
            }
        //box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
        //padding: 10px;
        }
    });
