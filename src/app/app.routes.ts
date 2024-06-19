import { Routes } from '@angular/router';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';

export const routes: Routes = [
    { path: 'first-component', component: ComponentOneComponent },
    { path: 'second-component', component: ComponentTwoComponent }
];
