export const follow = (()=>{


/* Follows an object around (don't need to be in same space) */

const __tempVector1 = new THREE.Vector3();
const __tempVector2 = new THREE.Vector3();

AFRAME.registerComponent('follow', {

	schema: {
		strength: { default: 0.03 },
		target: { type: 'selector' }
	},
  
  init: function(){
    this._euler = new THREE.Euler( 0, 0, 0, 'XYZ' );
    this.cto = CS1.myPlayer.camTarget.object3D;
    this.pp= CS1.myPlayer.object3D.position;
    this.ctdir = new THREE.Vector3();
  },

	tick: function () {
    
		const usPos = __tempVector1;
		this.el.object3D.getWorldPosition(usPos);
		const targetPos = __tempVector2;
		this.data.target.object3D.getWorldPosition(targetPos);
    
    //Adjust strength based on distance to target
    this.data.strength = 0.03 + usPos.distanceTo(targetPos)/700;
    
    //Adjust pos.y based on cam look up/down angle
    const rx = CS1.cam.object3D.rotation.x;
    const p = this.el.object3D.position;
    p.y = targetPos.y - 2*Math.sin(rx)

		targetPos.sub(usPos).multiplyScalar(this.data.strength).add(p);

		this.el.setAttribute('position', targetPos);
    this.el.object3D.lookAt(targetPos);
    
	}
});
  
})()