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
               this.physFinder.init();
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
				
					// variables
                   this.$container = $('.x13dc.phys-finder');
				   this.formHTML = '<p class="submit"><input type="text" maxlength="5" id="zip" name="zip" placeholder="Enter ZIP" class="zip"><a class="find">GO</a><div id="x13dcTracker" />';
				   this.containerValid = this.$container.length > 0 ? true : false;
				   this.trackingPixel = '<img src="https://view.atdmt.com/DWC/view/466981172/direct/01/" style="display:none;" />';
				   
				   this.bindFormHtml();
				   this.bindFormSubmit();
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
				bindFormHtml: function () {
					if (this.containerValid) {
						this.$container.find('.content').append(this.formHTML);
					}
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
				   
				   // variables
					var $c = this.$container,
						  $zip,
						   _self = this,
						   v,
							isValid = false;
						 
					if (this.containerValid) {
						 $zip = $c.find('#zip');
						$c.find('.find').bind('click.find', function () {
							v = $zip.val();
							isValid = _self.validateZip(v)
							if (isValid) {
								$zip.removeClass('error');
								$c.find('#x13dcTracker').html(_self.trackingPixel);
								setTimeout(function() {
									_self.locatePhysician(v);
								}, 1000);								 
							}
							else {
								$zip.addClass('error');
							}
						});

					}				
				},	
				
                /**
                * Binds form submit to physFinder module
                * Modified: 06/10/2013
                *
                *
                * @method locatePhysician
				* @param {string} zip the zip code entered.				
                * @author Craig Lucas <clucas@everydayhealthinc.com>
                * @public
                */				
				locatePhysician: function (zip) {
				  var wUrl = 'http://everydayhealth.com';  //'https://www.xiaflex.com/doctor-locator-results.html?action=Map&radius=10&zip='+zip+'&s=ed';
				  window.open(wUrl, '_blank');
				},	

				/***
				* validateEmail()
				*
				* * Purpose: Validates zipcode and returns true/false<br/>
				* * lastModified   02/06/2013<br/>
				* * modifiedBy     gdeane@everydayhealthinc.com<br/>
				*
				* @param email string, email address to validate
				*/
				validateZip: function (zip) {
					// regex
					var reg = /^(?!0{5})(\d{5})(?!-?0{4})(|-\d{4})$/;

					// result
					return reg.test(zip);

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
    CuSoClients.X13dc = new CuSoClients.X13dcConstructor();

    // dom ready
    $(function () {

        // page init
        CuSoClients.X13dc.init();

    });

} (jQuery, window));