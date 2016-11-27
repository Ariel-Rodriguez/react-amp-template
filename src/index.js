import Core from './core';
import customScripts from './core/customScripts';

// CJS singleton instance.
// TODO: find an elegant way pattern for it.
export const core = new Core();

/**
 * Creates a Promise and fulfills this with a string that contains a valid
 * AMP HTML document stemmed from server side rendering of given component.
 * The component is allowed to contain childrens with custom AMP elements.
 * @param {ReactElement} component - The component root to render into body.
 * @param {Object} config - required and contains few optional
 * parameters for AMP template.
 * @returns {Promise[string]} - String that contains the static markup
 */
export const renderToStaticMarkup = core.render;

/**
* Calls for render and writes the content into disc.
* @param {String} output path.
* @param {ReactElement} component - The component root to render into body.
* @param {Object} config - required and contains few optional
* parameters for AMP template.
* @returns {Promise}
*/
export const renderToFile = core.renderToFile;

/**
* Handy interface to register an amp custom-script that will be appended into
* document's head. It wont register more than once a same script.
* @param {String|Array(String|[Array])} - Pass the amp script name, or an array
* that first element tells the name and the second element tells its version.
* optionally you can pass a list that holds the previous parameters.
* Valid params: 'amp-script' | ['amp-script', '0.1'] |
* [ 'amp-script-x', ['amp-script-y','0.1'], 'amp-script-z', ... ]
* If the script exists already, only the newer will precede.
*/
export const scripts = customScripts;
