EkstepEditor.basePlugin.extend({
	mic:'data:image/gif;base64,R0lGODlhMgAyAKUzAJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6mpqaqqqqurq6ysrK2tra6urrGxsbKysrOzs7W1tba2trm5ubq6ury8vL29vb6+vr+/v8DAwMHBwcbGxsrKys7Ozs/Pz9HR0dLS0tPT09TU1Nra2tzc3N7e3t/f3+Dg4OLi4uTk5OXl5efn5////////////////////////////////////////////////////yH5BAEUAD8ALAAAAAAyADIAAAb+wJ9wSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEw+ykaeUxlpMiQOC8e6KDMMBIKBQjIfihQDAYICBTJ9Px0IAoKCBiuHiYEBeY6QiowClX2Ji4MGLJadjaCbl56kc5yMAQWoax0HogCfZCcdKkIdCaIBBi1CIhyGXh8XHUIlC6IDA0MEEy5fKA8QQw27eQ4gQjEGB2EECKgVBQYE20IfDxVhHA4RRDKuLQUIuGEKChZILAcNGWNaHGDAgAQRGB8COJhQ5oUEBg0GLHig6MEBDX1IUAhAgIABAxfuHeqGAMMhIwcUfDhZBMGCYyyHCIiwIeaQEB1S2NzJs6cKz59AgwodSvRKEAA7',
	mic_slash:'data:image/gif;base64,R0lGODlhMgAyAMZgAPsDQ/oERPsFRPkGRfsGRfoHRvcJRvsIR/sJR/sKSPsLSfsNSvsQTfsTT/sdVuIqWvwjW9w0X/wyZtQ/ZuQ7Z/w1addCaMtObuJNdMFdd/xOe8RgesVhe8ZifPxUf9Vxi6x+iv1ojqSLkaSMkv10l+p9maqSmJmZmZqamq2Vm5ubm5ycnJ2dneqGn/2BoZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6mpqf2QrKqqqqurq6ysrK2tra6urv2Zs7GxsbOzs7W1tba2trm5ubq6ury8vL29vb6+vr+/v/6twsDAwMHBwcbGxsrKys7Ozv7A0NHR0dLS0tPT09TU1P7O2tra2t7e3t/f3+Dg4OLi4uTk5OXl5efn5//m7f///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEUAH8ALAAAAAAyADIAAAf+gH+Cg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goZhfVl+ijFEOABqnXk9JU4Y6DQAADKJSMDMxNTiEUQq1CCShXjArKiorND2Cs7UKUaJONCso1yovXlG0AA06p0gyKtfXMCXB3tLhMtYoyhsEtQ3r7OQoIBEDtQngp4LiyIl4UItAhSX/BgVEMaFWgBYJCYkbMSEAgAEbsERUaCJCLQMZXmjc+AeJhVoDMpyAMVLUFCRX/nzBUAtABnNZBDk54uWTEiFI/oSoeeHaihWDWPjQ8olKjh1AanZItgIHE0FdYMQIxYJDgVohgryAweKqICU5goT6sA+AB1OFXlr+yfJCRsxPQBbUomDKEJYYN4iAclFLgIUUNqAQ4qIEBQ4fn74MBbulh40bK2rkGJcjRpHIHmqG6AvlBwoWLGDAEHK3U5QKNV0YyipjSKgoEGodAIIoBg0loLjVYsAbkYwaQT8RVqdIBQ8jwSVA8JeoCZIqJLNr3869u/fv4MOLH78pEAA7',
	mic_animate:'data:image/gif;base64,R0lGODlhMgAyAMZQAPsDQ/sJR/sNSvsRTfscVfwmXfwyZvxBcfxMevxSfvxWgfxXgv1tkv1ylpmZmZqampubm/1+npycnJ2dnf2BoZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp/2PrKmpqaqqqqurq6ysrP2Ur62tra6urrGxsbKysv2ctbOzs7W1tba2trm5uf6lvLq6uv6nvf6ovry8vL29vb6+vr+/v8DAwMHBwcbGxsrKyv68zf6+zs7Ozs/Pz9HR0dLS0tPT09TU1Nra2v7R3Nzc3N7e3t/f3+Dg4P7Z4+Li4v7c5eTk5OXl5efn5//l7P/q8P///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJFAB/ACwAAAAAMgAyAAAH/oB/goOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SHTTk0P6WIPhYZFxseq4VNFhIQEBIaI7ODOBoSD8IQFU29fzMYEMLCFkS9MMnBD7nOsxEAycvDzhGlMADZyswQFkUAMKTh4tvN5wCj4OHa5Obh6aEI6/TMFe8Iogbsu9DOgT0AA0L9mCFkXoZ2DywYCYdDhjFPNVTMCNdjQzsJEtZNKHHkExAQIdZ1eJjLg41wTCxcCDUBwzsAJypYmPAyXA0QJ0LJ8CBiHYAmNwEYqYBBiCgNGlAYNVrkQgcWo4xc4MCBh9ElNR54KFEqyQgOHSRsAKEMxIUWNr14mHgwYYIFCyqcHvsTE8OKvYUuaKgBmBCGDTMKD4Ig4oViQTdmBHlMubLly5gza97MuTOjQAAh+QQJFAB/ACwAAAAAMgAyAAAH/oB/goOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGimjoNBgACBg06o4RPDQCxTTk0P7EADU+jLrcAPhYZFxsevS6hsLdNFhIQEBIaI70Nn8i3OBoSD9oQFU3Snby9ADMYENraFkTixppP4rHk2Q/O6e+6mdW95Obb9eLTmd7BK3cO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',
	info:null,
	create_email : false,
	final_transcript : '',
	recognizing : false,
	ignore_onend : false,
	start_timestamp:undefined,
	current_style:undefined,
    initialize: function() {
        var $btn = jQuery('<img style="border: 1px solid gray;border-radius: 25px; position:absolute; cursor:pointer;" src="'+this.mic+'" id="speechToText"/>').appendTo('html');
		jQuery(document).on("click", function () {
			var isVisible = jQuery("#authoringTextEditor").is(":visible");
			if(!isVisible){
				$btn.hide();
				if (this.recognizing) {
					this.recognition.stop();
					return;
				}
			}else{
				$btn.show();
				var $textarea = jQuery("#authoringTextEditor");
				var teLeft = $textarea.offset().left + $textarea.outerWidth();
				var teTop  = $textarea.offset().top;
					$btn.offset({ top: teTop, left: teLeft });
			}
		})
		var that = this;
		jQuery(document).on("click","#speechToText",function(e){
			that.startButton(e);
		});
		if (!('webkitSpeechRecognition' in window)) {
		  upgrade();
		} else {
		  this.recognition = new webkitSpeechRecognition();
		  this.recognition.continuous = true;
		  this.recognition.interimResults = true;
		  this.recognition.onstart = function() {
			that.recognizing = true;
			jQuery("#speechToText").attr('src',that.mic_animate);
		  };

		  this.recognition.onerror = function(event) {
			if (event.error == 'no-speech') {
			  jQuery("#speechToText").attr('src',that.mic);
			  that.ignore_onend = true;
			}
			if (event.error == 'audio-capture') {
			   jQuery("#speechToText").attr('src',that.mic);
			  that.ignore_onend = true;
			}
			if (event.error == 'not-allowed') {
			  if (event.timeStamp - start_timestamp < 100) {
				console.log('blocked');
			  } else {
				console.log('denied');
			  }
			  that.ignore_onend = true;
			}
		  };

		  this.recognition.onend = function() {
			that.recognizing = false;
			if (that.ignore_onend) {
			  return;
			}
			jQuery("#speechToText").attr('src',that.mic);
			if (!that.final_transcript) {
			  console.log('info_start');
			  return;
			}
		  };
		  this.recognition.onresult = function(event) {
			for (var i = event.resultIndex; i < event.results.length; ++i) {
			  if (event.results[i].isFinal) {
				var curText = jQuery('#authoringTextEditor').val();
				var final_text = '';
				var final_transcript = event.results[i][0].transcript;
				if (curText && final_transcript){
					final_text = curText + ' ' + linebreak(final_transcript)
				}else if(final_transcript){
					final_text = linebreak(final_transcript);
				}
				jQuery('#authoringTextEditor').val(jQuery.trim(final_text));
			  }
			}
		  };
		}

		function upgrade() {
		  console.log('You need to upgrade your browser to use this feature.');
		}

		var two_line = /\n\n/g;
		var one_line = /\n/g;
		function linebreak(s) {
		  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
		}

		var first_char = /\S/;
		function capitalize(s) {
		  return s.replace(first_char, function(m) { return m.toUpperCase(); });
		}
    },
    newInstance: function() {
        var props = this.convertToFabric(this.attributes);
        this.editorObj = new fabric.Circle(props);
        if (this.editorObj) this.editorObj.setStroke(props.stroke);
    },
    onConfigChange: function(key, value) {

    },
	startButton:function (event) {
		if (this.recognizing) {
			this.recognition.stop();
			return;
		}
		this.final_transcript = '';
		this.recognition.lang = 'en-GB';//select_dialect.value;
		this.recognition.start();
		this.ignore_onend = false;
		this.final_text = jQuery('#authoringTextEditor').val();
		jQuery("#speechToText").attr('src',this.mic_slash);
		this.start_timestamp = event.timeStamp;
	}
});
