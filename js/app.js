$(document).foundation();

if (Foundation.MediaQuery.is('large')) {
    $(".offCanvasMenuToggleReveal").click(function() {

        if ($(".in-canvas-for-large").hasClass("hide-reveal")) {
            $(".in-canvas-for-large").removeClass("hide-reveal").addClass("show-reveal");
        } else if ($(".in-canvas-for-large").hasClass("show-reveal")) {
            $(".in-canvas-for-large").removeClass("show-reveal").addClass("hide-reveal");
        }

    });

}
