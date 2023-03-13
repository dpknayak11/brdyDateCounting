const endDate = "14 January 2024 12:00 AM"
document.getElementById('end-date').innerText = endDate;
const input = document.querySelectorAll('input')
function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    // convert into days ..
    if(diff < 0) return ;
    input[0].value = Math.floor(diff/3600/24);
    input[1].value = Math.floor(diff/3600)%24;
    input[2].value = Math.floor(diff/60)%60;
    input[3].value = Math.floor(diff)%60;
}
clock()
/*
1 day = 24 hrs
1 hr = 60 mins
60 min = 3600 sec*/
setInterval( () =>{ clock(), 1000} )