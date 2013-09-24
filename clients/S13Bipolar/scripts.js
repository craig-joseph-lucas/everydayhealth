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
    CuSoClients.S13bilpolarConstructor = function () { 
	
		/**
		* Private values/methods
		*/
		var privateObj = {

			/**
			* sanitize_referrer()
			* 
			* * Purpose: Strips unwanted chars from referrer<br/>
			* * lastModified   03/21/2013<br/>
			* * modifiedBy     gdeane@everydayhealthinc.com<br/>
			*/
			sanitize_referrer: function () {

				// vars
				var r = document.referrer;

				// grab up to first "?", if applicable
				if (r.indexOf('?') !== -1) {
					r = r.substring(0, r.indexOf('?'));
				}

				// remove http: and slashes
				r = r.replace(/.*?:\/\//g, '').replace(/\/$/, '');

				// return sanitized referrer
				return r;

			}

		};

		/**
		* Public values
		*/
		this.location = {
			hash: window.location.hash,
			host: window.location.hostname,
			href: window.location.href,
			protocol: window.location.protocol,
			pathname: window.location.pathname,
			query: window.location.search,
			referrer: privateObj.sanitize_referrer()
		};	
	
	
	};

    /**
    * Inheritable methods.
    *
    * @type {object}
    */
    CuSoClients.S13bilpolarConstructor.prototype = {

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
					// variables
                this.$container = $('.S13bilpolar.dropdown');

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
			this.modules.init();
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
               this.dropdown.init();
            },
			
            /**
             * Object containing physFinder related values/methods.
             * Modified: 06/10/2013
             *
             * @type {object}
             * @author Craig Lucas <clucas@everydayhealthinc.com>
             * @public
            */
            dropdown: {

                /**
                 * Initialization methods for physFinder module.
                 * Modified: 06/10/2013
                 *
                 * @method init
                 * @author Craig Lucas <clucas@everydayhealthinc.com>
                 * @public
                */
                init: function () {							
					// variables
                   this.$container = $('.s13bipolar.dropdown');
				   this.containerValid = this.$container.length > 0 ? true : false;		
				   this.setNextPage();
				   this.bindPageNav();	
                },

                /**
                * Determines and sets next page to show in select dropdown
                * Modified: 06/10/2013
                *
                *
                * @method setNextPage		
                * @author Craig Lucas <clucas@everydayhealthinc.com>
                * @public
                */				
				setNextPage: function () {
					// variables
					var $c = this.$container,
						   numOfOptions,
						   curPath,
						   $options,
						   isMatch = false,
						   wPath = CuSoClients.S13bilpolar.location.pathname;

					$options = $c.find('#navigate option');
					numOfOptions = $options.length;

					// Loop over all the option elements and find current page
					$options.each(function () {		
						curPath = $(this).val();					
						 isMatch = wPath.indexOf(curPath) !== -1 ? true : false; // if window path name matches link
						 
						 // if match lets stop loop and set  the next <option> sibling as selected
						 if (isMatch) {
							$(this).next().attr("selected","selected");
							return false;
						 }
						 
						 
					});
				},
					
				
                /**
                * Binds select dropdown selection to go button
                * Modified: 06/10/2013
                *
                *
                * @method bindPageNav
                * @author Craig Lucas <clucas@everydayhealthinc.com>
                * @public
                */				
				bindPageNav: function () {
					// variables
					var $c = this.$container;				
					
					if (this.containerValid) {
						$c.find('.go').bind('click.go', function () {
							window.location = $c.find("#navigate option:selected").val();
						});
					}
				}
				
				
			}	
				
				
		
		}
    };

    /**
    * Instantiate object.
    *
    * @type {object}
    * @see {@link CuSo.PageFunctionsConstructor}
    * @public
    */
    CuSoClients.S13bilpolar = new CuSoClients.S13bilpolarConstructor();

    // dom ready
    $(function () {

        // page init
        CuSoClients.S13bilpolar.init();

    });

} (jQuery, window));