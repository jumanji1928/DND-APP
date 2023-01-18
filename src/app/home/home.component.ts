import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  home_cards = [
    { title: 'Offical 5e Content', button: [{ title: 'Rules', link: 'rules', color: 'primary' }, { title: 'Classes', link: '', color: 'primary' }, { title: 'Races', link: '', color: 'primary' }, {title:'Spells', link: '', color:'primary'}, { title: 'Feats', link: '', color: 'primary' }, { title: 'Backgrounds', link: '', color: 'primary' }] },
    { title: 'Homebrew Content', button: [{ title: 'Rules', link: '', color: 'accent' }, { title: 'Classes', link: '', color: 'accent' }, { title: 'Races', link: '', color: 'accent' }, { title: 'Spells', link: '', color:'accent'}, { title: 'Feats', link: '', color: 'accent' }, { title: 'Backgrounds', link: '', color: 'accent' }] }, {title: 'DMScreen', button:[{title: 'Items', link: '', color:'primary'}]}, 
  ]
}
