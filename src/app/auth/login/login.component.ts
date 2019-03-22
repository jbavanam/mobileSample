import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { User } from '~/app/shared/user.model';
import { Page } from 'tns-core-modules/ui/page/page';
import { UserService } from '~/app/service/UserService';


@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  isLoggingIn = true;
  user: User;
  processing = false;
  @ViewChild("password") password: ElementRef;
  @ViewChild("confirmPassword") confirmPassword: ElementRef;

  //private fingerprintAuth: FingerprintAuth;

  constructor(private page: Page, private routerExtensions: RouterExtensions, private userService: UserService) {
    this.page.actionBarHidden = true;
    this.user = new User();
    this.user.email = "jaganb@hotmail.com";
    this.user.password = "test";

    //this.fingerprintAuth = new FingerprintAuth();
  }

  ngOnInit() {

  }

  // login() {
  //   this.routerExtensions.navigate(['/home'], 
  //     { 
  //       clearHistory: true,
  //       animated: true, 
  //       transition: 
  //       {
  //           name: 'slideTop', 
  //           duration: 300
  //       }
  //     });
  // }

  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  submit() {
    if (!this.user.email || !this.user.password) {
      this.alert("Please provide both an email address and password.");
      return;
    }

    this.processing = true;
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.register();
    }
  }

  login() {
    this.userService.login(this.user).then((res) => {
      this.routerExtensions.navigate(["/home"], { clearHistory: true });
    }).catch((err) => {
      this.processing = false;
      this.alert(err);
    });
  }

  register() {
    if (this.user.password != this.user.password) {
      this.alert("Your passwords do not match.");
      return;
    }
    this.processing = false;
    this.alert("Your account was successfully created.");
    this.isLoggingIn = true;
  }

  forgotPassword() {
    // prompt({
    //   title: "Forgot Password",
    //   message: "Enter the email address you used to register for APP NAME to reset your password.",
    //   inputType: "email",
    //   defaultText: "",
    //   okButtonText: "Ok",
    //   cancelButtonText: "Cancel"
    // }).then((data) => {
    //   if (data.result) {
    //     this.userService.resetPassword(data.text.trim())
    //       .then(() => {
    //         this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
    //       }).catch(() => {
    //         this.alert("Unfortunately, an error occurred resetting your password.");
    //       });
    //   }
    // });
  }

  focusPassword() {
    this.password.nativeElement.focus();
  }
  focusConfirmPassword() {
    if (!this.isLoggingIn) {
      this.confirmPassword.nativeElement.focus();
    }
  }

  alert(message: string) {
    return alert({
      title: "Alert",
      okButtonText: "OK",
      message: message
    });
  }
}
