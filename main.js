function correctDate(date){
    if(date <= 9){
        date= "0"+date
    }
    else{
        date
    }
    return date
}
function saleDate(){
    let newDate = new Date()
    let saleDate= new Date(2024, 8,20);   
    let finishDate =saleDate-newDate   
    let day =Math.floor(finishDate/(1000*60*60*24))    
    let hours = Math.floor((finishDate% (1000*60*60*24))/(1000*60*60))    
    let minutes = Math.floor((finishDate %(1000*60*60))/(1000*60))  
    let seconds = Math.floor((finishDate%(1000*60))/1000)  
    let dayValue= document.getElementsByClassName("time")[0]  
    let hoursValue= document.getElementsByClassName("time")[1]  
    let minutesValue= document.getElementsByClassName("time")[2] 
    let secondsValue= document.getElementsByClassName("time") [3]  
    
    dayValue.innerHTML=  correctDate(day) 
    hoursValue.innerHTML= correctDate(hours)  
    minutesValue.innerHTML= correctDate(minutes) 
    secondsValue.innerHTML= correctDate(seconds)  
    if(finishDate <= 0) {
        let sell_text= document.querySelector(".sell_text")
        dayValue.innerHTML="00"  
        hoursValue.innerHTML="00" 
        minutesValue.innerHTML="00" 
        secondsValue.innerHTML="00" 
        if (sell_text) {
            sell_text.style.opacity = 1;
        } 
    }
    }
    saleDate()
    setInterval(()=> {
        saleDate()
    },1000)

    function saleDatSecond(){
        let newDate = new Date()
        let saleDate= new Date(2024, 7,20);   
        let finishDate =saleDate-newDate   
        let day =Math.floor(finishDate/(1000*60*60*24))    
        let hours = Math.floor((finishDate% (1000*60*60*24))/(1000*60*60))    
        let minutes = Math.floor((finishDate %(1000*60*60))/(1000*60))  
        let seconds = Math.floor((finishDate%(1000*60))/1000)  
        let dayValue= document.getElementsByClassName("dataTime")[0]  
        let hoursValue= document.getElementsByClassName("dataTime")[1]  
        let minutesValue= document.getElementsByClassName("dataTime")[2] 
        let secondsValue= document.getElementsByClassName("dataTime") [3]  
        
        dayValue.innerHTML=day  
        hoursValue.innerHTML=hours 
        minutesValue.innerHTML=minutes
        secondsValue.innerHTML=seconds  
        if(finishDate <= 0) {
            let sell_text= document.querySelector(".sell_text")
            dayValue.innerHTML="00"  
            hoursValue.innerHTML="00" 
            minutesValue.innerHTML="00" 
            secondsValue.innerHTML="00" 
            if (sell_text) {
                sell_text.style.opacity = 1;
            } 
        }
        }
        saleDatSecond()
        setInterval(()=> {
            saleDate()
        },1000)    