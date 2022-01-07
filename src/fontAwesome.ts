import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faBomb } from '@fortawesome/free-solid-svg-icons/faBomb';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faChartPie } from '@fortawesome/free-solid-svg-icons/faChartPie';
/**
 * Only register icons we use to display them as SVG
 * See more: https://fontawesome.com/v5.15/how-to-use/on-the-web/advanced/svg-javascript-core
 */
const setupFontAwesome = () => {
    library.add(faHome, faBars, faBomb, faPlus, faChartPie);

    // Replace any existing <i> tags with <svg> and set up a MutationObserver to
    // continue doing this as the DOM changes.
    dom.watch();
};

export default setupFontAwesome;
