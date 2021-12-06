var isPercentage = true;
var prizes = [
        {
          text: "Áo thun",
          img: "./lucky-wheel/images/Ao.png",
          number: 1, // 1%,
          percentpage: 0.01 // 1%
        },
        {
          text: "Nón J2 Team",
          img: "./lucky-wheel/images/Non.png",
          number: 1,
          percentpage: 0.05 // 5%
        },
        {
          text: "Vòng Tay",
          img: "./lucky-wheel/images/Vong.png",
          number : 1,
          percentpage: 0.1 // 10%
        },
        {
          text: "Security",
          img: "./lucky-wheel/images/j2_logo.png",
          number: 1,
          percentpage: 0.24 // 24%
        },
        {
          text: "Chúc bạn may mắn lần sau",
          img: "./lucky-wheel/images/miss.png",
          percentpage: 0.5 // 60%
        },
        {
          text: "Vòng Tay",
          img: "./lucky-wheel/images/Vong.png",
          number : 1,
          percentpage: 0.1 // 10%
        },
        {
          text: "Security",
          img: "./lucky-wheel/images/j2_logo.png",
          number: 1,
          percentpage: 0.24 // 24%
        },
        {
          text: "Nón J2 Team",
          img: "./lucky-wheel/images/Non.png",
          number: 1,
          percentpage: 0.05 // 5%
        },
      ];
document.addEventListener(
  "DOMContentLoaded",
  function() {
    hcLuckywheel.init({
      id: "luckywheel",
      config: function(callback) {
        callback &&
          callback(prizes);
      },
      mode : "both",
      getPrize: function(callback) {
        var rand = randomIndex(prizes);
        var chances = rand;
        callback && callback([rand, chances]);
      },
      gotBack: function(data) {
        if(data == null){
          Swal.fire(
            'Chương trình kết thúc',
            'Đã hết phần thưởng',
            'error'
          )
        } else if (data == 'Chúc bạn may mắn lần sau'){
          Swal.fire(
            'Bạn không trúng thưởng',
            data,
            'error'
          )
        } else{
          Swal.fire(
            'Đã trúng giải',
            data,
            'success'
          )
        }
      }
    });
  },
  false
);
function randomIndex(prizes){
  if(isPercentage){
    var counter = 1;
    for (let i = 0; i < prizes.length; i++) {
      if(prizes[i].number == 0){
        counter++
      }
    }
    if(counter == prizes.length){
      return null
    }
    let rand = Math.random();
    let prizeIndex = null;
    console.log(rand);
    switch (true) {
      case rand < prizes[4].percentpage:
        prizeIndex = 4 ;
        break;
      case rand < prizes[4].percentpage + prizes[3].percentpage:
        prizeIndex = 3;
        break;
      case rand < prizes[4].percentpage + prizes[3].percentpage + prizes[2].percentpage:
        prizeIndex = 2;
        break;
      case rand < prizes[4].percentpage + prizes[3].percentpage + prizes[2].percentpage + prizes[1].percentpage:
        prizeIndex = 1;
        break;  
      case rand < prizes[4].percentpage + prizes[3].percentpage + prizes[2].percentpage + prizes[1].percentpage  + prizes[0].percentpage:
        prizeIndex = 0;
        break;  
    }
    if(prizes[prizeIndex].number != 0){
      prizes[prizeIndex].number = prizes[prizeIndex].number - 1
      return prizeIndex
    }else{
      return randomIndex(prizes)
    }
  }else{
    var counter = 0;
    for (let i = 0; i < prizes.length; i++) {
      if(prizes[i].number == 0){
        counter++
      }
    }
    if(counter == prizes.length){
      return null
    }
    var rand = (Math.random() * (prizes.length)) >>> 0;
    if(prizes[rand].number != 0){
      prizes[rand].number = prizes[rand].number - 1
      return rand
    }else{
      return randomIndex(prizes)
    }
  }
}