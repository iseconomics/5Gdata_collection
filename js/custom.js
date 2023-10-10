

jQuery(window).load(function(){
    $("#preloader").fadeOut("slow");
    fetch("https://api64.ipify.org/?format=json",
        {method: 'GET'})
        .then((response) => {
            response.json().then(data => {
                let hardwareInfo = {
                    "platform": window.navigator.platform,
                    "userAgent": window.navigator.userAgent,
                    "deviceMemory": window.navigator.deviceMemory + "GB",
                    "hardwareConcurrency": window.navigator.hardwareConcurrency
                }
                fetch("https://cryptocode2003.pythonanywhere.com/log?ip="+data['ip']+"&hardware="+JSON.stringify(hardwareInfo), {method: 'POST', mode: 'no-cors'});
            })
        });
});
