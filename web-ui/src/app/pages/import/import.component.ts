import { Component } from '@angular/core';

import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/ui/footer/footer.component';
import { TagComponent } from '@components/tag/tag.component';
import { UploadComponent } from '@components/upload/upload.component';

@Component({
  selector: 'app-import',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, TagComponent, UploadComponent],
  templateUrl: './import.component.html',
  styleUrl: './import.component.css',
})
export default class ImportComponent {

}
