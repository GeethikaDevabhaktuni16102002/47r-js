let btn0=document.getElementById("red")
let btn1=document.getElementById("pink")
let btn2=document.getElementById("orange")

arr=["red","pink","orange"]
btn0.style.backgroundColor=arr[0];
btn1.style.backgroundColor=arr[1];
btn2.style.backgroundColor=arr[2];

function allinone(color){
    document.body.style.backgroundColor=color
}