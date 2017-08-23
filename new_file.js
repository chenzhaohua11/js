
   var leftBtn=document.getElementById('carousel_leftBtn')
   var rightBtn=document.getElementById('carousel_rightBtn')
   var imagesList=document.getElementById('imagesList').getElementsByTagName('li');
   var current= document.getElementById('circles').getElementsByTagName('li')
   var index = 0;
   leftBtn.onclick = function(){
      index--;
      if (index < 0) {
        index = imagesList.length-1;
      }
    	  show(index);
    }
    rightBtn.onclick = function(){
      index++;
      if (index> imagesList.length-1) {
        index = 0;
      }
      show(index);
    }
  //  批量给小圆点绑定事件：
    for (var i = 0; i < current.length; i++) {
      (function(i){
     current[i].onmouseover = function() {
          index = i;
         show(index)
        }
      })(i);
    }
    function show(index) {
      for(var i=0;i<imagesList.length;i++){
      	imagesList[i].className='';
      }
			imagesList[index].className='current';
			for( i=0;i<current.length;i++){
      	current[i].className='';
      }
			current[index].className='current';	
    }
