import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './pages/editor/editor.component';
import { StyleComponent } from './pages/editor/components/style/style.component';
import { ToolboxComponent } from './pages/editor/components/toolbox/toolbox.component';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent
  }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
