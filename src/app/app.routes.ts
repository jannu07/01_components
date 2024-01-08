import { Routes } from '@angular/router';
import { SellerComponent } from './seller/seller.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'seller',
        component:SellerComponent
    }
];
