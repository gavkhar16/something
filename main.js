function saleDate(){
    let newDate = new Date()
    let saleDate= new Date(2024, 7,20);   
    let finishDate =saleDate-newDate   
    let day =Math.floor(finishDate/(1000*60*60*24))    
    let hours = Math.floor((finishDate% (1000*60*60*24))/(1000*60*60))    
    let minutes = Math.floor((finishDate %(1000*60*60))/(1000*60))  
    let seconds = Math.floor((finishDate%(1000*60))/1000)  
    let dayValue= document.getElementsByClassName("time")[0]  
    let hoursValue= document.getElementsByClassName("time")[1]  
    let minutesValue= document.getElementsByClassName("time")[2] 
    let secondsValue= document.getElementsByClassName("time") [3]  
    
    dayValue.innerHTML=day  
    hoursValue.innerHTML=hours 
    minutesValue.innerHTML=minutes
    secondsValue.innerHTML=seconds  
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
        }
        saleDatSecond()
        setInterval(()=> {
            saleDate()
        },1000)    