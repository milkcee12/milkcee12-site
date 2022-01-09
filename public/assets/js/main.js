import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../scss/style.scss';
import '../js/loader.js'
import childsPlayImgUrl from '../img/childs-play/p10_cloud-creature.jpg'

// populate project images on /index.html and projects/index.html
let projectContainers = document.getElementsByClassName('project');
for (var i=0; i<projectContainers.length; i++) {
    var projectTitle = projectContainers[i].getElementsByTagName('h1');

    if (projectTitle[0].textContent == "Child's Play") 
        projectContainers[i].style.backgroundImage = "url('" + childsPlayImgUrl + "')";
}