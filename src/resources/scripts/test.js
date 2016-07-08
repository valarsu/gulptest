/**
 * Created by valarsu on 2016/7/5.
 */
$(function () {
    function add(a){
        for(var i = 0; i < a.length; i ++){
            console.log(a[i] + 5);
        }
    }
    var ss = [1,2,3,4,5];
    //add(ss);
    function reduce(a,b){
        console.log(b - a);
    }
    function _math(a,b){
        if(a >= b){
            return a - b;
        }else{
            return b - a;
        }
    }
    _math(3,5);
    _math(3,1);
    _math(120,2324);
    reduce(ss[ss.length],ss[0]);
});
