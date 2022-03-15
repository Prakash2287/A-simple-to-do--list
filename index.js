console.log("Hello");

window.addEventListener("load",(e)=>{
    e.preventDefault();
})
var search=document.querySelector(".search2");

var content=document.querySelector(".content");
content.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
})

function showNotes(notesObj){
    content.innerHTML="";
    for(let i=0;i<notesObj.length;i++)
    {
        console.log(notesObj[i]);
        var ad=document.createElement("li");
        ad.setAttribute('id',`${i+1}`);
        ad.setAttribute('onclick',`deleted(${i+1});`);
        ad.innerText=`${notesObj[i]}`;
        ad.classList.add("children");
        ad.addEventListener("contextmenu",()=>{
            var target=document.getElementById(`${i+1}`);
        if(target.style.textDecoration=="line-through"){
        
        target.style.textDecoration="none";
        target.style.opacity="1";
        }
        else{
            target.style.textDecoration="line-through";
                target.style.opacity="0.4";
         }

        })
        content.appendChild(ad);
    }


}

search.addEventListener("keyup",(e)=>{
  
    if(e.keyCode===13 && search.value!='')
    {
        let notes=localStorage.getItem("notes");
        if(notes==null)
        {
            notesObj=[];
            
        }
        else{
            notesObj=JSON.parse(notes);
        }
        notesObj.push(search.value);
        localStorage.setItem("notes",JSON.stringify(notesObj));
        showNotes(notesObj);
        search.value="";
        
    }
   
    
})
function deleted(index){
    // console.log(index);
    var target=document.getElementById(`${index}`);
    target.remove();
    notes=localStorage.getItem("notes");
    notesobj=JSON.parse(notes);
    notesmaker=[];
    for(let i=0;i<notesobj.length;i++)
    {
        if(i!=index-1)
        {
            notesmaker.push(notesObj[i]);
        }
    }
   
    localStorage.setItem("notes",JSON.stringify(notesmaker));
    console.log(localStorage.notes);
    

    
}
 function deleter(){
     localStorage.clear();
     content.innerHTML="";
 }

