import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
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


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },{
    path:'edit',
    component:EditComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'button',
    component:ButtonComponent
  }, {
    path:'hiperlink',
    component:HiperlinkComponent
  }, {
    path:'image',
    component:ImageComponent
  }, {
    path:'dropdown',
    component:DropdownComponent
  }, {
    path:'radiobutton',
    component:RadiobuttonComponent
  }, {
    path:'checkbox',
    component:CheckboxComponent
  }, {
    path:'table',
    component:TableComponent
  }, {
    path:'alert',
    component:AlertComponent
  }, {
    path:'frame',
    component:FrameComponent
  }, {
    path:'window',
    component:WindowComponent
  }, {
    path:'calender',
    component:CalenderComponent
  }, {
    path:'draggable',
    component:DraggableComponent
  }, {
    path:'droppable',
    component:DroppableComponent
  }, {
    path:'selectable',
    component:SelectableComponent
  }, {
    path:'sortable',
    component:SortableComponent
  }, {
    path:'autocomplete',
    component:AutocompleteComponent
  }, {
    path:'downloadfiles',
    component:DownloadfilesComponent
  }, {
    path:'uploadfiles',
    component:UploadfilesComponent
  }, {
    path:'tooltip',
    component:TooltipComponent
  }, {
    path:'waitfordisappear',
    component:WaitfordisappearComponent
  }, {
    path:'waittoapper',
    component:WaittoapperComponent
  }, {
    path:'waitfortextchange',
    component:WaitfortextchangeComponent
  }, {
    path:'waitforalert',
    component:WaitforalertComponent
  }, {
    path:'mousehover',
    component:MousehoverComponent
  }, {
    path:'advanced-web-tables',
    component:AdvancedWebTablesComponent
  }, 
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
