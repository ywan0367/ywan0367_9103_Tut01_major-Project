# ywan0367_9103_Tut01_major-Project
Here is the functional prototype of my personal major projrct. 
- Instructions on how to interact with the work:
Click the mouse to restart the animation, the entire animation takes seven seconds to generate.
- Details of the individual approach to animating the group code:
The individual approach I chose to drive my individual code is Time Based, so I decided to use timers and events for my animation. Our chosen artwork "Broadway Boogie Woogie" is a famous artwork painted by Piet Mondrian. He made this artpiece in 1942, it represents a beautiful collision between the two things that made Mondrian so enamoured of his new life in New York City. One is Broadway, the busy, wide thoroughfare full of interesting shops and theatres, which represents the novelty and vitality of the American musical tradition. The other was Boogie-Woogie, a type of jazz that Mondrian discovered and loved in New York. 
Therefore, I decided to use animation to show the changes of Broadway from the past to the present and the colorful lights and busy traffic on the road by generate a portion of the scene at intervals, from streets to buildings to lights and busy traffic.
- [Building The Boogie](https://www.youtube.com/watch?v=XsLeg7DhZmw)
This animation really inspired me a lot. It use motion graphics to slowly shows the artwork. You can easily identify that the small squares are the vehicle, and the yellow lines are the streets. In my design, I also want to show the formation of Broadway blocks and busy traffic.
- Technical explanation:
```
let yPositions=[];
let xPositions=[];
let randomRectList=[]
let colouredHorizontalRoad1=[];
let colouredHorizontalRoad2=[];
let colouredVerticalRoad1=[];
let colouredVerticalRoad2=[];
let colouredVerticalRoad3=[];
let rotatingRectsList=[]
let angle=0;
let number=1;

```
This section declares various global arrays and variables for storing the generated element data and controlling the state of different graphs.