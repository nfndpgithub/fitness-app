import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-hacks',
  templateUrl: './health-hacks.page.html',
  styleUrls: ['./health-hacks.page.scss'],
})
export class HealthHacksPage implements OnInit {
  items;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items=[
      {
        img:'https://i1.wp.com/www.additudemag.com/wp-content/uploads/2017/04/vitamins-26622_1280.jpg',
        name:'Vitamins & Supplements'
      },
      {
        img:'https://www.alanna.ai/wp-content/uploads/2020/09/How_Title_Companies_Can_Promote_Positive_Mental_Health.jpeg',
        name:'Mental Health'
      },
      {
        img:'https://previews.123rf.com/images/moniqcca/moniqcca1710/moniqcca171000025/88047285-fitness-couple-man-and-woman-vector-illustration.jpg',
        name:'Fitness'
      },
      {
        img:'https://www.nchealthinfo.org/wp-content/uploads/2019/08/HealthyEating.jpg',
        name: 'Healthy Eating'
      }, 
      {
        img:'https://thumbs.dreamstime.com/b/sleep-control-concept-vector-background-isolated-white-young-woman-sleeping-home-bed-smart-watch-her-hand-view-172884054.jpg',
        name: 'Sleep'
      },
      {
        img: 'https://blog.edmentum.com/sites/blog.edmentum.com/files/styles/blog_image/public/images/StudyIslandTipsTricks.png?itok=nrv0zucp',
        name: 'Tips and tricks'
      }
    ];
  }

  goToItem(){
    this.router.navigateByUrl('/health-hacks/');

  }

}
