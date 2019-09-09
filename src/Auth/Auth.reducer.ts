export type AuthState = {
	activeSignUpModal: boolean;
	activeLoginModal: boolean;
};

export enum AuthActions {
	ToggleSignUpModal,
	ToggleLoginModal
}

export const authReducer: React.Reducer<AuthState, AuthActions> = (
	prevState: AuthState,
	action: AuthActions
): AuthState => {
	switch (action) {
		case AuthActions.ToggleSignUpModal:
			return { ...prevState, activeSignUpModal: !prevState.activeSignUpModal };
		case AuthActions.ToggleLoginModal:
			return { ...prevState, activeLoginModal: !prevState.activeLoginModal };
	}
};
