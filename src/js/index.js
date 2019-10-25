const zeppelin = document.getElementById('zeppelin');

function zeppelinFloating () {
    TweenMax.to(zeppelin, 2, {
      y: "-=20px",
      yoyo:true,
      repeat:-1,
      ease: Power2.easeInOut
    });
  }

  zeppelinFloating()