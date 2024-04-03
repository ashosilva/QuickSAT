
/*
This is so that the CSS on the correct/incorrect/unanswered messages are editable
 */
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'noSanitize' })
export class NoSanitizePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) { }

  transform(html: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
}
