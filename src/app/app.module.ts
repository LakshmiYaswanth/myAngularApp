import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ButtonComponent } from './button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HiperlinkComponent } from './hiperlink/hiperlink.component';
import { ImageComponent } from './image/image.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TableComponent } from './table/table.component';
import { AlertComponent } from './alert/alert.component';
import { FrameComponent } from './frame/frame.component';
import { WindowComponent } from './window/window.component';
import { CalenderComponent } from './calender/calender.component';
import { DraggableComponent } from './draggable/draggable.component';
import { DroppableComponent } from './droppable/droppable.component';
import { SelectableComponent } from './selectable/selectable.component';
import { SortableComponent } from './sortable/sortable.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DownloadfilesComponent } from './downloadfiles/downloadfiles.component';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { WaitfordisappearComponent } from './waitfordisappear/waitfordisappear.component';
import { WaittoapperComponent } from './waittoapper/waittoapper.component';
import { WaitfortextchangeComponent } from './waitfortextchange/waitfortextchange.component';
import { WaitforalertComponent } from './waitforalert/waitforalert.component';
import { MousehoverComponent } from './mousehover/mousehover.component';
import { AdvancedWebTablesComponent } from './advanced-web-tables/advanced-web-tables.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ButtonComponent,
    HiperlinkComponent,
    ImageComponent,
    DropdownComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    TableComponent,
    AlertComponent,
    FrameComponent,
    WindowComponent,
    CalenderComponent,
    DraggableComponent,
    DroppableComponent,
    SelectableComponent,
    SortableComponent,
    AutocompleteComponent,
    DownloadfilesComponent,
    UploadfilesComponent,
    TooltipComponent,
    WaitfordisappearComponent,
    WaittoapperComponent,
    WaitfortextchangeComponent,
    WaitforalertComponent,
    MousehoverComponent,
    AdvancedWebTablesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
