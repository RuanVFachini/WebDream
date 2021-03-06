import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './pages/editor/editor.component';
import { StyleComponent } from './pages/editor/components/style/style.component';
import { ToolboxComponent } from './pages/editor/components/toolbox/toolbox.component';
import { PanelComponent } from './components/panel/panel.component';
import { SelectInputComponent } from './pages/editor/components/style/components/select-input/select-input.component';
import { SliderInputComponent } from './pages/editor/components/style/components/slider-input/slider-input.component';
import { NumberInputComponent } from './pages/editor/components/style/components/number-input/number-input.component';
import { MultiDirectionInputComponent } from './pages/editor/components/style/components/multi-direction-input/multi-direction-input.component';
import { LineBlockComponent } from './components/line-block/line-block.component';
import { ColorInputComponent } from './pages/editor/components/style/components/color-input/color-input.component';
import { ImageInputComponent } from './pages/editor/components/style/components/image-input/image-input.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    StyleComponent,
    ToolboxComponent,
    PanelComponent,
    SelectInputComponent,
    SliderInputComponent,
    NumberInputComponent,
    MultiDirectionInputComponent,
    LineBlockComponent,
    ColorInputComponent,
    ImageInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzCardModule,
    NzListModule,
    NzFormModule,
    NzSelectModule,
    NzEmptyModule,
    NzSliderModule,
    NzInputNumberModule,
    NzUploadModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
