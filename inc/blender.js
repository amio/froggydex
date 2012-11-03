var baseColor = {
    Green:{colorID:"0", name:"Green", R:"129", G:"218", B:"0"},
    Cocos:{colorID:"1", name:"Cocos", R:"117", G:"63", B:"0"},
    Beige:{colorID:"2", name:"Beige", R:"166", G:"142", B:"80"},
    Orange:{colorID:"3", name:"Orange", R:"255", G:"168", B:"0"},
    Red:{colorID:"4", name:"Red", R:"255", G:"0", B:"0"},
    Lime:{colorID:"5", name:"Lime", R:"210", G:"255", B:"0"},
    Azure:{colorID:"6", name:"Azure", R:"0", G:"192", B:"255"},
    Violet:{colorID:"7", name:"Violet", R:"255", G:"0", B:"109"},
    Emerald:{colorID:"8", name:"Emerald", R:"0", G:"226", B:"16"},
    Tangelo:{colorID:"9", name:"Tangelo", R:"255", G:"108", B:"0"},
    Yellow:{colorID:"10", name:"Yellow", R:"255", G:"255", B:"0"},
    Aqua:{colorID:"11", name:"Aqua", R:"29", G:"255", B:"251"},
    Purple:{colorID:"12", name:"Purple", R:"95", G:"0", B:"197"},
    Golden:{colorID:"13", name:"Golden", R:"246", G:"197", B:"0"},
    Royal:{colorID:"14", name:"Royal", R:"174", G:"0", B:"205"},
    Blue:{colorID:"15", name:"Blue", R:"0", G:"90", B:"255"},
    Pink:{colorID:"16", name:"Pink", R:"255", G:"0", B:"255"},
    Black:{colorID:"17", name:"Black", R:"40", G:"40", B:"40"},
    Maroon:{colorID:"18", name:"Maroon", R:"183", G:"0", B:"0"},
    White:{colorID:"19", name:"White", R:"255", G:"255", B:"255"},
    Marine:{colorID:"20", name:"Marine", R:"0", G:"209", B:"128"},
    Olive:{colorID:"21", name:"Olive", R:"72", G:"122", B:"0"},
    Glass:{colorID:"22", name:"Glass", R:"213", G:"226", B:"226"}
};

var patternColor = {
    Callaina:{colorID:"0", name:"Callaina", R:"13", G:"229", B:"255"},
    Picea:{colorID:"1", name:"Picea", R:"0", G:"0", B:"0"},
    Caelus:{colorID:"2", name:"Caelus", R:"0", G:"138", B:"255"},
    Albeo:{colorID:"3", name:"Albeo", R:"235", G:"235", B:"235"},
    Carota:{colorID:"4", name:"Carota", R:"255", G:"78", B:"0"},
    Aurum:{colorID:"5", name:"Aurum", R:"255", G:"228", B:"0"},
    Folium:{colorID:"6", name:"Folium", R:"150", G:"255", B:"0"},
    Bruna:{colorID:"7", name:"Bruna", R:"88", G:"56", B:"15"},
    Pruni:{colorID:"8", name:"Pruni", R:"75", G:"15", B:"70"},
    Muscus:{colorID:"9", name:"Muscus", R:"67", G:"255", B:"0"},
    Ceres:{colorID:"10", name:"Ceres", R:"241", G:"192", B:"171"},
    Tingo:{colorID:"11", name:"Tingo", R:"159", G:"0", B:"0"},
    Floris:{colorID:"12", name:"Floris", R:"255", G:"3", B:"157"},
    Viola:{colorID:"13", name:"Viola", R:"174", G:"0", B:"255"},
    Cafea:{colorID:"14", name:"Cafea", R:"60", G:"38", B:"9"},
    Chroma:{colorID:"15", name:"Chroma", R:"1", G:"1", B:"1"}
};

var pattern = {
    Anura:{patternID:"0", name:"Anura", level:"1"},
    Partiri:{patternID:"1", name:"Partiri", level:"5"},
    Crustalli:{patternID:"2", name:"Crustalli", level:"2"},
    Velatus:{patternID:"3", name:"Velatus", level:"2"},
    Clunicula:{patternID:"4", name:"Clunicula", level:"3"},
    Marmorea:{patternID:"5", name:"Marmorea", level:"3"},
    Mixtus:{patternID:"6", name:"Mixtus", level:"6"},
    Nasus:{patternID:"7", name:"Nasus", level:"5"},
    Stellata:{patternID:"8", name:"Stellata", level:"7"},
    Puncti:{patternID:"9", name:"Puncti", level:"3"},
    Zebrae:{patternID:"10", name:"Zebrae", level:"4"},
    Calyx:{patternID:"11", name:"Calyx", level:"6"},
    Nimbilis:{patternID:"12", name:"Nimbilis", level:"8"},
    Roboris:{patternID:"13", name:"Roboris", level:"5"},
    Adamantis:{patternID:"14", name:"Adamantis", level:"4"},
    Africanus:{patternID:"15", name:"Africanus", level:"4"},
    Serpentis:{patternID:"16", name:"Serpentis", level:"7"},
    Bovis:{patternID:"17", name:"Bovis", level:"5"},
    Viduo:{patternID:"18", name:"Viduo", level:"6"},
    Spinae:{patternID:"19", name:"Spinae", level:"7"},
    Cesti:{patternID:"20", name:"Cesti", level:"8"},
    Sagitta:{patternID:"21", name:"Sagitta", level:"9"},
    Amfractus:{patternID:"22", name:"Amfractus", level:"9"},
    Ornatus:{patternID:"23", name:"Ornatus", level:"10"},
    Sol:{patternID:"24", name:"Sol", level:"10"},
    Lucus:{patternID:"25", name:"Lucus", level:"11"},
    Ligo:{patternID:"26", name:"Ligo", level:"11"},
    Corona:{patternID:"27", name:"Corona", level:"12"},
    Arbor:{patternID:"28", name:"Arbor", level:"12"},
    Ocularis:{patternID:"29", name:"Ocularis", level:"13"},
    Insero:{patternID:"30", name:"Insero", level:"13"},
    Biplex:{patternID:"31", name:"Biplex", level:"14"},
    Pingo:{patternID:"32", name:"Pingo", level:"14"},
    Calvaria:{patternID:"33", name:"Calvaria", level:"15"},
    Floresco:{patternID:"34", name:"Floresco", level:"15"},
    Magus:{patternID:"35", name:"Magus", level:"16"},
    Veru:{patternID:"36", name:"Veru", level:"16"},
    Tribus:{patternID:"37", name:"Tribus", level:"3"},
    Lanterna:{patternID:"38", name:"Lanterna", level:"3"},
    Glacio:{patternID:"39", name:"Glacio", level:"3"},
    Ludo:{patternID:"40", name:"Ludo", level:"4"},
    Marinus:{patternID:"41", name:"Marinus", level:"5"},
    Dextera:{patternID:"42", name:"Dextera", level:"6"},
    Trivium:{patternID:"43", name:"Trivium", level:"14"},
    Obaro:{patternID:"44", name:"Obaro", level:"10"},
    Bulla:{patternID:"45", name:"Bulla", level:"8"},
    Orbis:{patternID:"46", name:"Orbis", level:"9"},
    Vinaceus:{patternID:"47", name:"Vinaceus", level:"12"},
    Persona:{patternID:"48", name:"Persona", level:"11"},
    Signum:{patternID:"49", name:"Signum", level:"16"},
    Gyrus:{patternID:"50", name:"Gyrus", level:"13"},
    Geminus:{patternID:"51", name:"Geminus", level:"7"},
    Bulbus:{patternID:"52", name:"Bulbus", level:"15"},
    Templum:{patternID:"53", name:"Templum", level:"17"},
    Papilio:{patternID:"54", name:"Papilio", level:"17"},
	Pluma:{patternID:"55", name:"Pluma", level:"17"},
	Cornus:{patternID:"56", name:"Cornus", level:"18"},
	Volta:{patternID:"57", name:"Volta", level:"18"},
	Flecto:{patternID:"58", name:"Flecto", level:"18"},
	Figularis:{patternID:"59", name:"Figularis", level:"19"},
	Aceris:{patternID:"60", name:"Aceris", level:"19"},
	Lunaris:{patternID:"61", name:"Lunaris", level:"19"},
	Tabula:{patternID:"62", name:"Tabula", level:"20"},
	Pictoris:{patternID:"63", name:"Pictoris", level:"20"},
	Shelbus:{patternID:"64", name:"Shelbus", level:"20"},
	Skeletos:{patternID:"65", name:"Skeletos", level:"21"},
	Pyramis:{patternID:"66", name:"Pyramis", level:"21"},
	Lotus:{patternID:"67", name:"Lotus", level:"21"},
	Spira:{patternID:"68", name:"Spira", level:"22"},
	Planeta:{patternID:"69", name:"Planeta", level:"22"},
	Mazeus:{patternID:"70", name:"Mazeus", level:"22"},
	Palma:{patternID:"71", name:"Palma", level:"23"},
	Coclearis:{patternID:"72", name:"Coclearis", level:"23"},
	Mustacium:{patternID:"73", name:"Mustacium", level:"23"},
	Axis:{patternID:"74", name:"Axis", level:"24"},
	Igneous:{patternID:"75", name:"Igneous", level:"24"},
	Infinitas:{patternID:"76", name:"Infinitas", level:"24"},
	Nodare:{patternID:"77", name:"Nodare", level:"25"},
	Dimidius:{patternID:"78", name:"Dimidius", level:"25"},
	Scutulata:{patternID:"79", name:"Scutulata", level:"25"},
	Arcus:{patternID:"80", name:"Arcus", level:"26"},
	Botulus:{patternID:"81", name:"Botulus", level:"26"},
	Americano:{patternID:"82", name:"Americano", level:"26"},
	Symphonia:{patternID:"83", name:"Symphonia", level:"27"},
	Vicis:{patternID:"84", name:"Vicis", level:"27"},
	Janus:{patternID:"85", name:"Janus", level:"27"},
	Levar:{patternID:"86", name:"Levar", level:"28"},
	Gemma:{patternID:"87", name:"Gemma", level:"28"},
	Favus:{patternID:"88", name:"Favus", level:"28"},
	Tessera:{patternID:"89", name:"Tessera", level:"29"},
	Frondis:{patternID:"90", name:"Frondis", level:"29"},
	Pistrix:{patternID:"91", name:"Pistrix", level:"29"},
	Nebula:{patternID:"92", name:"Nebula", level:"30"},
	Fractus:{patternID:"93", name:"Fractus", level:"30"},
	Hennae:{patternID:"94", name:"Hennae", level:"30"},
	Pulvillus:{patternID:"95", name:"Pulvillus", level:"31"},
	Quilta:{patternID:"96", name:"Quilta", level:"31"},
	Foramen:{patternID:"97", name:"Foramen", level:"31"},
	Emblema:{patternID:"98", name:"Emblema", level:"32"},
	Fortuno:{patternID:"99", name:"Fortuno", level:"32"}
};


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
            // return when this is a transparent pixel
            if( pixelData[i+3] == 0 ) return;

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
    var blendFactory = function (method, elImg, color) {
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
        colorOverlay:function (imageUrl, color,callback) {
            var image = new Image();
            image.onload = function(){
                var resultCanvas = blendFactory(methods.colorOverlay, image, color);
                callback(resultCanvas);
            };
            image.src = imageUrl;
        }
    }
})(jQuery);