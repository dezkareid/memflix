window.addEventListener('load', function () {
  getVideos()
})

function getVideos() {
  fetch('http://localhost:3000/videos')
    .then(response => response.json())
    .then(addVideos)
}

function addVideos (videos) {
  const list = document.getElementById('populares')
  for (const video of videos) {
    const li = document.createElement('li')
    li.innerHTML = `
      <article class="video-item">
        <header class="video-item-header">
          <h3>${video.title}</h3>
          <span>${video.description}</span>
        </header>
        <img class="video-item-image" src="${video.image}" alt="${video.title}">
      </article>
    `
    li.addEventListener('mouseover', function (event) {
      event.stopPropagation()
      const item = event.currentTarget
      const header = item.querySelector('.video-item-header')
      header.classList.add('visible')
    })
    li.addEventListener('mouseleave', function (event) {
      event.stopPropagation()
      const item = event.currentTarget
      const header = item.querySelector('.video-item-header')
      header.classList.remove('visible')
    })
    list.appendChild(li)
  }
}

/* <li>
          
        </li>
*/