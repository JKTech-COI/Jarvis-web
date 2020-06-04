import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CamelToTitlePipe} from './camel-to-title.pipe';
import {FilenameFromPath} from './filename-from-path.pipe';
import {FilterPipe} from './filter.pipe';
import {FloorPipe} from './floor.pipe';
import {JoinPipe} from './join.pipe';
import {KeyvalPipe} from './keyval.pipe';
import {NoUnderscorePipe} from './no-underscore.pipe';
import {NumberToKPipe} from './number-to-k.pipe';
import {UniqueByPipe} from './unique-by.pipe';
import {KeyValuePipe} from './key-value.pipe';
import {NAPipe} from './na.pipe';
import {MsToHoursPipe} from './ms-to-hours.pipe';
import {SortPipe} from './sort.pipe';
import {ToExponentialPipe} from './to-exponential.pipe';
import {HighlightSearchTextPipe} from './highlight-search-text.pipe';
import {HideHashPipe} from './hide-hash.pipe';
import {TimeAgoPipe} from './timeAgo';
import {TimeTillNowPipe} from './time-till-now.pipe';
import {MsToSecPipe} from './ms-to-sec.pipe';
import {HasExampleItemPipe} from './has-example-item.pipe';
import {AdvancedFilterPipe} from './advanced-filter.pipe';
import {SafePipe} from './safe.pipe';
import {SelectOptionValueToLabelPipe} from './selectOptionValueToLabel.pipe';
import {IsVideoPipe} from './is-video.pipe';
import {IsAudioPipe} from './is-audio.pipe';
import {ToPercentagePipe} from './to-precentage.pipe';
import {ShowSelectedFirstPipe} from './show-selected-first.pipe';
import {CountPipe} from './count.pipe';
import {LabelValuePipe} from './label-value.pipe';


const pipes = [
  CamelToTitlePipe, FilenameFromPath, FilterPipe, FloorPipe, KeyValuePipe, NAPipe, SortPipe, IsVideoPipe, IsAudioPipe,
  JoinPipe, KeyvalPipe, LabelValuePipe, NoUnderscorePipe, NumberToKPipe, UniqueByPipe, MsToHoursPipe, MsToSecPipe,
  ToExponentialPipe, HighlightSearchTextPipe, HideHashPipe, TimeAgoPipe, TimeTillNowPipe, HasExampleItemPipe,
  AdvancedFilterPipe, SafePipe, SelectOptionValueToLabelPipe, ToPercentagePipe
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [pipes, ShowSelectedFirstPipe, CountPipe],
  providers: [pipes],
  exports: [pipes, ShowSelectedFirstPipe, CountPipe]
})
export class SharedPipesModule {
}
