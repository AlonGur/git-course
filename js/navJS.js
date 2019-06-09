/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
document.querySelector('.topNav').addEventListener('click',function(){
    console.log('hi');
    document.querySelector('.navItems').classList.toggle('hide');


});

window.addEventListener("hashchange", function() {
    if(window.innerWidth>1200){
        scrollBy(0, -118) 
    }
    else if(window.innerWidth<1200 && window.innerWidth>960){
        scrollBy(0, -94) 
    }
    
 })