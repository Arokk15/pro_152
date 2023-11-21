AFRAME.registerComponent("left", {
    init: function () {
        left = this.el
        left.setAttribute("geometry", {
            primitive: "triangle",
        })
        left.setAttribute("position", {
            x: -3,
            y: 1,
            z: -5
        })
        left.setAttribute("rotation", {
            x: 0,
            y: 0,
            z: 90
        })
        left.setAttribute("material", {
            color: "black",
            depth: 29,
            vertexA: "3  5"
        })
        left.setAttribute("scale", {
            x: 0.5,
            y: 0.5,
            z: 0
        })

        document.querySelector("#left").addEventListener("click",(e)=>{
            console.log(document.querySelector("#bass").getAttribute("rotation"))
            var bass=document.querySelector("#bass")
            
            bass.setAttribute("rotation",{
                x:0,
                y:bass.getAttribute("rotation").y-45,
                z:0
            })
        })
    }
})
AFRAME.registerComponent("right",{
    init:function(){
        right = this.el
        right.setAttribute("geometry", {
            primitive: "triangle",
        })
        right.setAttribute("position", {
            x: 3,
            y: 1,
            z: -5
        })
        right.setAttribute("rotation", {
            x: 0,
            y: 0,
            z: -90
        })

        right.setAttribute("material", {
            color: "red",
            depth: 29,
            vertexA: "3  5"
        })
        right.setAttribute("scale", {
            x: 0.5,
            y: 0.5,
            z: 0
        })
        this.el.addEventListener("click",(e)=>{
            console.log(document.querySelector("#bass").getAttribute("rotation"))
            var bass=document.querySelector("#bass")
            
            bass.setAttribute("rotation",{
                x:0,
                y:bass.getAttribute("rotation").y+45,
                z:0
            })
        })
    }
})