/**
 * Date: 11-11-6
 * Time: AM 02:11
 */

(function() {
	var applyArray = function(tmpl, arr) {
		var result = '';
		while (arr.length) {
			result += tmpl.applyData(arr.shift());
		}
		return result;
	};
	var applyObject = function(tmpl, obj) {
		return tmpl.replace(/{\$(\w+)}/g, function(x, key) {
			return obj.hasOwnProperty(key) ? obj[key] : x;
		});
	};
	String.prototype.applyData = function(obj) {
		return obj instanceof Array ?
				applyArray(this, obj) :
				applyObject(this, obj);
	};
})();

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
	Bulbus:{patternID:"52", name:"Bulbus", level:"15"}
};

function zha() {
	this.open = !this.open;
	var overlay = document.querySelector('.overlay');
	overlay.style.left = this.open ? '-30px' : '-542px';
	if (!this.open) {
		setTimeout(zha, 100);
	}
}


var Frog = (function(){

	var frogTmpl = '<div id="frog" class="frog {$type}">' +
						'<div class="base"></div><div class="pattern"></div><div class="overlay"></div></div>';

	var _Frog = function(cfg){
		this.cfg = $.extend({
			type:'Green Callaina Anura',
			container:null,
			posX:0,
			posY:0
		},cfg);

		this._pregnant(this.cfg);
	};

	_Frog.prototype = {
		// make HTMLElements and bind inner reference(this.overlay,this.base, etc.)
		_pregnant: function(cfg){
			// Generate Element
			this.el = $(frogTmpl.applyData({type:cfg.type}))[0];

			// Bind refs
			this.elBase = this.el.firstChild;
			this.elPattern = this.elBase.nextSibling;
			this.elOverlay = this.elPattern.nextSibling;
		},
		_born:function(){
			this.startBlink();
		}
	};

	return _Frog;

})();

$(function(){

    var nameInput = document.getElementById('name');
    var frog = document.getElementById('frog');

    window.setFrog = function(){
        var name = nameInput.value;
        var base = name.split(' ')[0],
            type = name.split(' ')[1],
            patt = name.split(' ')[2];
        if(pattern[patt] && baseColor[base]){
            var oldBase = frog.querySelector('.base');
            var newBase = Blender.colorOverlay($('#frogbase')[0],baseColor[base]);
            newBase.className = 'base';
            frog.replaceChild(newBase,oldBase);

            frog.className = 'frog ' + name;
        }
    };

    document.getElementById('name').addEventListener('input',setFrog);

    setTimeout(function(){
        zha();
        setTimeout( arguments.callee, 3000 + Math.round( Math.random()*9000 ) );
    }, 6000 + Math.round( Math.random()*6000 ) );

    setTimeout(setFrog,0);
});