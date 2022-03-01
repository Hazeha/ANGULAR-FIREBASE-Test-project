import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { fireUser } from '../fireUser';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-fire-user',
  templateUrl: './fire-user.component.html'
})
export class FireUserComponent implements OnInit {
  usersCol: AngularFirestoreCollection<fireUser>;
  users: any;


  constructor(private afs: AngularFirestore, private _router: Router){
  }

  ngOnInit(){
    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.snapshotChanges()
      .pipe(
        map(actions => {

          return actions.map( a => {
            const data = a.payload.doc.data() as fireUser;
            const id = a.payload.doc.id;
            return { id, data};
          });
        })
      );
  }

  add(){
    this._router.navigate(['Fire/fireForm']);
  }

  delete(userId, name){
    if (confirm('Are you sure you want to delete ' + name + '?')){
      this.afs.doc('users/' + userId).delete();
    }
  }
}
