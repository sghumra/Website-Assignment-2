<script>


function navbarclick(){
display = document.getElementsByClassName('navbar')[0].style.display;
if(display == '' || display == 'none'){

document.getElementsByClassName('navbar')[0].style.display = "block";

}else{

document.getElementsByClassName('navbar')[0].style.display = "none";

}

}
document.getElementsByClassName('fa-bars')[0].addEventListener('click', navbarclick);

</script>
