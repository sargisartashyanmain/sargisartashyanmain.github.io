const greetings = [
    { language: "ru", greeting: "Привет" },
    { language: "en", greeting: "Hello" },
    { language: "fr", greeting: "Bonjour" },
    { language: "es", greeting: "Hola" },
    { language: "de", greeting: "Hallo" },
    { language: "it", greeting: "Ciao" },
    { language: "ja", greeting: "こんにちは" },
    { language: "zh", greeting: "你好" },
    { language: "pt", greeting: "Olá" },
    { language: "pl", greeting: "Cześć" },
    { language: "nl", greeting: "Hallo" },
    { language: "tr", greeting: "Merhaba" },
    { language: "ar", greeting: "أهلاً" },
    { language: "ko", greeting: "안녕하세요" },
    { language: "sv", greeting: "Hej" },
    { language: "da", greeting: "Hej" },
    { language: "fi", greeting: "Hei" },
    { language: "no", greeting: "Hei" },
    { language: "cs", greeting: "Ahoj" },
    { language: "hu", greeting: "Helló" },
    { language: "ro", greeting: "Bună" },
    { language: "sr", greeting: "Zdravo" },
    { language: "hr", greeting: "Bok" },
    { language: "sk", greeting: "Ahoj" },
    { language: "bg", greeting: "Здравейте" },
    { language: "el", greeting: "Γειά σας" },
    { language: "th", greeting: "สวัสดี" },
    { language: "hi", greeting: "नमस्ते" },
    { language: "vi", greeting: "Xin chào" },
    { language: "id", greeting: "Halo" },
    { language: "ms", greeting: "Halo" },
    { language: "ml", greeting: "ഹലോ" },
    { language: "ta", greeting: "வணக்கம்" },
    { language: "te", greeting: "హలో" },
    { language: "kn", greeting: "ಹಲೋ" },
    { language: "mr", greeting: "नमस्कार" },
    { language: "pa", greeting: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ" },
    { language: "bn", greeting: "হ্যালো" },
    { language: "gu", greeting: "હેલો" },
    { language: "ne", greeting: "नमस्ते" },
    { language: "si", greeting: "හෙලෝ" },
    { language: "uk", greeting: "Привіт" },
    { language: "hr", greeting: "Bok" },
    { language: "sq", greeting: "Përshëndetje" },
    { language: "iw", greeting: "שלום" },
    { language: "hy", greeting: "Բարև" },
    { language: "az", greeting: "Salam" },
    { language: "ka", greeting: "გამარჯობა" }
];

const typeItInstance = new TypeIt("#greeting", {
    waitUntilVisible: true,
    loop: true,
    speed: 300,
    startDelete: true
})

for(const str of greetings) {
    typeItInstance.type(str.greeting).pause(100).delete();
}
typeItInstance.go();

let anim =gsap
    .timeline({
        scrollTrigger: {
            trigger: ".trigger",
            scrub: 0.5,
            pin: true,
            start: "top top",
            end: "+=150%"
        }
    })
    .to(".box", {
        force3D: true,
        duration: 1,
        xPercent: 100,
        ease: "power1.inOut",
        stagger: { amount: 1 }
    })
    .to(".box", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
    .to(".box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1)



var items = document.querySelectorAll(".list__item")

items.forEach(item => {
    var itemTitle = item.querySelector(".list__item__title")
    var itemTitleOutline = item.querySelector(".list__item__titleOutline")
    var itemImg = item.querySelector(".list__item img")

    var itemTL = gsap.timeline({scrollTrigger: {
            trigger: item,
            start: "0% 75%",
            end: "25% 50%",
            scrub: 3,
        }})

    itemTL.fromTo(itemTitle, {scale: 2, y: "100%"}, {scale: 1, y: "0%", ease: "power2.inOut"}, 0)
    itemTL.fromTo(itemTitleOutline, {scale: 2, y: "100%"}, {scale: 1, y: "0%", ease: "power2.inOut"}, 0)

    gsap.fromTo(itemImg, {x: "60vw", y : "60vh", rotate: -30}, {x: "-60vw", y: "-60vh", rotate: 30, ease: "none", scrollTrigger: {
            trigger: item,
            start: "50% 100%",
            end: "100% 50%",
            scrub: 3,
        }})
})