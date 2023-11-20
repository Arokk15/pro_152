AFRAME.registerComponent("car",{
    schema:{
    },
    init:function(){
        var car_obj="#"+document.querySelector("a-assets").children[0].id
        var car_mtl="#"+document.querySelector("a-assets").children[1].id
        console.log(car_obj)
        console.log(car_mtl)
        this.el.setAttribute("obj-model",{
            obj:car_obj,
            mtl:car_mtl
        })
        this.el.setAttribute("position",{
            x:-5,
            y:0,
            z:0
        })
        this.el.setAttribute("rotation",{
            x:-90,
            y:0,
            z:0
        })
        this.el.setAttribute("scale",{
            x:0.2,
            y:0.2,
            z:0.2
        })


    }

})