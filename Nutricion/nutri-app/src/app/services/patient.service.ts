import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private firestore: AngularFirestore) {}

  addPatient(patient: Patient) {
    return this.firestore.collection('patients').add(patient);
  }

  deletePatient(id: string) {
    return this.firestore.collection('patients').doc(id).delete();
  }

  getPatients() {
    return this.firestore.collection('patients').snapshotChanges();
  }
}
