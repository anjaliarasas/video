let vid;
let size = 10
let minSize = 10;
let maxSize = 240;
let sizeSpeed = 0.025;


let level = 0;

function setup() {
  vid = createVideo(
    ['video.mp4'],
    vidLoad
  );

  vid.size(700, 700);
}




function draw() { 

  size = map(sin(frameCount * sizeSpeed),-1.0,1.0,minSize,maxSize);

  background(255); 
  fill(250, 190, 222)
  ellipse(width/2, height/2, size,size);

  // background(255); 
  // fill(250, 190, 222)
  // ellipse(1000, 200, size,size);

  // background(255); 
  // fill(250, 190, 222)
  // ellipse(500, 400, size,size);
}

function vidLoad() {
  vid.loop();
  vid.volume(0);
}



