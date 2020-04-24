import { ChatItem } from '@src/app/models/chatmessage';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TkfirebaseService {
  private itemsCollection: AngularFirestoreCollection<ChatItem>;
  items: Observable<any[]>;
  constructor(
    public firestore: AngularFirestore
  ) {
    this.itemsCollection = firestore.collection<ChatItem>('chatmessages', ref => ref.orderBy('fecha', 'desc').limit(10));
   }

  getChatMessages(){
   return this.firestore.collection('chatmessages').valueChanges();
    console.log('EL SERVICIIO TK FIRE YA TIENE CHAT MESSAGES FROM DB', this.items);
  }

  addMessage(message: any){
    console.log('NUevo mensajologo', message);
    var mensaje = {
      name : message.name,
      message : message.message,
      date : message.date
    }
    return this.itemsCollection.add(message);
  }
}
