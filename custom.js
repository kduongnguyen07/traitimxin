const openPage=(page)=>{window.location.href=`heart${2}.html`}
var videoStorage=['./video/5.mp4',]
video=document.querySelector('video');activeVideoUrl=videoStorage[Math.floor(Math.random()*videoStorage.length)];video.setAttribute('src',activeVideoUrl);