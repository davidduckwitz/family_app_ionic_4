import { Component, OnInit, forwardRef } from '@angular/core';
import { EmojiService } from '../../services/emoji.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const EMOJI_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EmojiPickerComponent),
  multi: true
};

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  providers: [EMOJI_PICKER_VALUE_ACCESSOR],
  styleUrls: ['./emoji-picker.component.scss']
})
export class EmojiPickerComponent implements OnInit, ControlValueAccessor  {

  emojiArr = [];
  _content: string;
  _onChanged: Function;
  _onTouched: Function;

  constructor(emojiProvider: EmojiService) {
    this.emojiArr = emojiProvider.getEmojis();
  }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    this._content = obj;
  }

  registerOnChange(fn: any): void {
    this._onChanged = fn;
    this.setValue(this._content);
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  private setValue(val: any): any {
    this._content += val;
    if (this._content) {
      this._onChanged(this._content)
    }
}

}
