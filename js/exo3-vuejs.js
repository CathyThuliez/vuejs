document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");
   new Vue({
     el: '#demo',
     data: {
       show: true
     }
   })
 });
