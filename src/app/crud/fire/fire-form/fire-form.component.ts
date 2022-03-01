import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { fireUser} from '../fireUser';



@Component({
  selector: 'app-fire-form',
  templateUrl: './fire-form.component.html'
})
export class FireFormComponent implements OnInit {
  id;
  form: FormGroup;
  title: string;
  user = new fireUser();

  userDoc: AngularFirestoreDocument<fireUser>;
  singleUser: Observable<fireUser>;


  constructor(fb: FormBuilder, private _router: Router, private afs: AngularFirestore, private _route: ActivatedRoute){
    this.form = fb.group({
      username: ['', Validators.required ],
      email: ['', Validators.required]
    });
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });

    if (!this.id){
      this.title = 'New User';
    }
    else{
      this.title = 'Edit User';
      this.userDoc = this.afs.doc('users/' + this.id);
      this.singleUser = this.userDoc.valueChanges();
      this.singleUser.subscribe((user) => {
        this.form.get('username').setValue(user.name);
        this.form.get('email').setValue(user.email);
      });
    }
  }

  submit(){
    if (this.id) {
      this.afs.doc('users/' + this.id).update({
        name: this.user.name,
        email: this.user.email
      });
    }
    else{
      this.afs.collection('users').add({
        name: this.user.name,
        email: this.user.email
      });
    }
    this._router.navigate(['Fire/fireAdd']);
  }
}
