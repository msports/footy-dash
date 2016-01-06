/**
 * This is an example of a "component" directive which encapsulates a template.
 */
import { element } from 'angular';

const templateUrl = require('js/features/common/ui/footer.tpl.html');

class FooterDirective {
    constructor() {
		this.templateUrl = templateUrl;
        this.restrict = 'E';
        this.replace = true;
    }

    link() { }
}

export default FooterDirective;

