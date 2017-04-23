(function() {
    'use strict';

    angular
        .module('instagram')
        .controller('TableController', function(API) {

        	const vm = this;

        	// Get pictures from DB
            let images = API.getImages();
            images.then(res=>{
                console.log(res);
                vm.images = res.data.images;
            })

            vm.addImage = ((isValid)=>{
                
                if(isValid){
        
                    const newImage = Object.assign({}, vm.image);
                    console.log(newImage);
                    let getNewImage = API.addImage(newImage);
                    getNewImage.then(res =>{
                        console.log(res);
                        vm.images = res;

                    });
                    vm.image = {};
                }
            })
        })
})();