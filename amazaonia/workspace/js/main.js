function link(){
	
	window.location="http://pruebaservjes1.mybluemix.net/#/";

}


 var ref = new Firebase("https://papu.firebaseio.com/");
    ref.child("appName").on("value", function(snapshot){
      console.log(snapshot.val());
      document.getElementById("titular").textContent = snapshot.val();
    });