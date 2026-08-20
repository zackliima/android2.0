const videoFacades = document.querySelectorAll(".video-facade");

videoFacades.forEach((facade) => {
    const button = facade.querySelector(".video-facade-button");

    button.addEventListener("click", () => {
        const videoId = facade.dataset.videoId;

        const iframe = document.createElement("iframe");

        iframe.src =
            `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;

        iframe.title = "Android history video";

        iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

        iframe.referrerPolicy = "strict-origin-when-cross-origin";

        iframe.allowFullscreen = true;

        facade.replaceChildren(iframe);

        iframe.focus();
    });
});