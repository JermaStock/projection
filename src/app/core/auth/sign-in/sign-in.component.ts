import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {TuiInputInline} from '@taiga-ui/kit';
import {TuiButton} from '@taiga-ui/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sign-in',
  imports: [
    ReactiveFormsModule,
    TuiInputInline,
    TuiButton
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  public form;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }


  public submit() {
    const { username, password } = this.form.getRawValue();
    if (!username || !password) return;
    this.authService.login(username, password).pipe().subscribe(response => console.log(response));
  }

}
