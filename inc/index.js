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

    Object.prototype.getAttributes = function(){
        var attrs = [];
        for(var attr in this){
            if(this.hasOwnProperty(attr)){
                attrs.push(attr);
            }
        }
        return attrs;
    };

    Object.prototype.toArray = function(){
        var attrs = [];
        for(var attr in this){
            if(this.hasOwnProperty(attr)){
                attrs.push(this[attr]);
            }
        }
        return attrs;
    };
})();

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
        var nameArr = name.split(' ');
        var base = nameArr[0],
            type = nameArr[1],
            patt = nameArr[2];
        if(pattern[patt] && baseColor[base]){
            var oldBase = frog.querySelector('.base');
            var newBase = Blender.colorOverlay($('#frogbase')[0],baseColor[base]);
            newBase.className = 'base';
            frog.replaceChild(newBase,oldBase);

            frog.className = 'frog ' + name;
        }
    };

    document.getElementById('name').addEventListener('input',setFrog);

    // init select
    var $Sels = $('#name-row').find('select');
    var selBaseColor = $Sels[0],
        selPatternColor = $Sels[1],
        selPattern = $Sels[2];

    function fillSelect(sel,opts){
        var tmpl = "<option value={$name}>{$name}</option>";
        sel.innerHTML = tmpl.applyData(opts.toArray());
    }
    fillSelect(selBaseColor,baseColor);
    fillSelect(selPatternColor,patternColor);
    fillSelect(selPattern,pattern);

    $Sels.on('change',function(){
        var name = [$Sels[0].value,$Sels[1].value,$Sels[2].value].join(' ');
        $('#name').val(name);
        setFrog();
        console.log(this.value);
    });

    // blink
    setTimeout(function(){
        zha();
        setTimeout( arguments.callee, 3000 + Math.round( Math.random()*9000 ) );
    }, 6000 + Math.round( Math.random()*6000 ) );

    // init frog
    setTimeout(setFrog,10);
});