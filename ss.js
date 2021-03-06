
var ani; //animation status

function init() {
		document.getElementById('canvas').style = "display: none;"
    c = document.getElementById("ssCanvas");
    ctx = c.getContext("2d");

    planet1 = new Planet(c.width/2, c.height/2, 50, 50, "red", 5, 0);
    planet2 = new Planet(c.width/2, c.height/2, 100, 50, "green", 10, 0);
    planet3 = new Planet(c.width/2, c.height/2, 75,55, "blue", 5, Math.PI*2);
    planet4 = new Planet(c.width/2, c.height/2, 90, 65, "red", 7, Math.PI*2);
    planet5 = new Planet(c.width/2, c.height/2, 90, 45, "red", 7, Math.PI*2);

    drawCanvas();
};

function Planet(x, y, major, minor, color, diam, angle) {
    this.x = x;
    this.y = y;
    this.major = major;
    this.minor = minor;
    this.angle = angle;
    this.color = color;
    this.diam = diam;
    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        this.x = x+this.major * Math.cos(Math.PI / 180 * this.angle);
        this.y = y-this.minor * Math.sin(Math.PI / 180 * this.angle);
        ctx.arc(this.x, this.y, this.diam, 0, Math.PI*2, false);
        ctx.fill();
        ctx.closePath();
        this.angle += 5;
    }
}

function drawCanvas() {
    ctx.clearRect(0,0, c.width, c.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, ctx.width, ctx.height);
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2,25,0, Math.PI*2, false);//SUN
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    planet1.draw();
    planet2.draw();
    planet3.draw();
    planet4.draw();
    planet5.draw();
    }

function play(btn) {
    if(ani) {
        clearInterval(ani);
        ani = null;
        btn.innerHTML = 'Play Solar System';
    }
    else {
        ani = setInterval(drawCanvas, 40);
        btn.innerHTML = 'Pause Solar System';
    }
}
