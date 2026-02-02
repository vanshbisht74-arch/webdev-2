const heading =document.getElementById("myHeading");
console.log(heading);
heading.style.color="tomato"
heading.style.backgroundColor="yellow"
const para=document.getElementsByClassName("para");
console.log(para);
for(let i=0;i<para.length;i++){
    para[i].style.backgroundColor="cyan";

}
const qs=document.querySelector("#content p")