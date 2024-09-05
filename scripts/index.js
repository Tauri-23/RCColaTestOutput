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
        // console.log(scrollTop);

        if(scrollTop > 1000 && scrollTop <= 1130) {
            rotateElement($('#s2-element-1'), 90);
        }
        if(scrollTop > 1032 && scrollTop <= 1130) {
            rotateElement($('#s2-element-1'), 63.75);
        }
        if(scrollTop > 1065 && scrollTop <= 1130) {
            rotateElement($('#s2-element-1'), 42.5);
        }
        if(scrollTop > 1097 && scrollTop <= 1130) {
            rotateElement($('#s2-element-1'), 21.25);
        }
        if(scrollTop > 1129 && scrollTop <= 1130) {
            rotateElement($('#s2-element-1'), 0);
            rotateElement($('#s2-element-2'), 90);
        }


        if(scrollTop > 1130 && scrollTop <= 1230) {
            rotateElement($('#s2-element-2'), 90);
        }
        if(scrollTop > 1132 && scrollTop <= 1230) {
            rotateElement($('#s2-element-2'), 63.75);
        }
        if(scrollTop > 1165 && scrollTop <= 1230) {
            rotateElement($('#s2-element-2'), 42.5);
        }
        if(scrollTop > 1197 && scrollTop <= 1230) {
            rotateElement($('#s2-element-2'), 21.25);
        }
        if(scrollTop > 1229 && scrollTop <= 1230) {
            rotateElement($('#s2-element-2'), 0);
            rotateElement($('#s2-element-3'), 90);
        }


        if(scrollTop > 1230 && scrollTop <= 1330) {
            rotateElement($('#s2-element-3'), 90);
        }
        if(scrollTop > 1232 && scrollTop <= 1330) {
            rotateElement($('#s2-element-3'), 63.75);
        }
        if(scrollTop > 1265 && scrollTop <= 1330) {
            rotateElement($('#s2-element-3'), 42.5);
        }
        if(scrollTop > 1297 && scrollTop <= 1330) {
            rotateElement($('#s2-element-3'), 21.25);
        }
        if(scrollTop > 1329 && scrollTop <= 1330) {
            rotateElement($('#s2-element-3'), 0);
            rotateElement($('#s2-element-4'), 90);
        }


        if(scrollTop > 1430 && scrollTop <= 1530) {
            // $('#s2-element-4').removeClass('d-none');
            // $('#s2-element-4').addClass('s2-content-1-animation');
        }

        if(scrollTop < 900) {
            rotateElement($('#s2-element-1'), 90);
        }
    });
})