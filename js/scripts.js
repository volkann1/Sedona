var openForm=document.querySelector(".finde-hotel");
var form=document.querySelector(".find-hotel-form");

openForm.addEventListener("click", function (event){
  event.preventDefault();
  form.classList.toggle("find-hotel-form-show")
})