import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule } from 'angular2-chartjs';

/**
 * Services
 */
import { InMemoryDataService } from './services/in-memory-data.service';

/**
 * Icon management
 */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

library.add(faMinus, faPlus, faExternalLinkAlt, faThumbsUp);

/**
 * Custom pipes
 */
import { CursorValuePipe } from './pipes/cursor-value-pipe';
import { UserNamePipe } from './pipes/user-name-pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ThesesComponent } from './theses/theses.component';
import { ThesisComponent } from './thesis/thesis.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThesisSearchComponent } from './thesis-search/thesis-search.component';
import { PaperListComponent } from './paper-list/paper-list.component';
import { PaperRatingListComponent } from './paper-rating-list/paper-rating-list.component';
import { PaperRatingComponent } from './paper-rating/paper-rating.component';
import { PaperComponent } from './paper/paper.component';
import { ThesisCardComponent } from './thesis-card/thesis-card.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { CursorComponent } from './cursor/cursor.component';


@NgModule({
  declarations: [
    AppComponent,
    ThesesComponent,
    ThesisComponent,
    MessagesComponent,
    DashboardComponent,
    ThesisSearchComponent,
    HomeComponent,
    ThesisCardComponent,
    HighlightsComponent,
    CursorComponent,
    CursorValuePipe,
    PaperListComponent,
    PaperRatingListComponent,
    PaperRatingComponent,
    PaperComponent,
    UserNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    NgbModule.forRoot(),
    FontAwesomeModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
