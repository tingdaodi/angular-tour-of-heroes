import {Component, OnInit} from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';

/**
 * CLI 自动生成了三个元数据属性
 *    selector— 组件的选择器（CSS 元素选择器）
 *    templateUrl— 组件模板文件的位置
 *    styleUrls— 组件私有 CSS 样式表文件的位置
 */
@Component({
  //  CSS 元素选择器 app-heroes 用来在父组件的模板中匹配 HTML 元素的名称，以识别出该组件
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

//  始终要 export 这个组件类，以便在其它地方（比如 AppModule）导入它
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  /**
   * 1. 声明了一个私有 heroService 属性，
   * 2. 把它标记为一个 HeroService 的注入点
   * 当 Angular 创建 HeroesComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象
   *
   * @param heroService dd
   */
  constructor(private heroService: HeroService) {

  }

  /**
   * ngOnInit 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit。
   * 这里是放置初始化逻辑的好地方
   */
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
