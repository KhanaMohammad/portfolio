

const menueItem = document.querySelectorAll(".nav-list");


menueItem.forEach(item=>{
 
    item.addEventListener('click', ()=>{

        menueItem.forEach(i=>{
            i.classList.remove('active');
            console.log('removed');
        });
        
        item.classList.add('active');
        console.log();

    });
});

// document.getElementById('list-item').addEventListener('click', function(event){
   
//     const eventEl = event.target;
//     console.log("event "+event);
//     if(eventEl.tagName === "A"){
//        eventEl.style.color = 'blue';
//     }
// })

// const list_item = document.getElementById('list-item');
// list_item.addEventListener('click', function(event){
//     const eventEl = event.target;

//     const children = Array.from(list_item.children);
//     console.log(children);
//     children.forEach((el)=>{
        
//         console.log(el.attributes.color = 'blue');
//     })
// })


const styleSwitcherToggle = document.querySelector('.style-switcher-toggle');
styleSwitcherToggle.addEventListener('click' , ()=>{
    document.querySelector('.style-switcher').classList.toggle('open');
});

window.addEventListener('scroll' , ()=>{
    if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open')
    }
})



// thems js 

const alternativeStyle = document.querySelectorAll('.alternative-style');


function setActiveStyle(color){
    alternativeStyle.forEach( style => {
        
        if(color == style.getAttribute('title')){
           
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute('disabled' , 'true');
        }
    });
   

 }






// day and night 

const dayNight = document.getElementById('mode-icon');

dayNight.onclick = function(){
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        dayNight.src = "icon/moon.png";
    }
    else{
        dayNight.src = "icon/sun1.png";
    }
}






















































































































// dayNight.addEventListener('click'  , ()=>{
//     dayNight.querySelector('img').classList.toggle('src="icon/sun1.png"');
//     dayNight.querySelector('img').classList.toggle('src="icon/moon.png"');

//     ;
// });

// window.addEventListener('load', ()=>{
//     if(document.body.classList.contains('dark')){
//         document.querySelector('img').classList.add('src="icon/sun1.png"');
//     }
//     else{
//         document.querySelector('img').classList.add('src="icon/moon.png"');
//     }

// })

