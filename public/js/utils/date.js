
export const getCurrentTime = async () => {
    return new Promise(async (resolve, reject) => {

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        
        hours = hours < 10 ? '0'+hours : hours;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        seconds = seconds < 10 ? '0'+seconds : seconds;
        
        resolve({'currentTime' : `${hours}:${minutes}:${seconds}`});
    });
}

