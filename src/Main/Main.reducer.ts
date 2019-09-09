interface Action {
	name: string;
	payload?: any;
}

const gridReloadAction: Action = { name: 'PEOPLE_GRID_RELOAD' };

export type MainState = {
	loadingPeopleGrid: boolean;
};

export const MainActions = [ gridReloadAction ];

export const mainReducer: React.Reducer<MainState, Action> = (prevState: MainState, action: Action): MainState => {
	switch (action.name) {
		case gridReloadAction.name:
			return { ...prevState, loadingPeopleGrid: !prevState.loadingPeopleGrid };
	}

	return { ...prevState, loadingPeopleGrid: false };
};
