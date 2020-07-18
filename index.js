
var drum1 = document.querySelectorAll('.drum');
for(var i=0; i<drum1.length; i++){
    drum1[i].addEventListener('click' , function(){
   
        var btnDrum =this.innerHTML;

        switch(btnDrum){
            case 'V':
              alert('voice are here when you will click the alphabet only for practice purpose');
                break;
            case 'G':
                var audio = new Audio (src='audio/greet.ogg');
                audio.play();
                break;
             case 'I':
                var audio = new Audio (src='audio/introduce.ogg');
                audio.play();

           break;
           case 'H':
            var audio = new Audio (src='audio/how.ogg');
            audio.play();
               break;

               case 'P':
                var audio = new Audio (src='audio/pray.ogg');
                audio.play();
                   break;
                   case 'D':
                    var audio = new Audio (src='audio/dua.ogg');
                    audio.play();
                       break;
                      
                             
             }



    });
}


 
