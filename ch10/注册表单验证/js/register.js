// 注册功能模块
$(function(){
    // 选中调用插件
    $('#registerForm').validate({
        // 验证规则
        rules:{
            //用户名的验证
            username: {
                required:true,//非空
                rangelength:[3,6]//长度验证
            },
            //验证密码
            password:{
                required:true,//非空
                isPassword:true//自定义的密码验证
            },
            //确认密码
            checkPassword:{
                required:true,//非空
                equalTo:'#password'//验证密码的一致性
            },
            tel:{
                required:true,//非空
                isTel:true//电话号码的验证
            }
        },
        //提示信息
        messages: {
            username:{
                required:'用户名不能为空',//非空提示
                rangelength:'长度应在3-6位'//长度提示
            },
        //密码的提示信息
            password:{
                required:'密码不能为空',//非空提示
                isPassword:'请输入5-10个以字母开头，可带数字“_”,“.”的字符串'//密码格式验证
            },
        //密码提示信息
            checkPassword:{
                required:'确认密码不能为空',//非空
                equalTo:'请保持密码一致'
            },
        //电话号码提示信息
            tel:{
                required:'电话号码不能为空',//非空
                isTel:'电话号码格式不正确'
            }
        }
    })
    // 密码自定义验证
    jQuery.validator.addMethod("isPassword",function(value,element){
        var pwd = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,9}$/;
        return this.optional(element)||(pwd.test(value));
    });
    // 手机号自定义验证
    jQuery.validator.addMethod("isTel",function(value,element){
        var telReg = /^[1]+[3,8]+\d{9}$/;
        return this.optional(element)||(telReg.test(value));
    });
})