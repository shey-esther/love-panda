//insertando imagen desde js.
var imagen = document.getElementById('imagen');
var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

for (var i = 0; i < pictures.length; i++) {
	pictures[i];
	imagen.setAttribute('class', 'img');
	var img = document.createElement('img');
	img.src =pictures[i];
	img.setAttribute('class','panda')
	imagen.appendChild(img);
}
