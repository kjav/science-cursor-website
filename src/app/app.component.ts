import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuCollapsed: boolean = true;

  constructor(public messageService: MessageService, private router: Router) { }

  isActivce(path: string): boolean {
    return this.router.isActive(path, false);
  }
}
