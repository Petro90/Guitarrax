const synth = new Tone.AMSynth().toDestination();

document.querySelectorAll('button').forEach(function(button){
  
 button.addEventListener('mousedown', function(tocar){
   
   synth.triggerAttack(tocar.target.textContent)
   synth.volume.value = document.myForm.volume.value;
 }) 
  
  button.addEventListener('mouseup', function(tocar){
    synth.triggerRelease();
    
  })
 
})

function tocar6(){ 
   synth.triggerAttackRelease("E3","1");
    }

function tocar5(){ 
   synth.triggerAttackRelease("A3","1");
}

function tocar4(){ 
   synth.triggerAttackRelease("D4","1");
}

function tocar3(){ 
   synth.triggerAttackRelease("G4","1");
}

function tocar2(){ 
   synth.triggerAttackRelease("B4","1");
}

function tocar1(){ 
   synth.triggerAttackRelease("E5","1");
}

