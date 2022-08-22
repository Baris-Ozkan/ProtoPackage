import { Component, OnInit } from '@angular/core';
import {LesProtoPackageService} from "./les-proto-package.service";

@Component({
  selector: 'lib-les-proto-package',
  template: `
    <div class="flex align-items-center justify-content-center mb-4">
      <button type="button" (click)="changeTheme('journal')">Journal</button>
      <button type="button" (click)="changeTheme('lux')">Lux</button>
      <button type="button" (click)="changeTheme('cyborg')">Cyborg</button>
      <button type="button" (click)="changeTheme('morph')">Morph</button>
    </div>
  `,
  styles: [
  ]
})
export class LesProtoPackageComponent implements OnInit {

  constructor(private lesThemeService: LesProtoPackageService) { }

  ngOnInit(): void {
    let savedTheme = localStorage.getItem('theme');

    if (savedTheme != null) {
      this.lesThemeService.switchTheme(savedTheme);
    }
  }

  changeTheme(theme: string) {
    this.lesThemeService.switchTheme(theme);
  }
}
