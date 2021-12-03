$( document ).ready(function() {
    console.log( "Página cargada!" );

    $("#btnLanding").on("click", function(){        
        $("#SectionOne").hide();   
        $("#SectionTwo").show();             
    })

    $("#idHome").on("click", function(){
        $("#SectionOne").show();   
        $("#SectionTwo").hide();  
    });
    
});

function actionPage(){

    


}