class Question{
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
      }
      hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
      }
      display(){
        var title = createElement('h2')
        title.html("MyQuiz");
        title.position(displayWidth/2-50, 10);
    
        this.input.position(displayWidth/2-40, displayHeight/2-80);
        this.button.position(displayWidth/2+30, displayHeight/2);
    
        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          contestant.name = this.input.value();
          contestantCount+=1;
         contestant.index = contestantCount;
          contestant.update();
          contestant.updateCount(contestantCount);
          this.greeting.html("Hello " + contestant.name)
          this.greeting.position(displayWidth/2-70, displayHeight/4);
        });
    
      }
}