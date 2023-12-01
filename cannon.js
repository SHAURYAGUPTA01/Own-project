AFRAME.registerComponent("cannon", {
    schema: {
        modelRef: { type: "string", default: "./assets/cannon.glb" }
    },
    init : function(){
      this.el.setAttribute("obj-model", this.data.modelRef);
      position = { x: 0, y: 0, z: -20 };
      this.el.setAttribute("position", position);
    }
})