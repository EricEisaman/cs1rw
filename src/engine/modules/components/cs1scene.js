import { player } from "./player";
import { follow } from "./follow";
import { cs1cam } from "./cs1cam";

import { jump } from "./jump";
import { gltfInstances} from "./gltf-instances";
import { trail } from "./trail";

export const cs1scene = (()=>{
  

AFRAME.registerComponent('cs1scene', {
  schema: {

  },
  
  init: function(){
    
    
    
  }
  
});
  

window.CS1 = {};
window.CS1.onReady = function(cb){
  const f = ()=>{
    setTimeout( ()=>{
      cb()
    },200)
  }
  document.addEventListener("DOMContentLoaded", f)
};
window.CS1.scene = document.createElement('a-scene');
window.CS1.scene.setAttribute('cs1scene','');
window.CS1.myPlayer = document.createElement("a-player");
window.CS1.scene.appendChild(window.CS1.myPlayer);
window.CS1.scene.clock.autoStart = false;
addCam();
  
  
function addCam(){
  CS1.cam = document.createElement("a-entity");
  CS1.cam.setAttribute("camera", "active:true");
  CS1.cam.object3D.position.y = 3;
  //CS1.cam.setAttribute('wasd-controls','enabled: false;');
  CS1.cam.setAttribute("follow", "target: #cam-target;");
  CS1.cam.setAttribute("look-controls", "pointerLockEnabled:true;");
  CS1.scene.appendChild(CS1.cam);
  console.log('Scene given special cam!');
}
  
window.addEventListener("DOMContentLoaded", e => {
    console.log('DOMContentLoaded....')
    if ( document.querySelector("[camera]")) {
      console.log('Existing scene detected!');
      CS1.scene = AFRAME.scenes[0];
      //CS1.scene.clock.autoStart = false;
      const cam = document.querySelector("[camera]");
      cam.parentNode.removeChild(cam);
      CS1.scene.setAttribute('cs1scene','');
      CS1.scene.appendChild(CS1.myPlayer);
      addCam();
    }else{
       document.body.appendChild(CS1.scene);
    } 
    if(typeof CS1._entityCache != 'undefined'){
        CS1._entityCache.forEach(e=>{
          CS1.scene.appendChild(e);
          console.log('Adding cached entity!');
        });
        delete CS1._entityCache;
    }
});

   
  
})()