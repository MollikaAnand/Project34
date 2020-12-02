class Sling {

constructor(bodyA,pointB) {

    var options = {

        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1,
        angularStiffness: 1,
        length: 220

    }
//fixxxxxxxx add displayyyyy
    this.bodyA = bodyA
    this.pointB = pointB;
    //this.pointX = bodyA.x;
    //this.pointY = bodyA.y - 250;
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    push();
    strokeWeight(3.5);
    stroke("white");
    line(pointpointB.x,pointB.y)
    pop();

}

}