
    
    //Массив хранит значение температуры за 90 дней зимы

    let winterDays = [-48, -46, 48, 27, -20, -35, 43, 4, 9, 10, 41, -46, -4, 0, -38, -49, 25, -46, -48, -23, -25, -22, 12, 38, 19, -20, 26, 4, 19, 23, 26, -41, 4, -13, -9, -11, -7, 38, 27, 41, 14, -35, -38, -44, -44, -22, -24, 29, -32, 41, 7, -25, 3, 27, -45, 10, 48, 8, -34, -49, 17, -16, 41, -11, -50, -6, -34, 20, 14, -18, 39, -28, -33, -27, -48, 40, -37, -44, 0, 46, 36, -34, -50, 8, -3, 26, 40, 10, -36, 24];

    //freezingDays

    let freezing = 0;
    let melting = 0
    
    for(let i = 0; i < winterDays.length - 1; i++){
        if(winterDays[i] >= 0 && winterDays[i+1] < 0){
            freezing++;
        }  

        if(winterDays[i] < 0 && winterDays[i+1] >= 0){
            melting++;
        }  
    }

    console.log(`Количество замерзаний: ${freezing}`);
    console.log(`Количество оттаиваний: ${melting}`);

    //freezingTrend

    let freezingTrend = 0;
    let freezingTrendNumber = 0;

    for (let i = 0; i < winterDays.length - 1; i++){    
        if(winterDays[i] < 0 && winterDays[i+1] < 0){
            freezingTrend = freezingTrend + 1;  
        }else{
            freezingTrend = 1;
        }if(freezingTrend > freezingTrendNumber){
            freezingTrendNumber = freezingTrend;
        }
    }

    console.log(`Самый длинный период заморозков: ${freezingTrendNumber} дней`);

