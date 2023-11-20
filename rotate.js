AFRAME.registerComponent("rotate",{
    init:function(){
        this.right()
        this.left()
        this.rotate()

    },

    left:function(){
        
        left=document.querySelector("#left")
        left=document.querySelector("#left")
        left.setAttribute("geometry",{
            primitive:"triangle",

        })
        left.setAttribute("position",{
            x:-3,
            y:0,
            z:-5
        })
        left.setAttribute("material",{
            color:"black",
            depth:29,
            vertexA:"3  5"
        })
        left.setAttribute("scale",{
            x:0.5,
            y:0.5,
            z:0
        })
    },

    right:function(){
        right=document.querySelector("#right")
        right.setAttribute("geometry",{
            primitive:"triangle",

        })
        right.setAttribute("position",{
            x:3,
            y:0,
            z:-5
        })
        right.setAttribute("material",{
            color:"black",
            depth:29,
            vertexA:"3  5"
        })
        right.setAttribute("scale",{
            x:0.5,
            y:0.5,
            z:0
        })
    },
    rotate:function(){
        //console.log(document.querySelector("#left"))
        but_left=document.getElementById("left")
        but_left.addEventListener("click",(e)=>{
            console.log("hi")
        })
    }
})