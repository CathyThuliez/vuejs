document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");
   var app4 = new Vue({
     el: '#app-4',
     data: {
       todos: [
         { text: 'Aller à pop school' },
         { text: 'Apprendre javascript' },
         { text: 'Apprendre vue' },
         { text: 'Créer quelque chose de génial' }
       ]
     }
   })

 });
