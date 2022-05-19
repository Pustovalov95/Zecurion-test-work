const   startWorkArr = document.querySelectorAll('.workStart-right'),
        endWorkArr = document.querySelectorAll('.workEnd-right'),
        workTimeArr = document.querySelectorAll('.work-time'),
        persentsStat = document.querySelectorAll('.category-right'),
        leftCircles = document.querySelectorAll('.left-circle'),
        centerCircles = document.querySelectorAll('.center-circle'),
        rightCircles = document.querySelectorAll('.right-circle'),
        leftUser = document.querySelectorAll('.users-left'),
        centerUser = document.querySelectorAll('.users-center'),
        rightUser = document.querySelectorAll('.users-right'),
        headerArrow = document.querySelectorAll('.arrow'),
        headerStat = document.querySelectorAll('.stat-info'),
        users = document.querySelectorAll('.users');


    startWatching() 

    // БЛОК ХЭДЕРА
    function watchHeaderStat() {
        for (let t = 0; t < headerArrow.length; t++) {
            if (headerStat[t].textContent.trim().slice(0,1) == '-') {
                headerArrow[t].style.cssText = 'border-top: 3px solid black';
                if (t < 3) {
                    headerArrow[t].style.cssText = 'border-top: 3px solid #EE3461';
                }
            } else {
                headerArrow[t].style.cssText = 'border-bottom: 3px solid black';
                if (t < 3) {
                    headerArrow[t].style.cssText = 'border-bottom: 3px solid #EE3461';
                }
            }
        }
    }

    // БЛОК С ПОЛЬЗОВАТЕЛЯМИ
    function watchUsersStat() {
        for (let item = 0; item < leftUser.length; item++) {
            if (leftUser[item].textContent.trim() != '0') {
                leftCircles[item].style.cssText = 'background-color: rgba(255, 0, 114, 1)';
                
            } else {
                users[item].style.color = '#A0A0A0';
            }
            if (centerUser[item].textContent.trim() != '0') {
                centerCircles[item].style.cssText = 'background-color: rgba(214, 152, 19, 1)';
            }
            if (rightUser[item].textContent.trim() != '0') {
                rightCircles[item].style.cssText = 'background-color: rgba(139, 200, 52, 1)';
            }
        }
    }

    // БЛОК КАТЕГОРИЙ
    function watchCategoryStat() {
        for (let i = 0; i < 6; i++) {
            if (workTimeArr[i].textContent.trim() == '08:00') {
                workTimeArr[i].style.color = "rgba(139, 200, 52,1)";
            } 
            if (persentsStat[i].textContent.trim().slice(0,1) == '-') {
                persentsStat[i].style.cssText = 'border-top: 3px solid rgba(139, 200, 52, 1)';
            } else {
                persentsStat[i].style.cssText = 'border-bottom: 3px solid rgba(255, 0, 114, 1)';
            }
        } 
    }
    // БЛОК С ДИСЦИПЛИНОЙ
    function watchDisciplineStat() {
        startWorkArr[1].style.color = "rgba(139, 200, 52, 1)";
        for (let i = 0; i < 6; i++) {
            if (workTimeArr[i].textContent.trim() == '08:00') {
                workTimeArr[i].style.color = "rgba(139, 200, 52,1)";
            } 
        } 
          
        for (let y = 0; y < 5; y++) {
            if (startWorkArr[y].textContent.trim() === endWorkArr[y].textContent.trim() ) {
                endWorkArr[y].style.color = "rgba(139, 200, 52, 1)";
            }
        }
    }
    // ИТОГОВАЯ ФУНКЦИЯ,ЗАПУСКАЮЩАЯ ВСЕ ОСТАЛЬНЫЕ
    function startWatching() {
        watchHeaderStat();
        watchUsersStat();
        watchCategoryStat();
        watchDisciplineStat();
    }
    
    
   
    