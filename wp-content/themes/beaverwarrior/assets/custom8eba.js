(function($){
    $(document).ready(function(){
        setTimeout(function(){

        hsSubmitUI = document.querySelectorAll('.resources-form .hs_submit, .hue-contact .hs_submit');
        gravitySubmit = document.querySelectorAll('.calculatorForm #gform_submit_button_6');

        if(hsSubmitUI){
            hsSubmitUI.forEach(function(item){
                let submitText = 'Submit';
                submitText = item.querySelector('input[type="submit"]').value;
                let submSpan = document.createElement('span');
                submSpan.classList.add('hiddenValue');
                submSpan.innerText = submitText;
                item.appendChild(submSpan);
                insertArrow(item);
            });
        }
        if(gravitySubmit){
            gravitySubmit.forEach(function(item){
                insertArrow(item);
            });
        }
        }, 400);

        function insertArrow(el){
            console.log("insertArrow");

            const svg = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.387097 0H12V1.9545H0.387097V0Z" fill="white"/><path d="M10.0645 11.727L10.0645 0H12V11.727H10.0645Z" fill="white"/><path d="M0 10.618L10.1276 0.390858L11.4962 1.7729L1.36859 12L0 10.618Z" fill="white"/></svg>';
            el.innerHTML += svg;
        }


        // setTimeout(function(){
        //     let submUi = document.querySelector('.hs_submit');
        //     let submValue = document.querySelector('.hs_submit input[type="submit"]');
        //     let submSpan = document.createElement('span');
        //     submSpan.classList.add('hiddenValue');
        //     submSpan.innerText = submValue.value;
        //     submUi.appendChild(submSpan);

        //     console.log("submValue", submValue.value);
        // }, 500);

        $(document).scroll(function (e){
            if($('.trigger-fixed').length > 0 && $('.trigger-fixed').elHitTop()){
                if(!$('.trigger-fixed').hasClass('inViewport')){
                    $('.trigger-fixed').addClass('inViewport');
                    $('.trigger-fixed').addClass('fixed-video-triggered');
                    $('.trigger-fixed .fl-bg-embed-code').removeClass('top-0');
                    $('.trigger-fixed .fl-bg-video').removeClass('top-0');
                }
            }else if($('.trigger-fixed').length > 0 && !$('.trigger-fixed').elHitTop()){
                if($('.trigger-fixed').hasClass('inViewport')){
                    $('.trigger-fixed').removeClass('inViewport');
                    $('.trigger-fixed').removeClass('fixed-video-triggered');
                    $('.trigger-fixed .fl-bg-embed-code').addClass('top-0');
                    $('.trigger-fixed .fl-bg-video').addClass('top-0');
                }
            }
        })

        $.fn.elHitTop = function() {
            var elementTop = $(this).offset().top;
            // var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            // var viewportBottom = viewportTop + $(window).height();

            return viewportTop >= elementTop;
            // return elementBottom > viewportTop && elementTop < viewportBottom;
        };
    });
})(jQuery)