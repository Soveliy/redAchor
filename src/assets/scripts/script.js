// script.js

// Script

// Plugins
@@include('./plugins/lazysizes.min.js');
@@include('./plugins/fslightbox.js');
@@include('./plugins/swiper-bundle.min.js');

// Blocks

document.addEventListener('DOMContentLoaded', () => {

    @@include('./blocks/tabs.js');
    @@include('./blocks/bricks.js');
    @@include('./blocks/page.js');
    @@include('./blocks/popup.js');
    @@include('./blocks/unit-block.js');
    @@include('./blocks/text.js');
    @@include('./blocks/slider.js');
    @@include('./blocks/button-none.js');
});