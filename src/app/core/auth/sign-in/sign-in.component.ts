import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {TuiAppearance, TuiButton, TuiError, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {filter, map, switchMap, takeUntil} from 'rxjs';
import {AuthStorageService} from '../services/auth-storage.service';
import {TuiInputModule, TuiInputPasswordModule} from '@taiga-ui/legacy';
import {TuiCardLarge, TuiForm, TuiHeader} from '@taiga-ui/layout';
import {TuiValidationError} from '@taiga-ui/cdk';
import {LoaderService} from '../../../shared/services/loader.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiButtonLoading} from '@taiga-ui/kit';
import {AuthUserCredentials} from '../../models';

@Component({
  selector: 'app-sign-in',
  imports: [
    ReactiveFormsModule,
    TuiButton,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiTextfield,
    TuiCardLarge,
    TuiForm,
    TuiAppearance,
    TuiHeader,
    TuiTitle,
    TuiError,
    TuiButtonLoading
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  providers: [LoaderService]
})
export class SignInComponent {
  public form;

  private router = inject(Router);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private authStorage = inject(AuthStorageService);
  protected loader = inject(LoaderService);
  private readonly destroyRef = inject(DestroyRef);

  private loadResource$ = this.loader.loading$.pipe(
    filter(Boolean),
    switchMap(() => {
      const { username, password } = this.extractFormValue();
      return this.authService.auth(username, password);
    }),
    map((value) => value.token),
    takeUntilDestroyed(this.destroyRef),
  );

  protected error: TuiValidationError | undefined;

  protected get computedError() {
    return this.error ? this.error : null;
  }

  constructor() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
    if (this.authStorage.get()) {
      this.router.navigate(['/']);
    }
  }

  private extractFormValue(): AuthUserCredentials {
    const { username, password } = this.form.getRawValue() as AuthUserCredentials;
    return { username, password };
  }

  public submit() {
    this.loader.toggle(true);
    this.loadResource$.subscribe({
      next: (token: string) => {
        this.authStorage.set(token);
        this.router.navigate(['/']);
      },
      error: ({error}) => {
        this.error = new TuiValidationError(error.message);
        this.loader.toggle(false);
      },
      complete: () => {
        this.loader.toggle(false);
      }
    });
  }
}
