var addBtn = document.querySelector("#add-contact")
addBtn.addEventListener("click",function(){
    location.href = `addContact.html`;
    var nameInp = document.getElementById("must")
    nameInp.value;
    console.log(nameInp)
    var allLines = document.getElementById("chat-lines")
    var line = document.createElement("div")
    line.className='chat-line'
    line.innerHTML=`
    <div class="chat-line-left">
    <div class="chat-line-left-imgtext">
        <img src="./user.png" style="width: 50px;height: 50px; border-radius: 50%;"  alt="">
        <p class="name">Zohaib</p>
    </div>
</div>
<div class="chat-line-right">
    8:53 AM
</div>
    `
    allLines.appendChild(line)

})
var addform = document.getElementById("add-form")
addform.addEventListener("click",()=>{
    location.href=`index.html`
})
console.log(addform);