import '@testing-library/jest-dom'

import {render} from '@testing-library/react'
import configureStore from 'redux-mock-store';

import {LoginForm} from '@/components/auth/LoginForm'
import {LoginFormPageObject} from "@/__tests__/app/auth/LoginFormPageObjects";

import {Provider} from 'react-redux';
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";
import {authLogin} from "@/api/authApi";

const mockStore = configureStore([]);

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

jest.mock('@/api/authApi', () => ({
  authLogin: jest.fn()
}));

describe('LandingPage', () => {

  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn(),
    });
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  describe('when user is not enter an email', () => {

    it('should display the email input', () => {
      render(<LoginForm/>);
      const page = new LoginFormPageObject();
      expect(page.emailInput).toBeInTheDocument();
    });

    it('should display the continue button', () => {
      render(<LoginForm/>);
      const page = new LoginFormPageObject();
      expect(page.continueButton).toBeInTheDocument();
    });

  });

  describe('when user is enter an email', () => {

    describe('and submit the form', () => {

      const store = mockStore({});

      const userData = {
        email: 'test@mail.com',
        password: 'somePass123',
      };

      beforeEach(() => {
        (useSearchParams as jest.Mock).mockReturnValue({
          get: jest.fn().mockReturnValue(userData.email),
        });
      });

      const renderWithStore = () => {
        render(
          <Provider store={store}>
            <LoginForm/>
          </Provider>
        );
      };

      describe('with an unregistered email', () => {

        it('should display an error message', async () => {

          renderWithStore();

          const page = new LoginFormPageObject();
          const dispatchSpy = jest.spyOn(store, 'dispatch');

          const errorMessage = 'Usuario no encontrado. Por favor, inténtalo de nuevo.';
          require('@/api/authApi').authLogin.mockRejectedValue(new Error(errorMessage));

          await page.enterPassword(userData.password);
          await page.submitForm();

          expect(dispatchSpy).toHaveBeenCalled();

        });

      });

      describe('with an incorrect password', () => {

        it('should display an error message', () => {

        });

      });

      describe('with a valid credentials', () => {

        it('should redirect to the dashboard', () => {

        });

      });

    });

  });

});
