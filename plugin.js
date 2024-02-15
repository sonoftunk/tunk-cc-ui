export default class TunkCCUI {
	main() {
		sc.ButtonGui.inject({
			init: function(a, b, c, e, f, g, h) {
				this.parent(a, b, c, e, f, g, h);
				//render the button with newlines
				this.textChild.setMaxWidth(b);
				//if there was newlining, split the text into the icon at full size, and the actual text as small size
				if(this.textChild.textBlock.size.lines.length>1){
					var txt = this.getButtonText();
					var idx = txt.lastIndexOf("]") + 1; //TODO probably will cut off colour codes mid text. Need a better way to sort out text from icon
					var pad = 16;
					this.textChild.setText(txt.substring(0, idx));
					this.textChild2 = new sc.TextGui(this.getButtonText(), {
						speed: ig.TextBlock.SPEED.IMMEDIATE,
						font: sc.fontsystem.smallFont,
						linePadding: -4
					});
					this.textChild2.setAlign(this.buttonType.alignX || ig.GUI_ALIGN.X_CENTER, ig.GUI_ALIGN.Y_CENTER);
					this.textChild2.setPos((this.buttonType.alignXPadding || 0) + pad, 0);
					this.textChild2.setMaxWidth(b - pad);
					this.addChildGui(this.textChild2);
				}
			}
		});
	}
}
