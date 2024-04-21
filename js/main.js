//不可复制
document.onselectstart = function(){ return false; };

//禁止右键
document.oncontextmenu = function(){ return false; };

//获取在线人数
$.ajax({
    url: 'http://api.wer.plus/api/mcse',
    type: 'get',
    data: {
        host: 'pm.rainplay.cn:12530',
    },
    success: function (res) {
        let online = res.data.online
        console.log(online)
        document.getElementById('online').innerHTML="目前在线人数："+online
    }
});
