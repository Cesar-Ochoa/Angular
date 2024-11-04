import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MealPlanService {
  constructor(private firestore: AngularFirestore) {}

  saveMealPlan(date: Date, meals: any) {
    const mealPlan = {
      date: date,
      meals: meals
    };
    return this.firestore.collection('mealPlans').add(mealPlan);
  }

  getMealPlans() {
    return this.firestore.collection('mealPlans').snapshotChanges();
  }
}
