
var container = document.getElementById('background');
var backgroundImageUrls = [
  'static/images/background-1.jpeg',
  'static/images/background-2.jpeg',
  'static/images/background-3.jpeg'
];
var currentIndex = 0;
function changeBackgroundImage() {
  container.style.backgroundImage = "url('" + backgroundImageUrls[currentIndex] + "')";
  currentIndex++;
  if (currentIndex >= backgroundImageUrls.length) {
    currentIndex = 0;
  }
}
changeBackgroundImage();
setInterval(changeBackgroundImage, 5000);







document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetSection.offsetTop - 20,
            });
        }
    });
});
