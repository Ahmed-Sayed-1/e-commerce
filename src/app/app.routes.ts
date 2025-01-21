import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Home'
    },
    {
        path:'home',
        component:HomeComponent,
        title:'Home'
    },
    {
        path: 'item-page/:id',
        component: ItemPageComponent,
        title: 'Item Page'
    },
    {
        path:'register',
        component: RegisterComponent,
        title: 'register'
    },
    {
        path:'login',
        component:LoginComponent,
        title: 'login'
    },
    {
        path:'cart',
        component:CartComponent ,
        title: 'cart'
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: 'not-found'
    }
];
