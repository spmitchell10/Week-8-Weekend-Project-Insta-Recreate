(function() {
    'use strict';

    angular
        .module('instagram')
        .factory('API', function($http){


			return {
			    getImages:()=>{
			    	return $http({
					  method:"GET",
	                  url: "http://instagramcloneclass.herokuapp.com/images",
	                  headers:{X_CSRF_TOKEN: 'stephen'},
                       })
				   },
			    addImage:(data)=>{
                    return $http({
	                    method:"POST",
	                    url: "http://instagramcloneclass.herokuapp.com/image/post",
	                    data: data,
	                    headers:{X_CSRF_TOKEN: 'stephen'},
                   })
			   },

			    getSingleImage:(id) => {
                       return $http({
                            method:"GET",
                            url: `http://instagramcloneclass.herokuapp.com/images/${id}`,
                            headers:{X_CSRF_TOKEN: 'stephen'},
                       })
                   },

                likeImage:(data) => {
                       return $http({
                            method:"POST",
                            url: "http://instagramcloneclass.herokuapp.com/images/vote",
                            data: {imageid:data},
                       })
                   }
			    
		  	};
        });
})();