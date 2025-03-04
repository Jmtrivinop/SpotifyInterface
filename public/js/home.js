
const menu_items =  document.querySelectorAll('.menu-item');

menu_items.forEach(item => {

    item.addEventListener('click', function() {
        
        menu_items.forEach(item => {
            item.classList.remove('is-active');

        });

        item.classList.add("is-active");
        
    });

});

async function obtenerTrendingVideos() {
  try {
    const response = await axios.get('http://localhost:3000/api/youtube/getTrendingVideos');
    return response.data.message;
  } catch (error) {
    console.error('Error en la petición:', error);
  }
}

async function obtenerChannel(channelId) {
  
  try {
    const response = await axios.get(`http://localhost:3000/api/youtube/getChannelById/${channelId}`);
    return response.data.message;
  } catch (error) {
    console.error('Error en la petición:', error);
  }

}

function createVideoCard(videoInfo, channelInfo) {

    const cell = document.createElement("div");
    cell.classList.add("cell");
    
    // Crear el contenedor principal
    const card = document.createElement("div");
    card.classList.add("card");

    // Sección de la imagen principal
    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");

    const figureMain = document.createElement("figure");
    figureMain.classList.add("image", "is-2by1");

    const imgMain = document.createElement("img");
    imgMain.src = videoInfo.snippet.thumbnails.high.url;
    imgMain.alt = "Placeholder image";

    // Ensamblar la imagen principal
    figureMain.appendChild(imgMain);
    cardImage.appendChild(figureMain);

    // Sección del contenido de la tarjeta
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const media = document.createElement("div");
    media.classList.add("media");

    const mediaLeft = document.createElement("div");
    mediaLeft.classList.add("media-left");

    const figureAvatar = document.createElement("figure");
    figureAvatar.classList.add("image", "is-48x48");

    const imgAvatar = document.createElement("img");
    imgAvatar.classList.add("is-rounded");
    imgAvatar.src = channelInfo.snippet.thumbnails.default.url;
    imgAvatar.alt = "Placeholder image";

    // Ensamblar la imagen del avatar
    figureAvatar.appendChild(imgAvatar);
    mediaLeft.appendChild(figureAvatar);

    // Sección del texto
    const content = document.createElement("div");
    content.classList.add("content", 'card-text');
    content.textContent = videoInfo.snippet.title

    const contentDescription = document.createElement("div");
    contentDescription.classList.add("content", "is-size-6", "has-text-grey", 'card-info');

    const chanelName = document.createElement("p");
    const datePublished = document.createElement("p");

    const publishedAt = videoInfo.snippet.publishedAt.split("T")[0];

    chanelName.textContent = videoInfo.snippet.channelTitle;
    datePublished.textContent = publishedAt;

    // Ensamblar el contenido
    contentDescription.appendChild(chanelName);
    contentDescription.appendChild(datePublished);
    content.appendChild(contentDescription);
    
    media.appendChild(mediaLeft);
    media.appendChild(content);

    cardContent.appendChild(media);

    // Ensamblar la tarjeta completa
    card.appendChild(cardImage);
    card.appendChild(cardContent);

    cell.appendChild(card);

    return cell;
}

async function renderTrendingVideos() {

    const responseVideo = await obtenerTrendingVideos()

    const itemsVideo = responseVideo.items;

    const videoContainer = document.querySelector(".grid");
    videoContainer.innerHTML = "";

    itemsVideo.forEach(async video => {

        const channelId = video.snippet.channelId
        const channelResponse = await obtenerChannel(channelId)

        const channel = channelResponse.items[0];

        console.log(channelResponse.items[0])

        const card = createVideoCard(video, channel);
        videoContainer.appendChild(card);
    });
}

renderTrendingVideos()