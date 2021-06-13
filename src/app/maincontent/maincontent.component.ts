import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
  url: string = "https://www.accenture.com/sg-en/about/company-index";
  urlSafe: SafeResourceUrl;
  
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
