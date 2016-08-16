function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
	$(document).ready(function() {
		$('.button-collapse').sideNav({
			  menuWidth: 300, // Default is 240
			  edge: 'left', // Choose the horizontal origin
			  closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
			}
		);
	});
}
