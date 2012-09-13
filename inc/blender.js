/**
 * Blender Object
 * @type {*}
 */
var Blender = (function ($) {
    "use strict";

    var methods = {
        /**
         * method:
         * White + Color = Color
         * Black + Color = Black
         */
        colorOverlay:function (pixelData,i,color) {
            var grayscale = pixelData[i] / 255;
            pixelData[i] = parseInt(color.R * grayscale);
            pixelData[i+1] = parseInt(color.G * grayscale);
            pixelData[i+2] = parseInt(color.B * grayscale);
        }
    };

    /**
     *
     * @param method {Function}
     * @param elImg {HTMLElement}
     * @param color {Object} {r,g,b,a}
     */
    var blender = function (method, elImg, color) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var width = elImg.width,
            height = elImg.height;

        // prepare canvas and image
        canvas.width = width;
        canvas.height = height;
        context.drawImage(elImg, 0, 0);
        var image = context.getImageData(0, 0, width, height);
        var imageData = image.data;

        // blend data
        var pixels = 4 * height * width;
        while (pixels-=4) {
            method(imageData,pixels,color);
        }

        // put back data
        context.putImageData(image,0,0);

        return canvas;
    };

    return {
        colorOverlay:function (image, color) {
            return blender(methods.colorOverlay, image, color);
        }
    }
})(jQuery);