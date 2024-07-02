import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export class LoginFormPageObject {

  get emailInput() {
    return screen.getByPlaceholderText('johndoe@mailito.com');
  };

  get passwordInput() {
    return screen.getByPlaceholderText('********');
  };

  get continueButton() {
    return screen.getByRole('button', {name: /continuar/i});
  };

  get submitButton() {
    return screen.getByRole('button', {name: /ingresar/i});
  };

  async enterEmail(email: string) {
    await userEvent.type(this.emailInput, email);
  };

  async enterPassword(password: string) {
    await userEvent.type(this.passwordInput, password);
  };

  async nextStep() {
    await userEvent.click(this.continueButton);
  };

  async submitForm() {
    await userEvent.click(this.submitButton);
  };

  get errorMessage() {
    return screen.getByRole('alert');
  };

}
