$(document).ready(function(){

    /*--------Group chat delete contact-item-------*/

    $('.contacts-item').find('.top').children('img').click(function(){
        $(this).siblings('.delete').toggleClass('show');
    });

    /*--------Group chat delete/comment message-------*/

    $('.outgoing-chats').find('.dots').children('.dots-img').click(function(){
        $(this).children('.comment-delete-container').toggleClass('show');
    });

    $('.received-chats').find('.dots').children('.dots-img').click(function(){
        $(this).children('.comment-delete-container').toggleClass('show');
    });

    $('.received-chats').hover(function(e) {
        $(this).find('.received-msg').children('.time').toggleClass('show-time');
        $(this).children('.dots').toggleClass('show-dots');
    });

    $('.outgoing-chats').hover(function() {
        $(this).find('.outgoing-msg').children('.time').toggleClass('show-time');
        $(this).children('.dots').toggleClass('show-dots');
    });


    /*-------Group chat contact item active class------*/

    $('.contacts-container .contacts-item').click(function() {
        $('.contacts-container .contacts-item').removeClass('active');
        $(this).addClass('active');
    });

});