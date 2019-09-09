export type AppState = {
	searchTerm: string;
	searchTermChanged: boolean;
};

type UpdateSearchTermAction = { name: 'UPDATE_SEARCH_TERM'; searchTerm: string };
type ClearSearchTermAction = { name: 'CLEAR_SEARCH_TERM' };

export type AppAction = Action & (UpdateSearchTermAction | ClearSearchTermAction);

export const appReducer: React.Reducer<AppState, AppAction> = (prevState: AppState, action: AppAction): AppState => {
	switch (action.name) {
		case 'UPDATE_SEARCH_TERM':
			const updateSearchTermAction: UpdateSearchTermAction = action as UpdateSearchTermAction;

			if (prevState.searchTerm === updateSearchTermAction.searchTerm)
				return { ...prevState, searchTermChanged: false };

			return {
				...prevState,
				searchTerm: updateSearchTermAction.searchTerm,
				searchTermChanged: !prevState.searchTermChanged
			};

		case 'CLEAR_SEARCH_TERM':
			return { ...prevState, searchTerm: '' };
	}

	return prevState;
};
