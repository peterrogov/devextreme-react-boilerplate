import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faHome, faBomb, faPlus } from '@fortawesome/free-solid-svg-icons';

/**
 * Only register icons we use to display them as SVG
 * See more: https://fontawesome.com/v5.15/how-to-use/on-the-web/advanced/svg-javascript-core
 */
export const setupFontAwesome = () => {
    library.add(faHome, faBars, faBomb);
    library.add(faPlus);

    // Replace any existing <i> tags with <svg> and set up a MutationObserver to
    // continue doing this as the DOM changes.
    dom.watch()
}