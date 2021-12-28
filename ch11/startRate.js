//封装星级评分
$(function(){
    //写一个创建星级评分的函数 挂在window上
    window.createStarRate = function(score){
    //$.fn.createStarRate = function(score){//扩展
    //max
    var on = '<span class="on iconfont icon-shoucang"></span>';
    //half
    var half = '<span class="half iconfont icon-star-half"></span>';
    //off
    var off = '<span class="off iconfont icon-shoucang"></span>';
    //样式
    // $(on).css({
    //     fontSize: '50px',
    //     color: 'gold',
    // });
    // $(half).css({
    //     fontSize: '50px',
    //     color: 'gold',
    // });
    // $(off).css({
    //     fontSize: '50px',
    //     color: '#CCC',
    // });

    //计算分数
    var calcScore = Math.floor(score*2)/2;
    //计算满星
    var onCount = Math.floor(calcScore);
    //计算半星
    var isHasHalf = 0;//设置初始值
    if(calcScore%1 !==0 ){
        isHasHalf = 1;
    }
    //计算灰色星星
    var offCount = 5 - onCount - isHasHalf;
    //计算结果
    var rst = '';
    //拼接满星
    for(var i=0; i < onCount; i++){
        rst += on;
    }
    //拼接半星
    if(isHasHalf === 1){
        rst += half;
    }
    //拼接灰色星星
    for(var k = 0;k < offCount; k++){
        rst += off;
    }
    //返回rst
    return rst;
    //$(this).html(rst);//扩展
}
})