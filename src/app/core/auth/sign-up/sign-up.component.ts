import {Component, DestroyRef, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  TuiAppearance,
  TuiButton,
  TuiError,
  TuiLabel, TuiLink,
  TuiTextfieldComponent,
  TuiTextfieldDirective, TuiTextfieldOptionsDirective, TuiTitle
} from '@taiga-ui/core';
import {TuiButtonLoading} from '@taiga-ui/kit';
import {TuiCardLarge, TuiForm, TuiHeader} from '@taiga-ui/layout';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {AuthStorageService} from '../services/auth-storage.service';
import {LoaderService} from '../../../shared/services/loader.service';
import {filter, map, switchMap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {AuthUserCredentials, SignUpCredentials} from '../../models';
import {TuiValidationError} from '@taiga-ui/cdk';

@Component({
  selector: 'app-sign-up',
  imports: [
    ReactiveFormsModule,
    TuiAppearance,
    TuiButton,
    TuiButtonLoading,
    TuiCardLarge,
    TuiError,
    TuiForm,
    TuiHeader,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    TuiTextfieldOptionsDirective,
    TuiTitle,
    RouterLink,
    TuiLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  public form;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private authStorage = inject(AuthStorageService);
  protected loader = inject(LoaderService);
  private readonly destroyRef = inject(DestroyRef);

  private loadResource$ = this.loader.loading$.pipe(
    filter(Boolean),
    switchMap(() => {
      const { username, password, email } = this.extractFormValue();
      return this.authService.signUp(username, password, email);
    }),
    takeUntilDestroyed(this.destroyRef),
  );

  protected error: TuiValidationError | undefined;

  protected get computedError() {
    return this.error ? this.error : null;
  }

  constructor() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    if (this.authStorage.get()) {
      this.router.navigate(['/']);
    }
  }

  private extractFormValue(): SignUpCredentials {
    const { username, password, email } = this.form.getRawValue() as SignUpCredentials;
    return { username, password, email };
  }

  public submit() {
    this.loader.toggle(true);
    this.loadResource$.subscribe({
      next: () => {
        this.router.navigate(['../sign-in'], { relativeTo: this.route });
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
