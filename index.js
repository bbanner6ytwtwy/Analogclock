setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    console.log(time);
    const minCalc = (360/60) * minutes;
    const hrsCalc = (360/12) * hours;
    const secCalc = (360/60) * seconds;
    $(".min").css("transform", "rotate(" + minCalc + "deg)");
    $(".hrs").css("transform", "rotate(" + hrsCalc + "deg)");
    $(".sec").css("transform", "rotate(" + secCalc + "deg)");
});