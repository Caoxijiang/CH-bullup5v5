$().ready(function () {
    $('#bind_lol_btn').on('click', function(e){
        if(userInfo == null || userInfo.userId == undefined){
           // alert('请先登录，再绑定LOL账号');
            function poroto_w() {
                $('#modalpopo .modal-content  h4').text("提示：")
                $('#modalpopo .ceneter_w').text("请先登录，再绑定LOL账号！")
                $('#modalpopo').modal('open'); 
            }
            poroto_w();
            return;
        }
        e.preventDefault();
        var lol_process = require('./js/auto_program/lol_process');
        //发送英雄联盟登录包
        lol_process.grabLOLData('login');
        // socket.emit('lolBindRequest', {
        //     userId: userInfo.userId,
        //     lolAccount: $('#bind_lol_account_text').val(),
        //     lolArea: 'NU',
        //     lolNickname: $('#bind_lol_account_text').val()
        // });
    });
});