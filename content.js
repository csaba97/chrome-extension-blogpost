var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg' + images[i].width + '/' + images[i].height;
}
