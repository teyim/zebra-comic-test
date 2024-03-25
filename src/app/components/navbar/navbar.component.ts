import { Component } from '@angular/core';
import { navItem } from '../../../types';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navItems: navItem[] = [
    {
      title: 'For you',
      icon: 'assets/images/icons/home_heart-1.png',
    },
    {
      title: 'Originals',
      icon: 'assets/images/icons/gesture.svg',
    },
    {
      title: 'Cretors',
      icon: 'assets/images/icons/brush.svg',
    },
    {
      title: 'Library',
      icon: 'assets/images/icons/Library_Icon.svg',
    },
    {
      title: 'Premium',
      icon: 'assets/images/icons/verified.svg',
    },
  ];
}
