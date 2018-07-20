function run() {
    const a = ["en", "ch", "hi"];
    const i = setInterval(() => {
        const l = $(".current").attr("lang");
        $(".clean *").removeClass("animated fadeOutUp fadeInUp");
        requestAnimationFrame(() => {

            $(".current").addClass("fadeOutUp animated").removeClass("current");
            const nextLang = a[(a.indexOf(l) + 1) % 3];
            $(`[lang=${nextLang}]`).addClass("fadeInUp animated current");
        })
    }, 5000);
}

$(run)