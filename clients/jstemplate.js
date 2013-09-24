/**
* @file Scripts specific to Custom Solutions.
* Created:  06/10/2013
* Modified: 06/10/2013
*/

/**
* CuSo
* @namespace
* @type {object}
* @global
* @public
*/
var CuSoClients = CuSoClients || {};

/**
* Immediately-Invoked Function Expression.
*
* @function
* @param {object} $ - Global jQuery object.
*/
(function ($) {

    // strict js
    'use strict';

    /**
    * Creates an instance of functionsConstructor.
    * Modified: 06/10/2013
    *
    * @constructor
    * @author Craig Lucas <clucas@everydayhealthinc.com>
    */
    CuSoClients.X13dcConstructor = function () { };

    /**
    * Inheritable methods.
    *
    * @type {object}
    */
    CuSoClients.X13dcConstructor.prototype = {

        /**
        * Initialization methods.
        * Modified: 06/10/2013
        *
        * @method init
        * @author Craig Lucas <clucas@everydayhealthinc.com>
        * @public
        */
        init: function () {

            // set default values
            this.setDefaultValues();

			// initialize object setups
	        this.objectInit();

        },

        /**
        * Set default values.
        * Modified: 06/10/2013
        *
        * @method setDefaultValues
        * @author Craig Lucas <clucas@everydayhealthinc.com>
        * @public
        */
        setDefaultValues: function () {

			// the body element
	        this.$body = $('body');
	        
            // site data
            this.data = this.$body.data();

        },
		/**
		* Initialize objects.
		* Modified: 06/10/2013
		*
		* @method objectInit
		* @author Craig Lucas <clucas@everydayhealthinc.com>
		* @public
		*/
		objectInit: function () {
			
		},
		
        /**
         * Object containing the clients modules values/methods.
         * Modified: 06/10/2013
         *
         * @type {object}
         * @author Craig Lucas <clucas@everydayhealthinc.com>
         * @public
        */
        modules: {
            /**
             * Initialization methods for the client modules.
             * Modified: 06/10/2013
             *
             * @method init
             * @author Craig Lucas <clucas@everydayhealthinc.com>
             * @public
            */
            init: function () {
               this.modules.init();
            },
			
            /**
             * Object containing physFinder related values/methods.
             * Modified: 06/10/2013
             *
             * @type {object}
             * @author Craig Lucas <clucas@everydayhealthinc.com>
             * @public
            */
            physFinder: {

                /**
                 * Initialization methods for physFinder module.
                 * Modified: 06/10/2013
                 *
                 * @method init
                 * @author Craig Lucas <clucas@everydayhealthinc.com>
                 * @public
                */
                init: function () {
                   this.$submitBtn = $('.')
                },
				
                /**
                * Binds form submit to physFinder module
                * Modified: 06/10/2013
                *
                *
                * @method bindFormSubmit
                * @author Craig Lucas <clucas@everydayhealthinc.com>
                * @public
                */				
				bindFormSubmit: function () {
				
				},
				
				
				
		
		},	

 
    };

    /**
    * Instantiate object.
    *
    * @type {object}
    * @see {@link CuSo.PageFunctionsConstructor}
    * @public
    */
    CuSoClients.X13dc = new CuSoClients.X13dcConstructor();

    // dom ready
    $(function () {

        // page init
        CuSoClients.X13dc.init();

    });

} (jQuery, window));