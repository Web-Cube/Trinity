import { defaults } from "./modules/defaults";
import { forms } from "./modules/forms";
import { modals } from "./modules/modals";
import { map } from "./modules/map";
import { sliders } from "./modules/sliders";
import { thumbnails } from "./modules/thumbnails";
import { wrapSlider } from "./modules/wrapSlider";
import { mobile } from "./modules/mobile";
import { filter } from "./modules/filter";
import { config } from "./config";

var App = () => {};

App.prototype.init = () => {

	defaults.init();
	forms.init();
	modals.init();
	sliders.init();
	map.init();
	thumbnails.init();
	wrapSlider.init();
	mobile.init();
	filter.init();

	config.log('app init')
	
};

export { App };