import {NgModule, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'playlistItemName',
  pure: false
})

export class PlaylistItemNamePipe implements PipeTransform {
  transform(value: any, args?: any[]): any {
    const dots = '...';

    if (value.length > 25) {
      value = value.substring(0, 22) + dots;
    }

    return value;
  }
}

@NgModule({
  declarations: [PlaylistItemNamePipe],
  exports : [PlaylistItemNamePipe]
})

export class PlaylistNameFilterModule{}
