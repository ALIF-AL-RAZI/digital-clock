let hrs = document.getElementById("hrs");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let meridiem = document.getElementById("meridiem");

    setInterval(()=>{
        let currentTime = new Date();
        let m_hrs = currentTime.getHours()>12?currentTime.getHours()-12:currentTime.getHours()

        hrs.innerHTML = (m_hrs<10?"0":"")+currentTime.getHours();
        min.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
        sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
        meridiem.innerHTML = currentTime.getHours()<13?"AM":"PM";

    }, 1000)