$(document).ready(function() {
    const rotateElement = (element, degree) => {
        element.css({
            WebkitTransform: `rotateX(${degree}deg)`, // For Safari and older Chrome
            MozTransform: `rotateX(${degree}deg)`,    // For older Firefox
            OTransform: `rotateX(${degree}deg)`,      // For older Opera
            MsTransform: `rotateX(${degree}deg)`,     // For older IE
            transform: `rotateX(${degree}deg)`        // Standard
        });
    }

    // Scroll Events
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();

        // console.log(scrollBot);
        console.log(scrollTop);

        if(scrollTop > 400 && scrollTop <= 530) {
            rotateElement($('#s2-element-1'), 90);
        }
        if(scrollTop > 432 && scrollTop <= 530) {
            rotateElement($('#s2-element-1'), 63.75);
        }
        if(scrollTop > 465 && scrollTop <= 530) {
            rotateElement($('#s2-element-1'), 42.5);
        }
        if(scrollTop > 497 && scrollTop <= 530) {
            rotateElement($('#s2-element-1'), 21.25);
        }
        if(scrollTop > 529 && scrollTop <= 530) {
            rotateElement($('#s2-element-1'), 0);
            rotateElement($('#s2-element-2'), 90);
        }


        if(scrollTop > 630 && scrollTop <= 730) {
            rotateElement($('#s2-element-2'), 90);
        }
        if(scrollTop > 632 && scrollTop <= 730) {
            rotateElement($('#s2-element-2'), 63.75);
        }
        if(scrollTop > 665 && scrollTop <= 730) {
            rotateElement($('#s2-element-2'), 42.5);
        }
        if(scrollTop > 697 && scrollTop <= 730) {
            rotateElement($('#s2-element-2'), 21.25);
        }
        if(scrollTop > 729 && scrollTop <= 730) {
            rotateElement($('#s2-element-2'), 0);
            rotateElement($('#s2-element-3'), 90);
        }


        if(scrollTop > 830 && scrollTop <= 930) {
            rotateElement($('#s2-element-3'), 90);
        }
        if(scrollTop > 832 && scrollTop <= 930) {
            rotateElement($('#s2-element-3'), 63.75);
        }
        if(scrollTop > 865 && scrollTop <= 930) {
            rotateElement($('#s2-element-3'), 42.5);
        }
        if(scrollTop > 897 && scrollTop <= 930) {
            rotateElement($('#s2-element-3'), 21.25);
        }
        if(scrollTop > 929 && scrollTop <= 930) {
            rotateElement($('#s2-element-3'), 0);
            rotateElement($('#s2-element-4'), 90);
        }

        if(scrollTop < 400) {
            rotateElement($('#s2-element-1'), 90);
            rotateElement($('#s2-element-2'), 90);
            rotateElement($('#s2-element-3'), 90);
        }
    });
})