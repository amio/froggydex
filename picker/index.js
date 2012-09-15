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

    window.setFrog = function () {
        var name = nameInput.value;
        var nameArr = name.split(' ');
        var baseC = nameArr[0],
            pattC = nameArr[1],
            patt = nameArr[2];

        if(baseColor[baseC]){
            var oldBase = frog.querySelector('.base'),
                baseImageUrl = '../resources/frogs/frog_base_256.png';
            Blender.colorOverlay(baseImageUrl, baseColor[baseC],function(newBase){
                newBase.className = 'base';
                frog.replaceChild(newBase, oldBase);
            });
        }

        if (patternColor[pattC] && pattern[patt]) {
            var oldPattern = frog.querySelector('.pattern');
            var newPatternImageUrl = '../resources/frogs/frog_{$id}_256.png'.applyData({
                id: pattern[patt].patternID
            });
            Blender.colorOverlay(newPatternImageUrl, patternColor[pattC],function(newPattern){
                newPattern.className = 'pattern';
                frog.replaceChild(newPattern, oldPattern);
            });
        }

        frog.className = 'frog ' + name;
        setUrlBySel();
    };

    document.getElementById('name').addEventListener('input',setFrog);

    // init select
    var $Sels = $('#name-row').find('select');
    var selBaseColor = $Sels[0],
        selPatternColor = $Sels[1],
        selPattern = $Sels[2];

    function fillSelect(sel,opts,tmpl){
        sel.innerHTML = tmpl.applyData(opts.toArray().sort(function(a,b){
            a = a.level && parseInt(a.level) || a.name;
            b = b.level && parseInt(b.level) || b.name;
            return a == b ? 0 : (a > b ? 1 : -1);
        }));
    }
    fillSelect(selBaseColor,baseColor,'<option value={$name}>{$name}</option>');
    fillSelect(selPatternColor,patternColor,'<option value={$name}>{$name}</option>');
    fillSelect(selPattern,pattern,'<option value={$name}>{$level}. {$name}</option>');

    $Sels.on('change',function(){
        var name = [$Sels[0].value,$Sels[1].value,$Sels[2].value].join(' ');
        $('#name').val(name);
        setFrog();
    });

    var setSelByName = function(name){
        var names = name.split(' ');
        $Sels[0].value = names[0];
        $Sels[1].value = names[1];
        $Sels[2].value = names[2];
    };
    var setUrlBySel = function(){
        window.location.hash = [$Sels[0].value, $Sels[1].value, $Sels[2].value].join('-');
    };

    // set sel and name by url
    var frogname = window.location.hash.substring(1).replace(/-/g,' ');
    var isNameIllegal = function(name){
        var parts = name.split(' ');
        return !!(baseColor[parts[0]] && patternColor[parts[1]] && pattern[parts[2]]);
    };
    if(isNameIllegal(frogname)){
        setSelByName(frogname);
        nameInput.value = frogname;
    }

    // init frog
    setFrog();

    // blink
    setTimeout(function(){
        zha();
        setTimeout( arguments.callee, 3000 + Math.round( Math.random()*9000 ) );
    }, 6000 + Math.round( Math.random()*6000 ) );

});