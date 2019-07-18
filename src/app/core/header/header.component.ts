import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onSaveData() {
    this.dataStorageService.storeDishes().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getDishes();
  }

  onLogout() {
    this.authService.logout();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
