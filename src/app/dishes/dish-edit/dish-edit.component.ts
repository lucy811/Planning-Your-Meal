import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.scss']
})
export class DishEditComponent implements OnInit {
  id: number;
  editMode = false;
  dishForm: FormGroup;
  
  constructor(private route: ActivatedRoute, private dishService: DishService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = + params['id'];
        this.editMode = params['id'] != null;
      }
    );
    this.initForm();
  }

  initForm() {
    let dishName = '';
    let imagePath = '';
    let dishDescription = '';
    
    if(this.editMode) {
      const dish = this.dishService.getDish(this.id);
      dishName = dish.name;
      imagePath = dish.imagePath;
      dishDescription = dish.description;
    }

    this.dishForm = new FormGroup({
      'dishName': new FormControl(dishName),
      'imagePath': new FormControl(imagePath),
      'dishDescription': new FormControl(dishDescription),
    })
  }

  onSubmit() {
    console.log(this.dishForm);
  }
}
