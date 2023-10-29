import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @Input()
  placeholder: string = '';

  @Output()
  onValue = new EventEmitter<string>();

  @ViewChild('inputText')
  inputText !: ElementRef<HTMLInputElement>;

  searchItem(value: string){
    this.onValue.emit(value);
    this.inputText.nativeElement.value = '';
  }
}
