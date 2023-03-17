import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';

export interface PeriodicElement {
  name: string;
  details: string;  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Name', details: 'Mary'},
  {name: 'Domain', details: 'www.mjhattorenys.com'},
  {name: 'Gender', details: 'Male'},
  {name: 'Date Of Birth', details: '8th June 1979'},
  {name: 'Phone Number', details: '+8654321234'},
  {name: 'Location', details: '12 street, silicon Valley, Avenue NE, Huntsville'},
];

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  displayedColumns: string[] = ['name', 'details'];
  dataSource = ELEMENT_DATA;
  constructor(private MatDialog:MatDialog){}
  openDialog() {
    this.MatDialog.open(EditUserComponent,{
      width: '350px',
    })
  }


}


