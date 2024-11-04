import { Component, OnInit } from '@angular/core';
import { MealPlanService } from '../services/meal-plan.service';
import { Diet } from '../models/diet.model';
import comidas from '../../assets/comidas.json';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.css']
})
export class MealPlanComponent implements OnInit {
  selectedDate: Date = new Date();
  daysOfWeek: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  mealsPerDay: any = {};
  dietType: string = 'lowCarb'; // Esto debería obtenerse del paciente

  constructor(private mealPlanService: MealPlanService) {}

  ngOnInit() {
    this.initializeMeals();
  }

  initializeMeals() {
    const dietOptions = comidas.diets[this.dietType];
    this.daysOfWeek.forEach(day => {
      this.mealsPerDay[day] = {
        breakfast: '',
        snack: '',
        lunch: '',
        snack2: '',
        dinner: ''
      };
    });
  }

  saveMealPlan() {
    this.mealPlanService.saveMealPlan(this.selectedDate, this.mealsPerDay);
  }
}
