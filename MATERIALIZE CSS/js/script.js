$(document).ready(function(){
    $('.modal').modal({
        // dismissible: false
    });
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({full_width:true});
    $('.fparallax').parallax();
    $('.myreview').carousel({
        numVisible:7,
        shift:55,
        padding: 55,
    });
});

function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}