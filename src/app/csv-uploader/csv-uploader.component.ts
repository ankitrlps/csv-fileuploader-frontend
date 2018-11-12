import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SendCsvService } from '../services/send-csv.service';
import { ResponseFromClient } from '../shared/responseFromClient';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-csv-uploader',
  templateUrl: './csv-uploader.component.html',
  styleUrls: ['./csv-uploader.component.scss']
})
export class CsvUploaderComponent implements OnInit {

  uploaderForm: FormGroup;
  selectedFile: File;
  test: string[];
  response: ResponseFromClient;
  errMsg: any;
  incorrectExt: boolean;
  incorrectExtMesg = "Please upload the file with (.csv) or (.xlsx) extension.";
  ext: string;

  constructor(private fb: FormBuilder, private csvService: SendCsvService) { }

  ngOnInit() {
    this.uploaderForm = this.fb.group({
      file: [null, Validators.required]
    }); 
  }

  fileSelected(event){
    this.incorrectExt = false;
    this.response = null;
    this.errMsg = null;
    this.ext = event.target.files[0].name.split('.').pop();

     if( this.ext == "csv" || this.ext == "xlsx" ){
      this.incorrectExt = false;
     }else{
      this.incorrectExt = true;
     }
     this.selectedFile = event.target.files[0];

     console.log(this.selectedFile);
  }
  onSubmit(){
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
 
    this.csvService.sendFile(fd).subscribe(message => {
    this.response = message}, error => this.errMsg = <any>error.error);
    this.uploaderForm.reset();
    this.errMsg = null;
    this.response = null;
  }

  // validateExt(): any{
  //   if( this.ext == "csv" || this.ext == "xlsx" ){
  //     return null;
  //   }else{
  //     return "Please upload the file with (.csv) or (.xlsx) extension.";
  //   }
  // }
}
