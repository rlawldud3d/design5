$(function(){
    // 이미지, 배경 세팅값
    var titleData = [
        {
            imgUrl: 'images/img1.png',
            
          },  
      {
        imgUrl: 'images/img2.png',
        
      },
      {
        imgUrl: 'images/img3.png',
      },
      {
        imgUrl: 'images/img4.png',
      },
      {
        imgUrl: 'images/img5.png',
      }, {
        imgUrl: 'images/img6.png',
      },
    ];
  
    // 이벤트
    $('.pager > ul > li').eq(0).click(function(){
      // 타이틀 제품 이미지
      $('figure img')
        .attr('src',  titleData[0].imgUrl);
    });
  
    $('.pager > ul > li').eq(1).click(function(){
      $('figure img')
        .attr('src',  titleData[1].imgUrl);
    });
  
    $('.pager > ul > li').eq(2).click(function(){
      $('figure img')
        .attr('src',  titleData[2].imgUrl);  
    });

       $('.pager > ul > li').eq(3).click(function(){
      $('figure img')
        .attr('src',  titleData[3].imgUrl);  
    });
   
    $('.pager > ul > li').eq(4).click(function(){
        $('figure img')
          .attr('src',  titleData[4].imgUrl);  
      });
  
      $('.pager > ul > li').eq(5).click(function(){
        $('figure img')
          .attr('src',  titleData[5].imgUrl);  
      });
    
  
  
  })
