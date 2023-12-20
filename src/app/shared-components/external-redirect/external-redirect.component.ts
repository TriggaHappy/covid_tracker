import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-external-redirect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './external-redirect.component.html',
  styleUrls: ['./external-redirect.component.scss']
})
export class ExternalRedirectComponent implements OnInit{
  private route : ActivatedRoute = inject(ActivatedRoute)
  private router: Router = inject(Router)

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const externalUrl = params.get('externalUrl');
      if (externalUrl) {
        window.location.href = externalUrl;
      } else {
        console.error('External URL is not provided.');

      }
    });
  }
}
