function ozgar1() {
    let today = new Date();
  
    // Tug'ilgan kuningizni kiriting (oylar 0-dan boshlanadi, shuning uchun 7-oy avgust)
    let birthDate = new Date(today.getFullYear(), 8, 19);
  
    // Agar bugungi sana tug'ilgan kuningizdan keyin bo'lsa, kelgusi yilni oling
    if (today > birthDate) {
      birthDate.setFullYear(today.getFullYear() + 1);
    }
  
    // Tug'ilgan kuningizgacha bo'lgan vaqtni hisoblang
    let timeDiff = birthDate - today;
  
    // Vaqtni kun, soat, minut va sekundlarga aylantiring
    let daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hoursLeft = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
    kun1.innerHTML = daysLeft;
    kun2.innerHTML = hoursLeft;
    kun3.innerHTML = minutesLeft;
    kun4.innerHTML = secondsLeft;
  
    // Tug'ilgan kuningizni kiriting (oylar 0-dan boshlanadi, shuning uchun 7-oy avgust)
    let tugulgankun = new Date(2003, 8, 19); // Misol uchun: 1990-yil 15-avgust
    
    // Bugungi sanani oling
    let bugun = new Date();
    
    // Yillarni hisoblash
    let yearsLived = bugun.getFullYear() - tugulgankun.getFullYear();
    let monthsLived = bugun.getMonth() - tugulgankun.getMonth();
    let daysLived = bugun.getDate() - tugulgankun.getDate();
    
    // Agar bugungi oy tug'ilgan oyingizdan oldin bo'lsa, yildan birini ayiring
    if (monthsLived < 0 || (monthsLived === 0 && daysLived < 0)) {
      yearsLived--;
    }
    
    // Oylarni hisoblash
    if (monthsLived < 0) {
      monthsLived += 12;
    }
    if (daysLived < 0) {
      let previousMonth = bugun.getMonth() - 1;
      if (previousMonth < 0) {
        previousMonth = 11;
      }
      let daysInPreviousMonth = new Date(
        bugun.getFullYear(),
        previousMonth + 1,
        0
      ).getDate();
      daysLived += daysInPreviousMonth;
      monthsLived--;
    }
    
    // Yashagan soat va daqiqalarni hisoblash
    let hoursLived = bugun.getHours() - tugulgankun.getHours();
    let minutesLived = bugun.getMinutes() - tugulgankun.getMinutes();
    let secondsLived = bugun.getSeconds() - tugulgankun.getSeconds();
    
    if (secondsLived < 0) {
      secondsLived += 60;
      minutesLived--;
    }
    if (minutesLived < 0) {
      minutesLived += 60;
      hoursLived--;
    }
    if (hoursLived < 0) {
      hoursLived += 24;
      daysLived--;
    }
    
    
    kun5.innerHTML = yearsLived;
    kun6.innerHTML = monthsLived;
    kun7.innerHTML = daysLived;
    kun8.innerHTML = hoursLived;
    kun9.innerHTML = minutesLived;
    setTimeout("ozgar1()", 1000);
  }
  
  