window.onload=function(){
    var lh = document.querySelectorAll('.lh li')
    var bg = document.getElementById('bg')
    //放大镜
    var product = document.querySelector('.product-intro')
    var previewWrap = document.querySelector('.preview-wrap')
    var preview = document.querySelector('.preview')
    var jqzoom = document.querySelector('.jqzoom')
    var maxWrap = document.querySelector('#max_wrap')
    var slider = document.querySelector('#slider')
    var magnifier = document.querySelector('#magnifier')
    var maxImg = maxWrap.children[0];
    for(var i=0;i<lh.length;i++){
        lh[i].onmouseenter = function () {
            for (var i = 0; i < lh.length; i++){
                lh[i].className = '';
                this.className='img-hover';
            }
            bg.setAttribute('src',this.childNodes[1].getAttribute('data'))
            magnifier.setAttribute('src',this.childNodes[1].getAttribute('data'))
        }
    }

    //放大镜
    jqzoom.onmousemove=function(event){
        slider.style.display = "block";
        maxWrap.style.display = "block";
        var event = event || window.event;
        //获取鼠标坐标
        var disX = event.clientX - product.offsetLeft - previewWrap.offsetLeft - preview.offsetLeft - slider.offsetWidth / 2;
        var disY = event.clientY - product.offsetTop - previewWrap.offsetTop - preview.offsetTop - slider.offsetHeight / 2;

        //目的使移动滑块的中心对准鼠标坐标
        // var x = disX - slider.offsetWidth / 2;
        // var y = disY - slider.offsetHeight / 2;

        //设定移动滑块的移动范围
        var maxWidth = jqzoom.clientWidth - slider.offsetWidth;
        var maxHeight = jqzoom.clientHeight - slider.offsetHeight;
        if (disX >= maxWidth){
            disX = maxWidth;
        }else if( disX <= 0){
            disX = 0;
        }

        if (disY >= maxHeight){
            disY = maxHeight;
        }else if(disY <= 0){
            disY = 0;
        }

        slider.style.left = disX + "px";
        slider.style.top = disY + "px";
        //移动滑块的位置相对于可移动区域的比例
        var scaleX = disX / maxWidth;
        var scaleY = disY / maxHeight;

        //maxWrap的偏移量等于移动比例乘以maxWrap的移动范围
        maxWrap.scrollLeft = scaleX * (maxImg.offsetWidth - maxWrap.clientWidth);
        maxWrap.scrollTop = scaleY * (maxImg.offsetHeight - maxWrap.clientHeight);

    };
    jqzoom.onmouseleave = function (){
        slider.style.display = "none";
        maxWrap.style.display = "none";
    };
    /////
    var select = document.querySelectorAll('.edition .dd .item')
    var color = document.querySelectorAll('.color .dd .item')
    var capacity = document.querySelectorAll('.capacity .dd .item')

    for(var i=0;i<select.length;i++){
        select[i].onclick=function(){
            for(var j=0;j<select.length;j++){
                select[j].className='item'
                this.className = 'item selected'
            }
        }
    }
    for(var i=0;i<color.length;i++){
        color[i].onclick=function(){
            for(var j=0;j<color.length;j++){
                color[j].className='item'
                this.className = 'item selected'
            }
        }
    }
    for(var i=0;i<capacity.length;i++){
        capacity[i].onclick=function(){
            for(var j=0;j<capacity.length;j++){
                capacity[j].className='item'
                this.className = 'item selected'
            }
        }
    }
    /////

    var up = document.querySelector('.number .arrow .up')
    var down = document.querySelector('.number .arrow .down')
    var connect = document.querySelector('.number .connect')

    up.onclick=function(){
        if(connect.value>=1&&connect.value<10){
            connect.value++;
        }
    }
    down.onclick=function(){
        if(connect.value>1){
            connect.value--;
        }
    }

}
