import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { SearchCatPipe } from './search/searchcat';
@NgModule({
	declarations: [SearchPipe,SearchCatPipe],
	imports: [],
	exports: [SearchPipe,SearchCatPipe]
})
export class PipesModule {}
