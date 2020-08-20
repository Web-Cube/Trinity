import { defaults } from "./modules/defaults";
import { forms } from "./modules/forms";
import { modals } from "./modules/modals";
import { sliders } from "./modules/sliders";
import { thumbnails } from "./modules/thumbnails";
import { wrapSlider } from "./modules/wrapSlider";
import { mobile } from "./modules/mobile";
import { amount } from "./modules/amount";
import { filter } from "./modules/filter";
import { quiz } from "./modules/quiz";
import { config } from "./config";

var App = () => {};

App.prototype.init = () => {

	defaults.init();
	forms.init();
	modals.init();
	sliders.init();
	thumbnails.init();
	wrapSlider.init();
	mobile.init();
	amount.init();
	filter.init();
	quiz.init();

	config.log('app init')
	
};

export { App };