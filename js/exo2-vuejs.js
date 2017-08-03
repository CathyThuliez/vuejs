document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");
   var app2 = new Vue({
     el: '#app-2',
     data: {
       message: 'J\'apprends vuejs depuis ' + new Date()
     }
   })
 });
