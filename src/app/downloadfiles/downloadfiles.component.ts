import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-downloadfiles',
  templateUrl: './downloadfiles.component.html',
  styleUrls: ['./downloadfiles.component.css']
})
export class DownloadfilesComponent implements OnInit {
  fileUrl;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const data = 'some text';
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

}
