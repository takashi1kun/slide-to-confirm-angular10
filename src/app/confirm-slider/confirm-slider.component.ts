import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-confirm-slider",
  templateUrl: "./confirm-slider.component.html",
  styleUrls: ["./confirm-slider.component.scss"]
})
export class ConfirmSliderComponent {
  constructor() {}

  x: number = 25;
  enableUpdate: boolean = false;
  locked: boolean = false;

  @ViewChild("slidePanel") slider: ElementRef;
  @ViewChild("slidePanelSpan") sliderSpan: ElementRef;
  @ViewChild("slideMain") sliderMain: ElementRef;

  @Output() confirmed: EventEmitter<void> = new EventEmitter<void>();
  @Input() hintText: string = "Deslice pare Confirmar";
  @Input() successText: string = "Confirmado";

  async drag(e: MouseEvent): Promise<void> {
    if (!this.locked) {
      this.slider.nativeElement.style.transition = "";
      this.enableUpdate = true;
    }
  }
  async update(e: MouseEvent): Promise<void> {
    if (this.enableUpdate) {
      this.x = Math.min(e.x, this.sliderMain.nativeElement.clientWidth + 1);
      this.slider.nativeElement.style.left = "calc(-100% + " + this.x + "px)";
      if (e.x > this.sliderMain.nativeElement.clientWidth + 5) this.outside();
    }
  }
  outside(): void {
    if (this.enableUpdate) {
      this.enableUpdate = false;
      if (this.x >= this.sliderMain.nativeElement.clientWidth) {
        this.locked = true;
        this.sliderSpan.nativeElement.style.opacity = 1;
        this.confirmed.emit();
      } else {
        this.x = 25;
        this.slider.nativeElement.style.left = "calc(-100% + " + 25 + "px)";
        this.slider.nativeElement.style.transition = "left 0.5s ease-in-out";
      }
    }
  }
}
