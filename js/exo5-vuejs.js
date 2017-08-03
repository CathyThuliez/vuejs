
document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");
   var app5 = new Vue({
     el: '#app-5',
     data: {
       message: 'Engage le jeu que je le gagne'
     },
     methods: {
       reverseMessage: function () {
         this.message = this.message.split('').reverse().join('')
       }
     }
   })
});
