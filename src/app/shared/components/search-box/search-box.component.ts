import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscribe?: Subscription;

  @Input()
  placeholder: string = '';

  @Output()
  onValue = new EventEmitter<string>();

  @Output()
  onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscribe =  this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(data => this.onDebounce.emit(data))
  }

  ngOnDestroy(): void {
    this.debouncerSubscribe?.unsubscribe();
  }

  @ViewChild('inputText')
  inputText !: ElementRef<HTMLInputElement>;

  searchItem(value: string){
    this.onValue.emit(value);
    this.inputText.nativeElement.value = '';
  }

  onKeyPress(value: string){
    this.debouncer.next(value);
  }
}
