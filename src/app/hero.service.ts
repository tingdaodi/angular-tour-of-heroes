import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

/**
 * 它把这个类标记为依赖注入系统的参与者之一。HeroService 类将会提供一个可注入的服务，
 * 并且它还可以拥有自己的待注入的依赖。目前它还没有依赖，但是很快就会有了。
 *
 * @Injectable() 装饰器会接受该服务的元数据对象，就像 @Component() 对组件类的作用一样。
 */
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
