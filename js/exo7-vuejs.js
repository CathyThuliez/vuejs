
document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");
   Vue.component('todo-item', {
     template: '<li>Ceci est une liste</li>'
   })
});
