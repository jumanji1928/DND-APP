import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  links = [{link: '/home', title: 'Home'}, {link: '/rules', title:'Rules'}, {link: '/classes', title: 'Classes'}, {link: '/races', title: 'Races'},{link: '/spells', title: 'Spells'}, {link:'/feats', title: 'Feats'}, {link: '/backgrounds', title:'Backgrounds'} ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
