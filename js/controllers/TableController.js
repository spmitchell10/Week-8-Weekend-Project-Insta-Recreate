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

            // Post a picture 

            vm.addImage = ((isValid)=>{
                
                if(isValid){
        
                    const newImage = Object.assign({}, vm.image);
                    console.log(newImage);
                    let getNewImage = API.addImage(newImage);
                    getNewImage.then(res =>{
                        console.log(res);
                        let images = API.getImages();
                            images.then(res=>{
                                console.log(res);
                                vm.images = res.data.images;
            })

                    });
                    vm.image = {};
                }
            })

            // Get a single image

            vm.singleImage = ((id)=>{
                let getSingleImage = API.getSingleImage(id);
                getSingleImage.then(res => {
                    console.log(res);
                    vm.currentImage = res.data;
                    $('#myUserModal').modal('show')
                    
                })
            })

            // Like a picture

            vm.likeImage = (item=>{
                let image = API.likeImage(item._id);
                image.then(res=>{
                    console.log(res);
                    item.likes = res.data.data.likes+1;
                })
            })
        })
})();

