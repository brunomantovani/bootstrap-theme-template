import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'custom-theme';
  public colors = [
    { key: 'primary', name: 'Primary' },
    { key: 'secondary', name: 'Secondary' },
    { key: 'success', name: 'Success' },
    { key: 'danger', name: 'Danger' },
    { key: 'warning', name: 'Warning' },
    { key: 'info', name: 'Info' },
    { key: 'light', name: 'Light' },
    { key: 'dark', name: 'Dark' }
  ];
}
