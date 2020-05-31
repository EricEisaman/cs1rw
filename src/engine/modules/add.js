export const add = (()=>{
  
  
function addEntity(el){
  
  if(document.readyState=='complete'){
      CS1.scene.appendChild(el);
  }else{
    console.log('Adding to entity cache!');
    if(typeof CS1._entityCache == 'undefined'){
      CS1._entityCache = [];
    }
    CS1._entityCache.push(el);         
  }
   
  
}
  
CS1.add = (a,b)=>{
  
  if(typeof a == 'string'){
    CS1.create(a,b)
    .then(o=>{
      addEntity(o)
    })
  }else{
    addEntity(a)
  }
  
} 


  


  
})()