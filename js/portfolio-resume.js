"use strict";

$(document).ready(function(){


    $(function () {
        var $lis = $('.header-featured-blocks li'),
            $cur = $lis.first().addClass('active'),
            $next = $cur.next().addClass('next');
        $cur.fadeIn(500);
        setInterval(function () {
            $cur.fadeOut({duration: 500,queue: false}).animate({marginLeft:10}).removeClass('active');
            $cur = $next.removeClass('next').css({marginLeft:-10}).fadeIn({duration: 500,queue: false}).animate({marginLeft:0}).addClass('active');
            $next = $cur.next();
            if (!$next.length) {
                $next = $lis.first();
            }
            $next.addClass('next');
        }, 5000);
    });
});

// $.fn.infiniteScrollUp=function(){
//     var self=this,kids=self.children()
//     kids.slice(10).hide()
//     setInterval(function(){
//         kids.filter(':hidden').eq(0).slideDown()
//         kids.eq(0).slideUp(function(){
//             $(this).appendTo(self)
//             kids=self.children()
//         })
//     },1)
//     return this
// }
//
//
// $(function(){
//     $('section').infiniteScrollUp()
// })

