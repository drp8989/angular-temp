import{NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import {RentalService} from './shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

const routes: Routes = [
    {
        path:'rentals',
        component:RentalComponent,
        children:[
            {path:'',component:RentalListComponent},
            {path:':rentalId',component:RentalDetailComponent}

        ]
    },

  ];
@NgModule({
    declarations:[
        RentalComponent,
        RentalListComponent,
        RentalListItemComponent,
        RentalDetailComponent
    ],
    imports:[CommonModule,AppRoutingModule,RouterModule.forChild(routes),
        LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),],
    providers:[RentalService]

})
export class RentalModule{

}