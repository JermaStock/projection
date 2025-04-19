import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {TuiButton} from '@taiga-ui/core';
import {map} from 'rxjs';
import {AuthStorageService} from '../services/auth-storage.service';

@Component({
  selector: 'app-sign-in',
  imports: [
    ReactiveFormsModule,
    TuiButton
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  public form;

  private router = inject(Router);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private authStorage = inject(AuthStorageService);

  constructor() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
    if (this.authStorage.get()) {
      this.router.navigate(['/']);
    };
  }

  public submit() {
    const { username, password } = this.form.getRawValue();
    if (!username || !password) return;
    this.authService.auth(username, password).pipe(
      map(value => value.token),
    ).subscribe(token => {
      this.authStorage.set(token);
      this.router.navigate(['/']);
    });
  }

}
