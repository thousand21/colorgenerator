
//////////////////////////////////////////////1ere ligne /////////////////////////////////////

////////////////// boutons
let test=document.getElementsByClassName("test")[0];
let div1=document.querySelector("div").children;
let tabDiv1=Array.from(div1);
let boutonWhite=tabDiv1[0];

console.log(boutonWhite);
boutonWhite.addEventListener("click",()=>{
    test.setAttribute("id","whiteColor");
    test.style=null;
})
let boutonRed=tabDiv1[1];
boutonRed.addEventListener("click",()=>{
    test.setAttribute("id","redColor");
    test.style=null;
});
let boutonGreen=tabDiv1[2];
boutonGreen.addEventListener("click",()=>{
    test.setAttribute("id","greenColor");
    test.style=null;
})
let boutonBlue=tabDiv1[3];
boutonBlue.addEventListener("click",()=>{
    test.setAttribute("id","blueColor");
    test.style=null;
})

////////////////////////////borders
let borderfat=tabDiv1[4];
borderfat.addEventListener("click",()=>{
    test.setAttribute("class","fatBorder");
    test.classList.add("test");
   test.classList.remove("pointBorder");
    test.classList.remove("lightBorder");
    test.style=null;
    

})
let pointBorder=tabDiv1[5];
pointBorder.addEventListener("click",()=>{
    test.classList.add("pointBorder");
    test.classList.remove("fatBorder");
    test.classList.remove("lightBorder");
    test.style=null;
   
});
let lightBorder=tabDiv1[6];
lightBorder.addEventListener("click",()=>{
    test.classList.add("lightBorder");
    test.classList.remove("pointBorder");
    test.classList.remove("fatBorder");
    test.style=null;
   
});
let lightBorderRed=tabDiv1[7];
lightBorderRed.addEventListener("click",()=>{
    test.classList.add("lightBorderRed");
    test.classList.remove("mediumBorderRed");
    test.classList.remove("fatBorderRed");
    test.style=null;
   
   
});
let mediumBorderRed=tabDiv1[8];
mediumBorderRed.addEventListener("click",()=>{
    test.classList.add("mediumBorderRed");
    test.classList.remove("lightBorderRed");
    test.classList.remove("fatBorderRed");
    test.style=null;
   
});
let fatBorderRed=tabDiv1[9];
fatBorderRed.addEventListener("click",()=>{
    test.classList.add("fatBorderRed");
    test.classList.remove("mediumBorderRed");
    test.classList.remove("lightBorderRed");
    test.style=null;
   
});
let theInput = document.getElementById("favColor");
let theColor = theInput.value;
theInput.addEventListener("input",()=>{
    test.style.backgroundColor=favColor.value;
})







//////////////////////////couleur au choix
let padding=(e)=>{
    test.style.border= `solid ${e.target.value}px`;
    
}
let paddingTop=(e)=>{
    test.style.borderTop= `solid ${e.target.value}px`;
   
    
}
let paddingRight=(e)=>{
    
    test.style.borderRight= `solid ${e.target.value}px`;
}
let paddingBottom=(e)=>{
    
    test.style.borderBottom= `solid ${e.target.value}px`;
}
let paddingLeft=(e)=>{
    
    test.style.borderLeft= `solid ${e.target.value}px`;
}
let border1=document.getElementsByClassName("border1")[0];
border1.addEventListener("input",padding);

let borderTop=document.getElementsByClassName("border2")[0];
borderTop.addEventListener("input",paddingTop);

let borderRight=document.getElementsByClassName("border3")[0];
borderRight.addEventListener("input",paddingRight);

let borderBottom=document.getElementsByClassName("border4")[0];
borderBottom.addEventListener("input",paddingBottom);

let borderLeft=document.getElementsByClassName("border5")[0];
borderLeft.addEventListener("input",paddingLeft);

///////////////////////radius////////////////////////
let changerRadius1=(e)=>{
    test.style.borderRadius= ` ${e.target.value}px`
}
let radius1=document.getElementsByClassName("radius1")[0];
radius1.addEventListener("input",changerRadius1);
//
let changerRadiusTopLeft=(e)=>{
    test.style.borderTopLeftRadius= ` ${e.target.value}px`
}
let radiusTopLeft=document.getElementsByClassName("radius2")[0];
radiusTopLeft.addEventListener("input",changerRadiusTopLeft);
////////////
let changerTopRight=(e)=>{
    test.style.borderTopRightRadius= ` ${e.target.value}px`
}
let radiusTopRight=document.getElementsByClassName("radius3")[0];
radiusTopRight.addEventListener("input",changerTopRight);
////
let changerBottomLeft=()=>{
    est.style.borderBottomleftRadius= ` ${e.target.value}px`
}
let radiusBottomLeft=document.getElementsByClassName("radius4")[0];
radiusBottomLeft.addEventListener("input",changerBottomLeft);
//////
let changerBottomRight=()=>{
    est.style.borderBottomRightRadius= ` ${e.target.value}px`
}
let radiusBottomRight=document.getElementsByClassName("radius5")[0];
radiusBottomRight.addEventListener("input",changerBottomRight);



