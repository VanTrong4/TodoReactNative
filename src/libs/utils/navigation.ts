import { CommonActions, createNavigationContainerRef } from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

const navigate = (routePath: string, params?: object) => {
  if (navigationRef.isReady())
    navigationRef.dispatch(
      CommonActions.navigate({
        name: routePath,
        params,
      }),
    );
};

export { navigate, navigationRef };
