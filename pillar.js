function Pillar(){
    this.top=random(height/2-10);
    this.bottom=random(height/2-10);
    this.x=width;
    this.w=40;
    this.speed=-2;
    this.highlight=false;

    this.hit=function(bird){
        if(bird.y < this.top || bird . y  > height-this.bottom){
            if(bird.x > this.x && bird.x < this.x + this.w){
                this.highlight=true;
                return true;
            }
        }
        return false;
    }

    this.show=function(){
        fill("red");     
        if(this.highlight){
            fill("green");
        }
        
        image(downpillar,this.x, 0, this.w, this.top);
        image(uppillar,this.x, height-this.bottom, this.w, this.bottom);
      

    }
    this.update=function(){
      this.x += this.speed;
       
    }
   
        
    
}