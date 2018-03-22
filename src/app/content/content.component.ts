import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  currentAdress = 'https://jsonplaceholder.typicode.com/photos';
  photosList;
  selectedRow =  -1;
  MyFormEdit: FormGroup;
  MyFormCreate: FormGroup;
  showEditForm = false;
  showCreateForm = false
  constructor( private http: HttpClient, private fb: FormBuilder) {
    this.createForm();
    this.createFormSave();
  }

  ngOnInit() {
    this.http.get(this.currentAdress).subscribe(
      data => {
        this.photosList = data;
        console.log(this.photosList);
      }
    );
  }

  createForm() {
    this.MyFormEdit = this.fb.group({
      albumId: ['', Validators.required ],
      id: ['', Validators.required ],
      title: ['', Validators.required ],
      url: ['', Validators.required ],
      thumbnailUrl: ['', Validators.required ],
    });
  }
  createFormSave() {
    this.MyFormCreate = this.fb.group({
      albumId: ['', Validators.required ],
      id: ['', Validators.required ],
      title: ['', Validators.required ],
      url: ['', Validators.required ],
      thumbnailUrl: ['', Validators.required ],
    });
  }
  selectRow(index) {
    this.selectedRow = index;
  }
  // CREATE FUNCTIONALITY
  createNewRow() {
    this.showCreateForm = true;
  }
  saveNewRow() {
    this.photosList.unshift(this.MyFormCreate.value);
    this.showCreateForm = false;
  }
  closeCreateRow() {
    this.showCreateForm = false;
  }
  // EDITABLE FUNCTIONALITY
  editRow() {
    if (this.selectedRow === -1) {
      alert('Выберите строку в таблице для изменения');
    } else {
      this.showEditForm = true;
      this.MyFormEdit.setValue({
        albumId: this.photosList[this.selectedRow].albumId,
        id: this.photosList[this.selectedRow].id ,
        title: this.photosList[this.selectedRow].title ,
        url: this.photosList[this.selectedRow].url ,
        thumbnailUrl:  this.photosList[this.selectedRow].thumbnailUrl ,
      });
    }
  }
  saveEdit() {
    this.showEditForm = false;
    this.photosList[this.selectedRow].albumId = this.MyFormEdit.value.albumId;
    this.photosList[this.selectedRow].id = this.MyFormEdit.value.id;
    this.photosList[this.selectedRow].title = this.MyFormEdit.value.title;
    this.photosList[this.selectedRow].url = this.MyFormEdit.value.url;
    this.photosList[this.selectedRow].thumbnailUrl = this.MyFormEdit.value.thumbnailUrl;
  }
  closeEditRow() {
    this.showEditForm = false;
  }
  deleteRow() {
    this.photosList.splice(this.selectedRow, 1);
    this.selectedRow = undefined;
  }
  // VALIDATIONS FORM
  isFieldValid(field: string) {
    return !this.MyFormCreate.get(field).valid && this.MyFormCreate.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

}
