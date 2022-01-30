import {
  AnimationBuilder,
  AnimationMetadata,
  AnimationPlayer,
} from '@angular/animations';
import { ReplaySubject } from 'rxjs';

export class PlayerSubject extends ReplaySubject<AnimationMetadata[]> {
  private _player?: AnimationPlayer;

  public get player() {
    return this._player;
  }

  constructor(private el: HTMLElement, private builder: AnimationBuilder) {
    super(1);
  }

  private createPlayer(animation: AnimationMetadata[]) {
    return this.builder.build(animation).create(this.el);
  }

  next(value: AnimationMetadata[]): void {
    if (this._player) this._player.destroy();
    this._player = this.createPlayer(value);
    this._player.init();
  }
}
